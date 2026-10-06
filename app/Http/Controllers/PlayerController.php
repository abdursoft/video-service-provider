<?php

namespace App\Http\Controllers;

use App\Helpers\PlayerViewHelper;
use App\Models\EmbededFrame;
use App\Models\Player;
use App\Models\PlayerView;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PlayerController extends Controller
{
    /**
     * Display user's players.
     */
    public function index(Request $request): Response
    {
        $players = Player::query()
            ->with('views')
            ->where('user_id', auth()->id())
            ->latest()
            ->get()
            ->map(function ($player) {
                return [
                    'id' => $player->token_id,
                    'name' => $player->title,
                    'views' => number_format($player->total_views),
                    'status' => $player->status,
                    'created_at' => Carbon::parse($player->created_at)->format('d M, Y, h:i:s A')
                ];
            });

        $user = $request->user();

        $active = Player::query()->where('user_id', auth()->id())->where('status', 'active')->count();
        $totalViews = PlayerView::whereHas('player', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->count();

        $monthlyViews = PlayerView::whereHas('player', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
            ->whereBetween('created_at', [
                now()->startOfMonth(),
                now()->endOfMonth(),
            ])
            ->count();

        return Inertia::render('Players/Index', [
            'players' => $players,
            'active' => $active,
            'total_views' => $totalViews,
            'monthly_views' => $monthlyViews
        ]);
    }

    /**
     * Show create player page.
     */
    public function create(): Response
    {
        return Inertia::render('EmbedView');
    }

    /**
     * Store a new player.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
            ],
    
            'configuration' => [
                'nullable',
                'array',
            ],
        ]);
    
        $limits = [
            'free' => [
                'video' => 10,
                'playlist' => 0,
            ],
            'professional' => [
                'video' => -1,
                'playlist' => 30,
            ],
            'business' => [
                'video' => -1,
                'playlist' => -1,
            ],
            'basic' => [
                'video' => 2000,
                'playlist' => 50,
            ],
            'plus' => [
                'video' => -1,
                'playlist' => 100,
            ],
            'premium' => [
                'video' => -1,
                'playlist' => -1,
            ],
        ];
    
        $user = auth()->user();
    
        $package = $user->package;
    
        if (! isset($limits[$package])) {
            return response()->json([
                'message' => 'Invalid subscription package.',
            ], 403);
        }
    
        /*
        |--------------------------------------------------------------------------
        | Determine video or playlist
        |--------------------------------------------------------------------------
        */
    
        $sources = $validated['configuration']['source']['sources'] ?? [];
    
        $isPlaylist = is_array($sources) && count($sources) > 0;
    
        $type = $isPlaylist ? 'playlist' : 'video';
    
        /*
        |--------------------------------------------------------------------------
        | Check limit
        |--------------------------------------------------------------------------
        */
    
        $limit = $limits[$package][$type];
    
        // -1 = unlimited
        if ($limit !== -1) {
    
            $currentCount = Player::where('user_id', $user->id)
                ->where(function ($query) use ($type) {
    
                    if ($type === 'playlist') {
                        $query->whereRaw(
                            "JSON_LENGTH(JSON_EXTRACT(configuration, '$.source.sources')) > 0"
                        );
                    } else {
                        $query->whereRaw(
                            "JSON_LENGTH(JSON_EXTRACT(configuration, '$.source.sources')) = 0"
                        )->orWhereRaw(
                            "JSON_EXTRACT(configuration, '$.source.sources') IS NULL"
                        );
                    }
    
                })
                ->count();
    
            if ($currentCount >= $limit) {
                return response()->json([
                    'message' => "You have reached your {$type} limit.",
                    'type' => $type,
                    'limit' => $limit,
                    'current' => $currentCount,
                ], 403);
            }
        }
    
        /*
        |--------------------------------------------------------------------------
        | Create player
        |--------------------------------------------------------------------------
        */
    
        $player = Player::create([
            'title' => $validated['title'],
            'token_id' => Str::uuid(),
            'configuration' => $validated['configuration'] ?? null,
            'user_id' => $user->id,
        ]);
    
        return response()->json([
            'player' => $player,
        ], 201);
    }


    /**
     * Store a new player.
     */
    public function publicStore(Request $request)
    {
        $validated = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'configuration' => [
                'nullable',
                'array',
            ],
        ]);

        $player = EmbededFrame::create([
            'title' => $validated['title'],
            'token_id' => Str::uuid(),
            'configuration' => $validated['configuration'] ?? null,
            'user_id' => optional(auth())->id(),
        ]);

        return response()->json(['player' => $player], 200);
    }

    /**
     * Show a player.
     */
    public function show(Player $player)
    {
        $this->authorizePlayer($player);

        return Inertia::render('Players/Show', [
            'player' => $player,
        ]);
    }

    /**
     * Show a player.
     */
    public function watch(String $token)
    {
        $player = EmbededFrame::where('token_id', $token)->latest()->first();

        return Inertia::render('Players/Render', [
            'player' => $player,
        ]);
    }

    /**
     * Show edit player page.
     */
    public function edit(String $player): Response
    {
        $player = Player::where('token_id', $player)->first();
        $this->authorizePlayer($player);

        return Inertia::render('EmbedView', [
            'player' => $player,
        ]);
    }

    /**
     * Update a player.
     */
    public function update(Request $request, String $player)
    {
        $player = Player::where('token_id', $player)->first();
        $this->authorizePlayer($player);

        $validated = $request->validate([
            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'configuration' => [
                'nullable',
                'array',
            ],
        ]);

        $player->update([
            'title' => $validated['title'],
            'configuration' => $validated['configuration'] ?? null,
        ]);

        return response()->json(['player' => $player], 200);
    }

    /**
     * Delete a player.
     */
    public function destroy(String $player)
    {
        $player = Player::where('token_id', $player)->first();
        $this->authorizePlayer($player);

        $player->delete();

        return redirect()
            ->route('players.index')
            ->with('success', 'Player deleted successfully.');
    }

    /**
     * Render player view
     */
    public function render(String $player)
    {
        $player = Player::where('token_id', $player)->first();
        $player->increment('views', 1);
        PlayerViewHelper::record($player);
        $player->save();
        return Inertia::render('Players/Render', [
            'player' => $player
        ]);
    }

    /**
     * Make sure the player belongs to the authenticated user.
     */
    private function authorizePlayer(Player $player): void
    {

        abort_unless(
            $player->user_id === auth()->id(),
            403
        );
    }
}

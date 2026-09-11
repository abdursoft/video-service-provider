<?php

namespace App\Helpers;

use App\Models\Player;
use App\Models\PlayerView;
use Illuminate\Http\Request;

class PlayerViewHelper
{
    /**
     * Record a player view.
     */
    public static function record(Player $player, ?Request $request = null): PlayerView
    {
        $request ??= request();

        return PlayerView::create([
            'user_id'     => $player->user_id,
            'player_id'   => $player->id,
            'agent'       => $request->userAgent(),
            'browser'     => self::browser($request->userAgent()),
            'os'          => self::os($request->userAgent()),
            'reffer_from' => $request->headers->get('referer'),
        ]);
    }

    /**
     * Detect browser from user agent.
     */
    protected static function browser(?string $agent): ?string
    {
        if (!$agent) {
            return null;
        }

        return match (true) {
            str_contains($agent, 'Edg/')      => 'Edge',
            str_contains($agent, 'OPR/')      => 'Opera',
            str_contains($agent, 'Chrome/')   => 'Chrome',
            str_contains($agent, 'Firefox/')  => 'Firefox',
            str_contains($agent, 'Safari/')   => 'Safari',
            str_contains($agent, 'MSIE'),
            str_contains($agent, 'Trident/')  => 'Internet Explorer',
            default                           => 'Unknown',
        };
    }

    /**
     * Detect operating system from user agent.
     */
    protected static function os(?string $agent): ?string
    {
        if (!$agent) {
            return null;
        }

        return match (true) {
            str_contains($agent, 'Windows NT 10.0') => 'Windows 10/11',
            str_contains($agent, 'Windows NT 6.3')  => 'Windows 8.1',
            str_contains($agent, 'Windows NT 6.2')  => 'Windows 8',
            str_contains($agent, 'Windows NT 6.1')  => 'Windows 7',

            str_contains($agent, 'Android')         => 'Android',

            str_contains($agent, 'iPhone')          => 'iOS',
            str_contains($agent, 'iPad')            => 'iPadOS',

            str_contains($agent, 'Mac OS X')        => 'macOS',

            str_contains($agent, 'Linux')           => 'Linux',

            default                                => 'Unknown',
        };
    }
}
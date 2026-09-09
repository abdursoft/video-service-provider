<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Payment\StripeController;
use App\Models\Issue;
use App\Models\IssueSequence;
use App\Models\Package;
use App\Models\SubscriptionTier;
use App\Models\UserMagazine;
use App\Models\UserSubscription;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class SubscriptionTierController extends Controller
{
    /**
     * Display a listing of the subscription tiers.
     */
    public function index(Request $request)
    {
        $tiers = SubscriptionTier::where('user_id',$request->user()->id)->get();
        return view('auth.users.tiers', compact('tiers'));
    }

    /**
     * Open tier details with view
     */
    public function showTier(Request $request,$id){
        $subscription = UserSubscription::find($id);
        if(!$subscription || $subscription->user_id != $request->user()->id){
            return back()->with('error','Subscription not accessible');
        }
        $package = $subscription->package;
        return view('auth.users.change-tier',compact('package','subscription'));
    }

    /**
     * Cancel subscription tier
     */
    public function cancelTier(Request $request, $id){
        $tier = SubscriptionTier::find($id);
        if($tier){

            if($tier->status == 'active'){
                $stripe = new StripeController();
                $stripe->subscriptionCancel($tier->sub_id);
            }

            $tier->status = 'canceled';
            $tier->payment_url = '';
            $tier->save();
        }
        Toastr::success('Tier has been changed', 'Success');
        return back();
    }

    /**
     * Show subscription magazines
     */
    public function magazineList(Request $request){
        $package = Package::find($request->package);
        $subscription = UserSubscription::where('package_id',$request->package)->where('user_id',$request->user()->id)->first();

        if(!$package){
            return "<div class='w-full h-full absolute flex items-center justify-center'><h2 class='text-xl md:text-2xl text-gray-600'>Package not found!</h2></div>";
        }

        $active = false;

        $checked = $package->allowed_magazine >= 3 ? 'checked' : '';;

        $html = "<h2 class='text-base md:text-xl text-red-500 mb-4'>You can select only {$package->allowed_magazine} magazines for $$package->price</h2>";

        $html .= '<div class="mt-5 w-full flex-col md:flex-row justify-start flex-wrap mb-8 h-auto magazine" style="display: flex;" id="activeMagazine">';

            foreach(magazines() as $key=>$magazine){
                if($subscription){
                    $active = purchasedMagazine($magazine->id,$subscription->userMagazine);
                }
                if($magazine->publish()){
                    $html .='<div class="flex flex-col p-2 w-full md:w-1/2 lg:w-1/3">
                        <div class="w-full h-full rounded-lg overflow-hidden shadow-2xl flex flex-col"><img class="h-[260px]" src="'.Storage::url($magazine->thumbnail).'" alt="'.$magazine->title.'" loading="lazy">
                            <label for="lb_check_'.$magazine->title.'" class="flex items-center justify-center bg-orange-700 p-2 gap-3">
                                <input type="checkbox"
                                value="'.$magazine->id.'" class="check_magazine" name="magazine[]" id="lb_check_'.$magazine->title.'" '.($active == true ? 'checked' : $checked). ' />
                                <p class="text-white">Select</p>
                            </label>
                        </div>
                    </div>';
                }
            }
        $html .= '</div>';

        return $html;
    }

    /**
     * Process submitted tier
     */
    public function processTier(Request $request){
        $subscription = UserSubscription::find($request->subscription);
        if(!$subscription){
            return response()->json([
                'code' => 'INVALID_SUBSCRIPTION_ID',
                'message' => 'Subscription ID not found'
            ],422);
        }

        try {

            $package = Package::find($request->package);
            $magazine = '';
            foreach($request->magazines as $key=>$mag){
                if($key == 0){
                    $magazine .= $mag;
                }else{
                    $magazine .= ','.$mag;
                }
            }

            if($package->allowed_magazine < count($request->magazines)){
                return response()->json([
                    'code' => 'TO_MUCH_MAGAZINE',
                    'message' => "You can't select more than {$package->allowed_magazine} magazines"
                ],422);
            }
            $xPackage = Package::find($request->xPackage);

            // package price comparison
            $amount = $package->price - 1;

            if($package->price > $xPackage->price){
                $amount = $xPackage->price;
            }

            $coupon_amount = $amount * 100;

            $txnID = uniqueID(SubscriptionTier::class, 'transaction_id', 16);

            $stripe = new StripeController();
            $coupon = $stripe->coupon($coupon_amount);
            $subscribe = $stripe->productSubscription($request->user()->customer_id,$package->price_id,$txnID,$coupon->id);

            $uri = $subscribe->url ?? '';

            SubscriptionTier::create([
                'sub_id' => $subscribe->id,
                'user_id' => $request->user()->id,
                'package_id' => $package->id,
                'x_package'  => $xPackage->id,
                'subscription_id' => $subscription->id,
                'status' => 'pending',
                'payment_url' => $uri,
                'payment_id' => $subscribe->id,
                'transaction_id' => $txnID,
                'magazines' => $magazine,
            ]);

            return response()->json([
                'code' => 'TIER_CREATED',
                'message' => 'Subscription tier has been created',
                'payment_url' => $uri
            ],201);

        } catch (\Throwable $th) {
            return response()->json([
                'code' => 'TIER_ERROR',
                'message' => 'Subscription tier couldn\'t create',
            ],500);
        }
    }

    /**
     * Store a newly created subscription tier.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'subscription_id' => 'required|exists:user_subscriptions,id',
            'status' => 'required|in:pending,active,canceled',
            'payment_url' => 'nullable|string',
            'magazines' => 'required|string',
        ]);

        $tier = SubscriptionTier::create($request->all());
        return response()->json(['message' => 'Subscription Tier created successfully', 'data' => $tier], 201);
    }

    /**
     * Display a specific subscription tier.
     */
    public function show($id)
    {
        $tier = SubscriptionTier::with(['user', 'subscription'])->findOrFail($id);
        return response()->json($tier);  }

    /**
     * Update a specific subscription tier.
     */
    public function update(Request $request, $id)
    {
        $tier = SubscriptionTier::findOrFail($id);

        $request->validate([
            'status' => 'sometimes|in:pending,active,canceled',
            'payment_url' => 'nullable|string',
            'magazines' => 'sometimes|string',
        ]);

        $tier->update($request->all());
        return response()->json(['message' => 'Subscription Tier updated successfully', 'data' => $tier]);
    }

    /**
     * Remove a specific subscription tier.
     */
    public function destroy($id)
    {
        $tier = SubscriptionTier::findOrFail($id);
        $tier->delete();

        return response()->json(['message' => 'Subscription Tier deleted successfully']);
    }

    /**
     * Show tiers in admin panel
     */
    public function adminTiers(){
        $tiers = SubscriptionTier::with('user','package','subscription')->latest()->get();
        return view('auth.admin.tiers',compact('tiers'));
    }

    /**
     * Approve subscription tiers
     */
    public function approveTier($id){
        $tier = SubscriptionTier::with('user','package','subscription')->find($id);

        if(!$tier){
            return back()->with('error','Tier couldn\'t found!');
        }

            $tier->status = 'active';
            $tier->save();

            $tier->subscription->subscription_id = $tier->sub_id;
            $tier->subscription->package_id = $tier->package_id;
            $tier->subscription->save();

            $magazines = explode(',',$tier->magazines);

            DB::beginTransaction();
            try {
                foreach($magazines as $mag){
                    $issue = Issue::where('magazine_id',$mag)->orderBy('issue_index','asc')->first();

                    $exists = UserMagazine::where('user_id', $tier->user_id)->where('user_subscription_id',$tier->subscription_id)->where('magazine_id',$mag)->first();

                    if(!$exists){
                        $uMagazine = UserMagazine::create([
                            'user_subscription_id' => $tier->subscription->id,
                            'magazine_id' => $mag,
                            'user_id' => $tier->subscription->user_id,
                            'status' => 'active',
                            'issue_sequence_index' => $issue->issue_index,
                            'sequence_date' => now(),
                        ]);
                    }else{
                        $exists->sequence_date = now();
                        $exists->status = 'active';
                        $exists->save();
                        $uMagazine = $exists;
                    }

                    $issueExists = IssueSequence::where('issue_id',$issue->id)->where('magazine_id',$mag)->where('user_id',$tier->user_id)->first();

                    if(!$issueExists){
                        IssueSequence::create([
                            'user_id' => $tier->subscription->user_id,
                            'magazine_id' => $mag,
                            'issue_id' => $issue ? $issue->id : null,
                            'status' => 'active',
                            'user_magazine_id' => $uMagazine->id,
                        ]);
                    }else{
                        $issueExists->status = 'active';
                        $issueExists->save();
                    }
                }
                DB::commit();
            }catch (\Exception $e) {
                DB::rollBack();
                Toastr::error('An error occurred while approving the tier', 'Error!');
                return back();
            }
        Toastr::success('Subscription tier has been approved!', 'Success');
        return back();
    }

    /**
     * Admin remove the tiers
     */
    public function removeTier($id){
        $tier = SubscriptionTier::find($id);

        if(!$tier){
            Toastr::error('Tier couldn\'t found!', 'Error');
            return back();
        }
        $tier->delete();
        Toastr::success("Subscription tier has been deleted", 'Deleted');
        return back();
    }
}

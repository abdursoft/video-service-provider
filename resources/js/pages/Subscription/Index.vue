<script setup>
import { computed, ref } from 'vue'
import { router, usePage } from '@inertiajs/vue3'
import {
    Check,
    Crown,
    CreditCard,
    CalendarDays,
    X,
    ArrowUpRight,
    RefreshCw,
    AlertTriangle,
} from 'lucide-vue-next'
import UserLayout from '@/layouts/UserLayout.vue';

const page = usePage();


const showCancelModal = ref(false)
const showChangeModal = ref(false)
const selectedPackage = ref(null)

const subscription = computed(() => page.props?.subscription);
const packages     = computed(() => page.props?.packages);
const currentPackage = computed(() => page.props?.subscription?.subscription_package)


const isActive = computed(() => {
    return subscription.value?.status === 'active'
})

const isCanceling = computed(() => {
    return subscription.value?.cancel_at_period_end === true
})

const formattedPrice = (plan) => {
    if (!plan) return '$0.00'

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: plan.currency || 'USD',
    }).format((plan.amount || 0) / 100)
}

const formatDate = (date) => {
    if (!date) return '-'

    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

const changePlan = (plan) => {
    selectedPackage.value = plan
    showChangeModal.value = true
}

const confirmChangePlan = () => {
    if (!selectedPackage.value) return

    const url = route('subscription.change')

    router.post(
        url,
        {
            package_id: selectedPackage.value.id,
        },
        {
            preserveScroll: true,

            onStart: () => {
                console.log('INERTIA POST STARTED')
            },

            onSuccess: () => {
                console.log('POST SUCCESS')

                showChangeModal.value = false
                selectedPackage.value = null
            }
        }
    )
}

const cancelSubscription = () => {
    router.post(
        route('subscription.cancel'),
        {},
        {
            preserveScroll: true,
            onSuccess: () => {
                showCancelModal.value = false
            },
        }
    )
}

const resumeSubscription = () => {
    router.post(
        route('subscription.resume'),
        {},
        {
            preserveScroll: true,
        }
    )
}

defineOptions({
    layout:UserLayout
})
</script>

<template>
        <div class="mx-auto px-5 py-10 lg:px-8">

            <!-- No subscription -->
            <div
                v-if="!subscription"
                class="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center"
            >
                <Crown
                    :size="40"
                    class="mx-auto text-[#C9A227]"
                />

                <h2 class="mt-5 text-xl font-semibold">
                    No active subscription
                </h2>

                <p class="mx-auto mt-2 max-w-md text-sm text-white/50">
                    Choose a plan to unlock more features and higher limits.
                </p>

                <a
                    :href="route('pricing')"
                    class="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#d8b431]"
                >
                    View Plans
                    <ArrowUpRight :size="16" />
                </a>
            </div>


            <!-- Current subscription -->
            <div v-else>

                <div
                    class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                >

                    <!-- Plan header -->
                    <div class="border-b border-white/10 p-7">

                        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                            <div class="flex items-center gap-4">

                                <div
                                    class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]/10 text-[#C9A227]"
                                >
                                    <Crown :size="27" />
                                </div>

                                <div>
                                    <div class="flex items-center gap-3">

                                        <h2 class="text-2xl font-semibold">
                                            {{ currentPackage?.name }}
                                        </h2>

                                        <span
                                            class="rounded-full px-3 py-1 text-xs font-medium"
                                            :class="isCanceling
                                                ? 'bg-orange-400/10 text-orange-400'
                                                : isActive
                                                    ? 'bg-green-400/10 text-green-400'
                                                    : 'bg-red-400/10 text-red-400'"
                                        >
                                            {{
                                                isCanceling
                                                    ? 'Canceling'
                                                    : subscription.status
                                            }}
                                        </span>

                                    </div>

                                    <p class="mt-1 text-sm text-white/50">
                                        {{ currentPackage?.description }}
                                    </p>
                                </div>

                            </div>


                            <div class="text-left md:text-right">

                                <div class="text-3xl font-bold">
                                    {{ formattedPrice(currentPackage) }}
                                </div>

                                <div class="text-sm text-white/40">
                                    per {{ currentPackage?.interval || 'month' }}
                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- Subscription information -->
                    <div class="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

                        <div class="bg-[#0D0D0D] p-6">
                            <div class="flex items-center gap-2 text-sm text-white/40">
                                <CreditCard :size="16" />
                                Billing
                            </div>

                            <div class="mt-2 font-medium">
                                {{ currentPackage?.interval || 'Monthly' }}
                            </div>
                        </div>


                        <div class="bg-[#0D0D0D] p-6">
                            <div class="flex items-center gap-2 text-sm text-white/40">
                                <CalendarDays :size="16" />
                                Started
                            </div>

                            <div class="mt-2 font-medium">
                                {{ formatDate(subscription.starts_at) }}
                            </div>
                        </div>


                        <div class="bg-[#0D0D0D] p-6">
                            <div class="flex items-center gap-2 text-sm text-white/40">
                                <CalendarDays :size="16" />
                                Current period
                            </div>

                            <div class="mt-2 font-medium">
                                {{ formatDate(subscription.current_period_end || subscription.ends_at) }}
                            </div>
                        </div>


                        <div class="bg-[#0D0D0D] p-6">
                            <div class="flex items-center gap-2 text-sm text-white/40">
                                <RefreshCw :size="16" />
                                Auto renewal
                            </div>

                            <div
                                class="mt-2 font-medium"
                                :class="isCanceling
                                    ? 'text-orange-400'
                                    : 'text-green-400'"
                            >
                                {{ isCanceling ? 'Disabled' : 'Enabled' }}
                            </div>
                        </div>

                    </div>


                    <!-- Cancellation notice -->
                    <div
                        v-if="isCanceling"
                        class="border-t border-orange-400/10 bg-orange-400/[0.04] px-7 py-5"
                    >
                        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                            <div class="flex gap-3">

                                <AlertTriangle
                                    :size="20"
                                    class="mt-0.5 shrink-0 text-orange-400"
                                />

                                <div>
                                    <p class="font-medium text-orange-300">
                                        Your subscription is scheduled to cancel.
                                    </p>

                                    <p class="mt-1 text-sm text-white/50">
                                        You can continue using your plan until
                                        {{ formatDate(subscription.current_period_end || subscription.ends_at) }}.
                                    </p>
                                </div>

                            </div>

                            <button
                                @click="resumeSubscription"
                                class="cursor-pointer rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-white/5"
                            >
                                Resume Subscription
                            </button>

                        </div>
                    </div>


                    <!-- Actions -->
                    <div class="flex flex-col gap-3 border-t border-white/10 p-7 sm:flex-row">

                        <button
                            v-if="subscription.ends_at && subscription.status == 'active'"
                            class="cursor-none inline-flex items-center justify-center gap-2 rounded-xl bg-slate-500 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:bg-[#d8b431]"
                        >
                            <CreditCard :size="17" />
                            Subscription Terminated
                        </button>


                        <button
                            v-if="!isCanceling"
                            @click="showCancelModal = true"
                            class="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/20 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-400/10"
                        >
                            <X :size="17" />
                            Cancel Subscription
                        </button>

                    </div>

                </div>


                <!-- Available plans -->
                <div class="mt-12">

                    <div class="mb-6">
                        <h2 class="text-xl font-semibold">
                            Change your plan
                        </h2>

                        <p class="mt-1 text-sm text-white/40">
                            Choose the plan that works best for you.
                        </p>
                    </div>


                    <div class="grid gap-5 md:grid-cols-3">

                        <div
                            v-for="plan in packages"
                            :key="plan.id"
                            class="relative flex flex-col rounded-3xl border p-6 transition"
                            :class="plan.id === currentPackage?.id
                                ? 'border-[#C9A227]/60 bg-[#C9A227]/[0.06]'
                                : 'border-white/10 bg-white/[0.03] hover:border-white/20'"
                        >

                            <span
                                v-if="plan.id === currentPackage?.id"
                                class="absolute right-5 top-5 rounded-full bg-[#C9A227]/10 px-3 py-1 text-[11px] font-medium text-[#C9A227]"
                            >
                                Current Plan
                            </span>


                            <h3 class="text-lg font-semibold">
                                {{ plan.name }}
                            </h3>

                            <p class="mt-2 min-h-10 text-sm text-white/40">
                                {{ plan.description }}
                            </p>


                            <div class="mt-6">

                                <span class="text-3xl font-bold">
                                    {{ formattedPrice(plan) }}
                                </span>

                                <span class="text-sm text-white/40">
                                    /{{ plan.interval }}
                                </span>

                            </div>


                            <div
                                v-if="plan.features"
                                class="mt-6 space-y-3"
                            >

                                <div
                                    v-for="(feature, index) in plan.features"
                                    :key="index"
                                    class="flex gap-2 text-sm text-white/60"
                                >
                                    <Check
                                        :size="16"
                                        class="mt-0.5 shrink-0 text-[#C9A227]"
                                    />

                                    {{ feature }}
                                </div>

                            </div>


                            <button
                                v-if="plan.id !== currentPackage?.id"
                                @click="changePlan(plan)"
                                class="mt-7 w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[#C9A227]/50 hover:bg-[#C9A227]/10 hover:text-[#C9A227]"
                            >
                                Change to {{ plan.name }}
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>


        <!-- Cancel modal -->
        <div
            v-if="showCancelModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
        >
            <div class="w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] p-7 shadow-2xl">

                <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
                    <AlertTriangle :size="22" />
                </div>

                <h3 class="mt-5 text-xl font-semibold">
                    Cancel subscription?
                </h3>

                <p class="mt-2 text-sm leading-6 text-white/50">
                    Your subscription will remain active until the end of your
                    current billing period.
                </p>

                <div class="mt-7 flex gap-3">
                    <button
                        @click="showCancelModal = false"
                        class="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium hover:bg-white/5"
                    >
                        Keep Plan
                    </button>

                    <button
                        @click="cancelSubscription"
                        class="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600"
                    >
                        Cancel Plan
                    </button>
                </div>

            </div>
        </div>


        <!-- Change plan modal -->
        <div
            v-if="showChangeModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
        >
            <div class="w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] p-7 shadow-2xl">

                <h3 class="text-xl font-semibold">
                    Change subscription?
                </h3>

                <p class="mt-2 text-sm leading-6 text-white/50">
                    You are switching to
                    <strong class="text-white">
                        {{ selectedPackage?.name }}
                    </strong>.
                </p>

                <div
                    v-if="selectedPackage"
                    class="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                    <div class="flex justify-between">

                        <span class="text-white/50">
                            New plan
                        </span>

                        <span class="font-medium">
                            {{ selectedPackage.name }}
                        </span>

                    </div>

                    <div class="mt-3 flex justify-between">

                        <span class="text-white/50">
                            Price
                        </span>

                        <span class="font-semibold text-[#C9A227]">
                            {{ formattedPrice(selectedPackage) }}
                            /{{ selectedPackage.interval }}
                        </span>

                    </div>

                </div>

                <div class="mt-7 flex gap-3">

                    <button
                        @click="showChangeModal = false"
                        class="flex-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium hover:bg-white/5"
                    >
                        Cancel
                    </button>

                    <button
                        @click="confirmChangePlan"
                        class="flex-1 rounded-xl bg-[#C9A227] px-4 py-3 text-sm font-semibold text-black hover:bg-[#d8b431]"
                    >
                        Confirm Change
                    </button>

                </div>

            </div>
        </div>
</template>
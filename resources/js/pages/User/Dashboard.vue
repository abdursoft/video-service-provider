<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3'
import UserLayout from '@/layouts/UserLayout.vue'

const page = usePage()

const permissions = page.props.auth?.permissions ?? []

const can = (permission) => {
    return permissions.includes(permission)
}

const props = defineProps({
    stats: {
        type: Object,
        default: () => ({
            players: 0,
            activeSubscription: 0,
            totalPayments: 0,
            currentPackage: null,
            subscription: null,
        }),
    },

    recentPayments: {
        type: Array,
        default: () => [],
    },

    recentPlayers: {
        type: Array,
        default: () => [],
    },
})
</script>

<template>
    <Head title="Dashboard" />

    <UserLayout>

        <div class="mx-auto max-w-[1600px] space-y-7">

            <!-- ============================================ -->
            <!-- HEADER -->
            <!-- ============================================ -->

            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>
                    <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                        Overview
                    </p>

                    <h1 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Dashboard
                    </h1>

                    <p class="mt-2 text-sm text-gray-500">
                        Manage your players, subscriptions and payments.
                    </p>
                </div>

                <Link
                    v-if="can('players.create')"
                    :href="route('user.players.create')"
                    class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-[#C9A227]/10 transition hover:bg-[#d7b238]"
                >
                    <svg
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            d="M12 5v14M5 12h14"
                        />
                    </svg>

                    Add Player
                </Link>

            </div>


            <!-- ============================================ -->
            <!-- STATS -->
            <!-- ============================================ -->

            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <!-- Players -->
                <Link
                    v-if="can('players.view')"
                    :href="route('user.players.index')"
                    class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/30"
                >
                    <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A227]/5 blur-2xl transition group-hover:bg-[#C9A227]/10" />

                    <div class="relative flex items-start justify-between">

                        <div>
                            <p class="text-xs font-medium uppercase tracking-wider text-gray-500">
                                Total Players
                            </p>

                            <p class="mt-3 text-3xl font-semibold text-white">
                                {{ stats.players }}
                            </p>

                            <p class="mt-1 text-xs text-gray-600">
                                Manage your players
                            </p>
                        </div>

                        <div class="rounded-xl bg-[#C9A227]/10 p-3 text-[#C9A227]">
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8"
                            >
                                <path
                                    stroke-linecap="round"
                                    d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                                />
                                <circle
                                    cx="9"
                                    cy="7"
                                    r="4"
                                />
                                <path
                                    stroke-linecap="round"
                                    d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                                />
                            </svg>
                        </div>

                    </div>
                </Link>


                <!-- Subscription -->
                <Link
                    v-if="can('subscriptions.view')"
                    :href="route('user.subscriptions.index')"
                    class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/30"
                >
                    <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A227]/5 blur-2xl" />

                    <div class="relative flex items-start justify-between">

                        <div>
                            <p class="text-xs font-medium uppercase tracking-wider text-gray-500">
                                Subscription
                            </p>

                            <p class="mt-3 text-2xl font-semibold text-white">
                                {{ stats.activeSubscription > 0 ? 'Active' : 'Inactive' }}
                            </p>

                            <p class="mt-1 text-xs text-gray-600">
                                {{ stats.activeSubscription }} active subscription
                            </p>
                        </div>

                        <div class="rounded-xl bg-[#C9A227]/10 p-3 text-[#C9A227]">
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8"
                            >
                                <path
                                    stroke-linecap="round"
                                    d="M12 8v4l3 2"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                />
                            </svg>
                        </div>

                    </div>
                </Link>


                <!-- Payments -->
                <Link
                    v-if="can('payments.view')"
                    :href="route('user.payments.index')"
                    class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/30"
                >
                    <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A227]/5 blur-2xl" />

                    <div class="relative flex items-start justify-between">

                        <div>
                            <p class="text-xs font-medium uppercase tracking-wider text-gray-500">
                                Payments
                            </p>

                            <p class="mt-3 text-3xl font-semibold text-white">
                                {{ stats.totalPayments }}
                            </p>

                            <p class="mt-1 text-xs text-gray-600">
                                Total transactions
                            </p>
                        </div>

                        <div class="rounded-xl bg-[#C9A227]/10 p-3 text-[#C9A227]">
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8"
                            >
                                <rect
                                    x="2"
                                    y="5"
                                    width="20"
                                    height="14"
                                    rx="2"
                                />
                                <path d="M2 10h20" />
                            </svg>
                        </div>

                    </div>
                </Link>


                <!-- Package -->
                <Link
                    v-if="can('packages.view')"
                    :href="route('pricing')"
                    class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#C9A227]/30"
                >
                    <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A227]/5 blur-2xl" />

                    <div class="relative flex items-start justify-between">

                        <div>
                            <p class="text-xs font-medium uppercase tracking-wider text-gray-500">
                                Current Package
                            </p>

                            <p class="mt-3 truncate text-xl font-semibold text-white">
                                {{ stats.currentPackage ?? 'No Package' }}
                            </p>

                            <p class="mt-1 text-xs text-gray-600">
                                View available packages
                            </p>
                        </div>

                        <div class="rounded-xl bg-[#C9A227]/10 p-3 text-[#C9A227]">
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8"
                            >
                                <path
                                    stroke-linejoin="round"
                                    d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"
                                />
                            </svg>
                        </div>

                    </div>
                </Link>

            </div>


            <!-- ============================================ -->
            <!-- SUBSCRIPTION + QUICK ACTIONS -->
            <!-- ============================================ -->

            <div class="grid gap-5 xl:grid-cols-3">

                <!-- Current Subscription -->
                <div
                    v-if="can('subscriptions.view')"
                    class="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-6 xl:col-span-2"
                >

                    <div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#C9A227]/5 blur-3xl" />

                    <div class="relative">

                        <div class="flex items-center justify-between">

                            <div>
                                <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                                    Your Plan
                                </p>

                                <h2 class="mt-2 text-xl font-semibold text-white">
                                    {{ stats.currentPackage ?? 'No Active Plan' }}
                                </h2>
                            </div>

                            <span
                                v-if="stats.activeSubscription > 0"
                                class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400"
                            >
                                Active
                            </span>

                            <span
                                v-else
                                class="rounded-full border border-gray-400/20 bg-gray-400/10 px-3 py-1 text-xs font-medium text-gray-400"
                            >
                                Inactive
                            </span>

                        </div>


                        <div
                            v-if="stats.subscription"
                            class="mt-7"
                        >

                            <div class="mb-2 flex justify-between text-xs">
                                <span class="text-gray-500">
                                    Subscription period
                                </span>

                                <span class="text-gray-400">
                                    {{ stats.subscription.days_remaining ?? 0 }} days remaining
                                </span>
                            </div>

                            <div class="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                                <div
                                    class="h-full rounded-full bg-[#C9A227]"
                                    :style="{
                                        width: `${stats.subscription.progress ?? 0}%`
                                    }"
                                />
                            </div>

                        </div>


                        <div class="mt-6 flex flex-wrap gap-3">

                            <Link
                                :href="route('user.subscriptions.index')"
                                class="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-gray-300 transition hover:border-[#C9A227]/40 hover:text-white"
                            >
                                View Subscription
                            </Link>

                            <Link
                                v-if="can('packages.view')"
                                :href="route('pricing')"
                                class="rounded-xl bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
                            >
                                Browse Packages
                            </Link>

                        </div>

                    </div>
                </div>


                <!-- Quick Actions -->
                <div class="rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-6">

                    <div class="mb-5">
                        <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                            Shortcuts
                        </p>

                        <h2 class="mt-2 text-lg font-semibold text-white">
                            Quick Actions
                        </h2>
                    </div>

                    <div class="space-y-2">

                        <Link
                            v-if="can('players.create')"
                            :href="route('user.players.create')"
                            class="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-[#C9A227]/30 hover:bg-white/[0.04]"
                        >
                            <div class="rounded-lg bg-[#C9A227]/10 p-2 text-[#C9A227]">
                                +
                            </div>

                            <div>
                                <p class="text-sm font-medium text-white">
                                    Add Player
                                </p>

                                <p class="text-[11px] text-gray-600">
                                    Create a new player
                                </p>
                            </div>
                        </Link>


                        <Link
                            v-if="can('players.view')"
                            :href="route('user.players.index')"
                            class="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-[#C9A227]/30 hover:bg-white/[0.04]"
                        >
                            <div class="rounded-lg bg-white/[0.05] p-2 text-gray-400">
                                👥
                            </div>

                            <div>
                                <p class="text-sm font-medium text-white">
                                    Manage Players
                                </p>

                                <p class="text-[11px] text-gray-600">
                                    View all players
                                </p>
                            </div>
                        </Link>


                        <Link
                            v-if="can('payments.view')"
                            :href="route('user.payments.index')"
                            class="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-[#C9A227]/30 hover:bg-white/[0.04]"
                        >
                            <div class="rounded-lg bg-white/[0.05] p-2 text-gray-400">
                                $
                            </div>

                            <div>
                                <p class="text-sm font-medium text-white">
                                    Payment History
                                </p>

                                <p class="text-[11px] text-gray-600">
                                    View transactions
                                </p>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>


            <!-- ============================================ -->
            <!-- BOTTOM -->
            <!-- ============================================ -->

            <div class="grid gap-5 xl:grid-cols-2">

                <!-- Recent Payments -->
                <div
                    v-if="can('payments.view')"
                    class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e]"
                >

                    <div class="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">

                        <div>
                            <h2 class="font-semibold text-white">
                                Recent Payments
                            </h2>

                            <p class="mt-1 text-xs text-gray-600">
                                Your latest transactions
                            </p>
                        </div>

                        <Link
                            :href="route('user.payments.index')"
                            class="text-xs font-medium text-[#C9A227] hover:text-[#d7b238]"
                        >
                            View all
                        </Link>

                    </div>


                    <div
                        v-if="recentPayments.length"
                        class="divide-y divide-white/[0.05]"
                    >

                        <div
                            v-for="payment in recentPayments"
                            :key="payment.id"
                            class="flex items-center justify-between px-6 py-4"
                        >

                            <div>
                                <p class="text-sm font-medium text-gray-200">
                                    {{ payment.invoice ?? `Payment #${payment.id}` }}
                                </p>

                                <p class="mt-1 text-[11px] text-gray-600">
                                    {{ payment.created_at }}
                                </p>
                            </div>

                            <div class="text-right">

                                <p class="text-sm font-semibold text-white">
                                    {{ payment.amount }}
                                </p>

                                <span class="text-[10px] text-emerald-400">
                                    {{ payment.status }}
                                </span>

                            </div>

                        </div>

                    </div>


                    <div
                        v-else
                        class="px-6 py-12 text-center"
                    >
                        <p class="text-sm text-gray-500">
                            No payments yet.
                        </p>
                    </div>

                </div>


                <!-- Recent Players -->
                <div
                    v-if="can('players.view')"
                    class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e]"
                >

                    <div class="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">

                        <div>
                            <h2 class="font-semibold text-white">
                                Recent Players
                            </h2>

                            <p class="mt-1 text-xs text-gray-600">
                                Recently added players
                            </p>
                        </div>

                        <Link
                            :href="route('user.players.index')"
                            class="text-xs font-medium text-[#C9A227] hover:text-[#d7b238]"
                        >
                            View all
                        </Link>

                    </div>


                    <div
                        v-if="recentPlayers.length"
                        class="divide-y divide-white/[0.05]"
                    >

                        <div
                            v-for="player in recentPlayers"
                            :key="player.id"
                            class="flex items-center justify-between px-6 py-4"
                        >

                            <div class="flex items-center gap-3">

                                <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A227]/10 text-xs font-semibold text-[#C9A227]">
                                    {{ player.name?.charAt(0)?.toUpperCase() }}
                                </div>

                                <div>
                                    <p class="text-sm font-medium text-gray-200">
                                        {{ player.name }}
                                    </p>

                                    <p class="mt-1 text-[11px] text-gray-600">
                                        {{ player.created_at }}
                                    </p>
                                </div>

                            </div>

                            <span
                                class="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400"
                            >
                                {{ player.status ?? 'Active' }}
                            </span>

                        </div>

                    </div>


                    <div
                        v-else
                        class="px-6 py-12 text-center"
                    >
                        <p class="text-sm text-gray-500">
                            No players yet.
                        </p>

                        <Link
                            v-if="can('players.create')"
                            :href="route('user.players.create')"
                            class="mt-3 inline-block text-xs font-medium text-[#C9A227]"
                        >
                            Create your first player →
                        </Link>
                    </div>

                </div>

            </div>

        </div>

    </UserLayout>
</template>
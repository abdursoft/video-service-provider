<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue';

defineOptions({
    layout: AdminLayout,
});

const page = usePage();

const props = defineProps({
    stats: {
        type: Object,
        default: () => ({
            total_users: 0,
            new_users: 0,
            password_resets: 0,
            active_users: 0,
        }),
    },

    recentUsers: {
        type: Array,
        default: () => [],
    },

    recentActivities: {
        type: Array,
        default: () => [],
    },
});

const user = computed(() => page.props.auth?.user);

const statCards = computed(() => [
    {
        title: 'Total Users',
        value: props.stats.total_users ?? 0,
        change: '+12.5%',
        icon: 'users',
    },
    {
        title: 'New Users',
        value: props.stats.new_users ?? 0,
        change: '+8.2%',
        icon: 'user-plus',
    },
    {
        title: 'Subscription Plans',
        value: props.stats.packages ?? 0,
        change: '+4.6%',
        icon: 'lock',
    },
    {
        title: 'Active Users',
        value: props.stats.active_users ?? 0,
        change: '+15.4%',
        icon: 'activity',
    },
]);
</script>

<template>
    <div class="mx-auto max-w-[1600px]">

        <!-- ===================================== -->
        <!-- PAGE HEADER -->
        <!-- ===================================== -->

        <div class="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
                <p class="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                    Dashboard
                </p>

                <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
                    Welcome back, {{ user?.name?.split(' ')[0] ?? 'Admin' }}
                </h1>

                <p class="mt-2 text-sm text-white/35">
                    Here's what's happening with your application today.
                </p>
            </div>

            <div class="flex gap-2">

                <button
                    class="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                >
                    <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                    >
                        <path d="M3 4H21" />
                        <path d="M6 4V20" />
                        <path d="M18 4V20" />
                        <path d="M3 12H21" />
                    </svg>

                    Filter
                </button>

                <button
                    class="flex items-center gap-2 rounded-xl bg-[#C9A227] px-4 py-2.5 text-xs font-bold text-black transition hover:bg-[#d8b33a]"
                >
                    <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M12 5V19M5 12H19" />
                    </svg>

                    Quick Action
                </button>

            </div>

        </div>


        <!-- ===================================== -->
        <!-- STATISTICS -->
        <!-- ===================================== -->

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <div
                v-for="stat in statCards"
                :key="stat.title"
                class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-5 transition duration-300 hover:border-[#C9A227]/20"
            >

                <!-- Glow -->
                <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#C9A227]/5 blur-3xl transition group-hover:bg-[#C9A227]/10" />

                <div class="relative">

                    <div class="mb-5 flex items-center justify-between">

                        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">

                            <!-- Users -->
                            <svg
                                v-if="stat.icon === 'users'"
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M16 21V19C16 16.8 14.2 15 12 15H6C3.8 15 2 16.8 2 19V21" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21V19C22 17.2 20.8 15.7 19 15.2" />
                                <path d="M16 3.2C17.7 3.7 19 5.2 19 7C19 8.8 17.7 10.3 16 10.8" />
                            </svg>

                            <!-- User plus -->
                            <svg
                                v-if="stat.icon === 'user-plus'"
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <circle cx="9" cy="7" r="4" />
                                <path d="M2 21C2.8 17.5 5.3 15 9 15C12.7 15 15.2 17.5 16 21" />
                                <path d="M19 8V14M16 11H22" />
                            </svg>

                            <!-- Lock -->
                            <svg
                                v-if="stat.icon === 'lock'"
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <rect x="4" y="10" width="16" height="11" rx="2" />
                                <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" />
                            </svg>

                            <!-- Activity -->
                            <svg
                                v-if="stat.icon === 'activity'"
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M3 12H7L10 4L14 20L17 12H21" />
                            </svg>

                        </div>

                        <span class="rounded-full bg-green-500/10 px-2 py-1 text-[9px] font-bold text-green-400">
                            {{ stat.change }}
                        </span>

                    </div>

                    <p class="text-xs text-white/35">
                        {{ stat.title }}
                    </p>

                    <p class="mt-1 text-2xl font-bold tracking-tight">
                        {{ stat.value.toLocaleString() }}
                    </p>

                </div>

            </div>

        </div>


        <!-- ===================================== -->
        <!-- CONTENT GRID -->
        <!-- ===================================== -->

        <div class="mt-6 grid gap-6 xl:grid-cols-3">

            <!-- Recent Users -->
            <div class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D] xl:col-span-2">

                <div class="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

                    <div>
                        <h2 class="text-sm font-semibold">
                            Recent Users
                        </h2>

                        <p class="mt-1 text-[10px] text-white/30">
                            Latest registered users
                        </p>
                    </div>

                    <Link
                        :href="route('admin.users.index')"
                        class="text-[10px] font-semibold uppercase tracking-wider text-[#C9A227] hover:text-[#e0c04a]"
                    >
                        View all
                    </Link>

                </div>


                <!-- Empty -->
                <div
                    v-if="!recentUsers.length"
                    class="flex min-h-[280px] items-center justify-center px-5"
                >
                    <div class="text-center">

                        <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] text-white/20">
                            <svg
                                class="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                            >
                                <circle cx="9" cy="7" r="4" />
                                <path d="M2 21C2.8 17.5 5.3 15 9 15C12.7 15 15.2 17.5 16 21" />
                            </svg>
                        </div>

                        <p class="text-sm font-medium text-white/50">
                            No users yet
                        </p>

                        <p class="mt-1 text-xs text-white/25">
                            New users will appear here.
                        </p>

                    </div>
                </div>


                <!-- Users -->
                <div
                    v-else
                    class="divide-y divide-white/[0.05]"
                >

                    <div
                        v-for="recentUser in recentUsers"
                        :key="recentUser.id"
                        class="flex items-center gap-3 px-5 py-4 transition hover:bg-white/[0.02]"
                    >

                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-xs font-bold text-[#C9A227]">
                            {{ recentUser.name?.charAt(0)?.toUpperCase() }}
                        </div>

                        <div class="min-w-0 flex-1">

                            <p class="truncate text-xs font-semibold">
                                {{ recentUser.name }}
                            </p>

                            <p class="mt-0.5 truncate text-[10px] text-white/30">
                                {{ recentUser.email }}
                            </p>

                        </div>

                        <div class="hidden text-right sm:block">

                            <span
                                class="rounded-full px-2 py-1 text-[9px] font-semibold"
                                :class="recentUser.status === 'active'
                                    ? 'bg-green-500/10 text-green-400'
                                    : 'bg-white/5 text-white/30'"
                            >
                                {{ recentUser.status ?? 'active' }}
                            </span>

                            <p class="mt-1 text-[9px] text-white/20">
                                {{ recentUser.created_at }}
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            <!-- Activity -->
            <div class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">

                <div class="border-b border-white/[0.07] px-5 py-4">

                    <h2 class="text-sm font-semibold">
                        Recent Activity
                    </h2>

                    <p class="mt-1 text-[10px] text-white/30">
                        Latest system activity
                    </p>

                </div>


                <div
                    v-if="!recentActivities.length"
                    class="flex min-h-[280px] items-center justify-center px-5"
                >
                    <p class="text-xs text-white/25">
                        No recent activity.
                    </p>
                </div>


                <div
                    v-else
                    class="divide-y divide-white/[0.05]"
                >

                    <div
                        v-for="activity in recentActivities"
                        :key="activity.id"
                        class="flex gap-3 px-5 py-4"
                    >

                        <div class="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#C9A227]" />

                        <div class="min-w-0">

                            <p class="text-xs text-white/70">
                                {{ activity.description }}
                            </p>

                            <p class="mt-1 text-[9px] text-white/25">
                                {{ activity.created_at }}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>


        <!-- ===================================== -->
        <!-- QUICK ACTIONS -->
        <!-- ===================================== -->

        <div class="mt-6">

            <div class="mb-4">
                <h2 class="text-sm font-semibold">
                    Quick Actions
                </h2>

                <p class="mt-1 text-[10px] text-white/30">
                    Common administrative tasks
                </p>
            </div>


            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                <Link
                    :href="route('admin.users.index')"
                    class="group rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-4 transition hover:border-[#C9A227]/20 hover:bg-[#C9A227]/[0.02]"
                >

                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">

                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        >
                            <circle cx="9" cy="7" r="4" />
                            <path d="M2 21C2.8 17.5 5.3 15 9 15C12.7 15 15.2 17.5 16 21" />
                            <path d="M19 8V14M16 11H22" />
                        </svg>

                    </div>

                    <p class="text-xs font-semibold">
                        Manage Users
                    </p>

                    <p class="mt-1 text-[10px] text-white/30">
                        View and manage accounts
                    </p>

                </Link>


                <Link
                    :href="route('admin.password-resets.index')"
                    class="group rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-4 transition hover:border-[#C9A227]/20 hover:bg-[#C9A227]/[0.02]"
                >

                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">

                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        >
                            <rect x="4" y="10" width="16" height="11" rx="2" />
                            <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" />
                        </svg>

                    </div>

                    <p class="text-xs font-semibold">
                        Password Resets
                    </p>

                    <p class="mt-1 text-[10px] text-white/30">
                        Monitor reset requests
                    </p>

                </Link>


                <Link
                    :href="route('admin.reports.index')"
                    class="group rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-4 transition hover:border-[#C9A227]/20 hover:bg-[#C9A227]/[0.02]"
                >

                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">

                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        >
                            <path d="M4 19V5M4 19H21" />
                            <path d="M7 15L11 11L14 13L20 7" />
                        </svg>

                    </div>

                    <p class="text-xs font-semibold">
                        View Reports
                    </p>

                    <p class="mt-1 text-[10px] text-white/30">
                        Analyze application data
                    </p>

                </Link>


                <Link
                    :href="route('admin.settings.index')"
                    class="group rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-4 transition hover:border-[#C9A227]/20 hover:bg-[#C9A227]/[0.02]"
                >

                    <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]">

                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.7"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15A1.7 1.7 0 0020 13.4V10.6A1.7 1.7 0 0019.4 9L17.8 8.1L17.7 6.3C17.6 5.5 17 4.9 16.2 4.8L14.4 4.6L13.5 3H10.5L9.6 4.6L7.8 4.8C7 4.9 6.4 5.5 6.3 6.3L6.2 8.1L4.6 9C4 9.4 3.7 10 3.8 10.6V13.4C3.7 14 4 14.6 4.6 15L6.2 15.9L6.3 17.7C6.4 18.5 7 19.1 7.8 19.2L9.6 19.4L10.5 21H13.5L14.4 19.4L16.2 19.2C17 19.1 17.6 18.5 17.7 17.7L19.4 15Z" />
                        </svg>

                    </div>

                    <p class="text-xs font-semibold">
                        Settings
                    </p>

                    <p class="mt-1 text-[10px] text-white/30">
                        Configure application
                    </p>

                </Link>

            </div>

        </div>

    </div>
</template>
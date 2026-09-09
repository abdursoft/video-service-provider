<script setup>
import { Link, router, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

const page = usePage();

const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);
const profileOpen = ref(false);
const notificationOpen = ref(false);

const user = computed(() => page.props.auth?.user);

const navigation = [
    {
        title: 'Overview',
        items: [
            {
                label: 'Dashboard',
                route: 'admin.dashboard',
                icon: 'dashboard',
            },
        ],
    },

    {
        title: 'Management',
        items: [
            {
                label: 'Users',
                route: 'admin.users.index',
                icon: 'users',
            },
            {
                label: 'Password Resets',
                route: 'admin.password-resets.index',
                icon: 'lock',
            },
        ],
    },


    {
        title: 'Subscriptions',
        items: [
            {
                label: 'Packages',
                route: 'admin.subscription-packages.index',
                icon: 'list',
            },
            {
                label: 'User Subscriptions',
                route: 'admin.subscription-packages.index',
                icon: 'crown',
            },
        ],
    },

    {
        title: 'Content',
        items: [
            {
                label: 'Pages',
                route: 'admin.pages.index',
                icon: 'file',
            },
            {
                label: 'Categories',
                route: 'admin.categories.index',
                icon: 'folder',
            },
        ],
    },

    {
        title: 'System',
        items: [
            {
                label: 'Notifications',
                route: 'admin.notifications.index',
                icon: 'bell',
            },
            {
                label: 'Reports',
                route: 'admin.reports.index',
                icon: 'chart',
            },
            {
                label: 'Settings',
                route: 'admin.settings.index',
                icon: 'settings',
            },
        ],
    },
];

const isActive = (routeName) => {
    try {
        return route().current(routeName);
    } catch {
        return false;
    }
};

const logout = () => {
    router.post(route('logout'));
};

const closeMobileSidebar = () => {
    sidebarOpen.value = false;
};
</script>

<template>
    <div class="min-h-screen bg-[#080808] text-white">

        <!-- ========================================= -->
        <!-- MOBILE OVERLAY -->
        <!-- ========================================= -->

        <Transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="sidebarOpen"
                class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                @click="closeMobileSidebar"
            />
        </Transition>


        <!-- ========================================= -->
        <!-- SIDEBAR -->
        <!-- ========================================= -->

        <aside
            class="fixed inset-y-0 left-0 z-50 flex flex-col border-r border-white/[0.07] bg-[#0D0D0D] transition-all duration-300 lg:translate-x-0"
            :class="[
                sidebarOpen
                    ? 'translate-x-0'
                    : '-translate-x-full',

                sidebarCollapsed
                    ? 'lg:w-[84px]'
                    : 'lg:w-[260px]',

                'w-[280px]'
            ]"
        >

            <!-- Logo -->
            <div
                class="flex h-[76px] shrink-0 items-center border-b border-white/[0.07]"
                :class="sidebarCollapsed ? 'justify-center px-3' : 'px-6'"
            >

                <Link
                    :href="route('admin.dashboard')"
                    class="flex items-center gap-3"
                    @click="closeMobileSidebar"
                >

                    <!-- Logo Mark -->
                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10"
                    >
                        <svg
                            class="h-5 w-5 text-[#C9A227]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <path
                                d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                            />
                            <path d="M8 9.5L12 12L16 9.5" />
                            <path d="M12 12V17" />
                        </svg>
                    </div>

                    <div
                        v-if="!sidebarCollapsed"
                        class="overflow-hidden"
                    >
                        <div class="whitespace-nowrap text-lg font-bold tracking-tight">
                            {{ page.props.name }}
                        </div>

                        <div class="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
                            Administration
                        </div>
                    </div>

                </Link>

                <!-- Mobile close -->
                <button
                    class="ml-auto rounded-lg p-2 text-white/40 hover:bg-white/5 hover:text-white lg:hidden"
                    @click="closeMobileSidebar"
                >
                    <svg
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                    >
                        <path d="M6 6L18 18M6 18L18 6" />
                    </svg>
                </button>

            </div>


            <!-- Navigation -->
            <div class="flex-1 overflow-y-auto px-3 py-5">

                <div
                    v-for="group in navigation"
                    :key="group.title"
                    class="mb-7"
                >

                    <!-- Section title -->
                    <div
                        v-if="!sidebarCollapsed"
                        class="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/25"
                    >
                        {{ group.title }}
                    </div>

                    <div class="space-y-1">

                        <Link
                            v-for="item in group.items"
                            :key="item.route"
                            :href="route(item.route)"
                            class="group relative flex items-center rounded-xl text-sm font-medium transition-all duration-200"
                            :class="[
                                sidebarCollapsed
                                    ? 'justify-center px-3 py-3'
                                    : 'gap-3 px-3 py-2.5',

                                isActive(item.route)
                                    ? 'bg-[#C9A227]/10 text-[#C9A227]'
                                    : 'text-white/50 hover:bg-white/[0.04] hover:text-white'
                            ]"
                            :title="sidebarCollapsed ? item.label : undefined"
                            @click="closeMobileSidebar"
                        >

                            <!-- Active indicator -->
                            <span
                                v-if="isActive(item.route)"
                                class="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-[#C9A227]"
                            />

                            <!-- Dashboard -->
                            <svg
                                v-if="item.icon === 'dashboard'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>

                            <!-- Users -->
                            <svg
                                v-if="item.icon === 'users'"
                                class="h-[18px] w-[18px] shrink-0"
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

                            <!-- Lock -->
                            <svg
                                v-if="item.icon === 'lock'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <rect x="4" y="10" width="16" height="11" rx="2" />
                                <path d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10" />
                                <path d="M12 14V17" />
                            </svg>

                            <!-- File -->
                            <svg
                                v-if="item.icon === 'file'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
                                <path d="M14 2V8H20" />
                                <path d="M8 13H16M8 17H14" />
                            </svg>

                            <!-- Folder -->
                            <svg
                                v-if="item.icon === 'folder'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M3 6C3 4.9 3.9 4 5 4H9L11 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6Z" />
                            </svg>

                            <!-- Bell -->
                            <svg
                                v-if="item.icon === 'bell'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M18 8C18 4.7 15.3 2 12 2C8.7 2 6 4.7 6 8C6 13 4 14 4 16H20C20 14 18 13 18 8Z" />
                                <path d="M9 20C9.7 21.2 10.7 22 12 22C13.3 22 14.3 21.2 15 20" />
                            </svg>

                            <!-- Chart -->
                            <svg
                                v-if="item.icon === 'chart'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M4 19V5M4 19H21" />
                                <path d="M7 15L11 11L14 13L20 7" />
                            </svg>

                            <!-- Settings -->
                            <svg
                                v-if="item.icon === 'settings'"
                                class="h-[18px] w-[18px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15A1.7 1.7 0 0020 13.4V10.6A1.7 1.7 0 0019.4 9L17.8 8.1L17.7 6.3C17.6 5.5 17 4.9 16.2 4.8L14.4 4.6L13.5 3H10.5L9.6 4.6L7.8 4.8C7 4.9 6.4 5.5 6.3 6.3L6.2 8.1L4.6 9C4 9.4 3.7 10 3.8 10.6V13.4C3.7 14 4 14.6 4.6 15L6.2 15.9L6.3 17.7C6.4 18.5 7 19.1 7.8 19.2L9.6 19.4L10.5 21H13.5L14.4 19.4L16.2 19.2C17 19.1 17.6 18.5 17.7 17.7L17.8 15.9L19.4 15Z" />
                            </svg>

                            <span
                                v-if="!sidebarCollapsed"
                                class="truncate"
                            >
                                {{ item.label }}
                            </span>

                        </Link>

                    </div>
                </div>

            </div>


            <!-- Sidebar bottom -->
            <div class="border-t border-white/[0.07] p-3">

                <div
                    class="flex items-center rounded-xl bg-white/[0.025]"
                    :class="sidebarCollapsed ? 'justify-center p-2' : 'gap-3 p-3'"
                >

                    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A227]/10 text-sm font-bold text-[#C9A227]">
                        {{ user?.name?.charAt(0)?.toUpperCase() ?? 'A' }}
                    </div>

                    <div
                        v-if="!sidebarCollapsed"
                        class="min-w-0 flex-1"
                    >
                        <p class="truncate text-xs font-semibold text-white">
                            {{ user?.name ?? 'Administrator' }}
                        </p>

                        <p class="truncate text-[10px] text-white/35">
                            {{ user?.email ?? '' }}
                        </p>
                    </div>

                </div>

            </div>

        </aside>


        <!-- ========================================= -->
        <!-- MAIN AREA -->
        <!-- ========================================= -->

        <div
            class="transition-[padding] duration-300"
            :class="sidebarCollapsed ? 'lg:pl-[84px]' : 'lg:pl-[260px]'"
        >

            <!-- ===================================== -->
            <!-- TOPBAR -->
            <!-- ===================================== -->

            <header
                class="sticky top-0 z-30 h-[76px] border-b border-white/[0.07] bg-[#080808]/90 backdrop-blur-xl"
            >

                <div class="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

                    <!-- Left -->
                    <div class="flex items-center gap-3">

                        <!-- Mobile menu -->
                        <button
                            class="rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 text-white/60 hover:text-white lg:hidden"
                            @click="sidebarOpen = true"
                        >
                            <svg
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M4 6H20M4 12H20M4 18H20" />
                            </svg>
                        </button>

                        <!-- Desktop collapse -->
                        <button
                            class="hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 text-white/50 hover:text-white lg:block"
                            @click="sidebarCollapsed = !sidebarCollapsed"
                        >
                            <svg
                                class="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path
                                    v-if="!sidebarCollapsed"
                                    d="M15 6L9 12L15 18"
                                />
                                <path
                                    v-else
                                    d="M9 6L15 12L9 18"
                                />
                            </svg>
                        </button>

                        <div class="hidden sm:block">
                            <p class="text-sm font-semibold text-white">
                                Administration
                            </p>

                            <p class="text-[10px] text-white/30">
                                Manage your application
                            </p>
                        </div>

                    </div>


                    <!-- Right -->
                    <div class="flex items-center gap-2">

                        <!-- Search -->
                        <button
                            class="hidden h-10 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-xs text-white/35 transition hover:border-white/10 hover:text-white/60 md:flex"
                        >
                            <svg
                                class="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <path d="M20 20L16 16" />
                            </svg>

                            Search

                            <span class="ml-5 rounded border border-white/10 px-1.5 py-0.5 text-[9px]">
                                ⌘ K
                            </span>
                        </button>


                        <!-- Notifications -->
                        <div class="relative">

                            <button
                                class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/50 hover:text-white"
                                @click="notificationOpen = !notificationOpen"
                            >

                                <svg
                                    class="h-[18px] w-[18px]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.7"
                                >
                                    <path d="M18 8C18 4.7 15.3 2 12 2C8.7 2 6 4.7 6 8C6 13 4 14 4 16H20C20 14 18 13 18 8Z" />
                                    <path d="M9 20C9.7 21.2 10.7 22 12 22C13.3 22 14.3 21.2 15 20" />
                                </svg>

                                <span class="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#C9A227]" />

                            </button>


                            <Transition
                                enter-active-class="transition duration-200"
                                enter-from-class="opacity-0 translate-y-2"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition duration-150"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0 translate-y-2"
                            >
                                <div
                                    v-if="notificationOpen"
                                    class="absolute right-0 top-12 w-80 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] shadow-2xl"
                                >

                                    <div class="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
                                        <p class="text-sm font-semibold">
                                            Notifications
                                        </p>

                                        <span class="text-[10px] text-[#C9A227]">
                                            3 new
                                        </span>
                                    </div>

                                    <div class="divide-y divide-white/[0.05]">

                                        <div class="flex gap-3 p-4 hover:bg-white/[0.025]">
                                            <div class="h-8 w-8 shrink-0 rounded-lg bg-[#C9A227]/10" />
                                            <div>
                                                <p class="text-xs font-medium">
                                                    New user registered
                                                </p>
                                                <p class="mt-1 text-[10px] text-white/30">
                                                    A new account was created.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex gap-3 p-4 hover:bg-white/[0.025]">
                                            <div class="h-8 w-8 shrink-0 rounded-lg bg-white/5" />
                                            <div>
                                                <p class="text-xs font-medium">
                                                    Password reset request
                                                </p>
                                                <p class="mt-1 text-[10px] text-white/30">
                                                    A user requested a password reset.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="border-t border-white/[0.07] p-3">
                                        <button class="w-full rounded-lg py-2 text-xs font-medium text-[#C9A227] hover:bg-[#C9A227]/5">
                                            View all notifications
                                        </button>
                                    </div>

                                </div>
                            </Transition>

                        </div>


                        <!-- Profile -->
                        <div class="relative">

                            <button
                                class="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1.5 pr-2.5 hover:bg-white/[0.04]"
                                @click="profileOpen = !profileOpen"
                            >

                                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A227]/10 text-xs font-bold text-[#C9A227]">
                                    {{ user?.name?.charAt(0)?.toUpperCase() ?? 'A' }}
                                </div>

                                <span class="hidden max-w-[100px] truncate text-xs font-medium sm:block">
                                    {{ user?.name ?? 'Admin' }}
                                </span>

                                <svg
                                    class="hidden h-3.5 w-3.5 text-white/30 sm:block"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path d="M6 9L12 15L18 9" />
                                </svg>

                            </button>


                            <Transition
                                enter-active-class="transition duration-200"
                                enter-from-class="opacity-0 translate-y-2"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition duration-150"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0 translate-y-2"
                            >
                                <div
                                    v-if="profileOpen"
                                    class="absolute right-0 top-12 w-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] p-2 shadow-2xl"
                                >

                                    <div class="border-b border-white/[0.07] px-3 pb-3 pt-2">
                                        <p class="truncate text-xs font-semibold">
                                            {{ user?.name }}
                                        </p>

                                        <p class="mt-1 truncate text-[10px] text-white/30">
                                            {{ user?.email }}
                                        </p>
                                    </div>

                                    <Link
                                        :href="route('home')"
                                        class="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs text-white/50 hover:bg-white/5 hover:text-white"
                                    >
                                        <svg
                                            class="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.7"
                                        >
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M4 21C4.8 17.5 7.5 15 12 15C16.5 15 19.2 17.5 20 21" />
                                        </svg>

                                        Home
                                    </Link>

                                    <button
                                        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs text-red-400/70 hover:bg-red-500/5 hover:text-red-400"
                                        @click="logout"
                                    >
                                        <svg
                                            class="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.7"
                                        >
                                            <path d="M10 17L15 12L10 7" />
                                            <path d="M15 12H3" />
                                            <path d="M21 19V5C21 3.9 20.1 3 19 3H13" />
                                        </svg>

                                        Logout
                                    </button>

                                </div>
                            </Transition>

                        </div>

                    </div>

                </div>

            </header>


            <!-- ===================================== -->
            <!-- PAGE CONTENT -->
            <!-- ===================================== -->

            <main class="min-h-[calc(100vh-76px)] p-4 sm:p-6 lg:p-8">
                <slot />
            </main>

        </div>

    </div>
</template>
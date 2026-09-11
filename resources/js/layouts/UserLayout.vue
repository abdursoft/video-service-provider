<script setup>
import { ref, computed } from 'vue'
import { Link, usePage, router } from '@inertiajs/vue3'

const page = usePage()

const sidebarOpen = ref(false)

const permissions = computed(() => {
    return page.props.auth?.permissions ?? []
})

const user = computed(() => page.props.auth?.user ?? null)

const can = (permission) => {
    return permissions.value.includes(permission)
}

const logout = () => {
    router.post(route('logout'))
}

const closeSidebar = () => {
    sidebarOpen.value = false
}
</script>

<template>
    <div class="min-h-screen bg-[#080808] text-white">

        <!-- Mobile Overlay -->
        <Transition
            enter-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="sidebarOpen"
                class="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                @click="closeSidebar"
            />
        </Transition>


        <!-- ================================================= -->
        <!-- SIDEBAR -->
        <!-- ================================================= -->

        <aside
            class="fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-white/[0.07] bg-[#0d0d0d] transition-transform duration-300 lg:translate-x-0"
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        >

            <!-- Logo -->
            <div class="flex h-[76px] items-center border-b border-white/[0.07] px-6">

                <Link
                    :href="route('user.dashboard')"
                    class="flex items-center gap-3"
                    @click="closeSidebar"
                >
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-xl"
                    >
                        <img src="/logo.png" alt="Logo" />
                    </div>

                    <div>
                        <div class="text-[15px] font-bold tracking-wide">
                            ESY<span class="text-[#C9A227]">Player</span>
                        </div>

                        <div class="text-[9px] uppercase tracking-[0.25em] text-gray-500">
                            User Panel
                        </div>
                    </div>
                </Link>

                <!-- Mobile Close -->
                <button
                    class="ml-auto rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white lg:hidden"
                    @click="closeSidebar"
                >
                    <svg
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

            </div>


            <!-- Navigation -->
            <div class="flex-1 overflow-y-auto px-4 py-6">

                <!-- Main -->
                <p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
                    Main Menu
                </p>

                <nav class="space-y-1">

                    <!-- Dashboard -->
                    <Link
                        v-if="can('dashboard.view')"
                        :href="route('user.dashboard')"
                        class="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition"
                        :class="route().current('user.dashboard')
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'"
                        @click="closeSidebar"
                    >
                        <svg
                            class="h-[19px] w-[19px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 12l9-9 9 9M5 10v10h14V10M9 20v-6h6v6"
                            />
                        </svg>

                        <span>Dashboard</span>
                    </Link>


                    <!-- Players -->
                    <Link
                        v-if="can('players.view')"
                        :href="route('user.players.index')"
                        class="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition"
                        :class="route().current('user.players.*')
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'"
                        @click="closeSidebar"
                    >
                        <svg
                            class="h-[19px] w-[19px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                            />
                        </svg>

                        <span>Players</span>
                    </Link>


                    <!-- Subscriptions -->
                    <Link
                        v-if="can('subscriptions.view')"
                        :href="route('user.subscriptions.index')"
                        class="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition"
                        :class="route().current('user.subscriptions.*')
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'"
                        @click="closeSidebar"
                    >
                        <svg
                            class="h-[19px] w-[19px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <span>Subscriptions</span>
                    </Link>

                </nav>


                <!-- Account -->
                <p class="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
                    Account
                </p>

                <nav class="space-y-1">

                    <!-- Settings -->
                    <Link
                        v-if="can('settings.view')"
                        :href="route('user.settings.index')"
                        class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition"
                        :class="route().current('user.settings.*')
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'"
                        @click="closeSidebar"
                    >
                        <svg
                            class="h-[19px] w-[19px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.4 15a1.7 1.7 0 00.34 1.88l.06.06-1.8 1.8-.06-.06a1.7 1.7 0 00-1.88-.34 1.7 1.7 0 00-1.03 1.56V22h-2.55v-.1a1.7 1.7 0 00-1.03-1.56 1.7 1.7 0 00-1.88.34l-.06.06-1.8-1.8.06-.06A1.7 1.7 0 008.1 15a1.7 1.7 0 00-1.56-1.03H6.5v-2.55h.04A1.7 1.7 0 008.1 10a1.7 1.7 0 00-.34-1.88L7.7 8.06l1.8-1.8.06.06a1.7 1.7 0 001.88.34 1.7 1.7 0 001.03-1.56V5h2.55v.1a1.7 1.7 0 001.03 1.56 1.7 1.7 0 001.88-.34l.06-.06 1.8 1.8-.06.06A1.7 1.7 0 0019.4 10a1.7 1.7 0 001.56 1.03H21v2.55h-.04A1.7 1.7 0 0019.4 15z"
                            />
                        </svg>

                        <span>Settings</span>
                    </Link>


                    <!-- Profile -->
                    <Link
                        v-if="can('profile.edit')"
                        :href="route('user.profile.edit')"
                        class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition"
                        :class="route().current('user.profile.*')
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'"
                        @click="closeSidebar"
                    >
                        <svg
                            class="h-[19px] w-[19px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <circle
                                cx="12"
                                cy="8"
                                r="4"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 21a8 8 0 0116 0"
                            />
                        </svg>

                        <span>My Profile</span>
                    </Link>


                    <!-- Password -->
                    <Link
                        v-if="can('password.change')"
                        :href="route('user.password.edit')"
                        class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition"
                        :class="route().current('user.password.*')
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'"
                        @click="closeSidebar"
                    >
                        <svg
                            class="h-[19px] w-[19px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <rect
                                x="4"
                                y="10"
                                width="16"
                                height="11"
                                rx="2"
                            />
                            <path
                                stroke-linecap="round"
                                d="M8 10V7a4 4 0 018 0v3"
                            />
                        </svg>

                        <span>Change Password</span>
                    </Link>

                </nav>

            </div>


            <!-- Sidebar User -->
            <div class="border-t border-white/[0.07] p-4">

                <div class="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">

                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A227] font-semibold text-black">
                        {{ user?.name?.charAt(0)?.toUpperCase() ?? 'U' }}
                    </div>

                    <div class="min-w-0 flex-1">
                        <p class="truncate text-sm font-medium text-white">
                            {{ user?.name ?? 'User' }}
                        </p>

                        <p class="truncate text-xs text-gray-500">
                            {{ user?.email ?? '' }}
                        </p>
                    </div>

                    <button
                        @click="logout"
                        class="rounded-lg p-2 text-gray-500 transition hover:bg-white/5 hover:text-red-400"
                        title="Logout"
                    >
                        <svg
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="1.8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
                            />
                        </svg>
                    </button>

                </div>

            </div>

        </aside>


        <!-- ================================================= -->
        <!-- MAIN -->
        <!-- ================================================= -->

        <div class="lg:pl-[270px]">

            <!-- Topbar -->
            <header class="sticky top-0 z-30 h-[76px] border-b border-white/[0.07] bg-[#080808]/90 backdrop-blur-xl">

                <div class="flex h-full items-center justify-between px-5 lg:px-8">

                    <!-- Mobile Menu -->
                    <button
                        class="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-400 hover:text-white lg:hidden"
                        @click="sidebarOpen = true"
                    >
                        <svg
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>


                    <!-- Desktop Page Area -->
                    <div class="hidden lg:block">
                        <p class="text-sm text-gray-500">
                            Welcome back,
                            <span class="text-gray-300">
                                {{ user?.name }}
                            </span>
                        </p>
                    </div>


                    <!-- Right -->
                    <div class="ml-auto flex items-center gap-3">

                        <!-- Notification -->
                        <button
                            class="relative rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
                        >
                            <svg
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
                                />
                            </svg>

                            <span class="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                        </button>


                        <!-- Profile -->
                        <Link
                            v-if="can('profile.edit')"
                            :href="route('user.profile.edit')"
                            class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 py-2 transition hover:bg-white/[0.06]"
                        >
                            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A227] text-sm font-semibold text-black">
                                {{ user?.name?.charAt(0)?.toUpperCase() ?? 'U' }}
                            </div>

                            <div class="hidden text-left sm:block">
                                <p class="max-w-[120px] truncate text-xs font-medium text-white">
                                    {{ user?.name }}
                                </p>

                                <p class="text-[10px] text-gray-500">
                                    Account
                                </p>
                            </div>
                        </Link>

                    </div>

                </div>

            </header>


            <!-- Page Content -->
            <main class="min-h-[calc(100vh-76px)] px-5 py-7 lg:px-8 lg:py-9">
                <slot />
            </main>

        </div>

    </div>
</template>
<template>
    <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300" :class="scrolled
        ? 'border-b border-white/10 bg-black/80 backdrop-blur-xl'
        : 'bg-transparent'">
        <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

            <!-- Logo -->
            <Link href="/" class="group flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center">
                    <span class="text-sm font-bold text-[#C9A227]">
                        <img src="/logo.png" alt="">
                    </span>
                </div>

                <div class="leading-none">
                    <div class="text-sm font-bold tracking-[0.25em] text-white">
                        ESY
                    </div>

                    <div class="mt-1 text-[9px] font-medium tracking-[0.35em] text-[#C9A227]">
                        PLAYER
                    </div>
                </div>
            </Link>


            <!-- Desktop Navigation -->
            <nav class="hidden items-center gap-8 md:flex">

                <Link :href="route('docs')" class="text-sm text-white/70 transition hover:text-[#C9A227]">
                    Documentation
                </Link>

                <Link :href="route('embed')" class="text-sm text-white/70 transition hover:text-[#C9A227]">
                    Embed
                </Link>

                <Link v-if="isAuthenticated" :href="route('create')" class="text-sm text-white/70 transition hover:text-[#C9A227]">
                    Player
                </Link>

                <Link :href="route('pricing')" class="text-sm text-white/70 transition hover:text-[#C9A227]">
                    Pricing
                </Link>

                <Link v-if="isAuthenticated" :href="route('auth.dashboard')" class="text-sm text-white/70 transition hover:text-[#C9A227]">
                    Dashboard
                </Link>

                <!-- Authenticated -->
                <button v-if="isAuthenticated" @click="logout" type="button" class="rounded-full border border-white/15 px-5 py-2.5
               text-sm font-medium text-white transition
               hover:border-[#C9A227]/50 hover:text-[#C9A227]">
                    Logout
                </button>

                <!-- Guest -->
                <Link v-else :href="route('login')" class="rounded-full border border-white/15 px-5 py-2.5
               text-sm font-medium text-white transition
               hover:border-[#C9A227]/50 hover:text-[#C9A227]">
                    Login
                </Link>

            </nav>


            <!-- Mobile button -->
            <button @click="mobileOpen = !mobileOpen" class="flex h-10 w-10 items-center justify-center rounded-lg
                       border border-white/10 md:hidden">
                <svg v-if="!mobileOpen" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg v-else class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6l12 12M6 18L18 6" />
                </svg>
            </button>
        </div>


        <!-- Mobile navigation -->
        <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="mobileOpen"
                class="border-t border-white/10 bg-[#050505]/95 px-5 py-5 backdrop-blur-xl md:hidden">
                <nav class="flex flex-col gap-2">

                    <Link @click="mobileOpen = false" href="/embed" class="rounded-lg px-4 py-3 text-white/80
               hover:bg-white/5 hover:text-[#C9A227]">
                        Embed
                    </Link>

                    <Link @click="mobileOpen = false" href="/pricing" class="rounded-lg px-4 py-3 text-white/80
               hover:bg-white/5 hover:text-[#C9A227]">
                        Pricing
                    </Link>

                    <!-- Guest -->
                    <Link v-if="!isAuthenticated" @click="mobileOpen = false" href="/login" class="mt-2 rounded-lg bg-[#C9A227] px-4 py-3
               text-center font-medium text-black
               transition hover:bg-[#E5C766]">
                        Login
                    </Link>

                    <!-- Authenticated -->
                    <button v-else @click="logout" type="button" class="mt-2 rounded-lg bg-[#C9A227] px-4 py-3
               text-center font-medium text-black
               transition hover:bg-[#E5C766]">
                        Logout
                    </button>

                </nav>
            </div>
        </Transition>
    </header>
</template>

<script setup>
import { Link, router, usePage } from '@inertiajs/vue3'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const page = usePage()

const scrolled = ref(false)
const mobileOpen = ref(false)

const isAuthenticated = computed(() => {
    return !!page.props.auth?.user
})

const handleScroll = () => {
    scrolled.value = window.scrollY > 20
}

const logout = () => {
    router.post('/logout', {}, {
        onFinish: () => {
            mobileOpen.value = false
        }
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
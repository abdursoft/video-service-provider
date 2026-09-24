<template>
    <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300" :class="scrolled
        ? 'border-b border-white/10 bg-black/80 backdrop-blur-xl'
        : 'bg-transparent'">
        <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

            <!-- Logo -->
            <Link @click="mobileOpen = false" href="/" class="group flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center">
                    <img src="/logo.png" alt="ESY Player" class="h-12 w-12 object-contain">
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

                <!-- Main Navigation -->
                <Link v-for="item in navigation" :key="item.route" :href="route(item.route)"
                    class="text-sm transition-colors duration-200" :class="item.active
                        ? 'text-[#C9A227]'
                        : 'text-white/70 hover:text-[#C9A227]'">
                    {{ item.name }}
                </Link>


                <!-- Dashboard -->
                <Link v-if="isAuthenticated" :href="route('auth.dashboard')"
                    class="text-sm transition-colors duration-200" :class="isActive('auth.dashboard')
                        ? 'text-[#C9A227]'
                        : 'text-white/70 hover:text-[#C9A227]'">
                    Dashboard
                </Link>


                <!-- Authenticated -->
                <button v-if="isAuthenticated" @click="logout" type="button" class="rounded-full border border-white/15 px-5 py-2.5
                           text-sm font-medium text-white transition-all duration-200
                           hover:border-[#C9A227]/50 hover:text-[#C9A227]">
                    Logout
                </button>


                <!-- Guest -->
                <Link v-else :href="route('login')" class="rounded-full border border-white/15 px-5 py-2.5
                           text-sm font-medium text-white transition-all duration-200
                           hover:border-[#C9A227]/50 hover:text-[#C9A227]">
                    Login
                </Link>

            </nav>


            <!-- Mobile Menu Button -->
            <button @click="mobileOpen = !mobileOpen" type="button" class="flex h-10 w-10 cursor-pointer items-center justify-center
                       rounded-lg border border-white/10 md:hidden" aria-label="Toggle navigation">
                <!-- Hamburger -->
                <svg v-if="!mobileOpen" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <!-- Close -->
                <svg v-else class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6l12 12M6 18L18 6" />
                </svg>
            </button>

        </div>


        <!-- Mobile Navigation -->
        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="mobileOpen" class="border-t border-white/10 bg-[#050505]/95
                       px-5 py-5 backdrop-blur-xl md:hidden">
                <nav class="flex flex-col gap-2">

                    <!-- Main Navigation -->
                    <Link v-for="item in navigation" :key="item.route" @click="mobileOpen = false"
                        :href="route(item.route)" class="rounded-lg px-4 py-3 transition-all duration-200" :class="item.active
                            ? 'bg-[#C9A227]/10 text-[#C9A227]'
                            : 'text-white/80 hover:bg-white/5 hover:text-[#C9A227]'">
                        {{ item.name }}
                    </Link>


                    <!-- Guest -->
                    <Link v-if="!isAuthenticated" @click="mobileOpen = false" :href="route('login')" class="mt-2 rounded-lg bg-[#C9A227] px-4 py-3
                               text-center font-medium text-black
                               transition-colors duration-200
                               hover:bg-[#E5C766]">
                        Login
                    </Link>


                    <!-- Authenticated -->
                    <template v-else>

                        <!-- Dashboard -->
                        <Link @click="mobileOpen = false" :href="route('auth.dashboard')"
                            class="rounded-lg px-4 py-3 transition-all duration-200" :class="isActive('auth.dashboard')
                                ? 'bg-[#C9A227]/10 text-[#C9A227]'
                                : 'text-white/80 hover:bg-white/5 hover:text-[#C9A227]'">
                            Dashboard
                        </Link>


                        <!-- Logout -->
                        <button @click="logout" type="button" class="mt-2 rounded-lg bg-[#C9A227] px-4 py-3
                                   text-center font-medium text-black
                                   transition-colors duration-200
                                   hover:bg-[#E5C766]">
                            Logout
                        </button>

                    </template>

                </nav>
            </div>
        </Transition>

    </header>
</template>


<script setup>
import { Link, router, usePage } from '@inertiajs/vue3'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const page = usePage();


/*
|--------------------------------------------------------------------------
| Navigation
|--------------------------------------------------------------------------
*/

let navigation = ref([
    {
        name: 'Embed',
        route: 'embed',
        active: false,
    },
    {
        name: 'Docs',
        route: 'docs',
        active: false,
    },
    {
        name: 'Pricing',
        route: 'pricing',
        active: false,
    },
    {
        name: 'Contact',
        route: 'contact',
        active: false
    },
])


/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/

const scrolled = ref(false)
const mobileOpen = ref(false)


/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

const isAuthenticated = computed(() => {
    return !!page.props.auth?.user
})


/*
|--------------------------------------------------------------------------
| Active Route
|--------------------------------------------------------------------------
*/

const isActive = (routeName) => {
    return route()?.current(routeName)
}


/*
|--------------------------------------------------------------------------
| Scroll Handler
|--------------------------------------------------------------------------
*/

const handleScroll = () => {
    scrolled.value = window.scrollY > 20
}


/*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/

const logout = () => {
    router.post(
        route('logout'),
        {},
        {
            onFinish: () => {
                mobileOpen.value = false
            },
        }
    )
}


watch(
    () => page.url,
    (uri) => {
        navigation.value?.filter(item => {
            item.active = uri == `/${item.route}` ? true : false;
        });
    },{
        immediate:true,
        deep:true
    }
);

/*
|--------------------------------------------------------------------------
| Lifecycle
|--------------------------------------------------------------------------
*/

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // Set initial state
    handleScroll()
})


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
    <div class="relative min-h-screen overflow-hidden bg-[#050505] text-white">
        <!-- Background glow -->

        <div
            class="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.04] blur-[120px]" />

        <!-- Header -->

        <header class="absolute top-0 right-0 left-0 z-11 flex items-center justify-between px-6 py-6 lg:px-10">
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

            <Link href="/" class="text-xs text-white/40 transition hover:text-white">
                ← Back to home
            </Link>
        </header>

        <!-- Content -->

        <main class="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
            <div class="w-full max-w-[420px]">
                <!-- Heading -->

                <div class="mb-8 text-center">
                    <div
                        class="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/10">
                        <svg class="h-5 w-5 text-[#C9A227]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>

                    <h1 class="text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>

                    <p class="mt-2 text-sm leading-6 text-white/35">
                        Sign in to manage your video players and embeds.
                    </p>
                </div>

                <!-- Card -->

                <div
                    class="rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
                    <form @submit.prevent="submit" class="space-y-5">
                        <!-- Email -->

                        <div>
                            <label for="email" class="mb-2 block text-xs font-medium text-white/60">
                                Email address
                            </label>

                            <input id="email" v-model="form.email" type="email" autocomplete="email"
                                placeholder="you@example.com"
                                class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white transition outline-none placeholder:text-white/20 focus:border-[#C9A227]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C9A227]/20" />

                            <p v-if="form.errors.email" class="mt-2 text-xs text-red-400">
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <!-- Password -->

                        <div>
                            <div class="mb-2 flex items-center justify-between">
                                <label for="password" class="text-xs font-medium text-white/60">
                                    Password
                                </label>

                                <Link :href="route('password.forgot')"
                                    class="text-[11px] text-[#C9A227] transition hover:text-[#e0bd45]">
                                    Forgot password?
                                </Link>
                            </div>

                            <div class="relative">
                                <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                                    autocomplete="current-password" placeholder="••••••••"
                                    class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 pr-12 text-sm text-white transition outline-none placeholder:text-white/20 focus:border-[#C9A227]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C9A227]/20" />

                                <button type="button" @click="showPassword = !showPassword"
                                    class="absolute top-1/2 right-3 -translate-y-1/2 p-2 text-white/25 transition hover:text-white/60">
                                    <span class="text-xs">
                                        {{ showPassword ? 'Hide' : 'Show' }}
                                    </span>
                                </button>
                            </div>

                            <p v-if="form.errors.password" class="mt-2 text-xs text-red-400">
                                {{ form.errors.password }}
                            </p>
                        </div>

                        <!-- Remember -->

                        <label class="flex cursor-pointer items-center gap-2.5 text-xs text-white/35">
                            <input v-model="form.remember" type="checkbox"
                                class="h-4 w-4 rounded border-white/10 bg-white/5 text-[#C9A227] accent-[#C9A227]" />

                            Remember me
                        </label>

                        <!-- Submit -->

                        <div class="flex items-center justify-center flex-column">
                            <div ref="turnstileContainer"></div>
                        </div>

                        <template v-if="turnstileToken">
                            <button type="submit" :disabled="form.processing"
                                class="w-full rounded-xl bg-[#C9A227] px-4 py-3.5 text-sm font-semibold text-black transition hover:bg-[#d9b63b] disabled:cursor-not-allowed disabled:opacity-50">
                                {{ form.processing ? 'Signing in...' : 'Sign in' }}
                            </button>

                            <a :href="route('auth.google')"
                                class="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                                Continue with Google
                            </a>
                        </template>
                    </form>

                    <!-- Register -->

                    <div class="mt-7 border-t border-white/[0.06] pt-6 text-center">
                        <p class="text-xs text-white/30">
                            Don't have an account?

                            <Link :href="route('register')" class="ml-1 font-medium text-[#C9A227] hover:underline">
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>

                <!-- Footer -->

                <p class="mt-8 text-center text-[10px] text-white/20">
                    © {{ new Date().getFullYear() }} esyPlayer. All rights
                    reserved.
                </p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import handler from '@/utils/EmbedRender'

const turnstileContainer = ref(null);
const turnstileToken = ref('');

const showPassword = ref(false);

const form = useForm({
    email: '',
    password: '',
    remember: false,
    turnstile_token: false
});

const submit = () => {
    form.turnstile_token = turnstileToken;
    form.post(route('auth.login'), {
        onFinish: () => {
            form.password = '';
        },
    });
};

onMounted(async () => {
    await handler.loadTrunstile();
    setTimeout(async () => {
        const token = await handler.getTurnstileToken(turnstileContainer.value);
        turnstileToken.value = token;
    }, 500);
});
</script>

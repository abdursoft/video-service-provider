<template>
    <div class="relative min-h-screen overflow-hidden bg-[#050505] text-white">
        <!-- Glow -->

        <div
            class="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/[0.035] blur-[140px]" />

        <!-- Header -->

        <header class="absolute top-0 right-0 left-0 z-11 flex items-center justify-between px-6 py-6 lg:px-10">
            <Link href="/" class="group flex items-center gap-3">
                <div class="flex h-12 w-12 items-center justify-center">
                    <span class="text-sm font-bold text-[#C9A227]">
                        <img src="/logo.png" alt="" />
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

            <Link href="/" class="text-xs text-white/40 hover:text-white">
                ← Back to home
            </Link>
        </header>

        <!-- Main -->

        <main class="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
            <div class="w-full max-w-[440px]">
                <!-- Heading -->

                <div class="mb-8 text-center">
                    <div
                        class="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/10">
                        <svg class="h-5 w-5 text-[#C9A227]" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </div>

                    <h1 class="text-2xl font-semibold tracking-tight">
                        Create your account
                    </h1>

                    <p class="mt-2 text-sm leading-6 text-white/35">
                        Start creating and sharing custom video players.
                    </p>
                </div>

                <!-- Card -->

                <div
                    class="rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
                    <form @submit.prevent="submit" class="space-y-5">
                        <!-- Name -->

                        <div>
                            <label class="mb-2 block text-xs font-medium text-white/60">
                                Full name
                            </label>

                            <input v-model="form.name" type="text" autocomplete="name" placeholder="John Doe"
                                class="auth-input" />

                            <p v-if="form.errors.name" class="mt-2 text-xs text-red-400">
                                {{ form.errors.name }}
                            </p>
                        </div>

                        <!-- Email -->

                        <div>
                            <label class="mb-2 block text-xs font-medium text-white/60">
                                Email address
                            </label>

                            <input v-model="form.email" type="email" autocomplete="email" placeholder="you@example.com"
                                class="auth-input" />

                            <p v-if="form.errors.email" class="mt-2 text-xs text-red-400">
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <!-- Password -->

                        <div>
                            <label class="mb-2 block text-xs font-medium text-white/60">
                                Password
                            </label>

                            <input v-model="form.password" type="password" autocomplete="new-password"
                                placeholder="••••••••" class="auth-input" />

                            <p v-if="form.errors.password" class="mt-2 text-xs text-red-400">
                                {{ form.errors.password }}
                            </p>
                        </div>

                        <!-- Confirm -->

                        <div>
                            <label class="mb-2 block text-xs font-medium text-white/60">
                                Confirm password
                            </label>

                            <input v-model="form.password_confirmation" type="password" autocomplete="new-password"
                                placeholder="••••••••" class="auth-input" />

                            <p v-if="form.errors.password_confirmation" class="mt-2 text-xs text-red-400">
                                {{ form.errors.password_confirmation }}
                            </p>
                        </div>

                        <!-- Terms -->

                        <label class="flex items-start gap-2.5 text-[11px] leading-5 text-white/30">
                            <input v-model="form.terms" type="checkbox" class="mt-0.5 h-4 w-4 accent-[#C9A227]" />

                            <span>
                                I agree to the
                                <Link href="/terms" class="text-[#C9A227] hover:underline">
                                    Terms of Service
                                </Link>
                                and
                                <Link href="/privacy" class="text-[#C9A227] hover:underline">
                                    Privacy Policy </Link>.
                            </span>
                        </label>

                        <!-- Submit -->

                        <div class="flex items-center justify-center flex-column">
                            <div ref="turnstileContainer"></div>
                        </div>

                        <button type="submit" :disabled="form.processing || !turnstileToken"
                            class="w-full rounded-xl bg-[#C9A227] px-4 py-3.5 text-sm font-semibold text-black transition hover:bg-[#d9b63b] disabled:opacity-50">
                            {{
                                form.processing
                                    ? 'Creating account...'
                                    : 'Create account'
                            }}
                        </button>
                    </form>

                    <!-- Login -->


                    <div class="mt-7 border-t border-white/[0.06] pt-6 text-center">
                        <p class="text-xs text-white/30">
                            Already have an account?

                            <Link :href="route('login')" class="ml-1 font-medium text-[#C9A227] hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>

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
import handler from '@/utils/EmbedRender'
import { onMounted, ref } from 'vue';

const turnstileContainer = ref(null);
const turnstileToken = ref('');

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
    turnstile_token: ''
});

const submit = () => {
    form.turnstile_token = turnstileToken;
    form.post(route('auth.register'));
};

onMounted(async () => {
    await handler.loadTrunstile();
    setTimeout(async () => {
        const token = await handler.getTurnstileToken(turnstileContainer.value);
        turnstileToken.value = token;
    }, 500);
});
</script>

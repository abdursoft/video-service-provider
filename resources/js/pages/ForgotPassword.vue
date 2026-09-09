<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const email = ref('');

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.send-otp'), {
        preserveScroll: true,
        onSuccess: () => {
            email.value = form.email;
        },
    });
};
</script>

<template>
    <Head title="Forgot Password" />

    <div class="min-h-screen bg-black text-white">
        <!-- Background -->
        <div class="pointer-events-none fixed inset-0 overflow-hidden">
            <div
                class="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[140px]"
            />
        </div>

        <div
            class="relative flex min-h-screen items-center justify-center px-5 py-12"
        >
            <div class="w-full max-w-md">
                <!-- Logo -->
                <div class="mb-10 text-center">
                    <Link
                        :href="route('home')"
                        class="inline-flex items-center gap-2"
                    >
                        <div class="flex h-12 w-12 items-center justify-center">
                            <span class="text-sm font-bold text-[#C9A227]">
                                <img src="/logo.png" alt="" />
                            </span>
                        </div>

                        <span class="text-xl font-bold tracking-tight">
                            {{ $page.props.app?.name ?? 'EsyPlayer' }}
                        </span>
                    </Link>
                </div>

                <!-- Card -->
                <div
                    class="rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-9"
                >
                    <!-- Heading -->
                    <div class="mb-8">
                        <div
                            class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10"
                        >
                            <svg
                                class="h-6 w-6 text-[#d4af37]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="1.8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 7a3 3 0 1 1-6 0
                                       3 3 0 0 1 6 0ZM5 21a7 7 0 0 1 14 0"
                                />
                            </svg>
                        </div>

                        <h1 class="text-2xl font-bold tracking-tight">
                            Forgot your password?
                        </h1>

                        <p class="mt-2 text-sm leading-6 text-white/50">
                            No worries. Enter your email address and we'll send
                            you a verification code to reset your password.
                        </p>
                    </div>

                    <!-- Form -->
                    <form @submit.prevent="submit" class="space-y-5">
                        <div>
                            <label
                                for="email"
                                class="mb-2 block text-sm font-medium text-white/80"
                            >
                                Email address
                            </label>

                            <input
                                id="email"
                                v-model="form.email"
                                type="email"
                                autocomplete="email"
                                required
                                placeholder="you@example.com"
                                class="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-white transition outline-none placeholder:text-white/25 focus:border-[#d4af37]/60 focus:ring-2 focus:ring-[#d4af37]/10"
                            />

                            <p
                                v-if="form.errors.email"
                                class="mt-2 text-xs text-red-400"
                            >
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="flex w-full items-center justify-center rounded-xl bg-[#d4af37] px-4 py-3.5 text-sm font-semibold text-black transition hover:bg-[#e5c158] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <span v-if="!form.processing">
                                Send verification code
                            </span>

                            <span v-else class="flex items-center gap-2">
                                <svg
                                    class="h-4 w-4 animate-spin"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    />

                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>

                                Sending...
                            </span>
                        </button>
                    </form>

                    <!-- Back -->
                    <div class="mt-7 text-center">
                        <Link
                            :href="route('login')"
                            class="text-sm text-white/50 transition hover:text-[#d4af37]"
                        >
                            ← Back to sign in
                        </Link>
                    </div>
                </div>

                <!-- Footer -->
                <p class="mt-8 text-center text-xs text-white/25">
                    © {{ new Date().getFullYear() }}
                    {{ $page.props.app?.name ?? 'EsyPlayer' }}. All rights
                    reserved.
                </p>
            </div>
        </div>
    </div>
</template>

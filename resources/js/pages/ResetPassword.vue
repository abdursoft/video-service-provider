<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3'

const props = defineProps({
    email: {
        type: String,
        default: '',
    },

    expiresIn: {
        type: Number,
        default: 10,
    },
})

const form = useForm({
    email: props.email,
    otp: '',
    password: '',
    password_confirmation: '',
})

const submit = () => {
    form.post(route('password.reset-password'), {
        preserveScroll: true,
    })
}
</script>

<template>

    <Head title="Reset Password" />

    <div class="min-h-screen bg-black text-white">

        <!-- Background -->
        <div class="pointer-events-none fixed inset-0 overflow-hidden">
            <div class="absolute left-1/2 top-0 h-[500px] w-[700px]
                       -translate-x-1/2 rounded-full
                       bg-[#d4af37]/10 blur-[140px]" />
        </div>

        <div class="relative flex min-h-screen items-center justify-center px-5 py-12">

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
                <div class="rounded-2xl border border-white/10
                           bg-white/[0.04] p-7 shadow-2xl
                           backdrop-blur-xl sm:p-9">

                    <!-- Heading -->
                    <div class="mb-8">

                        <div class="mb-5 flex h-12 w-12 items-center justify-center
                                   rounded-xl border border-[#d4af37]/20
                                   bg-[#d4af37]/10">
                            <svg class="h-6 w-6 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="1.8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3
                                       1.343-3 3 1.343 3 3 3Z" />

                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 21a7 7 0 0114 0" />
                            </svg>
                        </div>

                        <h1 class="text-2xl font-bold tracking-tight">
                            Reset your password
                        </h1>

                        <p class="mt-2 text-sm leading-6 text-white/50">
                            Enter the verification code sent to your email
                            and choose a new password.
                        </p>

                    </div>

                    <form @submit.prevent="submit" class="space-y-5">

                        <!-- Email -->
                        <div class="hidden">
                            <label class="mb-2 block text-sm font-medium text-white/80">
                                Email address
                            </label>

                            <input v-model="form.email" type="email" required readonly class="w-full rounded-xl border border-white/10
                                       bg-white/[0.03] px-4 py-3.5
                                       text-sm text-white/50 outline-none" />

                            <p v-if="form.errors.email" class="mt-2 text-xs text-red-400">
                                {{ form.errors.email }}
                            </p>
                        </div>

                        <!-- OTP -->
                        <div>
                            <div class="mb-2 flex items-center justify-between">
                                <label for="otp" class="block text-sm font-medium text-white/80">
                                    Verification code
                                </label>

                                <span class="text-xs text-white/30">
                                    Expires in {{ expiresIn }} min
                                </span>
                            </div>

                            <input id="otp" v-model="form.otp" type="text" inputmode="numeric"
                                autocomplete="one-time-code" maxlength="6" required placeholder="000000" class="w-full rounded-xl border border-white/10
                                       bg-white/[0.05] px-4 py-4
                                       text-center text-xl font-bold
                                       tracking-[0.5em] text-white
                                       outline-none placeholder:text-white/20
                                       focus:border-[#d4af37]/60
                                       focus:ring-2
                                       focus:ring-[#d4af37]/10" />

                            <p v-if="form.errors.otp" class="mt-2 text-xs text-red-400">
                                {{ form.errors.otp }}
                            </p>
                        </div>

                        <!-- Password -->
                        <div>
                            <label for="password" class="mb-2 block text-sm font-medium text-white/80">
                                New password
                            </label>

                            <input id="password" v-model="form.password" type="password" autocomplete="new-password"
                                required placeholder="Enter your new password" class="w-full rounded-xl border border-white/10
                                       bg-white/[0.05] px-4 py-3.5
                                       text-sm text-white outline-none
                                       placeholder:text-white/25
                                       focus:border-[#d4af37]/60
                                       focus:ring-2
                                       focus:ring-[#d4af37]/10" />

                            <p v-if="form.errors.password" class="mt-2 text-xs text-red-400">
                                {{ form.errors.password }}
                            </p>
                        </div>

                        <!-- Confirm Password -->
                        <div>
                            <label for="password_confirmation" class="mb-2 block text-sm font-medium text-white/80">
                                Confirm password
                            </label>

                            <input id="password_confirmation" v-model="form.password_confirmation" type="password"
                                autocomplete="new-password" required placeholder="Confirm your new password" class="w-full rounded-xl border border-white/10
                                       bg-white/[0.05] px-4 py-3.5
                                       text-sm text-white outline-none
                                       placeholder:text-white/25
                                       focus:border-[#d4af37]/60
                                       focus:ring-2
                                       focus:ring-[#d4af37]/10" />

                            <p v-if="form.errors.password_confirmation" class="mt-2 text-xs text-red-400">
                                {{ form.errors.password_confirmation }}
                            </p>
                        </div>

                        <!-- Submit -->
                        <button type="submit" :disabled="form.processing" class="flex w-full items-center justify-center
                                   rounded-xl bg-[#d4af37] px-4 py-3.5
                                   text-sm font-semibold text-black
                                   transition hover:bg-[#e5c158]
                                   disabled:cursor-not-allowed
                                   disabled:opacity-50">
                            <span v-if="!form.processing">
                                Reset password
                            </span>

                            <span v-else class="flex items-center gap-2">
                                <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4" />

                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                </svg>

                                Resetting...
                            </span>
                        </button>

                    </form>

                    <!-- Back -->
                    <div class="mt-7 text-center">
                        <Link :href="route('login')" class="text-sm text-white/50 transition hover:text-[#d4af37]">
                            ← Back to sign in
                        </Link>
                    </div>

                </div>

                <p class="mt-8 text-center text-xs text-white/25">
                    © {{ new Date().getFullYear() }}
                    {{ $page.props.app?.name ?? 'EsyPlayer' }}.
                    All rights reserved.
                </p>

            </div>
        </div>
    </div>
</template>
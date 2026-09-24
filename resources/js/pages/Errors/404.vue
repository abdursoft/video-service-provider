<script setup lang="ts">
import { router } from '@inertiajs/vue3'
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6 text-white">
        <div class="w-full max-w-lg text-center">

            <div class="mb-6">
                <span class="text-[100px] font-black leading-none tracking-tighter text-[#C9A227]/20">
                    404
                </span>
            </div>

            <div
                class="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/10"
            >
                <svg
                    class="h-8 w-8 text-[#C9A227]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75h.008v.008H9.75V9.75zm4.5 0h.008v.008h-.008V9.75z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                </svg>
            </div>

            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                Page Not Found
            </p>

            <h1 class="text-3xl font-bold tracking-tight">
                We couldn't find that page
            </h1>

            <p class="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
                The page you're looking for may have been removed, renamed,
                or doesn't exist.
            </p>

            <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                    @click="router.visit('/admin/dashboard')"
                    class="rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#D8B43A]"
                >
                    Back to Dashboard
                </button>

                <button
                    @click="router.visit(route('home'))"
                    class="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                >
                    Go Home
                </button>
            </div>

            <p class="mt-10 text-xs text-white/20">
                Error code: 404
            </p>

        </div>
    </div>
</template>
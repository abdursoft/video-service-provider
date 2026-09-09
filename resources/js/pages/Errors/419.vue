<script setup lang="ts">
import { router } from '@inertiajs/vue3'
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6 text-white">
        <div class="w-full max-w-lg text-center">

            <div class="mb-6">
                <span class="text-[100px] font-black leading-none tracking-tighter text-[#C9A227]/20">
                    419
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
                        d="M12 8v4l2.5 2.5"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>

            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                Session Expired
            </p>

            <h1 class="text-3xl font-bold tracking-tight">
                Your session has expired
            </h1>

            <p class="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
                Your session expired due to inactivity. Please refresh the
                page and try again.
            </p>

            <div class="mt-8">
                <button
                    @click="router.reload()"
                    class="rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#D8B43A]"
                >
                    Refresh Page
                </button>
            </div>

            <p class="mt-10 text-xs text-white/20">
                Error code: 419
            </p>

        </div>
    </div>
</template>
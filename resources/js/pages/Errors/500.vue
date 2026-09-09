<script setup lang="ts">
import { router } from '@inertiajs/vue3'
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6 text-white">
        <div class="w-full max-w-lg text-center">

            <div class="mb-6">
                <span class="text-[100px] font-black leading-none tracking-tighter text-[#C9A227]/20">
                    500
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
                        d="M10.34 3.94a1.5 1.5 0 013.32 0l.2.4a1.5 1.5 0 001.45.82l.45-.03a1.5 1.5 0 011.17 2.56l-.32.32a1.5 1.5 0 00-.33 1.55l.16.42a1.5 1.5 0 011.96 1.96l-.16.42a1.5 1.5 0 00.33 1.55l.32.32a1.5 1.5 0 01-1.17 2.56l-.45-.03a1.5 1.5 0 00-1.45.82l-.2.4a1.5 1.5 0 01-3.32 0l-.2-.4a1.5 1.5 0 00-1.45-.82l-.45.03a1.5 1.5 0 01-1.17-2.56l.32-.32a1.5 1.5 0 00.33-1.55l-.16-.42a1.5 1.5 0 01-1.96-1.96l.16-.42a1.5 1.5 0 00-.33-1.55l-.32-.32a1.5 1.5 0 011.17-2.56l.45.03a1.5 1.5 0 001.45-.82l.2-.4z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 11.5v.01M12 14.5v.01"
                    />
                </svg>
            </div>

            <p class="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                Server Error
            </p>

            <h1 class="text-3xl font-bold tracking-tight">
                Something went wrong
            </h1>

            <p class="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
                Something unexpected happened on our server. Please try again
                in a moment.
            </p>

            <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                    @click="router.reload()"
                    class="rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#D8B43A]"
                >
                    Try Again
                </button>

                <button
                    @click="router.visit('/admin/dashboard')"
                    class="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                >
                    Dashboard
                </button>
            </div>

            <p class="mt-10 text-xs text-white/20">
                Error code: 500
            </p>

        </div>
    </div>
</template>
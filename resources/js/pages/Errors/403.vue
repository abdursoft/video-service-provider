<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

const home = () => {
    window.location.href = '/';
};
</script>

<template>
    <div class="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6 text-white">
        <div class="w-full max-w-lg text-center">
            <!-- 403 -->
            <div class="mb-6">
                <span class="text-[100px] leading-none font-black tracking-tighter text-[#C9A227]/20">
                    403
                </span>
            </div>

            <!-- Icon -->
            <div
                class="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/10">
                <svg class="h-8 w-8 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v2h8z" />
                </svg>
            </div>

            <p class="mb-3 text-xs font-semibold tracking-[0.3em] text-[#C9A227] uppercase">
                Access Denied
            </p>

            <h1 class="text-3xl font-bold tracking-tight">
                You don't have permission
            </h1>

            <p class="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50">
                Sorry, you don't have the required role or permission to access
                this page.
            </p>

            <!-- Actions -->
            <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" @click="$inertia.visit('/admin/dashboard')"
                    class="rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#D8B43A] cursor-pointer">
                    Back to Dashboard
                </button>

                <button type="button" @click="home()"
                    class="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07] cursor-pointer">
                    Go Back
                </button>
            </div>

            <p class="mt-10 text-xs text-white/20">Error code: 403</p>
        </div>
    </div>
</template>

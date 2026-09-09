<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
    <div class="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <div class="text-center">

            <h1 class="text-3xl font-bold">
                Payment Successful
            </h1>

            <p class="mt-3 text-white/60">
                Your subscription is being activated.
            </p>

            <Link
                :href="route('auth.dashboard')"
                class="mt-8 inline-block rounded-xl bg-[#C9A227] px-6 py-3 font-semibold text-black"
            >
                Go to Dashboard
            </Link>

        </div>
    </div>
</template>
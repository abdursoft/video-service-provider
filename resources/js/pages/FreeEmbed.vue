<script setup lang="ts">
import FreeBuilder from '@/components/builder/FreeBuilder.vue';
import SeoHead from '@/components/partials/SeoHead.vue';
import Home from '@/layouts/Home.vue';
import { Head } from '@inertiajs/vue3';

defineOptions({
    layout: Home,
});
</script>

<template>
    <div class="min-h-screen bg-[#050505] text-white">

        <SeoHead title="Create an Embeddable Video Player — ESY Player"
            description="Create a customizable, responsive video player and embed it on any website with ESY Player. Configure controls, branding, playlists, playback settings, and more."
            url="https://esyplayer.com/embed" />
        <main class="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
            <!-- Page heading -->
            <div class="mb-8">
                <div
                    class="mb-3 flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-[#C9A227] uppercase">
                    <span class="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />

                    Player Builder
                </div>

                <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Create your player
                </h1>

                <p class="mt-3 text-sm text-white/40">
                    Configure your video player and generate an embed code.
                </p>
            </div>

            <!-- Builder -->
            <FreeBuilder />
        </main>
    </div>
</template>

<template>
    <section class="relative min-h-screen overflow-hidden bg-[#050505]">

        <!-- Gold ambient glow -->
        <div class="pointer-events-none absolute left-1/2 top-1/2
                   h-[500px] w-[500px] -translate-x-1/2
                   -translate-y-1/2 rounded-full
                   bg-[#C9A227]/10 blur-[140px]" />


        <div class="relative mx-auto flex min-h-screen max-w-7xl
                   items-center px-5 pb-20 pt-32 lg:px-8">

            <div class="grid w-full items-center gap-16 lg:grid-cols-2">

                <!-- Content -->
                <div>

                    <div class="mb-6 inline-flex items-center gap-2 rounded-full
                               border border-[#C9A227]/20 bg-[#C9A227]/5
                               px-4 py-2">
                        <span class="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />

                        <span class="text-[10px] font-semibold uppercase
                                   tracking-[0.2em] text-[#C9A227]">
                            Simple video embedding
                        </span>
                    </div>


                    <h1 class="max-w-3xl text-5xl font-semibold leading-[1.05]
                               tracking-tight text-white sm:text-6xl
                               lg:text-7xl">
                        Your videos.
                        <span class="text-[#C9A227]">
                            Anywhere.
                        </span>
                    </h1>


                    <p class="mt-7 max-w-xl text-base leading-8
                               text-white/50 sm:text-lg">
                        Turn any video URL into a beautiful,
                        responsive and embeddable video player.
                        Create, customize and share in seconds.
                    </p>


                    <div class="mt-9 flex flex-col gap-3 sm:flex-row">

                        <Link :href="route('embed')" class="inline-flex items-center justify-center
                                   rounded-full bg-[#C9A227] px-7 py-3.5
                                   text-sm font-semibold text-black
                                   transition hover:bg-[#E5C766]">
                            Create Your Player

                            <span class="ml-2 text-lg">
                                →
                            </span>
                        </Link>


                        <Link :href="route('pricing')" class="inline-flex items-center justify-center
                                   rounded-full border border-white/15
                                   px-7 py-3.5 text-sm font-medium
                                   text-white transition
                                   hover:border-[#C9A227]/40
                                   hover:text-[#C9A227]">
                            View Pricing
                        </Link>

                    </div>

                </div>


                <!-- Player -->
                <div class="relative">

                    <div class="absolute -inset-6 rounded-[2rem]
                               border border-[#C9A227]/10
                               bg-[#C9A227]/5 blur-xl" />

                    <div class="relative">
                        <VideoPlayer poster="/images/demo-poster.jpg" />
                    </div>

                </div>

            </div>

        </div>


        <!-- Bottom fade -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32
                   bg-gradient-to-t from-[#050505] to-transparent" />

    </section>
</template>

<script setup>
import VideoPlayer from '@/components/player/VideoPlayer.vue'
import { Link } from '@inertiajs/vue3';
</script>
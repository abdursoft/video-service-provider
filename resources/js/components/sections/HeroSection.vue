<template>
    <section class="relative min-h-screen overflow-hidden bg-[#050505]">

        <!-- Ambient glow -->
        <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/10 blur-[160px]"
        ></div>

        <div
            class="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 lg:px-8"
        >
            <div class="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

                <!-- ========================================= -->
                <!-- Content -->
                <!-- ========================================= -->

                <div>

                    <!-- Badge -->
                    <div 
                        class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5 px-4 py-2"
                    >
                        <span
                            class="h-1.5 w-1.5 rounded-full bg-[#C9A227] shadow-[0_0_10px_#C9A227]"
                        ></span>

                        <span
                            class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]"
                        >
                            Powerful video player
                        </span>
                    </div>

                    <!-- Heading -->
                    <h1
                     data-aos="fade-up"
                        class="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
                    >
                        One player.

                        <span class="text-[#C9A227]">
                            Every video.
                        </span>
                    </h1>

                    <!-- Description -->
                    <p
                        class="mt-7 max-w-xl text-base leading-8 text-white/50 sm:text-lg"
                    >
                        Embed beautiful, responsive video players anywhere.
                        Stream local files, HLS, DASH, YouTube, Vimeo and even
                        immersive 360° VR — all from one player.
                    </p>

                    <!-- CTA -->
                    <div class="mt-9 flex flex-col gap-3 sm:flex-row">

                        <Link
                         data-aos="fade-left" 
                            :href="route('embed')"
                            class="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#E5C766]"
                        >
                            Create Your Player

                            <span class="ml-2 text-lg">
                                →
                            </span>
                        </Link>

                        <Link
                         data-aos="fade-left" data-aos-delay="500"
                            :href="route('pricing')"
                            class="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-[#C9A227]/40 hover:text-[#C9A227]"
                        >
                            View Pricing
                        </Link>

                    </div>

                    <!-- ========================================= -->
                    <!-- Supported Formats -->
                    <!-- ========================================= -->

                    <div class="mt-10">

                        <p
                            class="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25"
                        >
                            Supports
                        </p>

                        <div class="flex flex-wrap gap-2">

                            <span
                                data-aos="fade-up"
                                v-for="(format, i) in formats"
                                :data-aos-delay="i*50"
                                :key="format.name"
                                class="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-white/50 transition hover:border-[#C9A227]/30 hover:bg-[#C9A227]/5 hover:text-[#C9A227]"
                            >
                                <component
                                    :is="format.icon"
                                    class="h-3.5 w-3.5"
                                    :stroke-width="1.7"
                                />

                                {{ format.name }}
                            </span>

                        </div>

                    </div>

                    <!-- Small feature line -->
                    <div
                        class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/30"
                    >
                        <span class="flex items-center gap-2">
                            <CheckCircle
                                class="h-3.5 w-3.5 text-[#C9A227]"
                            />
                            Responsive
                        </span>

                        <span class="flex items-center gap-2">
                            <CheckCircle
                                class="h-3.5 w-3.5 text-[#C9A227]"
                            />
                            Customizable
                        </span>

                        <span class="flex items-center gap-2">
                            <CheckCircle
                                class="h-3.5 w-3.5 text-[#C9A227]"
                            />
                            Embed anywhere
                        </span>
                    </div>

                </div>

                <!-- ========================================= -->
                <!-- Player -->
                <!-- ========================================= -->

                <div class="relative">

                    <!-- Outer glow -->
                    <div
                        class="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[#C9A227]/5 blur-3xl"
                    ></div>

                    <!-- Border -->
                    <div
                        class="pointer-events-none absolute -inset-5 rounded-[2rem] border border-[#C9A227]/10"
                    ></div>

                    <!-- Player -->
                    <div
                        class="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0B0B] shadow-2xl shadow-black"
                    >
                        <VideoPlayer
                            poster="/images/demo-poster.jpg"
                        />
                    </div>

                    <!-- ========================================= -->
                    <!-- Player capability card -->
                    <!-- ========================================= -->

                    <div
                        class="absolute -bottom-6 -left-5 hidden rounded-xl border border-white/[0.08] bg-[#111111]/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
                    >

                        <div class="flex items-center gap-3">

                            <div
                                class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C9A227]/10"
                            >
                                <Play
                                    class="h-4 w-4 fill-[#C9A227] text-[#C9A227]"
                                />
                            </div>

                            <div>
                                <p
                                    class="text-[11px] font-semibold text-white/80"
                                >
                                    Ready to stream
                                </p>

                                <p
                                    class="mt-0.5 text-[9px] text-white/30"
                                >
                                    Fast · Responsive · Everywhere
                                </p>
                            </div>

                        </div>

                    </div>

                    <!-- ========================================= -->
                    <!-- Format card -->
                    <!-- ========================================= -->

                    <div
                        class="absolute -right-4 -top-5 hidden rounded-xl border border-white/[0.08] bg-[#111111]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
                    >

                        <div class="flex items-center gap-2">

                            <span
                                class="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
                            ></span>

                            <span
                                class="text-[10px] font-medium text-white/60"
                            >
                                360° VR supported
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </div>

        <div
            data-aos="fade-up" data-aos-delay="500"
            class="relative mx-auto flex max-w-7xl items-center px-5 pb-10 pt-12 lg:px-8"
        >
        <img src="/images/dashboard.png" alt="Esy Player Dashboard">
        </div>

        <!-- Bottom fade -->
        <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent"
        ></div>

    </section>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

import VideoPlayer from '@/components/player/VideoPlayer.vue';

import {
    CheckCircle,
    Play,
    FileVideo,
    Radio,
    Youtube,
    Box,
    Globe,
    Rotate3D,
} from 'lucide-vue-next';


const formats = [
    {
        name: 'MP4',
        icon: FileVideo,
    },
    {
        name: 'WebM',
        icon: FileVideo,
    },
    {
        name: 'OGG',
        icon: FileVideo,
    },
    {
        name: 'HLS / M3U8',
        icon: Radio,
    },
    {
        name: 'DASH / MPD',
        icon: Box,
    },
    {
        name: 'YouTube',
        icon: Youtube,
    },
    {
        name: 'Vimeo',
        icon: Globe,
    },
    {
        name: '360° VR',
        icon: Rotate3D,
    },
];
</script>
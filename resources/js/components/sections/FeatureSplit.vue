<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <section class="overflow-hidden bg-[#0D0D0D] px-5 py-24 lg:px-8 lg:py-32">

        <div class="mx-auto grid max-w-7xl items-center gap-16
                   lg:grid-cols-2 lg:gap-24">

            <!-- Image -->
            <div class="relative">

                <div class="absolute -inset-6 rounded-[2rem]
                           bg-[#C9A227]/5 blur-3xl" />

                <div class="relative aspect-[4/3] overflow-hidden
                           rounded-3xl border border-white/10
                           bg-[#050505]">

                    <!-- Replace this with your actual image -->
                    <img src="/images/player-dashboard.jpg" alt="ESY Player"
                        class="h-full w-full object-cover opacity-90" />

                    <div class="absolute inset-0 bg-gradient-to-tr
                               from-black/60 via-transparent to-[#C9A227]/10" />

                </div>

            </div>


            <!-- Content -->
            <div>

                <span class="text-[10px] font-semibold uppercase
                           tracking-[0.3em] text-[#C9A227]">
                    Built for simplicity
                </span>


                <h2 class="mt-5 text-3xl font-semibold leading-tight
                           tracking-tight text-white sm:text-4xl">
                    Video embedding,
                    <span class="text-white/40">
                        simplified.
                    </span>
                </h2>


                <p class="mt-6 text-sm leading-8 text-white/45 sm:text-base">
                    No complicated integrations. No unnecessary setup.
                    Just provide your video URL, generate your player,
                    and embed it wherever you need.
                </p>


                <!-- Points -->
                <div class="mt-9 space-y-5">

                    <div class="flex gap-4">

                        <div class="mt-1 flex h-6 w-6 shrink-0
                                   items-center justify-center rounded-full
                                   bg-[#C9A227]/10">
                            <span class="text-xs text-[#C9A227]">
                                ✓
                            </span>
                        </div>

                        <div>
                            <h3 class="text-sm font-medium text-white">
                                One simple embed
                            </h3>

                            <p class="mt-1 text-sm leading-6 text-white/35">
                                Copy one iframe and place it anywhere.
                            </p>
                        </div>

                    </div>


                    <div class="flex gap-4">

                        <div class="mt-1 flex h-6 w-6 shrink-0
                                   items-center justify-center rounded-full
                                   bg-[#C9A227]/10">
                            <span class="text-xs text-[#C9A227]">
                                ✓
                            </span>
                        </div>

                        <div>
                            <h3 class="text-sm font-medium text-white">
                                Responsive by default
                            </h3>

                            <p class="mt-1 text-sm leading-6 text-white/35">
                                Your player looks great on every screen.
                            </p>
                        </div>

                    </div>


                    <div class="flex gap-4">

                        <div class="mt-1 flex h-6 w-6 shrink-0
                                   items-center justify-center rounded-full
                                   bg-[#C9A227]/10">
                            <span class="text-xs text-[#C9A227]">
                                ✓
                            </span>
                        </div>

                        <div>
                            <h3 class="text-sm font-medium text-white">
                                Ready when you are
                            </h3>

                            <p class="mt-1 text-sm leading-6 text-white/35">
                                Generate a player in just a few seconds.
                            </p>
                        </div>

                    </div>

                </div>


                <Link :href="route('embed')" class="mt-10 inline-flex items-center
                           text-sm font-medium text-[#C9A227]
                           transition hover:text-[#E5C766]">
                    Create your player

                    <span class="ml-2 text-lg">
                        →
                    </span>
                </Link>

            </div>

        </div>

    </section>
</template>
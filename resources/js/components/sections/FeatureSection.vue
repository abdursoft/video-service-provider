<template>
    <section class="bg-[#050505] px-5 py-24 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-7xl">

            <!-- Heading -->
            <div class="mx-auto max-w-2xl text-center">

                <span
                    class="text-[10px] font-semibold uppercase
                           tracking-[0.3em] text-[#C9A227]"
                >
                    Why ESY Player
                </span>

                <h2
                    class="mt-4 text-3xl font-semibold tracking-tight
                           text-white sm:text-4xl lg:text-5xl"
                >
                    Everything you need.
                    <span class="text-white/40">
                        Nothing you don't.
                    </span>
                </h2>

                <p class="mt-5 text-sm leading-7 text-white/45 sm:text-base">
                    A simple way to create, customize and embed
                    beautiful video players anywhere on the web.
                </p>

            </div>


            <!-- Features -->
            <div
                class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >

                <FeatureCard
                    number="01"
                    title="Simple"
                    description="Paste your video URL and create an embeddable player in seconds."
                />

                <FeatureCard
                    number="02"
                    title="Beautiful"
                    description="Give your videos a premium viewing experience with a modern player."
                />

                <FeatureCard
                    number="03"
                    title="Powerful"
                    description="Customize your player, branding, thumbnail, controls and more."
                />

                <FeatureCard
                    number="04"
                    title="Anywhere"
                    description="Embed your player on websites, blogs, platforms and applications."
                />

            </div>

        </div>
    </section>
</template>

<script setup>
import FeatureCard from '@/components/cards/FeatureCard.vue'
</script>
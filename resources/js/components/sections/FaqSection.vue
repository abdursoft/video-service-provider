<template>
    <section class="bg-[#0D0D0D] px-5 py-24 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-3xl">

            <!-- Heading -->
            <div class="text-center">
                <span
                    class="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A227]"
                >
                    FAQ
                </span>

                <h2
                    class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                    Frequently asked questions
                </h2>
            </div>

            <!-- Questions -->
            <div class="mt-14 divide-y divide-white/[0.08]">

                <div
                    v-for="(faq, index) in faqs"
                    :key="faq.question"
                >
                    <!-- Question -->
                    <button
                        type="button"
                        @click="toggle(index)"
                        class="group flex w-full items-center justify-between py-6 text-left cursor-pointer transition-colors duration-300 hover:text-[#C9A227]"
                    >
                        <span
                            class="pr-6 text-sm font-medium text-white transition-colors duration-300"
                            :class="{
                                'text-[#C9A227]': active === index,
                                'group-hover:text-[#C9A227]': active !== index
                            }"
                        >
                            {{ faq.question }}
                        </span>

                        <!-- Icon -->
                        <span
                            class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 ease-out"
                            :class="{
                                'rotate-45 border-[#C9A227]/30 text-[#C9A227]':
                                    active === index
                            }"
                        >
                            +
                        </span>
                    </button>

                    <!-- Answer -->
                    <div
                        class="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                        :class="
                            active === index
                                ? 'grid-rows-[1fr] opacity-100'
                                : 'grid-rows-[0fr] opacity-0'
                        "
                    >
                        <div class="min-h-0 overflow-hidden">
                            <p
                                class="max-w-2xl pb-6 text-sm leading-7 text-white/40"
                            >
                                {{ faq.answer }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(null)

const toggle = (index) => {
    active.value = active.value === index ? null : index
}

const faqs = [
    {
        question: 'What is ESY Player?',
        answer: 'ESY Player allows you to turn a video URL into a responsive embeddable video player that can be placed on your website.'
    },
    {
        question: 'How does the embed player work?',
        answer: 'Create a player, provide your video URL and copy the generated iframe code into your website.'
    },
    {
        question: 'Can I customize my player?',
        answer: 'Premium users can customize colors, controls, branding, watermarks, thumbnails and other player settings.'
    },
    {
        question: 'Can I create playlists?',
        answer: 'Yes. Premium users can create playlists and organize multiple videos into a single player experience.'
    },
    {
        question: 'Do you support VAST advertising?',
        answer: 'Premium plans can connect a VAST advertising URL to the player for supported advertising configurations.'
    },
    {
        question: 'Can I use my player on multiple websites?',
        answer: 'Your plan determines the available usage and domain configuration options.'
    }
]
</script>
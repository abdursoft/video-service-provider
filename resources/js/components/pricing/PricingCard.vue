<template>
    <div class="relative flex h-full flex-col rounded-2xl border p-7
               transition duration-300" :class="[
                featured
                    ? 'border-[#C9A227]/40 bg-[#0d0c09] shadow-2xl shadow-[#C9A227]/[0.05]'
                    : 'border-white/[0.08] bg-[#090909] hover:border-white/[0.14]'
            ]">

        <!-- Popular badge -->

        <div v-if="featured" class="absolute right-6 top-6 rounded-full
                   bg-[#C9A227] px-3 py-1.5
                   text-[9px] font-bold uppercase
                   tracking-wider text-black">
            Most popular
        </div>


        <!-- Plan -->

        <div>

            <p class="text-xs font-semibold uppercase
                       tracking-[0.15em]" :class="featured
                            ? 'text-[#C9A227]'
                            : 'text-white/40'
                        ">
                {{ plan.name }}
            </p>


            <h3 class="mt-3 text-xl font-semibold
                       tracking-tight text-white">
                {{ plan.title }}
            </h3>


            <p class="mt-2 min-h-[48px] text-xs
                       leading-5 text-white/35">
                {{ plan.description }}
            </p>

        </div>


        <!-- Price -->

        <div class="mt-7">

            <div class="flex items-end gap-1">

                <span class="text-4xl font-semibold
                           tracking-tight text-white">
                    ${{ price }}
                </span>

                <span class="mb-1 text-xs text-white/25">
                    / month
                </span>

            </div>


            <p v-if="billing === 'yearly' && plan.yearly" class="mt-2 text-[11px] text-[#C9A227]">
                Billed yearly · Save 20%
            </p>

        </div>


        <!-- CTA -->

        <Link :href="plan.href || '/register'" class="mt-7 block w-full rounded-xl
                   py-3.5 text-center text-xs
                   font-semibold transition cursor-pointer" :class="featured
                        ? 'bg-[#C9A227] text-black hover:bg-[#d9b63b]'
                        : 'border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.07]'
                    ">
            {{ plan.button || 'Get started' }}
        </Link>


        <!-- Divider -->

        <div class="my-7 h-px bg-white/[0.06]" />


        <!-- Features -->

        <div>

            <p class="text-[11px] font-semibold
                       uppercase tracking-wider
                       text-white/35">
                {{ plan.featureTitle || 'Includes:' }}
            </p>


            <ul class="mt-5 space-y-3.5">

                <li v-for="(feature, index) in plan.features" :key="index" class="flex items-start gap-3">

                    <span class="mt-0.5 flex h-4 w-4 shrink-0
                               items-center justify-center
                               rounded-full" :class="featured
                                    ? 'bg-[#C9A227]/15 text-[#C9A227]'
                                    : 'bg-white/[0.06] text-white/40'
                                ">
                        <svg class="h-2.5 w-2.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m3 8 3 3 7-7" />
                        </svg>
                    </span>


                    <span class="text-xs leading-5 text-white/45">
                        {{ feature }}
                    </span>

                </li>

            </ul>

        </div>

    </div>
</template>


<script setup>

import { Link } from '@inertiajs/vue3'

defineProps({

    plan: {
        type: Object,
        required: true,
    },

    price: {
        type: [String, Number],
        required: true,
    },

    billing: {
        type: String,
        default: 'monthly',
    },

    featured: {
        type: Boolean,
        default: false,
    },

})

</script>
<template>

    <div class="bg-[#050505] text-white">

        <SeoHead title="Pricing — ESY Player"
            description="Explore ESY Player plans and pricing. Choose the right video player plan for your website, business, and online video experience."
            url="https://esyplayer.com/pricing" />
        <!-- =====================================================
             HERO
        ====================================================== -->

        <section class="relative overflow-hidden
                   px-6 pb-16 pt-20 lg:px-8
                   lg:pb-20 lg:pt-28">

            <div class="pointer-events-none absolute
                       left-1/2 top-0 h-[500px]
                       w-[700px] -translate-x-1/2
                       rounded-full bg-[#C9A227]/[0.035]
                       blur-[140px]" />


            <div class="relative mx-auto max-w-3xl
                       text-center pt-13 md:pt-2">

                <div class="mb-5 inline-flex items-center
                           gap-2 rounded-full border
                           border-[#C9A227]/20
                           bg-[#C9A227]/[0.05]
                           px-3 py-1.5">

                    <span class="h-1.5 w-1.5 rounded-full
                               bg-[#C9A227]" />

                    <span class="text-[10px] font-medium
                               uppercase tracking-[0.18em]
                               text-[#C9A227]">
                        Simple pricing
                    </span>

                </div>


                <h1 data-aos="fade-up" class="text-4xl font-semibold
                           tracking-tight sm:text-5xl">
                    Choose the plan that
                    <span class="text-[#C9A227]">
                        fits your workflow.
                    </span>
                </h1>


                <p class="mx-auto mt-5 max-w-xl
                           text-sm leading-7
                           text-white/35">
                    Start for free and upgrade when you
                    need more control, customization,
                    playlists, and monetization.
                </p>


                <!-- Billing switch -->

                <div class="mt-8 inline-flex rounded-xl
                           border border-white/10
                           bg-white/[0.03] p-1">

                    <button type="button" class="rounded-lg px-5 py-2.5
                               text-xs font-medium
                               transition" :class="billing === 'month'
                                ? 'bg-white/10 text-white'
                                : 'text-white/35'
                                " @click="billing = 'month'">
                        Monthly
                    </button>


                    <button type="button" class="flex items-center gap-2
                               rounded-lg px-5 py-2.5
                               text-xs font-medium
                               transition" :class="billing === 'year'
                                ? 'bg-white/10 text-white'
                                : 'text-white/35'
                                " @click="billing = 'year'">
                        Yearly

                        <span class="rounded-md
                                   bg-[#C9A227]/15
                                   px-1.5 py-0.5
                                   text-[9px] font-semibold
                                   text-[#C9A227]">
                            SAVE 20%
                        </span>

                    </button>

                </div>

            </div>

        </section>


        <!-- =====================================================
             PLANS
        ====================================================== -->

        <section class="px-6 pb-24 lg:px-8">

            <div class="mx-auto grid max-w-7xl
                       items-stretch gap-5
                       lg:grid-cols-3">
                <!-- 
                <PricingCard v-for="plan in plans" :key="plan.id" :plan="plan" :price="getPrice(plan)"
                    :billing="billing" :featured="plan.featured" /> -->

                <Price :packages="plans" />
            </div>


        </section>


        <!-- =====================================================
             FEATURE SUMMARY
        ====================================================== -->

        <section class="border-y border-white/[0.06]
                   bg-white/[0.015]
                   px-6 py-24 lg:px-8">

            <div class="mx-auto max-w-6xl">

                <div class="mx-auto max-w-2xl text-center">

                    <p class="text-[10px] font-semibold
                               uppercase tracking-[0.2em]
                               text-[#C9A227]">
                        Built for video
                    </p>

                    <h2 class="mt-3 text-3xl font-semibold
                               tracking-tight">
                        Everything you need to
                        <span class="text-white/30">
                            publish your player.
                        </span>
                    </h2>

                </div>


                <div class="mt-12 grid gap-4
                           sm:grid-cols-2 lg:grid-cols-4">

                    <SummaryCard title="Embed" description="Generate a ready-to-use iframe for any website."
                        icon="embed" data-aos="fade-up" data-aos-delay="100" />

                    <SummaryCard title="Customize" description="Control colors, controls, branding and behavior."
                        icon="customize" data-aos="fade-up" data-aos-delay="200" />

                    <SummaryCard title="Playlist" description="Put multiple videos into one seamless player."
                        icon="playlist" data-aos="fade-up" data-aos-delay="400" />

                    <SummaryCard title="Monetize" description="Add VAST advertising to your video experience."
                        icon="playlist" data-aos="fade-up" data-aos-delay="600" />

                </div>

            </div>

        </section>


        <!-- =====================================================
             FAQ
        ====================================================== -->

        <section class="px-6 py-24 lg:px-8">

            <div class="mx-auto max-w-3xl">

                <div class="mb-12 text-center">

                    <p class="text-[10px] font-semibold
                               uppercase tracking-[0.2em]
                               text-[#C9A227]">
                        FAQ
                    </p>

                    <h2 class="mt-3 text-3xl font-semibold
                               tracking-tight">
                        Frequently asked questions
                    </h2>

                    <p class="mx-auto mt-4 max-w-xl
                               text-sm leading-6
                               text-white/30">
                        Everything you need to know about
                        plans and premium features.
                    </p>

                </div>


                <div>

                    <PricingFaq v-for="faq in faqs" :key="faq.question" :question="faq.question" :answer="faq.answer" />

                </div>

            </div>

        </section>


        <!-- =====================================================
             CTA
        ====================================================== -->

        <section class="px-6 pb-24 lg:px-8">

            <div class="relative mx-auto max-w-5xl
                       overflow-hidden rounded-3xl
                       border border-[#C9A227]/20
                       bg-[#0a0a09] px-6 py-16
                       text-center">

                <div class="pointer-events-none absolute
                           left-1/2 top-1/2
                           h-[300px] w-[500px]
                           -translate-x-1/2
                           -translate-y-1/2
                           rounded-full
                           bg-[#C9A227]/[0.04]
                           blur-[100px]" />


                <div class="relative">

                    <h2 class="text-3xl font-semibold
                               tracking-tight">
                        Start building your player.
                    </h2>

                    <p class="mx-auto mt-4 max-w-lg
                               text-sm leading-6
                               text-white/30">
                        Create your account and turn your
                        video URL into a professional
                        embeddable player.
                    </p>


                    <Link href="/register" class="mt-8 inline-flex
                               rounded-xl bg-[#C9A227]
                               px-7 py-3.5 text-xs
                               font-semibold text-black
                               transition hover:bg-[#d9b63b]">
                        Get started for free
                    </Link>

                </div>

            </div>

        </section>

    </div>
</template>


<script setup>

import { Head, Link, usePage } from '@inertiajs/vue3'
import { computed, onMounted, ref } from 'vue'

import Price from '@/components/partials/Price.vue'
import PricingCard from '@/components/pricing/PricingCard.vue'
import PricingFaq from '@/components/pricing/PricingFaq.vue'
import SummaryCard from '@/components/pricing/SummaryCard.vue'
import Home from '@/layouts/Home.vue'
import SeoHead from '@/components/partials/SeoHead.vue'


defineOptions({
    layout: Home
});

const page = usePage();

const billing = ref('month')

const plans = computed(() => {
    return page.props?.packages?.filter(
        item => item?.interval === billing.value
    ) ?? [];
});
console.log(plans.value)
onMounted(() => {
    console.log(plans.value)
});

const faqs = [
    {
        question: 'Can I start for free?',

        answer:
            'Yes. The Free plan lets you create and test your first video players without a paid subscription.',
    },

    {
        question: 'Can I upgrade later?',

        answer:
            'Yes. You can start with the Free plan and upgrade whenever you need premium features.',
    },

    {
        question: 'Can Pro users create playlists?',

        answer:
            'Yes. Pro includes playlist creation, allowing you to combine multiple video sources into a single player.',
    },

    {
        question: 'Can I add my own watermark?',

        answer:
            'Yes. Pro users can add custom branding and a logo or watermark to their players.',
    },

    {
        question: 'Does esyPlayer support VAST advertising?',

        answer:
            'Yes. VAST advertising is available on the Business plan for publishers who want to monetize their video content.',
    },

    {
        question: 'Can I cancel my subscription?',

        answer:
            'Yes. You can cancel your subscription according to the billing terms of your selected plan.',
    },
]


const getPrice = (plan) => {

    return billing.value === 'yearly'
        ? plan.yearly
        : plan.monthly

}


const year = new Date().getFullYear()

</script>
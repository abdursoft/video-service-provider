<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import {
    ArrowRight,
    Check,
    Sparkles,
    Zap,
} from 'lucide-vue-next'

interface Package {
    id: number
    name: string
    slug: string
    description: string | null
    amount: number
    formatted_amount: string
    currency: string
    interval: string
    features: string[]
    limits: Record<string, any>
    is_active: boolean
    sort_order: number
    is_popular: boolean
}

interface CurrentSubscription {
    subscription_package_id: number
}

const props = defineProps<{
    packages: Package[]
    currentSubscription?: CurrentSubscription | null
}>()

const subscribe = (packageId: number) => {
    router.post(route('subscription.subscribe', [packageId]))
}

const isCurrentPlan = (packageId: number) => {
    return props.currentSubscription?.subscription_package_id === packageId
}

/*
|--------------------------------------------------------------------------
| Plan Theme
|--------------------------------------------------------------------------
|
| Each plan gets its own subtle color identity.
| Popular plans always use the ESY gold theme.
|
*/

const getTheme = (plan: Package, index: number) => {
    if (plan.is_popular) {
        return {
            card:
                'border-[#C9A227]/40 bg-gradient-to-b from-[#1A1609] via-[#0E0E0D] to-[#080808] shadow-[0_25px_100px_rgba(201,162,39,0.12)] lg:-translate-y-4',

            priceBox:
                'border-[#C9A227]/30 bg-gradient-to-br from-[#C9A227]/[0.12] via-[#17130A] to-[#090909]',

            glow:
                'bg-[#C9A227]/25',

            glowBottom:
                'bg-yellow-500/10',

            label:
                'text-[#C9A227]',

            price:
                'from-[#FFF3B0] via-[#E5C75A] to-[#A77D0C]',

            dot:
                'bg-[#C9A227] shadow-[0_0_12px_#C9A227]',

            badge:
                'border-[#C9A227]/20 bg-[#C9A227]/10 text-[#C9A227]',

            icon:
                'border-[#C9A227]/25 bg-[#C9A227]/10 text-[#C9A227]',

            check:
                'bg-[#C9A227]/10 text-[#C9A227]',

            button:
                'bg-[#C9A227] text-black shadow-[0_8px_30px_rgba(201,162,39,0.14)] hover:bg-[#D8B43A] hover:shadow-[0_10px_40px_rgba(201,162,39,0.25)]',

            accent:
                'via-[#C9A227]',
        }
    }

    if (index === 0) {
        return {
            card:
                'border-cyan-400/10 bg-gradient-to-b from-cyan-400/[0.045] via-[#0A0D0E] to-[#080808] hover:border-cyan-400/20 hover:shadow-[0_20px_80px_rgba(34,211,238,0.06)]',

            priceBox:
                'border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] via-[#0D1112] to-[#090909]',

            glow:
                'bg-cyan-400/20',

            glowBottom:
                'bg-blue-500/10',

            label:
                'text-cyan-300',

            price:
                'from-white via-cyan-100 to-cyan-400',

            dot:
                'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)]',

            badge:
                'border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300',

            icon:
                'border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300',

            check:
                'bg-cyan-400/[0.08] text-cyan-300',

            button:
                'border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-200 hover:border-cyan-400/30 hover:bg-cyan-400/[0.10]',

            accent:
                'via-cyan-400',
        }
    }

    if (index === 1) {
        return {
            card:
                'border-violet-400/10 bg-gradient-to-b from-violet-400/[0.045] via-[#0D0B10] to-[#080808] hover:border-violet-400/20 hover:shadow-[0_20px_80px_rgba(167,139,250,0.06)]',

            priceBox:
                'border-violet-400/10 bg-gradient-to-br from-violet-400/[0.08] via-[#100D14] to-[#090909]',

            glow:
                'bg-violet-400/20',

            glowBottom:
                'bg-purple-500/10',

            label:
                'text-violet-300',

            price:
                'from-white via-violet-100 to-violet-400',

            dot:
                'bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,.8)]',

            badge:
                'border-violet-400/10 bg-violet-400/[0.06] text-violet-300',

            icon:
                'border-violet-400/10 bg-violet-400/[0.06] text-violet-300',

            check:
                'bg-violet-400/[0.08] text-violet-300',

            button:
                'border border-violet-400/15 bg-violet-400/[0.06] text-violet-200 hover:border-violet-400/30 hover:bg-violet-400/[0.10]',

            accent:
                'via-violet-400',
        }
    }

    return {
        card:
            'border-emerald-400/10 bg-gradient-to-b from-emerald-400/[0.045] via-[#0A0E0C] to-[#080808] hover:border-emerald-400/20 hover:shadow-[0_20px_80px_rgba(52,211,153,0.06)]',

        priceBox:
            'border-emerald-400/10 bg-gradient-to-br from-emerald-400/[0.08] via-[#0C120F] to-[#090909]',

        glow:
            'bg-emerald-400/20',

        glowBottom:
            'bg-green-500/10',

        label:
            'text-emerald-300',

        price:
            'from-white via-emerald-100 to-emerald-400',

        dot:
            'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]',

        badge:
            'border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-300',

        icon:
            'border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-300',

        check:
            'bg-emerald-400/[0.08] text-emerald-300',

        button:
            'border border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-200 hover:border-emerald-400/30 hover:bg-emerald-400/[0.10]',

        accent:
            'via-emerald-400',
    }
}
</script>

<template>
    <div
        v-for="(plan, index) in packages"
        :key="plan.id"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        class="group relative flex flex-col overflow-hidden rounded-[30px] border transition-all duration-500"
        :class="getTheme(plan, index).card"
    >
        <!-- ========================================================= -->
        <!-- Ambient glow -->
        <!-- ========================================================= -->

        <div
            class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px]"
            :class="getTheme(plan, index).glow"
        ></div>

        <div
            class="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-[70px]"
            :class="getTheme(plan, index).glowBottom"
        ></div>

        <!-- Top shine -->
        <div
            class="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        ></div>

        <!-- Popular badge -->
        <div
            v-if="plan.is_popular"
            class="absolute right-6 top-6 z-10"
        >
            <div
                class="flex items-center gap-1.5 rounded-full border px-3 py-1.5 backdrop-blur-md"
                :class="getTheme(plan, index).badge"
            >
                <Sparkles :size="11" />

                <span
                    class="text-[9px] font-bold uppercase tracking-[0.18em]"
                >
                    Most Popular
                </span>
            </div>
        </div>

        <!-- Card -->
        <div class="relative flex flex-1 flex-col p-7 sm:p-8">

            <!-- ===================================================== -->
            <!-- Plan Header -->
            <!-- ===================================================== -->

            <div class="pr-28">
                <div class="mb-6 flex items-center gap-3">
                    <div
                        class="flex h-11 w-11 items-center justify-center rounded-2xl border"
                        :class="getTheme(plan, index).icon"
                    >
                        <Sparkles
                            :size="19"
                            :stroke-width="1.7"
                        />
                    </div>

                    <div>
                        <h2
                            class="text-[18px] font-semibold tracking-tight text-white"
                        >
                            {{ plan.name }}
                        </h2>

                        <p
                            class="mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-white/25"
                        >
                            {{ plan.interval }} billing
                        </p>
                    </div>
                </div>

                <p
                    class="min-h-[48px] text-[13px] leading-6 text-white/40"
                >
                    {{ plan.description }}
                </p>
            </div>

            <!-- ===================================================== -->
            <!-- Price -->
            <!-- ===================================================== -->

            <div
                class="relative mt-8 overflow-hidden rounded-[24px] border p-6"
                :class="getTheme(plan, index).priceBox"
            >
                <!-- Price glow -->
                <div
                    class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[75px]"
                    :class="getTheme(plan, index).glow"
                ></div>

                <!-- Inner shine -->
                <div
                    class="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                ></div>

                <div class="relative">

                    <!-- Label -->
                    <div class="flex items-center justify-between">
                        <span
                            class="text-[9px] font-bold uppercase tracking-[0.25em]"
                            :class="getTheme(plan, index).label"
                        >
                            {{ plan.name }} plan
                        </span>

                        <span
                            class="rounded-full border px-2.5 py-1 text-[9px] font-medium"
                            :class="getTheme(plan, index).badge"
                        >
                            {{ plan.interval }}
                        </span>
                    </div>

                    <!-- Big price -->
                    <div class="mt-6 flex items-end">
                        <span
                            class="mb-2 mr-1 text-sm font-medium text-white/30"
                        >
                            {{ plan.currency === 'USD' ? '$' : plan.currency }}
                        </span>

                        <span
                            class="bg-gradient-to-br bg-clip-text text-[58px] font-black leading-[0.9] tracking-[-0.065em] text-transparent"
                            :class="getTheme(plan, index).price"
                        >
                            {{ plan.formatted_amount }}
                        </span>

                        <span class="mb-1.5 ml-2 text-xs text-white/30">
                            / {{ plan.interval }}
                        </span>
                    </div>

                    <!-- Price footer -->
                    <div class="mt-5 flex items-center gap-2">
                        <span
                            class="h-1.5 w-1.5 rounded-full"
                            :class="getTheme(plan, index).dot"
                        ></span>

                        <span class="text-[11px] text-white/35">
                            Cancel anytime · No hidden fees
                        </span>
                    </div>
                </div>
            </div>

            <!-- ===================================================== -->
            <!-- CTA -->
            <!-- ===================================================== -->

            <button
                type="button"
                :disabled="isCurrentPlan(plan.id)"
                @click="subscribe(plan.id)"
                class="group/button mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[13px] font-semibold transition-all duration-300"
                :class="
                    isCurrentPlan(plan.id)
                        ? 'cursor-default border border-white/[0.08] bg-white/[0.04] text-white/30'
                        : getTheme(plan, index).button
                "
            >
                <template v-if="isCurrentPlan(plan.id)">
                    Current Plan
                </template>

                <template v-else>
                    <span>
                        {{
                            plan.is_popular
                                ? 'Start with ' + plan.name
                                : 'Choose ' + plan.name
                        }}
                    </span>

                    <ArrowRight
                        :size="15"
                        class="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                </template>
            </button>

            <!-- ===================================================== -->
            <!-- Divider -->
            <!-- ===================================================== -->

            <div class="my-8 h-px bg-white/[0.06]"></div>

            <!-- ===================================================== -->
            <!-- Features -->
            <!-- ===================================================== -->

            <div>
                <div class="mb-5 flex items-center gap-2">
                    <Zap
                        :size="12"
                        :class="getTheme(plan, index).label"
                    />

                    <p
                        class="text-[9px] font-bold uppercase tracking-[0.24em] text-white/25"
                    >
                        Included with this plan
                    </p>
                </div>

                <ul class="space-y-4">
                    <li
                        v-for="feature in plan.features"
                        :key="feature"
                        class="flex items-start gap-3"
                    >
                        <span
                            class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            :class="getTheme(plan, index).check"
                        >
                            <Check
                                :size="11"
                                :stroke-width="2.5"
                            />
                        </span>

                        <span
                            class="text-[13px] leading-5 text-white/55"
                        >
                            {{ feature }}
                        </span>
                    </li>
                </ul>
            </div>

            <!-- ===================================================== -->
            <!-- Limits -->
            <!-- ===================================================== -->

            <div
                v-if="Object.keys(plan.limits || {}).length"
                class="hidden mt-8 rounded-2xl border border-white/[0.05] bg-black/20 p-4"
            >
                <p
                    class="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25"
                >
                    Plan limits
                </p>

                <div class="space-y-3">
                    <div
                        v-for="(value, key) in plan.limits"
                        :key="key"
                        class="flex items-center justify-between"
                    >
                        <span
                            class="text-[11px] capitalize text-white/30"
                        >
                            {{ String(key).replaceAll('_', ' ') }}
                        </span>

                        <span
                            class="text-[11px] font-semibold"
                            :class="
                                value === true || value === 'Unlimited'
                                    ? getTheme(plan, index).label
                                    : 'text-white/60'
                            "
                        >
                            {{ value === true ? 'Unlimited' : value }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ========================================================= -->
        <!-- Bottom accent -->
        <!-- ========================================================= -->

        <div
            class="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent"
            :class="getTheme(plan, index).accent"
        ></div>
    </div>
</template>
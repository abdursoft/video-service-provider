<script setup lang="ts">
import { router } from '@inertiajs/vue3'

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
    sort_order: number,
    is_popular: boolean
}

const props = defineProps<{
    packages: Package[]
}>()


const subscribe = (packageId: number) => {
    router.post(
        route('subscription.subscribe', [packageId])
    )
}

const isCurrentPlan = (packageId: number) => {
    return props.currentSubscription?.subscription_package_id === packageId
}
</script>

<template>
    <div
    v-for="(plan, index) in packages"
    :key="plan.id"
    class="group relative flex flex-col overflow-hidden rounded-[28px] border p-7 transition-all duration-500"
    :class="
        plan.is_popular
            ? 'border-[#C9A227]/50 bg-gradient-to-b from-[#C9A227]/[0.10] via-[#15130D] to-[#0D0D0D] shadow-[0_0_60px_rgba(201,162,39,0.08)] lg:-translate-y-4'
            : 'border-white/[0.08] bg-white/[0.025] hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]'
    "
>
    <!-- Subtle glow -->
    <div
        v-if="plan.is_popular"
        class="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C9A227]/10 blur-3xl"
    ></div>

    <!-- Top shine -->
    <div
        class="pointer-events-none absolute inset-x-0 top-0 h-px"
        :class="
            plan.is_popular
                ? 'bg-gradient-to-r from-transparent via-[#C9A227]/70 to-transparent'
                : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
        "
    ></div>

    <!-- Popular Badge -->
    <div
        v-if="plan.is_popular"
        class="absolute right-6 top-6"
    >
        <span
            class="inline-flex items-center gap-1.5 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#C9A227]"
        >
            <span class="h-1.5 w-1.5 rounded-full bg-[#C9A227]"></span>
            Most Popular
        </span>
    </div>

    <!-- Plan Header -->
    <div class="relative">

        <div class="mb-5 flex items-center gap-3">
            <div
                class="flex h-10 w-10 items-center justify-center rounded-xl border"
                :class="
                    plan.is_popular
                        ? 'border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227]'
                        : 'border-white/10 bg-white/[0.04] text-white/50'
                "
            >
                <svg
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3l2.5 5.5L20 10l-4 4 1 5.5-5-2.5-5 2.5L8 14l-4-4 5.5-1.5L12 3z"
                    />
                </svg>
            </div>

            <div>
                <h2 class="text-lg font-semibold tracking-tight text-white">
                    {{ plan.name }}
                </h2>

                <p class="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    {{ plan.interval }} plan
                </p>
            </div>
        </div>

        <p class="min-h-[48px] max-w-sm text-sm leading-6 text-white/45">
            {{ plan.description }}
        </p>
    </div>

    <!-- Price -->
    <div class="relative mt-8">
        <div class="flex items-end">
            <span
                class="text-sm font-medium text-white/40"
            >
                {{ plan.currency === 'USD' ? '$' : plan.currency }}
            </span>

            <span
                class="ml-1 text-5xl font-bold tracking-[-0.04em]"
                :class="
                    plan.is_popular
                        ? 'text-[#E5C45A]'
                        : 'text-white'
                "
            >
                {{ plan.formatted_amount }}
            </span>

            <span class="mb-1.5 ml-2 text-xs text-white/35">
                / {{ plan.interval }}
            </span>
        </div>

        <p class="mt-2 text-[11px] text-white/30">
            Cancel anytime · No hidden fees
        </p>
    </div>

    <!-- CTA -->
    <button
        type="button"
        @click="subscribe(plan.id)"
        class="relative mt-7 cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300"
        :class="
            plan.is_popular
                ? 'bg-[#C9A227] text-black shadow-lg shadow-[#C9A227]/10 hover:bg-[#D8B43A] hover:shadow-[#C9A227]/20'
                : 'border border-white/10 bg-white/[0.05] text-white hover:border-white/20 hover:bg-white/[0.09]'
        "
    >
        {{ plan.is_popular ? 'Start with ' + plan.name : 'Choose ' + plan.name }}

        <svg
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m-6-6l6 6-6 6"
            />
        </svg>
    </button>

    <!-- Divider -->
    <div class="my-7 h-px bg-white/[0.07]"></div>

    <!-- Features -->
    <div class="flex-1">

        <p
            class="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35"
        >
            Everything included
        </p>

        <ul class="space-y-4">
            <li
                v-for="feature in plan.features"
                :key="feature"
                class="group/feature flex items-start gap-3"
            >
                <span
                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/[0.07] text-[#C9A227] transition group-hover/feature:border-[#C9A227]/40 group-hover/feature:bg-[#C9A227]/10"
                >
                    <svg
                        class="h-2.5 w-2.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12l4 4L19 6"
                        />
                    </svg>
                </span>

                <span class="text-sm leading-5 text-white/65">
                    {{ feature }}
                </span>
            </li>
        </ul>
    </div>

    <!-- Limits -->
    <div
        v-if="Object.keys(plan.limits || {}).length"
        class="mt-8 hidden rounded-2xl border border-white/[0.06] bg-black/20 p-4"
    >
        <p
            class="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30"
        >
            Plan limits
        </p>

        <div class="space-y-3">
            <div
                v-for="(value, key) in plan.limits"
                :key="key"
                class="flex items-center justify-between"
            >
                <span class="text-xs capitalize text-white/40">
                    {{ String(key).replaceAll('_', ' ') }}
                </span>

                <span
                    class="text-xs font-semibold"
                    :class="
                        value === true || value === 'Unlimited'
                            ? 'text-[#C9A227]'
                            : 'text-white/70'
                    "
                >
                    {{ value === true ? 'Unlimited' : value }}
                </span>
            </div>
        </div>
    </div>

    <!-- Bottom accent -->
    <div
        v-if="plan.is_popular"
        class="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent"
    ></div>
</div>
</template>
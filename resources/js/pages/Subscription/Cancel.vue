<script setup>
import { Link } from '@inertiajs/vue3'
import { X, ArrowLeft, ShieldAlert } from 'lucide-vue-next'
</script>

<template>
    <div
        class="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center px-6"
    >
        <!-- Ambient background -->
        <div class="pointer-events-none absolute inset-0">
            <div
                class="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A227]/5 blur-[140px]"
            ></div>

            <div
                class="absolute inset-0 opacity-[0.035]"
                style="
                    background-image:
                        linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px);
                    background-size: 50px 50px;
                "
            ></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 w-full max-w-lg">
            <div
                class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10"
            >
                <!-- Top accent -->
                <div
                    class="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent"
                ></div>

                <!-- Cancel icon -->
                <div class="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
                    <div
                        class="absolute inset-0 rounded-full bg-[#C9A227]/10 blur-xl"
                    ></div>

                    <div
                        class="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/5"
                    >
                        <div
                            class="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70"
                        >
                            <X :size="28" :stroke-width="2.5" />
                        </div>
                    </div>
                </div>

                <!-- Badge -->
                <div
                    class="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/50"
                >
                    <ShieldAlert :size="13" />
                    CHECKOUT CANCELLED
                </div>

                <!-- Heading -->
                <h1
                    class="text-3xl font-bold tracking-tight sm:text-4xl"
                >
                    Payment Cancelled
                </h1>

                <p
                    class="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/50 sm:text-base"
                >
                    Your payment was cancelled and no charge was made.
                    You can return to your dashboard and choose a plan whenever you're ready.
                </p>

                <!-- Status -->
                <div
                    class="mt-8 flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-left"
                >
                    <div>
                        <p class="text-xs uppercase tracking-wider text-white/35">
                            Payment Status
                        </p>

                        <p class="mt-1 text-sm font-medium text-white/80">
                            Checkout cancelled
                        </p>
                    </div>

                    <div
                        class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/40"
                    >
                        No charge
                    </div>
                </div>

                <!-- CTA -->
                <Link
                    :href="route('auth.dashboard')"
                    class="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 px-6 py-3.5 font-semibold text-[#C9A227] transition-all duration-300 hover:border-[#C9A227]/50 hover:bg-[#C9A227]/15 hover:shadow-lg hover:shadow-[#C9A227]/10"
                >
                    <ArrowLeft
                        :size="18"
                        class="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    Return to Dashboard
                </Link>

                <p class="mt-5 text-xs text-white/30">
                    No subscription changes were made to your account.
                </p>
            </div>

            <!-- Brand -->
            <div class="mt-6 text-center">
                <span class="text-sm font-semibold tracking-[0.25em] text-white/20">
                    ESY PLAYER
                </span>
            </div>
        </div>
    </div>
</template>
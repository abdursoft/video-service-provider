<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue';

defineOptions({
    layout: AdminLayout,
});

const form = useForm({
    name: '',
    description: '',
    amount: '',
    currency: 'USD',
    interval: 'month',

    features: [''],

    limits: {
        playlists: '',
        storage: '',
        devices: '',
    },

    is_active: true,
    sort_order: 0,
});

const addFeature = () => {
    form.features.push('');
};

const removeFeature = (index) => {
    if (form.features.length === 1) {
        return;
    }

    form.features.splice(index, 1);
};

const submit = () => {
    form.features = form.features.filter((feature) => feature.trim() !== '');

    form.post(route('admin.subscription-packages.store'), {
        preserveScroll: true,
    });
};
</script>

<template>
    <div class="mx-auto max-w-4xl">
        <!-- Header -->
        <div class="mb-7">
            <Link
                :href="route('admin.subscription-packages.index')"
                class="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold tracking-wider text-white/30 uppercase hover:text-[#C9A227]"
            >
                ← Back to Packages
            </Link>

            <p
                class="mb-2 text-[10px] font-bold tracking-[0.3em] text-[#C9A227] uppercase"
            >
                Stripe Billing
            </p>

            <h1 class="text-2xl font-bold sm:text-3xl">
                Create Subscription Package
            </h1>

            <p class="mt-2 text-sm text-white/35">
                Create a package and its recurring Stripe price.
            </p>
        </div>

        <form class="space-y-6" @submit.prevent="submit">
            <!-- Package -->
            <div class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">
                <div class="border-b border-white/[0.07] px-5 py-4">
                    <h2 class="text-sm font-semibold">Package Information</h2>
                </div>

                <div class="grid gap-5 p-5 md:grid-cols-2">
                    <!-- Name -->
                    <div>
                        <label class="mb-2 block text-xs text-white/60">
                            Package Name
                        </label>

                        <input
                            v-model="form.name"
                            type="text"
                            placeholder="Premium"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm outline-none focus:border-[#C9A227]/40"
                        />

                        <p
                            v-if="form.errors.name"
                            class="mt-2 text-[11px] text-red-400"
                        >
                            {{ form.errors.name }}
                        </p>
                    </div>

                    <!-- Price -->
                    <div>
                        <label class="mb-2 block text-xs text-white/60">
                            Price
                        </label>

                        <div class="flex">
                            <span
                                class="flex h-11 items-center rounded-l-xl border border-r-0 border-white/[0.07] bg-white/[0.04] px-3 text-xs text-white/40"
                            >
                                $
                            </span>

                            <input
                                v-model="form.amount"
                                type="number"
                                min="0.5"
                                step="0.01"
                                placeholder="19.99"
                                class="h-11 min-w-0 flex-1 rounded-r-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm outline-none focus:border-[#C9A227]/40"
                            />
                        </div>

                        <p
                            v-if="form.errors.amount"
                            class="mt-2 text-[11px] text-red-400"
                        >
                            {{ form.errors.amount }}
                        </p>
                    </div>

                    <!-- Currency -->
                    <div>
                        <label class="mb-2 block text-xs text-white/60">
                            Currency
                        </label>

                        <select
                            v-model="form.currency"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-[#111] px-4 text-sm text-white/70 outline-none focus:border-[#C9A227]/40"
                        >
                            <option value="USD">USD — US Dollar</option>

                            <option value="EUR">EUR — Euro</option>

                            <option value="GBP">GBP — British Pound</option>

                            <option value="BDT">BDT — Bangladeshi Taka</option>
                        </select>
                    </div>

                    <!-- Interval -->
                    <div>
                        <label class="mb-2 block text-xs text-white/60">
                            Billing Interval
                        </label>

                        <select
                            v-model="form.interval"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-[#111] px-4 text-sm text-white/70 outline-none focus:border-[#C9A227]/40"
                        >
                            <option value="month">Monthly</option>

                            <option value="year">Yearly</option>
                        </select>
                    </div>

                    <!-- Description -->
                    <div class="md:col-span-2">
                        <label class="mb-2 block text-xs text-white/60">
                            Description
                        </label>

                        <textarea
                            v-model="form.description"
                            rows="3"
                            placeholder="Perfect for regular users..."
                            class="w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm outline-none placeholder:text-white/20 focus:border-[#C9A227]/40"
                        />
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">
                <div
                    class="flex items-center justify-between border-b border-white/[0.07] px-5 py-4"
                >
                    <div>
                        <h2 class="text-sm font-semibold">Package Features</h2>

                        <p class="mt-1 text-[10px] text-white/30">
                            These features will be displayed on your pricing
                            page.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="rounded-lg bg-[#C9A227]/10 px-3 py-2 text-[10px] font-bold text-[#C9A227] hover:bg-[#C9A227]/20"
                        @click="addFeature"
                    >
                        + Add Feature
                    </button>
                </div>

                <div class="space-y-3 p-5">
                    <div
                        v-for="(feature, index) in form.features"
                        :key="index"
                        class="flex gap-2"
                    >
                        <div
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227]"
                        >
                            ✓
                        </div>

                        <input
                            v-model="form.features[index]"
                            type="text"
                            :placeholder="`Feature ${index + 1}`"
                            class="h-11 flex-1 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm outline-none placeholder:text-white/20 focus:border-[#C9A227]/40"
                        />

                        <button
                            type="button"
                            class="h-11 w-11 shrink-0 rounded-xl border border-white/[0.07] text-white/20 hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-400"
                            @click="removeFeature(index)"
                        >
                            ×
                        </button>
                    </div>
                </div>
            </div>

            <!-- Limits -->
            <div class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">
                <div class="border-b border-white/[0.07] px-5 py-4">
                    <h2 class="text-sm font-semibold">Package Limits</h2>

                    <p class="mt-1 text-[10px] text-white/30">
                        Optional limits that your application can enforce.
                    </p>
                </div>

                <div class="grid gap-5 p-5 md:grid-cols-3">
                    <div>
                        <label class="mb-2 block text-xs text-white/50">
                            Playlists
                        </label>

                        <input
                            v-model="form.limits.playlists"
                            type="number"
                            min="0"
                            placeholder="10"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm outline-none focus:border-[#C9A227]/40"
                        />
                    </div>

                    <div>
                        <label class="mb-2 block text-xs text-white/50">
                            Storage GB
                        </label>

                        <input
                            v-model="form.limits.storage"
                            type="number"
                            min="0"
                            placeholder="50"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm outline-none focus:border-[#C9A227]/40"
                        />
                    </div>

                    <div>
                        <label class="mb-2 block text-xs text-white/50">
                            Devices
                        </label>

                        <input
                            v-model="form.limits.devices"
                            type="number"
                            min="1"
                            placeholder="3"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 text-sm outline-none focus:border-[#C9A227]/40"
                        />
                    </div>
                </div>
            </div>

            <!-- Settings -->
            <div
                class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-5"
            >
                <label class="flex cursor-pointer items-center justify-between">
                    <div>
                        <p class="text-xs font-semibold">Active Package</p>

                        <p class="mt-1 text-[10px] text-white/30">
                            Make this package available for new subscriptions.
                        </p>
                    </div>

                    <input
                        v-model="form.is_active"
                        type="checkbox"
                        class="h-5 w-5 accent-[#C9A227]"
                    />
                </label>
            </div>

            <!-- Errors -->
            <div
                v-if="form.errors.stripe"
                class="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-400"
            >
                {{ form.errors.stripe }}
            </div>

            <!-- Actions -->
            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Link
                    :href="route('admin.subscription-packages.index')"
                    class="rounded-xl border border-white/[0.07] px-6 py-3 text-center text-xs font-semibold text-white/50 hover:bg-white/5 hover:text-white"
                >
                    Cancel
                </Link>

                <button
                    type="submit"
                    :disabled="form.processing"
                    class="rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-black hover:bg-[#d8b33a] disabled:opacity-50"
                >
                    {{
                        form.processing
                            ? 'Creating Stripe Package...'
                            : 'Create Package'
                    }}
                </button>
            </div>
        </form>
    </div>
</template>

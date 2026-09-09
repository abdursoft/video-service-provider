<script setup>
import { Link, router } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue';

defineOptions({
    layout: AdminLayout,
});

defineProps({
    packages: {
        type: Array,
        default: () => [],
    },
});

const formatPrice = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.toUpperCase(),
    }).format(amount / 100);
};

const intervalLabel = (interval) => {
    return interval === 'year' ? 'year' : 'month';
};

const deletePackage = (pkg) => {
    if (!confirm(`Delete ${pkg.name}?`)) {
        return;
    }

    router.delete(route('admin.subscription-packages.destroy', pkg.id));
};
</script>

<template>
    <div class="mx-auto max-w-[1500px]">
        <!-- Header -->
        <div
            class="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
            <div>
                <p
                    class="mb-2 text-[10px] font-bold tracking-[0.3em] text-[#C9A227] uppercase"
                >
                    Billing
                </p>

                <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
                    Subscription Packages
                </h1>

                <p class="mt-2 text-sm text-white/35">
                    Manage your Stripe subscription plans and features.
                </p>
            </div>

            <Link
                :href="route('admin.subscription-packages.create')"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#d8b33a]"
            >
                <span class="text-base"> + </span>

                Create Package
            </Link>
        </div>

        <!-- Empty -->
        <div
            v-if="!packages.length"
            class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D] px-6 py-20 text-center"
        >
            <div
                class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]/10 text-[#C9A227]"
            >
                $
            </div>

            <h2 class="text-sm font-semibold">No subscription packages</h2>

            <p class="mt-2 text-xs text-white/30">
                Create your first Stripe subscription package.
            </p>

            <Link
                :href="route('admin.subscription-packages.create')"
                class="mt-5 inline-flex rounded-xl bg-[#C9A227] px-5 py-3 text-xs font-bold text-black"
            >
                Create Package
            </Link>
        </div>

        <!-- Packages -->
        <div v-else class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div
                v-for="pkg in packages"
                :key="pkg.id"
                class="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D] transition hover:border-[#C9A227]/20"
            >
                <!-- Top -->
                <div class="border-b border-white/[0.07] p-6">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <h2 class="text-lg font-bold">
                                {{ pkg.name }}
                            </h2>

                            <p class="mt-1 text-xs text-white/30">
                                {{ pkg.description }}
                            </p>
                        </div>

                        <span
                            class="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase"
                            :class="
                                pkg.is_active
                                    ? 'bg-green-500/10 text-green-400'
                                    : 'bg-white/5 text-white/30'
                            "
                        >
                            {{ pkg.is_active ? 'Active' : 'Inactive' }}
                        </span>
                    </div>

                    <div class="mt-6">
                        <span class="text-3xl font-bold">
                            {{ formatPrice(pkg.amount, pkg.currency) }}
                        </span>

                        <span class="ml-1 text-xs text-white/30">
                            / {{ intervalLabel(pkg.interval) }}
                        </span>
                    </div>
                </div>

                <!-- Features -->
                <div class="p-6">
                    <p
                        class="mb-4 text-[9px] font-bold tracking-[0.2em] text-white/25 uppercase"
                    >
                        Features
                    </p>

                    <ul class="space-y-3">
                        <li
                            v-for="feature in pkg.features || []"
                            :key="feature"
                            class="flex items-start gap-2 text-xs text-white/55"
                        >
                            <span class="mt-0.5 text-[#C9A227]"> ✓ </span>

                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <!-- Footer -->
                <div
                    class="flex items-center justify-between border-t border-white/[0.07] px-6 py-4"
                >
                    <span class="text-[9px] text-white/20">
                        {{ pkg.stripe_price_id }}
                    </span>

                    <div class="flex gap-1">
                        <Link
                            :href="
                                route(
                                    'admin.subscription-packages.edit',
                                    pkg.id,
                                )
                            "
                            class="rounded-lg px-3 py-2 text-[10px] font-semibold text-white/40 hover:bg-white/5 hover:text-[#C9A227]"
                        >
                            Edit
                        </Link>

                        <button
                            type="button"
                            class="rounded-lg px-3 py-2 text-[10px] font-semibold text-white/40 hover:bg-red-500/10 hover:text-red-400"
                            @click="deletePackage(pkg)"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

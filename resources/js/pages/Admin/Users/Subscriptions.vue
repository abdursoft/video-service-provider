<script setup>
import { router } from '@inertiajs/vue3';
import {
    computed,
    ref,
    watch,
    onMounted,
    onBeforeUnmount,
} from 'vue';

import {
    Search,
    Filter,
    X,
    Eye,
    MoreHorizontal,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Calendar,
    CreditCard,
    User,
    Package,
    RefreshCw,
    Ban,
    CheckCircle,
    Clock,
    AlertCircle,
    ExternalLink,
} from 'lucide-vue-next';
import AdminLayout from '@/layouts/AdminLayout.vue';

const props = defineProps({
    subscriptions: {
        type: Object,
        default: () => ({
            data: [],
            links: [],
            meta: {},
        }),
    },

    packages: {
        type: Array,
        default: () => [],
    },

    filters: {
        type: Object,
        default: () => ({
            search: '',
            status: '',
            package: '',
            interval: '',
        }),
    },
});

/*
|--------------------------------------------------------------------------
| Filters
|--------------------------------------------------------------------------
*/

const search = ref(props.filters?.search ?? '');
const status = ref(props.filters?.status ?? '');
const selectedPackage = ref(props.filters?.package ?? '');
const interval = ref(props.filters?.interval ?? '');

/*
|--------------------------------------------------------------------------
| Dropdown / Modal
|--------------------------------------------------------------------------
*/

const openMenu = ref(null);
const showFilters = ref(false);
const showCancelModal = ref(false);
const selectedSubscription = ref(null);

/*
|--------------------------------------------------------------------------
| Search
|--------------------------------------------------------------------------
*/

let searchTimeout = null;

const hasFilters = computed(() => {
    return (
        search.value ||
        status.value ||
        selectedPackage.value ||
        interval.value
    );
});

/*
|--------------------------------------------------------------------------
| Apply Filters
|--------------------------------------------------------------------------
*/

const applyFilters = () => {
    router.get(
        route('admin.user-subscriptions.index'),
        {
            search: search.value || undefined,
            status: status.value || undefined,
            package: selectedPackage.value || undefined,
            interval: interval.value || undefined,
        },
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        }
    );

    openMenu.value = null;
};

/*
|--------------------------------------------------------------------------
| Search Watcher
|--------------------------------------------------------------------------
*/

watch(search, () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        applyFilters();
    }, 400);
});

/*
|--------------------------------------------------------------------------
| Filter Watchers
|--------------------------------------------------------------------------
*/

watch(
    [status, selectedPackage, interval],
    () => {
        applyFilters();
    }
);

/*
|--------------------------------------------------------------------------
| Clear Filters
|--------------------------------------------------------------------------
*/

const clearFilters = () => {
    search.value = '';
    status.value = '';
    selectedPackage.value = '';
    interval.value = '';

    openMenu.value = null;

    router.get(
        route('admin.user-subscriptions.index'),
        {},
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        }
    );
};

/*
|--------------------------------------------------------------------------
| View Subscription
|--------------------------------------------------------------------------
*/

const viewSubscription = (subscription) => {
    if (!subscription) {
        return;
    }

    openMenu.value = null;

    router.get(
        route(
            'admin.user-subscriptions.show',
            subscription.id
        )
    );
};

/*
|--------------------------------------------------------------------------
| Cancel Subscription
|--------------------------------------------------------------------------
*/

const openCancelModal = (subscription) => {
    if (!subscription) {
        return;
    }

    selectedSubscription.value = subscription;

    showCancelModal.value = true;

    openMenu.value = null;
};

const closeCancelModal = () => {
    showCancelModal.value = false;
    selectedSubscription.value = null;
};

const cancelSubscription = () => {
    if (!selectedSubscription.value) {
        return;
    }

    router.post(
        route(
            'admin.user-subscriptions.cancel',
            selectedSubscription.value.id
        ),
        {},
        {
            preserveScroll: true,

            onSuccess: () => {
                closeCancelModal();
            },
        }
    );
};

/*
|--------------------------------------------------------------------------
| Reactivate Subscription
|--------------------------------------------------------------------------
*/

const reactivateSubscription = (subscription) => {
    if (!subscription) {
        return;
    }

    openMenu.value = null;

    router.post(
        route(
            'admin.user-subscriptions.reactivate',
            subscription.id
        ),
        {},
        {
            preserveScroll: true,
        }
    );
};

/*
|--------------------------------------------------------------------------
| Status
|--------------------------------------------------------------------------
*/

const statusClass = (status) => {
    switch (status) {
        case 'active':
            return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';

        case 'trialing':
            return 'bg-blue-500/10 text-blue-400 border-blue-500/20';

        case 'canceled':
            return 'bg-red-500/10 text-red-400 border-red-500/20';

        case 'expired':
            return 'bg-white/5 text-white/40 border-white/10';

        case 'past_due':
            return 'bg-orange-500/10 text-orange-400 border-orange-500/20';

        default:
            return 'bg-white/5 text-white/50 border-white/10';
    }
};

const statusIcon = (status) => {
    switch (status) {
        case 'active':
            return CheckCircle;

        case 'trialing':
            return Clock;

        case 'canceled':
            return Ban;

        case 'past_due':
            return AlertCircle;

        default:
            return Clock;
    }
};

const formatStatus = (status) => {
    if (!status) {
        return 'Unknown';
    }

    return status
        .replaceAll('_', ' ')
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

/*
|--------------------------------------------------------------------------
| Formatting
|--------------------------------------------------------------------------
*/

const formatDate = (date) => {
    if (!date) {
        return '—';
    }

    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
};

const formatAmount = (amount, currency = 'USD') => {
    const numericAmount = Number(amount ?? 0) / 100;

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.toUpperCase(),
    }).format(numericAmount);
};

/*
|--------------------------------------------------------------------------
| Dropdown
|--------------------------------------------------------------------------
*/

const menuPosition = ref({
    top: 0,
    left: 0,
});

const menuButtonRefs = new Map();

/*
|--------------------------------------------------------------------------
| Active Subscription
|--------------------------------------------------------------------------
*/

const activeSubscription = computed(() => {
    if (openMenu.value === null) {
        return null;
    }

    return (
        props.subscriptions?.data?.find(
            (subscription) =>
                subscription.id === openMenu.value
        ) ?? null
    );
});

/*
|--------------------------------------------------------------------------
| Menu Button Reference
|--------------------------------------------------------------------------
*/

const setMenuButtonRef = (id, el) => {
    if (el) {
        menuButtonRefs.set(id, el);
    } else {
        menuButtonRefs.delete(id);
    }
};

/*
|--------------------------------------------------------------------------
| Dropdown Position
|--------------------------------------------------------------------------
*/

const menuStyle = computed(() => ({
    top: `${menuPosition.value.top}px`,
    left: `${menuPosition.value.left}px`,
}));

/*
|--------------------------------------------------------------------------
| Toggle Dropdown
|--------------------------------------------------------------------------
*/

const toggleMenu = (id) => {
    // Close if already open
    if (openMenu.value === id) {
        openMenu.value = null;
        return;
    }

    const button = menuButtonRefs.get(id);

    if (!button) {
        return;
    }

    const rect = button.getBoundingClientRect();

    const menuWidth = 192;
    const menuHeight = 120;
    const gap = 8;
    const viewportPadding = 8;

    /*
     * Default position:
     * right aligned with the button
     */
    let top = rect.bottom + gap;
    let left = rect.right - menuWidth;

    /*
     * Prevent horizontal overflow
     */
    if (left < viewportPadding) {
        left = viewportPadding;
    }

    if (
        left + menuWidth >
        window.innerWidth - viewportPadding
    ) {
        left =
            window.innerWidth -
            menuWidth -
            viewportPadding;
    }

    /*
     * If there isn't enough space below,
     * open the menu above the button.
     */
    if (
        top + menuHeight >
        window.innerHeight - viewportPadding
    ) {
        top = rect.top - menuHeight - gap;
    }

    /*
     * Prevent vertical overflow at the top
     */
    if (top < viewportPadding) {
        top = viewportPadding;
    }

    menuPosition.value = {
        top,
        left,
    };

    openMenu.value = id;
};

/*
|--------------------------------------------------------------------------
| Close Dropdown
|--------------------------------------------------------------------------
*/

const closeMenu = () => {
    openMenu.value = null;
};

const handleDocumentClick = () => {
    closeMenu();
};

/*
|--------------------------------------------------------------------------
| Close Dropdown on Scroll
|--------------------------------------------------------------------------
|
| Because the dropdown is Teleported to <body>,
| close it when the page/table is scrolled.
|
*/

const handleScroll = () => {
    if (openMenu.value !== null) {
        closeMenu();
    }
};

/*
|--------------------------------------------------------------------------
| Window Resize / Lifecycle
|--------------------------------------------------------------------------
*/

onMounted(() => {
    document.addEventListener(
        'click',
        handleDocumentClick
    );

    window.addEventListener(
        'scroll',
        handleScroll,
        true
    );

    window.addEventListener(
        'resize',
        closeMenu
    );
});

onBeforeUnmount(() => {
    document.removeEventListener(
        'click',
        handleDocumentClick
    );

    window.removeEventListener(
        'scroll',
        handleScroll,
        true
    );

    window.removeEventListener(
        'resize',
        closeMenu
    );

    clearTimeout(searchTimeout);
});

defineOptions({
    layout: AdminLayout
});
</script>


<template>
    <div class="min-h-screen bg-[#080808] text-white">
        <!-- Header -->
        <div class="border-b border-white/[0.07]">
            <div class="mx-auto max-w-[1600px] px-5 py-7 lg:px-8">
                <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <div class="flex items-center gap-3">
                            <div
                                class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/10">
                                <CreditCard class="h-5 w-5 text-[#C9A227]" :stroke-width="1.7" />
                            </div>

                            <div>
                                <h1 class="text-xl font-semibold tracking-tight">
                                    User Subscriptions
                                </h1>

                                <p class="mt-1 text-xs text-white/35">
                                    Manage customer subscriptions and billing
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-3">
                        <button type="button"
                            class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                            @click="showFilters = !showFilters">
                            <Filter class="h-4 w-4" />

                            Filters

                            <span v-if="hasFilters"
                                class="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C9A227] px-1 text-[10px] font-bold text-black">
                                {{
                                    [
                                        search,
                                        status,
                                        selectedPackage,
                                        interval,
                                    ].filter(Boolean).length
                                }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-[1600px] px-5 py-6 lg:px-8">
            <!-- Search + Filters -->
            <div class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">
                <div class="flex flex-col gap-3 p-4 lg:flex-row">
                    <!-- Search -->
                    <div class="relative flex-1">
                        <Search class="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />

                        <input v-model="search" type="text" placeholder="Search user, email or subscription ID..."
                            class="h-11 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-10 pr-10 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A227]/40 focus:bg-white/[0.04]" />

                        <button v-if="search" type="button"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                            @click="search = ''">
                            <X class="h-4 w-4" />
                        </button>
                    </div>

                    <!-- Status -->
                    <select v-model="status"
                        class="h-11 rounded-xl border border-white/10 bg-[#111] px-4 text-sm text-white/60 outline-none focus:border-[#C9A227]/40 lg:w-44">
                        <option value="">All statuses</option>
                        <option value="active">Active</option>
                        <option value="trialing">Trialing</option>
                        <option value="past_due">Past Due</option>
                        <option value="canceled">Canceled</option>
                        <option value="expired">Expired</option>
                    </select>

                    <!-- Package -->
                    <select v-model="selectedPackage"
                        class="h-11 rounded-xl border border-white/10 bg-[#111] px-4 text-sm text-white/60 outline-none focus:border-[#C9A227]/40 lg:w-48">
                        <option value="">All packages</option>

                        <option v-for="pkg in packages" :key="pkg.id" :value="pkg.id">
                            {{ pkg.name }}
                        </option>
                    </select>

                    <!-- Interval -->
                    <select v-model="interval"
                        class="h-11 rounded-xl border border-white/10 bg-[#111] px-4 text-sm text-white/60 outline-none focus:border-[#C9A227]/40 lg:w-40">
                        <option value="">All intervals</option>
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                    </select>

                    <button v-if="hasFilters" type="button"
                        class="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 text-xs font-medium text-white/45 transition hover:bg-white/5 hover:text-white"
                        @click="clearFilters">
                        <X class="h-4 w-4" />
                        Clear
                    </button>
                </div>

                <!-- Extra filter information -->
                <div v-if="showFilters" class="border-t border-white/[0.06] px-4 py-4">
                    <div class="flex flex-wrap items-center gap-2 text-xs text-white/35">
                        <Filter class="h-3.5 w-3.5" />

                        <span>
                            Use the filters above to narrow down subscriptions.
                        </span>
                    </div>
                </div>
            </div>

            <!-- Desktop Table -->
            <div class="mt-5 hidden overflow-visible rounded-2xl border border-white/[0.07] bg-[#0D0D0D] lg:block">
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[1100px]">
                        <thead>
                            <tr class="border-b border-white/[0.06]">
                                <th
                                    class="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Customer
                                </th>

                                <th
                                    class="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Package
                                </th>

                                <th
                                    class="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Status
                                </th>

                                <th
                                    class="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Amount
                                </th>

                                <th
                                    class="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Period
                                </th>

                                <th
                                    class="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Ends
                                </th>

                                <th
                                    class="px-5 py-4 text-right text-[10px] font-bold uppercase tracking-[0.15em] text-white/25">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody class="min-h-[550px]">
                            <tr v-for="subscription in subscriptions.data" :key="subscription.id"
                                class="border-b border-white/[0.05] transition hover:bg-white/[0.015]">
                                <!-- Customer -->
                                <td class="px-5 py-4">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A227]/10 text-xs font-bold text-[#C9A227]">
                                            {{
                                                subscription.user?.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase() ?? 'U'
                                            }}
                                        </div>

                                        <div class="min-w-0">
                                            <p class="max-w-[180px] truncate text-sm font-medium text-white">
                                                {{
                                                    subscription.user?.name ??
                                                    'Unknown User'
                                                }}
                                            </p>

                                            <p class="max-w-[200px] truncate text-[11px] text-white/30">
                                                {{
                                                    subscription.user?.email ??
                                                    '—'
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <!-- Package -->
                                <td class="px-5 py-4">
                                    <div class="flex items-center gap-2.5">
                                        <Package class="h-4 w-4 text-[#C9A227]/70" />

                                        <div>
                                            <p class="text-sm font-medium text-white/80">
                                                {{
                                                    subscription.package?.name ??
                                                    '—'
                                                }}
                                            </p>

                                            <p class="text-[10px] text-white/25">
                                                {{
                                                    subscription.stripe_price_id ??
                                                    'No Stripe price'
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <!-- Status -->
                                <td class="px-5 py-4">
                                    <div class="flex flex-col items-start gap-1.5">
                                        <span
                                            class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                                            :class="statusClass(
                                                subscription.status
                                            )
                                                ">
                                            <component :is="statusIcon(
                                                subscription.status
                                            )
                                                " class="h-3 w-3" />

                                            {{
                                                formatStatus(
                                                    subscription.status
                                                )
                                            }}
                                        </span>

                                        <span v-if="
                                            subscription.cancel_at_period_end
                                        " class="text-[9px] text-orange-400/70">
                                            Cancels at period end
                                        </span>
                                    </div>
                                </td>

                                <!-- Amount -->
                                <td class="px-5 py-4">
                                    <p class="text-sm font-semibold text-white">
                                        {{
                                            formatAmount(
                                                subscription.price,
                                                subscription.currency
                                            )
                                        }}
                                    </p>

                                    <p class="text-[10px] text-white/25">
                                        /
                                        {{
                                            subscription.package?.interval ??
                                            'month'
                                        }}
                                    </p>
                                </td>

                                <!-- Period -->
                                <td class="px-5 py-4">
                                    <div class="flex items-center gap-2 text-xs text-white/50">
                                        <Calendar class="h-3.5 w-3.5 text-white/25" />

                                        {{
                                            formatDate(
                                                subscription.current_period_start ??
                                                subscription.starts_at
                                            )
                                        }}
                                    </div>
                                </td>

                                <!-- Ends -->
                                <td class="px-5 py-4">
                                    <p class="text-xs text-white/50">
                                        {{
                                            formatDate(
                                                subscription.current_period_end ??
                                                subscription.ends_at
                                            )
                                        }}
                                    </p>
                                </td>

                                <!-- Actions -->
                                <td class="px-5 py-4">
                                    <div class="flex justify-end">
                                        <button :ref="el => setMenuButtonRef(subscription.id, el)" type="button"
                                            class="flex h-9 w-9 items-center justify-center rounded-lg text-white/30 transition hover:bg-white/5 hover:text-white"
                                            @click.stop="toggleMenu(subscription.id)">
                                            <MoreHorizontal class="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <!-- Empty -->
                            <tr v-if="
                                !subscriptions.data ||
                                subscriptions.data.length === 0
                            ">
                                <td colspan="7" class="px-5 py-20 text-center">
                                    <div class="mx-auto flex max-w-sm flex-col items-center">
                                        <div
                                            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
                                            <CreditCard class="h-6 w-6 text-white/20" />
                                        </div>

                                        <h3 class="mt-4 text-sm font-semibold text-white/70">
                                            No subscriptions found
                                        </h3>

                                        <p class="mt-1 text-xs text-white/30">
                                            Try changing your search or
                                            filters.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Teleport to="body">
                <div v-if="openMenu !== null && activeSubscription" class="fixed z-[9999]" :style="menuStyle"
                    @click.stop>
                    <div
                        class="w-48 overflow-hidden rounded-xl border border-white/10 bg-[#171717] p-1.5 shadow-2xl shadow-black/50">
                        <!-- View -->
                        <button type="button"
                            class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs text-white/60 transition hover:bg-white/5 hover:text-white"
                            @click="viewSubscription(activeSubscription)">
                            <Eye class="h-4 w-4" />

                            View details
                        </button>

                        <!-- Reactivate -->
                        <button v-if="
                            activeSubscription.status ===
                            'canceled'
                        " type="button"
                            class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs text-emerald-400 transition hover:bg-emerald-500/10"
                            @click="
                                reactivateSubscription(
                                    activeSubscription
                                )
                                ">
                            <RefreshCw class="h-4 w-4" />

                            Reactivate
                        </button>

                        <!-- Cancel -->
                        <button v-else-if="
                            activeSubscription.status ===
                            'active' ||
                            activeSubscription.status ===
                            'trialing'
                        " type="button"
                            class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-xs text-red-400 transition hover:bg-red-500/10"
                            @click="
                                openCancelModal(
                                    activeSubscription
                                )
                                ">
                            <Ban class="h-4 w-4" />

                            Cancel subscription
                        </button>
                    </div>
                </div>
            </Teleport>

            <!-- Mobile Cards -->
            <div class="mt-5 space-y-3 lg:hidden">
                <div v-for="subscription in subscriptions.data" :key="subscription.id"
                    class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-4">
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-3">
                            <div
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-sm font-bold text-[#C9A227]">
                                {{
                                    subscription.user?.name
                                        ?.charAt(0)
                                        ?.toUpperCase() ?? 'U'
                                }}
                            </div>

                            <div class="min-w-0">
                                <p class="truncate text-sm font-semibold text-white">
                                    {{
                                        subscription.user?.name ??
                                        'Unknown User'
                                    }}
                                </p>

                                <p class="truncate text-[11px] text-white/30">
                                    {{
                                        subscription.user?.email ?? '—'
                                    }}
                                </p>
                            </div>
                        </div>

                        <span
                            class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-[9px] font-semibold"
                            :class="statusClass(subscription.status)
                                ">
                            {{
                                formatStatus(
                                    subscription.status
                                )
                            }}
                        </span>
                    </div>

                    <div class="mt-4 grid grid-cols-2 gap-3 border-t border-white/[0.06] pt-4">
                        <div>
                            <p class="text-[9px] font-bold uppercase tracking-wider text-white/20">
                                Package
                            </p>

                            <p class="mt-1 text-xs font-medium text-white/60">
                                {{
                                    subscription.package?.name ?? '—'
                                }}
                            </p>
                        </div>

                        <div>
                            <p class="text-[9px] font-bold uppercase tracking-wider text-white/20">
                                Amount
                            </p>

                            <p class="mt-1 text-xs font-semibold text-white">
                                {{
                                    formatAmount(
                                        subscription.price,
                                        subscription.currency
                                    )
                                }}
                            </p>
                        </div>

                        <div>
                            <p class="text-[9px] font-bold uppercase tracking-wider text-white/20">
                                Started
                            </p>

                            <p class="mt-1 text-xs text-white/50">
                                {{
                                    formatDate(
                                        subscription.starts_at
                                    )
                                }}
                            </p>
                        </div>

                        <div>
                            <p class="text-[9px] font-bold uppercase tracking-wider text-white/20">
                                Ends
                            </p>

                            <p class="mt-1 text-xs text-white/50">
                                {{
                                    formatDate(
                                        subscription.ends_at
                                    )
                                }}
                            </p>
                        </div>
                    </div>

                    <div class="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
                        <button type="button"
                            class="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-xs text-white/50 transition hover:bg-white/5 hover:text-white"
                            @click="viewSubscription(subscription)">
                            <Eye class="h-3.5 w-3.5" />
                            View
                        </button>

                        <button v-if="subscription.status === 'canceled'" type="button"
                            class="flex flex-1 items-center justify-center gap-2 rounded-lg border border-emerald-500/20 py-2 text-xs text-emerald-400 transition hover:bg-emerald-500/10"
                            @click="
                                reactivateSubscription(subscription)
                                ">
                            <RefreshCw class="h-3.5 w-3.5" />
                            Reactivate
                        </button>

                        <button v-else-if="
                            subscription.status === 'active' ||
                            subscription.status === 'trialing'
                        " type="button"
                            class="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-500/20 py-2 text-xs text-red-400 transition hover:bg-red-500/10"
                            @click="
                                openCancelModal(subscription)
                                ">
                            <Ban class="h-3.5 w-3.5" />
                            Cancel
                        </button>
                    </div>
                </div>

                <div v-if="
                    !subscriptions.data ||
                    subscriptions.data.length === 0
                " class="rounded-2xl border border-white/[0.07] bg-[#0D0D0D] px-5 py-16 text-center">
                    <CreditCard class="mx-auto h-7 w-7 text-white/20" />

                    <p class="mt-3 text-sm font-semibold text-white/60">
                        No subscriptions found
                    </p>

                    <p class="mt-1 text-xs text-white/30">
                        Try changing your filters.
                    </p>
                </div>
            </div>

            <!-- Pagination -->
            <div v-if="
                subscriptions.links &&
                subscriptions.links.length > 3
            " class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-xs text-white/25">
                    Showing
                    <span class="text-white/50">
                        {{ subscriptions.from ?? 0 }}
                    </span>
                    –
                    <span class="text-white/50">
                        {{ subscriptions.to ?? 0 }}
                    </span>
                    of
                    <span class="text-white/50">
                        {{ subscriptions.total ?? 0 }}
                    </span>
                    subscriptions
                </p>

                <div class="flex items-center gap-1">
                    <template v-for="(link, index) in subscriptions.links" :key="index">
                        <button v-if="link.url" type="button"
                            class="flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs transition"
                            :class="link.active
                                ? 'bg-[#C9A227] font-bold text-black'
                                : 'text-white/40 hover:bg-white/5 hover:text-white'
                                " @click="
                                    router.get(
                                        link.url,
                                        {},
                                        {
                                            preserveState: true,
                                            preserveScroll: true,
                                        }
                                    )
                                    " v-html="link.label" />

                        <span v-else class="flex h-9 min-w-9 items-center justify-center px-2 text-xs text-white/15"
                            v-html="link.label" />
                    </template>
                </div>
            </div>
        </div>

        <!-- Cancel Modal -->
        <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-150" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="showCancelModal"
                class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
                @click.self="closeCancelModal">
                <div class="w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl">
                    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                        <Ban class="h-6 w-6 text-red-400" />
                    </div>

                    <h2 class="mt-5 text-lg font-semibold text-white">
                        Cancel subscription?
                    </h2>

                    <p class="mt-2 text-sm leading-6 text-white/40">
                        Are you sure you want to cancel
                        <span class="text-white/70">
                            {{
                                selectedSubscription?.user?.name ??
                                'this user'
                            }}
                        </span>
                        's subscription?
                    </p>

                    <div class="mt-4 rounded-xl border border-orange-500/10 bg-orange-500/5 p-3">
                        <p class="text-xs leading-5 text-orange-300/70">
                            The subscription will be canceled in Stripe.
                            Access should remain available until the current
                            billing period ends if your backend is configured
                            for period-end cancellation.
                        </p>
                    </div>

                    <div class="mt-6 flex gap-3">
                        <button type="button"
                            class="flex-1 rounded-xl border border-white/10 px-4 py-3 text-xs font-medium text-white/50 transition hover:bg-white/5 hover:text-white"
                            @click="closeCancelModal">
                            Keep subscription
                        </button>

                        <button type="button"
                            class="flex-1 rounded-xl bg-red-500/10 px-4 py-3 text-xs font-semibold text-red-400 transition hover:bg-red-500/20"
                            @click="cancelSubscription">
                            Cancel subscription
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
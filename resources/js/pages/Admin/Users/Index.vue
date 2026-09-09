<script setup>
import { ref, watch } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue';

defineOptions({
    layout: AdminLayout,
});

const props = defineProps({
    users: {
        type: Object,
        required: true,
    },

    filters: {
        type: Object,
        default: () => ({
            search: '',
            status: '',
        }),
    },
});

const search = ref(props.filters.search ?? '');
const status = ref(props.filters.status ?? '');

let searchTimeout = null;

const filterUsers = () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        router.get(
            route('admin.users.index'),
            {
                search: search.value,
                status: status.value,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    }, 350);
};

watch(status, () => {
    filterUsers();
});

const clearFilters = () => {
    search.value = '';
    status.value = '';

    router.get(
        route('admin.users.index'),
        {},
        {
            preserveState: true,
            replace: true,
        }
    );
};

const showDeleteModal = ref(false);
const selectedUser = ref(null);

const confirmDelete = (user) => {
    selectedUser.value = user;
    showDeleteModal.value = true;
};

const deleteUser = () => {
    if (!selectedUser.value) return;

    router.delete(
        route('admin.users.destroy', selectedUser.value.id),
        {
            preserveScroll: true,
            onFinish: () => {
                showDeleteModal.value = false;
                selectedUser.value = null;
            },
        }
    );
};

const getInitial = (name) => {
    return name?.charAt(0)?.toUpperCase() ?? 'U';
};

const formatDate = (date) => {
    if (!date) return '-';

    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};
</script>

<template>
    <div class="mx-auto max-w-[1600px]">

        <!-- Header -->
        <div class="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
                <p class="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                    Management
                </p>

                <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
                    Users
                </h1>

                <p class="mt-2 text-sm text-white/35">
                    Manage registered users and their accounts.
                </p>
            </div>

            <Link
                :href="route('admin.users.create')"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-4 py-2.5 text-xs font-bold text-black transition hover:bg-[#d8b33a]"
            >
                <svg
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M12 5V19M5 12H19" />
                </svg>

                Add User
            </Link>

        </div>


        <!-- Filters -->
        <div class="mb-5 rounded-2xl border border-white/[0.07] bg-[#0D0D0D] p-4">

            <div class="grid gap-3 md:grid-cols-[1fr_180px_auto]">

                <!-- Search -->
                <div class="relative">

                    <svg
                        class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20L16 16" />
                    </svg>

                    <input
                        v-model="search"
                        type="text"
                        placeholder="Search users..."
                        class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20"
                        @input="filterUsers"
                    />

                </div>


                <!-- Status -->
                <select
                    v-model="status"
                    class="h-11 rounded-xl border border-white/[0.07] bg-[#111] px-3 text-sm text-white/60 outline-none focus:border-[#C9A227]/40"
                >
                    <option value="">
                        All Status
                    </option>

                    <option value="active">
                        Active
                    </option>

                    <option value="banned">
                        Banned
                    </option>
                </select>


                <!-- Clear -->
                <button
                    v-if="search || status"
                    type="button"
                    class="h-11 rounded-xl border border-white/[0.07] px-4 text-xs font-medium text-white/50 transition hover:bg-white/[0.04] hover:text-white"
                    @click="clearFilters"
                >
                    Clear
                </button>

            </div>

        </div>


        <!-- Table -->
        <div class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">

            <!-- Table header -->
            <div class="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

                <div>
                    <h2 class="text-sm font-semibold">
                        All Users
                    </h2>

                    <p class="mt-1 text-[10px] text-white/30">
                        {{ users.total ?? 0 }} total users
                    </p>
                </div>

            </div>


            <!-- Desktop table -->
            <div class="hidden overflow-x-auto md:block">

                <table class="w-full">

                    <thead>
                        <tr class="border-b border-white/[0.05] text-left">

                            <th class="px-5 py-3 text-[9px] font-bold uppercase tracking-wider text-white/25">
                                User
                            </th>

                            <th class="px-5 py-3 text-[9px] font-bold uppercase tracking-wider text-white/25">
                                Email
                            </th>

                            <th class="px-5 py-3 text-[9px] font-bold uppercase tracking-wider text-white/25">
                                Status
                            </th>

                            <th class="px-5 py-3 text-[9px] font-bold uppercase tracking-wider text-white/25">
                                Registered
                            </th>

                            <th class="px-5 py-3 text-right text-[9px] font-bold uppercase tracking-wider text-white/25">
                                Actions
                            </th>

                        </tr>
                    </thead>


                    <tbody class="divide-y divide-white/[0.05]">

                        <tr
                            v-for="user in users.data"
                            :key="user.id"
                            class="group transition hover:bg-white/[0.02]"
                        >

                            <!-- User -->
                            <td class="px-5 py-4">

                                <div class="flex items-center gap-3">

                                    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-xs font-bold text-[#C9A227]">
                                        {{ getInitial(user.name) }}
                                    </div>

                                    <div>
                                        <p class="text-xs font-semibold text-white">
                                            {{ user.name }}
                                        </p>

                                        <p class="mt-0.5 text-[10px] text-white/25">
                                            ID #{{ user.id }}
                                        </p>
                                    </div>

                                </div>

                            </td>


                            <!-- Email -->
                            <td class="px-5 py-4">

                                <span class="text-xs text-white/50">
                                    {{ user.email }}
                                </span>

                            </td>


                            <!-- Status -->
                            <td class="px-5 py-4">

                                <span
                                    class="inline-flex rounded-full px-2.5 py-1 text-[9px] font-semibold"
                                    :class="user.status === 'banned'
                                        ? 'bg-red-500/10 text-red-400'
                                        : 'bg-green-500/10 text-green-400'"
                                >
                                    {{ user.status ?? 'active' }}
                                </span>

                            </td>


                            <!-- Date -->
                            <td class="px-5 py-4">

                                <span class="text-xs text-white/40">
                                    {{ formatDate(user.created_at) }}
                                </span>

                            </td>


                            <!-- Actions -->
                            <td class="px-5 py-4">

                                <div class="flex justify-end gap-1">

                                    <Link
                                        :href="route('admin.users.show', user.id)"
                                        class="rounded-lg p-2 text-white/30 transition hover:bg-white/5 hover:text-white"
                                        title="View"
                                    >
                                        <svg
                                            class="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.7"
                                        >
                                            <path d="M2 12C3.8 7.8 7.2 5 12 5C16.8 5 20.2 7.8 22 12C20.2 16.2 16.8 19 12 19C7.2 19 3.8 16.2 2 12Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </Link>

                                    <Link
                                        :href="route('admin.users.edit', user.id)"
                                        class="rounded-lg p-2 text-white/30 transition hover:bg-[#C9A227]/10 hover:text-[#C9A227]"
                                        title="Edit"
                                    >
                                        <svg
                                            class="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.7"
                                        >
                                            <path d="M12 20H21" />
                                            <path d="M16.5 3.5C17.3 2.7 18.7 2.7 19.5 3.5C20.3 4.3 20.3 5.7 19.5 6.5L8 18L3 19L4 14L16.5 3.5Z" />
                                        </svg>
                                    </Link>

                                    <button
                                        type="button"
                                        class="rounded-lg p-2 text-white/30 transition hover:bg-red-500/10 hover:text-red-400"
                                        title="Delete"
                                        @click="confirmDelete(user)"
                                    >
                                        <svg
                                            class="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.7"
                                        >
                                            <path d="M4 7H20" />
                                            <path d="M10 11V17M14 11V17" />
                                            <path d="M6 7L7 21H17L18 7" />
                                            <path d="M9 7V4H15V7" />
                                        </svg>
                                    </button>

                                </div>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>


            <!-- Mobile cards -->
            <div class="divide-y divide-white/[0.05] md:hidden">

                <div
                    v-for="user in users.data"
                    :key="user.id"
                    class="p-4"
                >

                    <div class="flex items-start gap-3">

                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/10 text-sm font-bold text-[#C9A227]">
                            {{ getInitial(user.name) }}
                        </div>

                        <div class="min-w-0 flex-1">

                            <p class="truncate text-xs font-semibold">
                                {{ user.name }}
                            </p>

                            <p class="mt-1 truncate text-[10px] text-white/30">
                                {{ user.email }}
                            </p>

                            <div class="mt-3 flex items-center justify-between">

                                <span
                                    class="rounded-full px-2 py-1 text-[9px] font-semibold"
                                    :class="user.status === 'banned'
                                        ? 'bg-red-500/10 text-red-400'
                                        : 'bg-green-500/10 text-green-400'"
                                >
                                    {{ user.status ?? 'active' }}
                                </span>

                                <span class="text-[9px] text-white/20">
                                    {{ formatDate(user.created_at) }}
                                </span>

                            </div>

                        </div>

                    </div>

                    <div class="mt-3 flex gap-2">

                        <Link
                            :href="route('admin.users.show', user.id)"
                            class="flex-1 rounded-lg border border-white/[0.07] py-2 text-center text-[10px] font-medium text-white/50 hover:bg-white/5 hover:text-white"
                        >
                            View
                        </Link>

                        <Link
                            :href="route('admin.users.edit', user.id)"
                            class="flex-1 rounded-lg border border-white/[0.07] py-2 text-center text-[10px] font-medium text-[#C9A227]"
                        >
                            Edit
                        </Link>

                        <button
                            type="button"
                            class="flex-1 rounded-lg border border-red-500/10 py-2 text-[10px] font-medium text-red-400"
                            @click="confirmDelete(user)"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>


            <!-- Empty -->
            <div
                v-if="!users.data?.length"
                class="px-5 py-20 text-center"
            >
                <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] text-white/20">
                    <svg
                        class="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                    >
                        <circle cx="9" cy="7" r="4" />
                        <path d="M2 21C2.8 17.5 5.3 15 9 15C12.7 15 15.2 17.5 16 21" />
                    </svg>
                </div>

                <p class="text-sm font-medium text-white/50">
                    No users found
                </p>

                <p class="mt-1 text-xs text-white/25">
                    Try changing your search or filters.
                </p>
            </div>


            <!-- Pagination -->
            <div
                v-if="users.links?.length > 3"
                class="flex flex-wrap items-center justify-center gap-1 border-t border-white/[0.07] px-5 py-4"
            >

                <template
                    v-for="link in users.links"
                    :key="link.label"
                >

                    <Link
                        v-if="link.url"
                        :href="link.url"
                        class="rounded-lg px-3 py-2 text-[10px] font-medium transition"
                        :class="link.active
                            ? 'bg-[#C9A227] text-black'
                            : 'text-white/40 hover:bg-white/5 hover:text-white'"
                        v-html="link.label"
                    />

                    <span
                        v-else
                        class="px-3 py-2 text-[10px] text-white/15"
                        v-html="link.label"
                    />

                </template>

            </div>

        </div>


        <!-- Delete Modal -->
        <Teleport to="body">

            <Transition
                enter-active-class="transition duration-200"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="showDeleteModal"
                    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm"
                    @click.self="showDeleteModal = false"
                >

                    <div class="w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">

                        <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">

                            <svg
                                class="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M12 9V13" />
                                <path d="M12 17H12.01" />
                                <path d="M10.3 3.8L2.6 17.2C1.8 18.6 2.8 20.4 4.4 20.4H19.6C21.2 20.4 22.2 18.6 21.4 17.2L13.7 3.8C12.9 2.4 11.1 2.4 10.3 3.8Z" />
                            </svg>

                        </div>

                        <h3 class="text-lg font-bold">
                            Delete user?
                        </h3>

                        <p class="mt-2 text-sm leading-6 text-white/35">
                            Are you sure you want to delete
                            <span class="font-semibold text-white/70">
                                {{ selectedUser?.name }}
                            </span>
                            ? This action cannot be undone.
                        </p>

                        <div class="mt-6 flex justify-end gap-2">

                            <button
                                type="button"
                                class="rounded-xl border border-white/[0.07] px-4 py-2.5 text-xs font-medium text-white/50 hover:bg-white/5 hover:text-white"
                                @click="showDeleteModal = false"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                class="rounded-xl bg-red-500 px-4 py-2.5 text-xs font-bold text-white hover:bg-red-600"
                                @click="deleteUser"
                            >
                                Delete User
                            </button>

                        </div>

                    </div>

                </div>
            </Transition>

        </Teleport>

    </div>
</template>
<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue';
import UserForm from '@/components/admin/UserForm.vue';

defineOptions({
    layout: AdminLayout,
});

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },

    roles: {
        type: Array,
        default: () => [],
    },
});

const form = useForm({
    name: props.user.name ?? '',
    email: props.user.email ?? '',
    password: '',
    password_confirmation: '',
    role: props.user.role ?? '',
    status: props.user.status ?? 'active',
});

const submit = () => {
    form.put(
        route('admin.users.update', props.user.id),
        {
            preserveScroll: true,
        }
    );
};

const cancel = () => {
    window.history.back();
};
</script>

<template>
    <div class="mx-auto max-w-4xl">

        <!-- Header -->
        <div class="mb-7">

            <div class="mb-4">
                <Link
                    :href="route('admin.users.index')"
                    class="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/30 transition hover:text-[#C9A227]"
                >
                    <svg
                        class="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.7"
                    >
                        <path d="M19 12H5" />
                        <path d="M11 18L5 12L11 6" />
                    </svg>

                    Back to Users
                </Link>
            </div>

            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                <div>
                    <p class="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                        User Management
                    </p>

                    <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
                        Edit User
                    </h1>

                    <p class="mt-2 text-sm text-white/35">
                        Update {{ props.user.name }}'s account information.
                    </p>
                </div>


                <!-- User ID -->
                <div class="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2.5">
                    <p class="text-[9px] uppercase tracking-wider text-white/20">
                        User ID
                    </p>

                    <p class="mt-0.5 text-xs font-semibold text-[#C9A227]">
                        #{{ props.user.id }}
                    </p>
                </div>

            </div>

        </div>


        <!-- Form -->
        <UserForm
            :form="form"
            :user="props.user"
            :roles="roles"
            mode="edit"
            @submit="submit"
            @cancel="cancel"
        />

    </div>
</template>
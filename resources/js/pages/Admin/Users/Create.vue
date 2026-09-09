<script setup>
import { useForm, Link } from '@inertiajs/vue3';
import AdminLayout from '@/layouts/AdminLayout.vue';
import UserForm from '@/components/admin/UserForm.vue';

defineOptions({
    layout: AdminLayout,
});

const props = defineProps({
    roles: {
        type: Array,
        default: () => [],
    },
});

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
    status: 'active',
});

const submit = () => {
    form.post(route('admin.users.store'), {
        preserveScroll: true,
    });
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

            <p class="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                User Management
            </p>

            <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
                Create User
            </h1>

            <p class="mt-2 text-sm text-white/35">
                Create a new user account and configure their access.
            </p>

        </div>


        <!-- Form -->
        <UserForm
            :form="form"
            :roles="roles"
            mode="create"
            @submit="submit"
            @cancel="cancel"
        />

    </div>
</template>
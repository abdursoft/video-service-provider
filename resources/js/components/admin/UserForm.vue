<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    form: {
        type: Object,
        required: true,
    },

    mode: {
        type: String,
        default: 'create',
    },

    user: {
        type: Object,
        default: null,
    },

    roles: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits([
    'submit',
    'cancel',
]);

const showPassword = ref(false);
const showPasswordConfirmation = ref(false);

const isEdit = computed(() => props.mode === 'edit');

const submit = () => {
    emit('submit');
};
</script>

<template>
    <form
        class="space-y-6"
        @submit.prevent="submit"
    >

        <!-- ======================================== -->
        <!-- BASIC INFORMATION -->
        <!-- ======================================== -->

        <div class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">

            <div class="border-b border-white/[0.07] px-5 py-4">
                <h2 class="text-sm font-semibold">
                    Basic Information
                </h2>

                <p class="mt-1 text-[10px] text-white/30">
                    Personal information associated with this account.
                </p>
            </div>


            <div class="grid gap-5 p-5 md:grid-cols-2">

                <!-- Name -->
                <div>
                    <label class="mb-2 block text-xs font-medium text-white/60">
                        Full Name
                        <span class="text-[#C9A227]">*</span>
                    </label>

                    <input
                        v-model="form.name"
                        type="text"
                        autocomplete="name"
                        placeholder="Enter full name"
                        class="h-11 w-full rounded-xl border bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20"
                        :class="form.errors.name
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/[0.07] focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20'"
                    />

                    <p
                        v-if="form.errors.name"
                        class="mt-2 text-[11px] text-red-400"
                    >
                        {{ form.errors.name }}
                    </p>
                </div>


                <!-- Email -->
                <div>
                    <label class="mb-2 block text-xs font-medium text-white/60">
                        Email Address
                        <span class="text-[#C9A227]">*</span>
                    </label>

                    <input
                        v-model="form.email"
                        type="email"
                        autocomplete="email"
                        placeholder="name@example.com"
                        class="h-11 w-full rounded-xl border bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20"
                        :class="form.errors.email
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-white/[0.07] focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20'"
                    />

                    <p
                        v-if="form.errors.email"
                        class="mt-2 text-[11px] text-red-400"
                    >
                        {{ form.errors.email }}
                    </p>
                </div>

            </div>

        </div>


        <!-- ======================================== -->
        <!-- ACCOUNT -->
        <!-- ======================================== -->

        <div class="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D0D0D]">

            <div class="border-b border-white/[0.07] px-5 py-4">
                <h2 class="text-sm font-semibold">
                    Account
                </h2>

                <p class="mt-1 text-[10px] text-white/30">
                    Configure account access and security.
                </p>
            </div>


            <div class="grid gap-5 p-5 md:grid-cols-2">

                <!-- Password -->
                <div>
                    <label class="mb-2 block text-xs font-medium text-white/60">
                        {{ isEdit ? 'New Password' : 'Password' }}

                        <span
                            v-if="!isEdit"
                            class="text-[#C9A227]"
                        >
                            *
                        </span>
                    </label>

                    <div class="relative">

                        <input
                            v-model="form.password"
                            :type="showPassword ? 'text' : 'password'"
                            :placeholder="isEdit ? 'Leave blank to keep current password' : 'Enter password'"
                            :autocomplete="isEdit ? 'new-password' : 'new-password'"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 pr-11 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20"
                            :class="{
                                'border-red-500/50': form.errors.password
                            }"
                        />

                        <button
                            type="button"
                            class="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-white/25 hover:text-white/60"
                            @click="showPassword = !showPassword"
                        >
                            <svg
                                v-if="!showPassword"
                                class="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M2 12C3.8 7.8 7.2 5 12 5C16.8 5 20.2 7.8 22 12C20.2 16.2 16.8 19 12 19C7.2 19 3.8 16.2 2 12Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>

                            <svg
                                v-else
                                class="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                            >
                                <path d="M3 3L21 21" />
                                <path d="M10.6 10.6A2 2 0 0013.4 13.4" />
                                <path d="M9.9 5.2C10.6 5.1 11.3 5 12 5C16.8 5 20.2 7.8 22 12C21.3 13.7 20.3 15.1 19 16.3" />
                                <path d="M6.1 6.1C4.3 7.5 2.9 9.5 2 12C3.8 16.2 7.2 19 12 19C13.2 19 14.3 18.8 15.4 18.5" />
                            </svg>
                        </button>

                    </div>

                    <p
                        v-if="form.errors.password"
                        class="mt-2 text-[11px] text-red-400"
                    >
                        {{ form.errors.password }}
                    </p>

                    <p
                        v-if="isEdit && !form.errors.password"
                        class="mt-2 text-[10px] text-white/25"
                    >
                        Leave empty if you don't want to change the password.
                    </p>
                </div>


                <!-- Password Confirmation -->
                <div>
                    <label class="mb-2 block text-xs font-medium text-white/60">
                        Confirm Password

                        <span
                            v-if="!isEdit"
                            class="text-[#C9A227]"
                        >
                            *
                        </span>
                    </label>

                    <div class="relative">

                        <input
                            v-model="form.password_confirmation"
                            :type="showPasswordConfirmation ? 'text' : 'password'"
                            placeholder="Confirm password"
                            autocomplete="new-password"
                            class="h-11 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 pr-11 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20"
                        />

                        <button
                            type="button"
                            class="absolute right-0 top-0 flex h-11 w-11 items-center justify-center text-white/25 hover:text-white/60"
                            @click="showPasswordConfirmation = !showPasswordConfirmation"
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
                        </button>

                    </div>

                    <p
                        v-if="form.errors.password_confirmation"
                        class="mt-2 text-[11px] text-red-400"
                    >
                        {{ form.errors.password_confirmation }}
                    </p>
                </div>


                <!-- Role -->
                <div>
                    <label class="mb-2 block text-xs font-medium text-white/60">
                        Role
                    </label>

                    <select
                        v-model="form.role"
                        class="h-11 w-full rounded-xl border border-white/[0.07] bg-[#111] px-4 text-sm text-white/70 outline-none transition focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20"
                    >
                        <option value="">
                            Select role
                        </option>

                        <option
                            v-for="role in roles"
                            :key="role"
                            :value="role"
                        >
                            {{ role }}
                        </option>
                    </select>

                    <p
                        v-if="form.errors.role"
                        class="mt-2 text-[11px] text-red-400"
                    >
                        {{ form.errors.role }}
                    </p>
                </div>


                <!-- Status -->
                <div>
                    <label class="mb-2 block text-xs font-medium text-white/60">
                        Account Status
                    </label>

                    <select
                        v-model="form.status"
                        class="h-11 w-full rounded-xl border border-white/[0.07] bg-[#111] px-4 text-sm text-white/70 outline-none transition focus:border-[#C9A227]/40 focus:ring-1 focus:ring-[#C9A227]/20"
                    >
                        <option value="active">
                            Active
                        </option>

                        <option value="banned">
                            Banned
                        </option>
                    </select>

                    <p
                        v-if="form.errors.status"
                        class="mt-2 text-[11px] text-red-400"
                    >
                        {{ form.errors.status }}
                    </p>
                </div>

            </div>

        </div>


        <!-- ======================================== -->
        <!-- SUBMIT -->
        <!-- ======================================== -->

        <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
                type="button"
                class="rounded-xl border border-white/[0.07] px-5 py-3 text-xs font-semibold text-white/50 transition hover:bg-white/[0.04] hover:text-white"
                @click="emit('cancel')"
            >
                Cancel
            </button>

            <button
                type="submit"
                :disabled="form.processing"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#d8b33a] disabled:cursor-not-allowed disabled:opacity-50"
            >

                <svg
                    v-if="form.processing"
                    class="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="9"
                        class="opacity-25"
                    />
                    <path
                        d="M21 12A9 9 0 0012 3"
                    />
                </svg>

                {{ form.processing
                    ? 'Saving...'
                    : isEdit
                        ? 'Update User'
                        : 'Create User'
                }}

            </button>

        </div>

    </form>
</template>
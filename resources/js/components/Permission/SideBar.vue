<script setup>
import { Link, usePage } from '@inertiajs/vue3'

const page = usePage()

const permissions = page.props.auth?.permissions ?? []

const can = (permission) => permissions.includes(permission)
</script>

<template>

    <nav class="space-y-1">

        <Link
            v-if="can('dashboard.view')"
            :href="route('dashboard')"
            class="sidebar-link"
        >
            Dashboard
        </Link>

        <Link
            v-if="can('players.view')"
            :href="route('players.index')"
            class="sidebar-link"
        >
            Players
        </Link>

        <Link
            v-if="can('packages.view')"
            :href="route('packages.index')"
            class="sidebar-link"
        >
            Packages
        </Link>

        <Link
            v-if="can('subscriptions.view')"
            :href="route('subscriptions.index')"
            class="sidebar-link"
        >
            Subscriptions
        </Link>

        <Link
            v-if="can('payments.view')"
            :href="route('payments.index')"
            class="sidebar-link"
        >
            Payments
        </Link>

        <Link
            v-if="can('settings.view')"
            :href="route('settings.index')"
            class="sidebar-link"
        >
            Settings
        </Link>

        <Link
            v-if="can('profile.edit')"
            :href="route('profile.edit')"
            class="sidebar-link"
        >
            Profile
        </Link>

        <Link
            v-if="can('password.change')"
            :href="route('password.edit')"
            class="sidebar-link"
        >
            Change Password
        </Link>

    </nav>

</template>
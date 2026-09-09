<script setup>
import AppFooter from '@/components/partials/AppFooter.vue';
import AppHeader from '@/components/partials/AppHeader.vue';


</script>

<template>
    <app-header />
    <slot />
    <app-footer />
</template>
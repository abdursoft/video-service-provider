<template>
    <main>
        <Head title="Create your custom video player" description="Welcome to our home page" />
        <HeroSection />

        <FeatureSection />

        <FeatureSplit />

        <FeatureSplitReverse />

        <CustomersSection />

        <FaqSection />

    </main>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import CustomersSection from '@/components/sections/CustomersSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import FeatureSection from '@/components/sections/FeatureSection.vue'
import FeatureSplit from '@/components/sections/FeatureSplit.vue'
import FeatureSplitReverse from '@/components/sections/FeatureSplitReverse.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import Home from '@/layouts/Home.vue'

defineOptions({
    layout: Home
})
</script>
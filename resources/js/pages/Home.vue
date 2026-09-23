<template>
    <main>
        
        <HeroSection />

        <FeatureSection />

        <FeatureSplit />

        <FeatureSplitReverse />

        <CustomersSection />

        <FaqSection />

        <SeoHead
        title="ESY Player — Customizable Video Player & Embeddable Video Player"
        description="Create customizable, responsive video players and embed them anywhere with ESY Player. Configure your player, branding, controls, playlists, and more."
        url="https://esyplayer.com/"
        image="https://esyplayer.com/logo.png"
        image-alt="ESY Player — Customizable Video Player"
        :structured-data="structuredData"
    />

    </main>
</template>

<script setup>
import CustomersSection from '@/components/sections/CustomersSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import FeatureSection from '@/components/sections/FeatureSection.vue'
import FeatureSplit from '@/components/sections/FeatureSplit.vue'
import FeatureSplitReverse from '@/components/sections/FeatureSplitReverse.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import Home from '@/layouts/Home.vue'
import SeoHead from '@/components/partials/SeoHead.vue'

defineOptions({
    layout: Home
})

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ESY Player',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    url: 'https://esyplayer.com/',
    description:
        'ESY Player is a customizable and embeddable video player platform for websites and online video experiences.',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
}
</script>
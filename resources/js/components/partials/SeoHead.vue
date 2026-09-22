<script setup>
import { Head } from '@inertiajs/vue3'
import { computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'ESY Player',
    },

    description: {
        type: String,
        default:
            'ESY Player is a customizable and embeddable video player platform for websites and online video experiences.',
    },

    url: {
        type: String,
        default: 'https://esyplayer.com/',
    },

    image: {
        type: String,
        default: 'https://esyplayer.com/logo.png',
    },

    imageAlt: {
        type: String,
        default: 'ESY Player — Customizable Video Player',
    },

    type: {
        type: String,
        default: 'website',
    },

    robots: {
        type: String,
        default: 'index, follow',
    },

    siteName: {
        type: String,
        default: 'ESY Player',
    },

    twitterCard: {
        type: String,
        default: 'summary_large_image',
    },

    themeColor: {
        type: String,
        default: '#050505',
    },

    structuredData: {
        type: Object,
        default: null,
    },
})

const jsonLd = computed(() => {
    return (
        props.structuredData ?? {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: props.title,
            description: props.description,
            url: props.url,
        }
    )
})

let jsonLdScript = null

const updateJsonLd = () => {
    if (!jsonLdScript) {
        jsonLdScript = document.createElement('script')

        jsonLdScript.type = 'application/ld+json'
        jsonLdScript.setAttribute('data-esy-seo', 'json-ld')

        document.head.appendChild(jsonLdScript)
    }

    jsonLdScript.textContent = JSON.stringify(jsonLd.value)
}

onMounted(() => {
    updateJsonLd()
})

watch(
    jsonLd,
    () => {
        updateJsonLd()
    },
    {
        deep: true,
    }
)

onBeforeUnmount(() => {
    if (jsonLdScript) {
        jsonLdScript.remove()
        jsonLdScript = null
    }
})
</script>

<template>
    <Head>
        <!-- Basic SEO -->
        <title>{{ title }}</title>

        <meta
            name="description"
            :content="description"
        />

        <meta
            name="robots"
            :content="robots"
        />

        <link
            rel="canonical"
            :href="url"
        />

        <!-- Open Graph -->
        <meta
            property="og:type"
            :content="type"
        />

        <meta
            property="og:title"
            :content="title"
        />

        <meta
            property="og:description"
            :content="description"
        />

        <meta
            property="og:url"
            :content="url"
        />

        <meta
            property="og:site_name"
            :content="siteName"
        />

        <meta
            property="og:image"
            :content="image"
        />

        <meta
            property="og:image:alt"
            :content="imageAlt"
        />

        <!-- Twitter -->
        <meta
            name="twitter:card"
            :content="twitterCard"
        />

        <meta
            name="twitter:title"
            :content="title"
        />

        <meta
            name="twitter:description"
            :content="description"
        />

        <meta
            name="twitter:image"
            :content="image"
        />

        <!-- Theme -->
        <meta
            name="theme-color"
            :content="themeColor"
        />
    </Head>
</template>
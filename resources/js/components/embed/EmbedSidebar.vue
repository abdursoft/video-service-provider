<template>
    <aside class="border-b border-white/[0.08] bg-[#0A0A0A] lg:border-b-0">

        <!-- Mobile tabs -->
        <div class="flex overflow-x-auto p-3 lg:hidden">

            <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="$emit('change', tab.id)"
                class="flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-xs transition"
                :class="activeTab === tab.id
                    ? 'bg-[#C9A227]/10 text-[#C9A227]'
                    : 'text-white/40 hover:text-white'"
            >
                <component
                    :is="tab.icon"
                    class="h-4 w-4 shrink-0"
                    :stroke-width="1.8"
                />

                {{ tab.label }}

                <span
                    v-if="tab.premium"
                    class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                           text-[8px] font-semibold uppercase text-[#C9A227]"
                >
                    PRO
                </span>
            </button>

        </div>


        <!-- Desktop -->
        <div class="hidden p-3 lg:block">

            <p
                class="px-3 py-3 text-[9px] font-semibold uppercase
                       tracking-[0.25em] text-white/25"
            >
                Configuration
            </p>

            <nav class="space-y-1">

                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="$emit('change', tab.id)"
                    class="group flex w-full items-center gap-3
                           rounded-lg px-3 py-3 text-left text-xs transition"
                    :class="activeTab === tab.id
                        ? 'bg-[#C9A227]/10 text-[#C9A227]'
                        : 'text-white/45 hover:bg-white/[0.03] hover:text-white'"
                >

                    <span class="flex w-5 items-center justify-center">
                        <component
                            :is="tab.icon"
                            class="h-4 w-4"
                            :stroke-width="1.8"
                        />
                    </span>

                    <span class="flex-1">
                        {{ tab.label }}
                    </span>

                    <span
                        v-if="tab.premium"
                        class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                               text-[8px] font-semibold uppercase text-[#C9A227]"
                    >
                        PRO
                    </span>

                </button>

            </nav>

        </div>

    </aside>
</template>

<script setup>
import {
    Play,
    Settings2,
    Palette,
    SlidersHorizontal,
    Sparkles,
    Image,
    ListVideo,
    Captions,
    ShieldCheck,
    Megaphone,
    Wrench,
} from 'lucide-vue-next'

defineProps({
    activeTab: {
        type: String,
        default: 'source'
    }
})

defineEmits(['change'])

const tabs = [
    {
        id: 'source',
        label: 'Source',
        icon: Play,
    },
    {
        id: 'playback',
        label: 'Playback',
        icon: Settings2,
    },
    {
        id: 'appearance',
        label: 'Appearance',
        icon: Palette,
    },
    {
        id: 'controls',
        label: 'Controls',
        icon: SlidersHorizontal,
    },
    {
        id: 'branding',
        label: 'Branding',
        icon: Sparkles,
        premium: true,
    },
    {
        id: 'thumbnail',
        label: 'Thumbnail',
        icon: Image,
        premium: true,
    },
    {
        id: 'playlist',
        label: 'Playlist',
        icon: ListVideo,
        premium: true,
    },
    {
        id: 'subtitles',
        label: 'Subtitles',
        icon: Captions,
        premium: true,
    },
    {
        id: 'drm',
        label: 'DRM',
        icon: ShieldCheck,
        premium: true,
    },
    {
        id: 'ads',
        label: 'Advertising',
        icon: Megaphone,
        premium: true,
    },
    {
        id: 'advanced',
        label: 'Advanced',
        icon: Wrench,
        premium: true,
    },
]
</script>
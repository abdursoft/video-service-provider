<template>
    <div>
        <SettingsHeader title="Video Source" description="Tell the player where your video comes from." />

        <div class="mt-8 space-y-7">
            <!-- Source type -->

            <div>
                <label class="setting-label"> Source type </label>

                <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <button v-for="type in sourceTypes" :disabled="type.premium && authStore.status == 'free'"
                        :key="type.value" @click="model.source.type = type.value"
                        class="rounded-xl border p-4 text-left transition" :class="model.source.type === type.value
                            ? 'border-[#C9A227]/40 bg-[#C9A227]/10'
                            : 'border-white/10 hover:border-white/20'
                            ">
                        <div class="text-sm" :class="model.source.type === type.value
                            ? 'text-[#C9A227]'
                            : 'text-white/50'
                            ">
                            {{ type.icon }}

                            <span v-if="type.premium" class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                           text-[8px] font-semibold uppercase
                           text-[#C9A227]">
                                PRO
                            </span>
                        </div>

                        <div class="mt-3 text-xs font-medium text-white">
                            {{ type.label }}
                        </div>

                        <div class="mt-1 text-[10px] text-white/25">
                            {{ type.description }}
                        </div>
                    </button>
                </div>
            </div>

            <!-- URL -->

            <div>
                <label class="setting-label"> Video URL <small>(Enter an MP4, HLS (.m3u8), YouTube or supported media URL.)</small> </label>

                <textarea v-model="model.source.url" rows="4" class="setting-input resize-none"
                    placeholder="https://example.com/video.m3u8" />

                <p class="setting-help">
                    Youtube and Vimeo's private video doesn't playable
                </p>
            </div>

            <!-- Player name -->

            <div>
                <label class="setting-label"> Player name </label>

                <input v-model="model.name" type="text" class="setting-input" placeholder="My Video Player" />
            </div>

            <!-- Test -->

            <div v-if="model.source.url" class="rounded-xl border border-white/[0.07] bg-[#080808] p-4">
                <div class="flex items-center gap-3">
                    <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9A227]/10 text-[#C9A227]">
                        ✓
                    </span>

                    <div>
                        <p class="text-xs font-medium text-white">
                            Source added
                        </p>

                        <p class="mt-1 max-w-md truncate text-[10px] text-white/30">
                            {{ model.source.url }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/Auth.js';
import SettingsHeader from './SettingsHeader.vue';

const authStore = useAuthStore();

const model = defineModel();

const sourceTypes = [
    {
        value: 'url',
        label: 'Direct URL',
        description: 'MP4, HLS, Dash, WEBM, Youtube, Vimeo',
        icon: '↗',
        premium: false
    },

    {
        value: '360',
        label: 'VR 360 Video',
        description: 'Add your 360 VR videos',
        icon: '🥽',
        premium: true
    }
];
</script>

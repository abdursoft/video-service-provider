<template>
    <div>
        <SettingsHeader title="Video Source" description="HTML5 supported any type of videos" />

        <div class="mt-8 space-y-7">
            <!-- URL -->

            <div>
                <label class="setting-label"> Video URL <small>(Enter an MP4, HLS (.m3u8), YouTube or supported media URL.)</small> </label>

                <textarea v-model="model.source.url" rows="4" class="setting-input resize-none"
                    placeholder="https://example.com/video.m3u8" />

                <p class="setting-help !text-yellow-200">
                    Youtube and Vimeo's private video doesn't playable
                </p>
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

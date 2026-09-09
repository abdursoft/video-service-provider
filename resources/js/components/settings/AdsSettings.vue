<template>
    <div>

        <SettingsHeader
            title="Advertising"
            description="Connect a VAST advertising source to your player."
        />


        <div class="mt-8 space-y-7">

            <div
                class="rounded-xl border border-[#C9A227]/20
                       bg-[#C9A227]/5 p-5"
            >

                <div class="flex gap-3">

                    <span class="text-[#C9A227]">
                        ✦
                    </span>

                    <div>

                        <p class="text-xs font-medium text-[#C9A227]">
                            Premium advertising
                        </p>

                        <p class="mt-1 text-xs leading-5 text-white/35">
                            Monetize your videos using a VAST-compatible
                            advertising provider.
                        </p>

                    </div>

                </div>

            </div>


            <!-- Enable -->
            <ToggleRow
                v-model="model.advertising.enabled"
                title="Enable advertising"
                description="Enable ads for this player."
                premium
            />


            <div v-if="model.advertising.enabled">

                <label class="setting-label">
                    VAST URL
                </label>

                <textarea
                    v-model="model.advertising.vastUrl"
                    rows="4"
                    placeholder="https://example.com/vast.xml"
                    class="setting-input resize-none"
                />
                <small class="font-sm text-yellow-500">Player will freez the video, if you have installed ad blocker in your browser</small>

            </div>


            <div v-if="model.advertising.enabled">

                <label class="setting-label">
                    Advertisement type
                </label>

                <div class="mt-3 grid grid-cols-3 gap-2">

                    <button
                        v-for="type in adTypes"
                        :key="type.value"
                        @click="model.advertising.adType = type.value"
                        class="rounded-lg border px-3 py-3
                               text-xs transition"
                        :class="model.advertising.adType === type.value
                            ? 'border-[#C9A227]/40 bg-[#C9A227]/10 text-[#C9A227]'
                            : 'border-white/10 text-white/40'"
                    >
                        {{ type.label }}
                    </button>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue'
import ToggleRow from './ToggleRow.vue'

const model = defineModel()

const adTypes = [
    {
        label: 'Pre-roll',
        value: 'pre-roll'
    },
    {
        label: 'Mid-roll',
        value: 'mid-roll'
    },
    {
        label: 'Post-roll',
        value: 'post-roll'
    }
]
</script>
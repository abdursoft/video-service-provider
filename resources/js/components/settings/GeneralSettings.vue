<template>
    <div>

        <SettingsHeader
            title="General"
            description="Configure the basic settings for your player."
        />


        <div class="mt-8 space-y-7">

            <!-- Name -->
            <div>
                <label class="setting-label">
                    Player name
                </label>

                <input
                    v-model="model.name"
                    type="text"
                    placeholder="My Video Player"
                    class="setting-input"
                />

                <p class="setting-help">
                    Only visible in your dashboard.
                </p>
            </div>


            <!-- Video URL -->
            <div>
                <label class="setting-label">
                    Video URL
                </label>

                <textarea
                    v-model="model.videoUrl"
                    rows="3"
                    placeholder="https://example.com/video.mp4"
                    class="setting-input resize-none"
                />

                <p class="setting-help">
                    Supports direct video URLs and HLS streams.
                </p>
            </div>


            <!-- Player Ratio -->
            <div>

                <label class="setting-label">
                    Player ratio
                </label>

                <div class="grid grid-cols-3 gap-2">

                    <button
                        v-for="ratio in ratios"
                        :key="ratio.value"
                        @click="model.ratio = ratio.value"
                        class="rounded-lg border px-4 py-3 text-xs transition"
                        :class="model.ratio === ratio.value
                            ? 'border-[#C9A227]/50 bg-[#C9A227]/10 text-[#C9A227]'
                            : 'border-white/10 text-white/40 hover:border-white/20'"
                    >
                        {{ ratio.label }}
                    </button>

                </div>

            </div>


            <!-- Toggles -->
            <div class="space-y-3">

                <ToggleRow
                    v-model="model.controls"
                    title="Player controls"
                    description="Show playback controls."
                />

                <ToggleRow
                    v-model="model.autoplay"
                    title="Autoplay"
                    description="Automatically start playback."
                    premium
                />

                <ToggleRow
                    v-model="model.loop"
                    title="Loop"
                    description="Restart the video when it ends."
                    premium
                />

            </div>

        </div>

    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue'
import ToggleRow from './ToggleRow.vue'

const model = defineModel()

const ratios = [
    {
        label: '16:9',
        value: '16:9'
    },
    {
        label: '4:3',
        value: '4:3'
    },
    {
        label: '1:1',
        value: '1:1'
    }
]
</script>
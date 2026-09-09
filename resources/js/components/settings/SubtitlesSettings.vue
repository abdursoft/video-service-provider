<template>
    <div>
        <SettingsHeader
            title="Subtitles"
            description="Add subtitle and caption tracks to your player."
        />

        <div class="mt-8 space-y-7">

            <!-- Enable subtitles -->
            <ToggleRow
                v-model="model.subtitles.enabled"
                title="Enable subtitles"
                description="Allow viewers to select subtitle tracks."
                premium
            />

            <!-- Tracks -->
            <div
                v-if="model.subtitles.enabled"
                class="space-y-4"
            >
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs font-medium text-white/70">
                            Subtitle tracks
                        </p>

                        <p class="mt-1 text-[11px] text-white/25">
                            Add WebVTT (.vtt) subtitle files.
                        </p>
                    </div>

                    <button
                        @click="addTrack"
                        class="rounded-lg border border-[#C9A227]/30
                               bg-[#C9A227]/10 px-3 py-2
                               text-[11px] font-medium text-[#C9A227]
                               transition hover:bg-[#C9A227]/20"
                    >
                        + Add track
                    </button>
                </div>


                <!-- Track cards -->
                <div
                    v-for="(track, index) in model.subtitles.tracks"
                    :key="track.id"
                    class="rounded-xl border border-white/[0.07]
                           bg-[#080808] p-5"
                >

                    <div class="mb-5 flex items-center justify-between">

                        <div class="flex items-center gap-3">

                            <div
                                class="flex h-8 w-8 items-center justify-center
                                       rounded-lg bg-white/[0.04]
                                       text-[10px] text-white/40"
                            >
                                CC
                            </div>

                            <div>
                                <p class="text-xs font-medium text-white">
                                    Track {{ index + 1 }}
                                </p>

                                <p class="mt-1 text-[10px] text-white/25">
                                    WebVTT subtitle
                                </p>
                            </div>

                        </div>

                        <button
                            @click="removeTrack(index)"
                            class="text-[11px] text-white/25
                                   transition hover:text-red-400"
                        >
                            Remove
                        </button>

                    </div>


                    <div class="grid gap-5 sm:grid-cols-2">

                        <!-- Label -->
                        <div>
                            <label class="setting-label">
                                Label
                            </label>

                            <input
                                v-model="track.label"
                                type="text"
                                placeholder="English"
                                class="setting-input"
                            />
                        </div>


                        <!-- Language -->
                        <div>
                            <label class="setting-label">
                                Language
                            </label>

                            <select
                                v-model="track.language"
                                class="setting-input"
                            >
                                <option value="en">
                                    English
                                </option>

                                <option value="bn">
                                    Bengali
                                </option>

                                <option value="es">
                                    Spanish
                                </option>

                                <option value="fr">
                                    French
                                </option>

                                <option value="de">
                                    German
                                </option>

                                <option value="ar">
                                    Arabic
                                </option>

                                <option value="hi">
                                    Hindi
                                </option>
                            </select>
                        </div>

                    </div>


                    <!-- VTT URL -->
                    <div class="mt-5">

                        <label class="setting-label">
                            VTT URL
                        </label>

                        <input
                            v-model="track.url"
                            type="url"
                            placeholder="https://example.com/subtitles/en.vtt"
                            class="setting-input"
                        />

                        <p class="setting-help">
                            The URL must point to a valid WebVTT file.
                        </p>

                    </div>


                    <!-- Default -->
                    <div class="mt-5">

                        <ToggleRow
                            v-model="track.default"
                            title="Default track"
                            description="Use this subtitle automatically when playback starts."
                        />

                    </div>

                </div>


                <!-- Empty -->
                <div
                    v-if="!model.subtitles.tracks.length"
                    class="rounded-xl border border-dashed
                           border-white/10 px-6 py-10 text-center"
                >
                    <div class="text-2xl text-white/10">
                        CC
                    </div>

                    <p class="mt-3 text-xs text-white/35">
                        No subtitle tracks yet
                    </p>

                    <button
                        @click="addTrack"
                        class="mt-4 text-xs text-[#C9A227]
                               hover:underline"
                    >
                        Add your first subtitle
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

const addTrack = () => {
    if (!model.value.subtitles) {
        model.value.subtitles = {
            enabled: true,
            tracks: [],
        }
    }

    if (!Array.isArray(model.value.subtitles.tracks)) {
        model.value.subtitles.tracks = []
    }

    model.value.subtitles.tracks.push({
        id: Date.now(),
        label: 'English',
        language: 'en',
        url: '',
        default: model.value.subtitles.tracks.length === 0,
    })
}


const removeTrack = (index) => {
    if (!model.value.subtitles?.tracks) {
        return
    }

    model.value.subtitles.tracks.splice(index, 1)
}
</script>
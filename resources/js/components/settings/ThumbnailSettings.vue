<template>
    <div>
        <SettingsHeader
            title="Thumbnail"
            description="Choose what viewers see before playback begins."
        />

        <div class="mt-8 space-y-7">
            <div
                class="overflow-hidden rounded-xl border border-white/10 bg-black"
            >
                <div class="aspect-video">
                    <img
                        v-if="model.thumbnail"
                        :src="model.thumbnail.url"
                        class="h-full w-full object-cover"
                        alt=""
                    />

                    <div
                        v-else
                        class="flex h-full items-center justify-center bg-[#080808]"
                    >
                        <span class="text-sm text-white/20">
                            No thumbnail
                        </span>
                    </div>
                </div>
            </div>

            <ToggleRow title="Add thumbnail" v-model="model.thumbnail.enabled" description="Add a video thumbnail or cover image" premium />

            <div
                class="flex cursor-pointer flex-col rounded-xl border border-dashed border-white/10 bg-[#080808] px-6 py-8 transition hover:border-[#C9A227]/40"
                v-if="model.thumbnail.enabled"
                >
                <label class="setting-label"> Thumbnail image </label>
                <input
                    v-model="model.thumbnail.url"
                    type="text"
                    class="setting-input"
                    placeholder="Thumbnail URL"
                />
        </div>
        </div>
    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue';
import ToggleRow from './ToggleRow.vue';

const model = defineModel();

</script>

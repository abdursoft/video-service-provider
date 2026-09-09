<template>
    <div>

        <SettingsHeader title="Playlist"
            description="Create a collection of videos that viewers can watch inside one player." />

        <div class="mt-8 space-y-6">

            <!-- Premium notice -->

            <div class="rounded-xl border border-[#C9A227]/20
                       bg-[#C9A227]/5 p-5">
                <div class="flex items-start gap-3">

                    <span class="flex h-8 w-8 shrink-0 items-center justify-center
                               rounded-lg bg-[#C9A227]/10
                               text-sm text-[#C9A227]">
                        ✦
                    </span>

                    <div>

                        <p class="text-xs font-medium text-[#C9A227]">
                            Premium playlist
                        </p>

                        <p class="mt-1 text-xs leading-5 text-white/35">
                            Add multiple videos to your player and let
                            viewers move between them without leaving
                            the player.
                        </p>

                    </div>

                </div>
            </div>


            <!-- Playlist information -->

            <div class="rounded-xl border border-white/[0.07]
                       bg-[#080808] p-5">

                <div class="mb-5">

                    <p class="text-xs font-medium text-white/70">
                        Playlist details
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Give your playlist a name and optional description.
                    </p>

                </div>


                <div class="space-y-5">

                    <!-- Name -->

                    <div>

                        <label class="setting-label">
                            Playlist name
                        </label>

                        <input :readonly="authStore.status == 'free'" v-model="model.playlist.name" type="text" class="setting-input"
                            placeholder="My Video Playlist" />

                    </div>


                    <!-- Description -->

                    <div>

                        <label class="setting-label">
                            Description
                        </label>

                        <textarea :readonly="authStore.status == 'free'" v-model="model.playlist.description" rows="3" class="setting-input resize-none"
                            placeholder="A collection of my videos..." />

                    </div>


                    <!-- Enable -->

                    <div>
                        <ToggleRow v-model="model.playlist.enabled" title="Enable playlist"
                            description="Show playlist controls inside the player." premium />
                    </div>
                </div>

            </div>


            <!-- Videos -->

            <div v-if="model.playlist.enabled" class="rounded-xl border border-white/[0.07]
                       bg-[#080808] p-5">

                <div class="flex items-center justify-between">

                    <div>

                        <p class="text-xs font-medium text-white/70">
                            Playlist videos
                        </p>

                        <p class="mt-1 text-[11px] text-white/25">
                            {{ model.playlist.items.length }}
                            {{ model.playlist.items.length === 1 ? 'video' : 'videos' }}
                        </p>

                    </div>


                    <button @click="addVideo" class="rounded-lg border border-[#C9A227]/30
                               bg-[#C9A227]/10 px-3 py-2
                               text-[11px] font-medium text-[#C9A227]
                               transition hover:bg-[#C9A227]/20">
                        + Add video
                    </button>

                </div>


                <!-- Video list -->

                <div class="mt-5 space-y-3">

                    <div v-for="(video, index) in model.playlist.items" :key="video.id" class="group rounded-xl border
                               border-white/[0.07]
                               bg-[#050505] p-4">

                        <div class="flex gap-3">

                            <!-- Drag handle -->

                            <div class="flex w-5 shrink-0 cursor-grab
                                       items-center justify-center
                                       text-white/15">
                                ⋮⋮
                            </div>


                            <!-- Number -->

                            <div class="flex h-8 w-8 shrink-0
                                       items-center justify-center
                                       rounded-lg bg-white/[0.04]
                                       text-[10px] text-white/30">
                                {{ index + 1 }}
                            </div>


                            <div class="min-w-0 flex-1">

                                <!-- Title -->

                                <input v-model="video.title" type="text" class="w-full border-0 bg-transparent
                                           p-0 text-xs font-medium
                                           text-white outline-none
                                           placeholder:text-white/20" placeholder="Video title" />


                                <!-- URL -->

                                <input v-model="video.url" type="url" class="mt-2 w-full border-0 bg-transparent
                                           p-0 text-[10px] text-white/30
                                           outline-none
                                           placeholder:text-white/15" placeholder="https://example.com/video.m3u8" />


                                <!-- Thumbnail -->

                                <div class="mt-3">

                                    <input v-model="video.thumbnail" type="url" class="setting-input"
                                        placeholder="Thumbnail URL (optional)" />

                                </div>


                                <!-- Options -->

                                <div class="mt-3 flex flex-wrap gap-2">

                                    <button @click="
                                        video.autoplay =
                                        !video.autoplay
                                        " class="rounded-md border px-2.5 py-1.5
                                               text-[9px] transition" :class="video.autoplay
                                                    ? 'border-[#C9A227]/30 bg-[#C9A227]/10 text-[#C9A227]'
                                                    : 'border-white/10 text-white/25'
                                                ">
                                        Autoplay
                                    </button>

                                </div>

                            </div>


                            <!-- Remove -->

                            <button @click="removeVideo(index)" class="h-8 w-8 shrink-0 rounded-lg
                                       text-white/20 transition
                                       hover:bg-red-500/10
                                       hover:text-red-400" title="Remove video">
                                ×
                            </button>

                        </div>

                    </div>


                    <!-- Empty -->

                    <div v-if="!model.playlist.items.length" class="rounded-xl border border-dashed
                               border-white/10 px-6 py-12 text-center">

                        <div class="mx-auto flex h-12 w-12
                                   items-center justify-center
                                   rounded-xl bg-white/[0.03]
                                   text-xl text-white/10">
                            ▶
                        </div>

                        <p class="mt-4 text-xs text-white/35">
                            Your playlist is empty
                        </p>

                        <p class="mt-1 text-[10px] text-white/20">
                            Add videos to start building your playlist.
                        </p>

                        <button @click="addVideo" class="mt-4 text-xs text-[#C9A227]
                                   hover:underline">
                            + Add first video
                        </button>

                    </div>

                </div>

            </div>


            <!-- Player behavior -->

            <div v-if="model.playlist.enabled &&
                model.playlist.items.length" class="rounded-xl border border-white/[0.07]
                       bg-[#080808] p-5">

                <div class="mb-5">

                    <p class="text-xs font-medium text-white/70">
                        Playlist behavior
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Control how videos behave when a viewer
                        reaches the end.
                    </p>

                </div>


                <div class="space-y-3">

                    <!-- Auto next -->

                    <ToggleRow v-model="model.playlist.autoNext" title="Automatically play next"
                        description="Start the next video when the current video ends." />


                    <!-- Loop -->

                    <ToggleRow v-model="model.playlist.loop" title="Loop playlist"
                        description="Restart the playlist after the last video." />

                </div>

            </div>

        </div>

    </div>
</template>


<script setup>

import { useAuthStore } from '@/stores/Auth.js';
import SettingsHeader from './SettingsHeader.vue'
import ToggleRow from './ToggleRow.vue'

const model = defineModel();

const authStore = useAuthStore();


/*
|--------------------------------------------------------------------------
| Make sure playlist exists
|--------------------------------------------------------------------------
*/

if (!model.value.playlist) {

    model.value.playlist = {
        enabled: false,

        name: '',

        description: '',

        items: [],

        autoNext: true,

        loop: false,
    }

}


if (!Array.isArray(model.value.playlist.items)) {

    model.value.playlist.items = []

}


/*
|--------------------------------------------------------------------------
| Add video
|--------------------------------------------------------------------------
*/

const addVideo = () => {

    model.value.playlist.items.push({

        id: crypto.randomUUID(),

        title:
            `Video ${model.value.playlist.items.length + 1}`,

        url: '',

        thumbnail: '',

        autoplay: false,

    })

}


/*
|--------------------------------------------------------------------------
| Remove video
|--------------------------------------------------------------------------
*/

const removeVideo = (index) => {

    if (!model.value.playlist?.items) {
        return
    }

    model.value.playlist.items.splice(index, 1)

}

</script>
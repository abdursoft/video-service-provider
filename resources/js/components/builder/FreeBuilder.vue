<template>
    <div class="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0D]">
        <!-- Top bar -->
        <div
            class="flex flex-col gap-4 border-b border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p class="text-sm font-medium text-white">
                    Player configuration
                </p>

                <p class="mt-1 text-xs text-white/35">
                    Changes are reflected in the preview.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <button @click="reset"
                    class="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-white/60 transition hover:border-white/20 hover:text-white">
                    Reset
                </button>

                <button @click="generate"
                    class="rounded-lg bg-[#C9A227] px-5 py-2 text-xs font-semibold text-black transition hover:bg-[#E5C766]">
                    Generate Player
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1">
            <!-- Content -->
            <main class="min-w-0">
                <div class="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
                    <!-- Settings -->
                    <div class="min-h-[340px] md:min-h-[450px] border-b border-white/[0.08] p-5 sm:p-8 xl:border-r xl:border-b-0">
                        <SourceFreeSettings v-model="player" />
                    </div>

                    <!-- Preview -->
                    <div class="relative w-full bg-[#080808] p-5 sm:p-8">
                        <div class="relative sticky top-28">
                            <div class="mb-4 flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-medium text-white">
                                        Live Preview
                                    </p>

                                    <p class="mt-1 text-[11px] text-white/30">
                                        Desktop preview
                                    </p>
                                </div>

                                <span class="flex items-center gap-2 text-[10px] text-[#C9A227]">
                                    <span class="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                                    LIVE
                                </span>
                            </div>

                            <VideoPlayer :config="playerData" />

                            <!-- Preview info -->
                            <div class="mt-5">
                                <p class="text-sm font-medium text-white">
                                    {{ player.name || 'Untitled Player' }}
                                </p>

                                <p class="mt-1 text-xs text-white/30">
                                    Preview of your embedded player
                                </p>
                            </div>

                            <!-- Generated result -->
                            <div v-if="generated" class="mt-6 rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/5 p-4">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-xs font-medium text-[#C9A227]">
                                            Player ready
                                        </p>

                                        <p class="mt-1 text-[11px] text-white/40">
                                            Your embed is ready to use.
                                        </p>
                                        <p class="small text-yellow-500" v-if="!user">Free player will be deleted after 72 hours!</p>
                                    </div>
                                    <span class="text-[#C9A227]"> ✓ </span>
                                </div>

                                <button
                                    class="mt-4 flex w-full items-center justify-center rounded-lg bg-[#C9A227] px-4 py-2.5 text-xs font-semibold text-black hover:bg-[#E5C766]">
                                    Copied Embed Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import VideoPlayer from '@/components/player/VideoPlayer.vue';

import generatePlayerConfig from '@/utils/playerConfig.js';
import SourceFreeSettings from '../settings/SourceFreeSettings.vue';
import { useForm, usePage } from '@inertiajs/vue3';
import axios from 'axios';
import Handler from '@/utils/EmbedRender.js';

const page = usePage();

const user = computed(() => page.props.auth.user);

const activeTab = ref('source');

const form = useForm({
    title: null,
    configuration: null
});

const generated = ref(false);
const defaultPlayer = {
    name: 'My Player',

    source: {
        type: 'url',
        url: '',
        sources: [],
        youtubeApiKey: '',
    },

    playback: {
        autoplay: false,
        loop: false,

        speed: [0.5, 1, 1.5, 2],
        defaultSpeed: 1,

        backward: false,
        forward: false,

        pip: false,
        chromecast: false,
    },

    controls: {
        playPause: true,
        previous: false,
        next: false,

        playlist: false,
        settings: true,
        volume: true,
        fullscreen: true,
        share: true,

        background: 'linear-gradient(to top, rgba(0,0,0,.7), transparent)',
        list: [
            {
                id: 1,
                key: 'playPauseControl',
                placement: 'left',
                label: 'Play / Pause',
                description: 'Main playback button.',
            },

            {
                id: 2,
                key: 'playPrev',
                placement: 'hide',
                label: 'Previous',
                description: 'Previous video.',
            },

            {
                id: 3,
                key: 'forwardControl',
                placement: 'left',
                label: 'Forward',
                description: 'Skip forward.',
            },

            {
                id: 4,
                key: 'playNext',
                placement: 'hidden',
                label: 'Next',
                description: 'Next video.',
            },

            {
                id: 5,
                key: 'playlistControl',
                placement: 'hidden',
                label: 'Playlist',
                description: 'Open playlist.',
            },

            {
                id: 6,
                key: 'settingsControl',
                placement: 'right',
                label: 'Settings',
                description: 'Player settings.',
            },

            {
                id: 7,
                key: 'volumeControl',
                placement: 'right',
                label: 'Volume',
                description: 'Volume control.',
            },

            {
                id: 8,
                key: 'screenControl',
                placement: 'right',
                label: 'Fullscreen',
                description: 'Fullscreen mode.',
            },

            {
                id: 9,
                key: 'shareControl',
                placement: 'hidden',
                label: 'Share',
                description: 'Share player.',
            },

            {
                id: 10,
                key: 'speedPlacement',
                placement: 'hidden',
                label: 'Playback Speed',
                description: 'Playback speed selector.',
            },

            {
                id: 11,
                key: 'backwardControl',
                placement: 'hidden',
                label: 'Backward',
                description: 'Skip backward.',
            },

            {
                id: 12,
                key: 'durationArea',
                placement: 'left',
                label: 'Duration',
                description: 'Current time and duration.',
            },

            {
                id: 13,
                key: 'episode',
                placement: 'hidden',
                label: 'Episode',
                description: 'Episode information.',
            },

            {
                id: 14,
                key: 'nextFrame',
                placement: 'hidden',
                label: 'Next Frame',
                description: 'Move forward one frame.',
            },

            {
                id: 15,
                key: 'prevFrame',
                placement: 'hidden',
                label: 'Previous Frame',
                description: 'Move backward one frame.',
            },

            {
                id: 16,
                key: 'flipVideo',
                placement: 'hidden',
                label: 'Flip Video',
                description: 'Flip the video horizontally.',
            },

            {
                id: 17,
                key: 'castControl',
                placement: 'hidden',
                label: 'Chromecast',
                description: 'Cast video to a compatible device.',
            },
        ],
    },

    appearance: {
        background: '#000000',

        iconColor: '#C9A227',

        iconHoverColor: 'rgba(201, 162, 39, 0.88)',

        progressColor: '#C9A227',

        progressBackground: '#f9f9f9',

        progressHeight: 5,

        progressHoverHeight: 8,

        borderRadius: 8,
    },

    branding: {
        enabled: true,

        logo: page.props?.appURL+'/logo.png',

        position: {
            top: '20px',
            right: '20px',
            left: 'auto',
            width: 70,
            height: 65,
            bottom: 'auto',
        },

        opacity: 100,

        keyword: null,

        borderRadius: 50,
    },


    loader:{
        enabled: true,
        icon:1,
        color:'yellow'
    },

    thumbnail: {
        enabled: false,
        url: '',
    },

    iconColor: '#fff',

    // IMPORTANT
    subtitles: {
        enabled: false,
        tracks: [],
    },

    advertising: {
        enabled: false,
        vastUrl: '',
        type: 'pre-roll',
    },

    playlist: {
        enabled: false,
        name: '',
        description: '',
        items: [],
        autoNext: true,
        loop: false,
    },

    drm: {
        enabled: false,

        systems: {
            widevine: {
                enabled: false,
                licenseUrl: '',
            },

            playready: {
                enabled: false,
                licenseUrl: '',
            },

            fairplay: {
                enabled: false,
                licenseUrl: '',
                certificateUrl: '',
            },

            clearkey: {
                enabled: false,
                licenseUrl: '',
            },
        },

        credentials: false,
    },

    advanced: {
        encrypt: false,

        contextMenu: true,

        language: 'EN',

        tooltip: true,

        snap: 'no',

        snapIcon: false,

        analytics: {
            enabled: false,
            tag: '',
            appName: '',
        },
    },
};

const playerData = ref(null);

const player = ref({
    ...defaultPlayer,
});

const reset = () => {
    player.value = {
        ...defaultPlayer,
    };

    generated.value = false;
    activeTab.value = 'source';
};

watch(
    () => player,
    (newPlayer) => {
        playerData.value = generatePlayerConfig(newPlayer.value);
    },
    {
        immediate: true,
        deep: true,
    },
);

const generate = async () => {
    generated.value = true;

    form.configuration = player.value;
    form.title = player.value?.name;

    await axios.post(route('player.store'), {
        title: player.value.name,
        configuration: player.value
    }).then(async (response) => {
        const iframe = Handler.renderIframe(response.data?.player?.token_id, page.props.appURL, form.title, 'watch');
        try {
            await window?.navigator?.clipboard?.writeText(iframe);
            console.log("Copied successfully");
        } catch (error) {
            console.error("Copy failed:", error);
        }
    })


};
</script>

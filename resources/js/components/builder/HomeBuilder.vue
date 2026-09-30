<template>
    <VideoPlayer :config="playerData" />
</template>

<script setup>
import { computed, ref, watch } from 'vue';

import VideoPlayer from '@/components/player/VideoPlayer.vue';

import generatePlayerConfig from '@/utils/playerConfig.js';
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
        url: 'https://pub-78f497904d5e4f7ca831217d5b9cfa93.r2.dev/manifest.mpd',
        sources: [],
        youtubeApiKey: '',
    },

    playback: {
        autoplay: true,
        loop: false,

        speed: [0.5, 1, 1.5, 2],
        defaultSpeed: 1,

        backward: false,
        forward: false,

        pip: false,
        chromecast: false,
    },

    showProgress:false,

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
                placement: 'hidden',
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

    branding: {
        enabled: false,

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

        contextMenu: false,

        language: 'EN',

        tooltip: false,

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

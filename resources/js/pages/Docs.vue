<template>
    <div class="min-h-screen bg-[#050505] text-white">
        <SeoHead title="Documentation — ESY Player"
            description="Learn how to create, customize, configure, and embed ESY Player video players on your website."
            url="https://esyplayer.com/docs" />
        <AppHeader />
        <!-- =====================================================
             DOCUMENTATION LAYOUT
        ====================================================== -->

        <div class="mx-auto flex max-w-7xl">
            <!-- =================================================
                 SIDEBAR
            ================================================== -->

            <aside
                class="sticky top-[73px] hidden h-[calc(100vh-73px)] w-64 shrink-0 overflow-y-auto border-r border-white/[0.06] px-5 py-8 lg:block">
                <nav class="space-y-8">
                    <DocGroup title="Getting started" :items="[
                        ['introduction', 'Introduction'],
                        ['quick-start', 'Quick start'],
                        ['embedding', 'Embedding a player'],
                    ]" :active="activeSection" @select="scrollToSection" />

                    <DocGroup title="Player" :items="[
                        ['sources', 'Video sources'],
                        ['playback', 'Playback'],
                        ['controls', 'Controls'],
                        ['appearance', 'Appearance'],
                        ['branding', 'Branding'],
                        ['thumbnail', 'Thumbnail'],
                        ['subtitles', 'Subtitles'],
                        ['playlist', 'Playlist'],
                        ['advertising', 'Advertising'],
                        ['advanced', 'Advanced'],
                    ]" :active="activeSection" @select="scrollToSection" />

                    <DocGroup title="Embed" :items="[
                        ['generate', 'Generate embed'],
                        ['sharing', 'Sharing'],
                    ]" :active="activeSection" @select="scrollToSection" />

                    <DocGroup title="Reference" :items="[['configuration', 'Configuration']]" :active="activeSection"
                        @select="scrollToSection" />
                </nav>
            </aside>

            <!-- =================================================
                 CONTENT
            ================================================== -->

            <main class="min-w-0 flex-1 px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
                <article class="mx-auto max-w-4xl pt-15">
                    <!-- =========================================
                         INTRODUCTION
                    ========================================== -->

                    <section id="introduction" class="scroll-mt-28 py-5">
                        <Badge> Documentation </Badge>

                        <h1 class="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Build your video player.
                            <span class="text-[#C9A227]"> Your way. </span>
                        </h1>

                        <p class="mt-6 max-w-2xl text-base leading-8 text-white/35">
                            esyPlayer turns your video URL into a professional,
                            customizable video player that can be embedded
                            anywhere with an iframe.
                        </p>

                        <div class="mt-8 rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/[0.04] p-5">
                            <div class="flex gap-4">
                                <div
                                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#C9A227]/10 text-[#C9A227]">
                                    ✦
                                </div>

                                <div>
                                    <p class="text-xs font-semibold text-[#C9A227]">
                                        What is esyPlayer?
                                    </p>

                                    <p class="mt-1 text-xs leading-6 text-white/35">
                                        Create a player, configure it to match
                                        your website, generate an iframe and
                                        share it publicly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- =========================================
                         QUICK START
                    ========================================== -->

                    <section id="quick-start" class="docs-section py-3">
                        <SectionTitle title="Quick start"
                            description="Create your first embeddable player in a few steps." />

                        <div class="mt-8 space-y-4">
                            <Step number="01" title="Add your video"
                                text="Enter a supported video URL in the player builder." />

                            <Step number="02" title="Customize your player"
                                text="Configure playback, controls, appearance, branding and other options." />

                            <Step number="03" title="Generate the player"
                                text="Generate your player configuration and preview it before publishing." />

                            <Step number="04" title="Copy your iframe"
                                text="Copy the generated iframe and place it anywhere on your website." />
                        </div>
                    </section>

                    <!-- =========================================
                         EMBEDDING
                    ========================================== -->

                    <section id="embedding" class="docs-section py-3">
                        <SectionTitle title="Embedding a player"
                            description="Use the generated iframe to display your player on any website." />

                        <CodeBlock :code="iframeCode" />

                        <p class="docs-text">
                            You can place the iframe inside a normal HTML page,
                            Laravel application, WordPress website or any
                            platform that supports iframe embedding.
                        </p>
                    </section>

                    <!-- =========================================
                         VIDEO SOURCES
                    ========================================== -->

                    <section id="sources" class="docs-section py-3">
                        <SectionTitle title="Video sources" description="Configure the source used by your player." />

                        <ConfigTable :items="[
                            ['type', 'Source type.', 'url'],
                            ['url', 'Primary video URL.', 'string'],
                            [
                                'sources',
                                'Multiple available sources.',
                                'array',
                            ],
                            [
                                'youtubeApiKey',
                                'YouTube API key when required.',
                                'string',
                            ],
                        ]" />

                        <CodeBlock :code="sourceCode" />
                    </section>

                    <!-- =========================================
                         PLAYBACK
                    ========================================== -->

                    <section id="playback" class="docs-section py-3">
                        <SectionTitle title="Playback" description="Control how the player behaves during playback." />

                        <ConfigTable :items="[
                            [
                                'autoplay',
                                'Start playback automatically.',
                                'boolean',
                            ],
                            [
                                'loop',
                                'Restart the video after completion.',
                                'boolean',
                            ],
                            [
                                'speed',
                                'Available playback speeds.',
                                'array',
                            ],
                            [
                                'defaultSpeed',
                                'Initial playback speed.',
                                'number',
                            ],
                            [
                                'backward',
                                'Enable backward seeking.',
                                'boolean',
                            ],
                            [
                                'forward',
                                'Enable forward seeking.',
                                'boolean',
                            ],
                            [
                                'pip',
                                'Enable Picture-in-Picture.',
                                'boolean',
                            ],
                            ['chromecast', 'Enable Chromecast.', 'boolean'],
                        ]" />
                    </section>

                    <!-- =========================================
                         CONTROLS
                    ========================================== -->

                    <section id="controls" class="docs-section py-3">
                        <SectionTitle title="Controls"
                            description="Choose which controls appear in your player and where they are placed." />

                        <ConfigTable :items="[
                            [
                                'playPause',
                                'Play / pause button.',
                                'boolean',
                            ],
                            ['previous', 'Previous item.', 'boolean'],
                            ['next', 'Next item.', 'boolean'],
                            ['forward', 'Forward control.', 'boolean'],
                            ['playlist', 'Playlist button.', 'boolean'],
                            ['settings', 'Settings button.', 'boolean'],
                            ['volume', 'Volume control.', 'boolean'],
                            [
                                'fullscreen',
                                'Fullscreen control.',
                                'boolean',
                            ],
                            ['share', 'Share button.', 'boolean'],
                        ]" />

                        <h3 class="docs-subtitle">Control placement</h3>

                        <p class="docs-text">
                            Controls can be assigned to either the left or right
                            side of the player.
                        </p>

                        <CodeBlock :code="controlsCode" />
                    </section>

                    <!-- =========================================
                         APPEARANCE
                    ========================================== -->

                    <section id="appearance" class="docs-section py-3">
                        <SectionTitle title="Appearance" description="Customize the visual appearance of the player." />

                        <ConfigTable :items="[
                            [
                                'background',
                                'Player background color.',
                                'string',
                            ],
                            ['iconColor', 'Control icon color.', 'string'],
                            [
                                'iconHoverColor',
                                'Icon hover color.',
                                'string',
                            ],
                            [
                                'progressColor',
                                'Progress bar color.',
                                'string',
                            ],
                            [
                                'progressBackground',
                                'Progress track color.',
                                'string',
                            ],
                            [
                                'progressHeight',
                                'Normal progress height.',
                                'number',
                            ],
                            [
                                'progressHoverHeight',
                                'Hover progress height.',
                                'number',
                            ],
                            [
                                'borderRadius',
                                'Player border radius.',
                                'number',
                            ],
                        ]" />
                    </section>

                    <!-- =========================================
                         BRANDING
                    ========================================== -->

                    <section id="branding" class="docs-section py-3">
                        <SectionTitle title="Branding" description="Add your own logo or watermark to the player." />

                        <ConfigTable :items="[
                            [
                                'enabled',
                                'Enable player branding.',
                                'boolean',
                            ],
                            ['logo', 'Logo URL.', 'string'],
                            [
                                'position.top',
                                'Distance from top.',
                                'number',
                            ],
                            [
                                'position.right',
                                'Distance from right.',
                                'number',
                            ],
                            ['position.width', 'Logo width.', 'number'],
                            ['position.height', 'Logo height.', 'number'],
                            ['opacity', 'Logo opacity.', 'number'],
                            [
                                'borderRadius',
                                'Logo border radius.',
                                'number',
                            ],
                        ]" />
                    </section>

                    <!-- =========================================
                         THUMBNAIL
                    ========================================== -->

                    <section id="thumbnail" class="docs-section py-3">
                        <SectionTitle title="Thumbnail" description="Use a custom image before video playback." />

                        <CodeBlock :code="thumbnailCode" />
                    </section>

                    <!-- =========================================
                         SUBTITLES
                    ========================================== -->

                    <section id="subtitles" class="docs-section py-3">
                        <SectionTitle title="Subtitles" description="Add subtitle tracks to your player." />

                        <CodeBlock :code="subtitleCode" />

                        <ConfigTable :items="[
                            ['enabled', 'Enable subtitles.', 'boolean'],
                            ['label', 'Track display name.', 'string'],
                            ['language', 'Language code.', 'string'],
                            ['url', 'VTT subtitle URL.', 'string'],
                            [
                                'default',
                                'Default subtitle track.',
                                'boolean',
                            ],
                        ]" />
                    </section>

                    <!-- =========================================
                         PLAYLIST
                    ========================================== -->

                    <section id="playlist" class="docs-section py-3">
                        <SectionTitle title="Playlist" description="Create a collection of videos inside one player." />

                        <CodeBlock :code="playlistCode" />

                        <ConfigTable :items="[
                            ['enabled', 'Enable playlist.', 'boolean'],
                            ['name', 'Playlist name.', 'string'],
                            [
                                'description',
                                'Playlist description.',
                                'string',
                            ],
                            ['items', 'Playlist video items.', 'array'],
                            [
                                'autoNext',
                                'Automatically play next item.',
                                'boolean',
                            ],
                            ['loop', 'Loop the playlist.', 'boolean'],
                        ]" />
                    </section>

                    <!-- =========================================
                         ADVERTISING
                    ========================================== -->

                    <section id="advertising" class="docs-section py-3">
                        <SectionTitle title="Advertising" description="Configure VAST advertising for your player." />

                        <ConfigTable :items="[
                            ['enabled', 'Enable advertising.', 'boolean'],
                            ['vastUrl', 'VAST tag URL.', 'string'],
                            ['type', 'Advertisement placement.', 'string'],
                        ]" />

                        <CodeBlock :code="vastCode" />
                    </section>

                    <!-- =========================================
                         ADVANCED
                    ========================================== -->

                    <section id="advanced" class="docs-section py-3">
                        <SectionTitle title="Advanced" description="Advanced player behavior and analytics options." />

                        <ConfigTable :items="[
                            [
                                'encrypt',
                                'Enable source encryption.',
                                'boolean',
                            ],
                            [
                                'contextMenu',
                                'Enable player context menu.',
                                'boolean',
                            ],
                            [
                                'language',
                                'Player interface language.',
                                'string',
                            ],
                            [
                                'tooltip',
                                'Enable control tooltips.',
                                'boolean',
                            ],
                            ['snap', 'Snap behavior.', 'string'],
                            ['snapIcon', 'Display snap icon.', 'boolean'],
                            [
                                'analytics.enabled',
                                'Enable analytics.',
                                'boolean',
                            ],
                            ['analytics.tag', 'Analytics tag.', 'string'],
                            [
                                'analytics.appName',
                                'Analytics application name.',
                                'string',
                            ],
                        ]" />
                    </section>

                    <!-- =========================================
                         GENERATE
                    ========================================== -->

                    <section id="generate" class="docs-section py-3">
                        <SectionTitle title="Generate embed"
                            description="Turn your configuration into a public player." />

                        <div class="rounded-2xl border border-[#C9A227]/20 bg-[#C9A227]/[0.035] p-6">
                            <p class="text-sm font-medium">Ready to publish?</p>

                            <p class="mt-2 text-xs leading-6 text-white/35">
                                Open the embed builder, provide your video URL,
                                customize the player and generate your iframe.
                            </p>

                            <Link href="/embed"
                                class="mt-5 inline-flex rounded-xl bg-[#C9A227] px-5 py-3 text-xs font-semibold text-black hover:bg-[#d9b63b]">
                                Open Embed Builder
                            </Link>
                        </div>
                    </section>

                    <!-- =========================================
                         SHARING
                    ========================================== -->

                    <section id="sharing" class="docs-section py-3">
                        <SectionTitle title="Sharing" description="Share your generated player with anyone." />

                        <p class="docs-text">
                            Each generated player can be shared publicly using
                            its generated player URL or embedded into another
                            website using an iframe.
                        </p>
                    </section>

                    <!-- =========================================
                         CONFIGURATION
                    ========================================== -->

                    <section id="configuration" class="docs-section py-3">
                        <SectionTitle title="Player configuration" description="Complete configuration structure." />

                        <CodeBlock :code="fullConfig" />
                    </section>
                </article>
            </main>
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';

import Badge from '@/components/docs/Badge.vue';
import CodeBlock from '@/components/docs/CodeBlock.vue';
import ConfigTable from '@/components/docs/ConfigTable.vue';
import DocGroup from '@/components/docs/DocGroup.vue';
import SectionTitle from '@/components/docs/SectionTitle.vue';
import Step from '@/components/docs/Step.vue';
import AppHeader from '@/components/partials/AppHeader.vue';
import SeoHead from '@/components/partials/SeoHead.vue';

const search = ref('');

const activeSection = ref('introduction');

const scrollToSection = (id) => {
    activeSection.value = id;

    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

/*
|--------------------------------------------------------------------------
| Code examples
|--------------------------------------------------------------------------
*/

const iframeCode = `<iframe
    src="https://player.esyplayer.com/PLAYER_ID"
    width="100%"
    height="500"
    frameborder="0"
    allowfullscreen
></iframe>`;

const sourceCode = `source: {
    type: 'url',

    url: 'https://example.com/video.mp4',

    sources: [],

    youtubeApiKey: '',
}`;

const controlsCode = `controls: {
    playPause: true,
    previous: false,
    next: false,

    playlist: true,
    settings: true,
    volume: true,
    fullscreen: true,
    share: true,

    list: [
        {
            key: 'playPause',
            placement: 'left',
        },

        {
            key: 'playlist',
            placement: 'right',
        },

        {
            key: 'settings',
            placement: 'right',
        },
    ],
}`;

const thumbnailCode = `thumbnail: {
    enabled: true,

    url: 'https://example.com/thumbnail.jpg',
}`;

const subtitleCode = `subtitles: {
    enabled: true,

    tracks: [
        {
            id: 'english',

            label: 'English',

            language: 'en',

            url: 'https://example.com/en.vtt',

            default: true,
        },
    ],
}`;

const playlistCode = `playlist: {
    enabled: true,

    name: 'My Course',

    description: 'Course videos',

    items: [
        {
            id: crypto.randomUUID(),

            title: 'Video 1',

            url: 'https://example.com/video-1.mp4',

            thumbnail: 'https://example.com/thumb.jpg',

            autoplay: false,
        },
    ],

    autoNext: true,

    loop: false,
}`;

const vastCode = `advertising: {
    enabled: true,

    vastUrl:
        'https://example.com/vast.xml',

    type: 'pre-roll',
}`;

const fullConfig = `{
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
        backward: true,
        forward: true,
        pip: true,
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

        list: [],
    },

    appearance: {
        background: '#000000',
        iconColor: '#C9A227',
        iconHoverColor:
            'rgba(201, 162, 39, 0.88)',
        progressColor: '#C9A227',
        progressBackground: '#f9f9f9',
        progressHeight: 5,
        progressHoverHeight: 8,
        borderRadius: 8,
    },

    branding: {
        enabled: false,
        logo: '',
        position: {
            top: 10,
            right: 30,
            width: 70,
            height: 65,
        },
        opacity: 100,
        borderRadius: 50,
    },

    thumbnail: {
        enabled: false,
        url: '',
    },

    playlist: {
        enabled: false,
        name: '',
        description: '',
        items: [],
        autoNext: true,
        loop: false,
    },

    subtitles: {
        enabled: false,
        tracks: [],
    },

    advertising: {
        enabled: false,
        vastUrl: '',
        type: 'pre-roll',
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
}`;
</script>

import { toRaw } from 'vue';

export default function generatePlayerConfig(settings) {
    const configs = toRaw(settings);
    const leftControls = [];
    const rightControls = [];

    console.log(configs);

    configs.controls.list.forEach((control) => {
        switch (control.placement) {
            case 'left':
                leftControls.push(control.key);
                break;

            case 'right':
                rightControls.push(control.key);
                break;
        }
    });

    const videoURL = configs.source.url !== "" ? configs.source.url : configs?.playlist?.items;

    const config = {
        id: 'player',

        src: videoURL,

        encrypt: configs.advanced.encrypt,

        autoplay: configs.playback.autoplay,

        background: configs.appearance.background,

        playback: {
            speed: configs.playback.speed,

            default: configs.playback.defaultSpeed,

            placement: {
                content: 'x',
            },
        },

        backward: configs.playback.backward,

        forward: configs.playback.forward,

        pip: configs.playback.pip,

        share: configs.controls.share,

        controls: {
            left: leftControls,

            right: rightControls,

            background: configs.controls.background,
        },

        contextMenu: configs.advanced.contextMenu,

        lang: configs.advanced.language,

        tooltip: configs.advanced.tooltip,
        iconColor: configs?.iconColor,

        iconHoverColor: configs.appearance.iconHoverColor,

        progress: {
            css: {
                width: '98%',

                height: `${configs.appearance.progressHeight}px`,

                position: 'absolute',

                bottom: '50px',

                background: configs.appearance.progressBackground,

                left: '1%',

                right: '1%',

                zIndex: 5,

                borderRadius: '4px',

                cursor: 'pointer',

                overflow: 'hidden',

                transition: 'all 0.3s',
            },

            defaultHeight: `${configs.appearance.progressHeight}px`,

            extendHeight: `${configs.appearance.progressHoverHeight}px`,
        },

        progressTimeline: {
            position: 'absolute',

            width: 0,

            height: '100%',

            top: 0,

            left: 0,

            background: configs.appearance.progressColor,

            cursor: 'pointer',
        },
    };

    /*
    |--------------------------------------------------------------------------
    | Thumbnail
    |--------------------------------------------------------------------------
    */

    if (configs.thumbnail.enabled) {
        config.poster = configs.thumbnail.url;
    }

    /*
    |--------------------------------------------------------------------------
    | Branding
    |--------------------------------------------------------------------------
    */

    if (configs.branding.enabled) {
        config.logo = {
            url: configs.branding.logo,

            position: {
                position: 'absolute',

                width: `${configs.branding.position.width}px`,

                height: `${configs.branding.position.height}px`,

                top: `${configs.branding.position.top}`,

                bottom: `${configs.branding.position.bottom}`,

                right: `${configs.branding.position.right}`,

                zIndex: 4,

                borderRadius: `${configs.branding.borderRadius}%`,

                overflow: 'hidden',

                opacity: configs.branding.opacity / 100,
            },
        };
    }

    /*
    |--------------------------------------------------------------------------
    | Subtitles
    |--------------------------------------------------------------------------
    */

    if (configs.subtitles.enabled && configs.subtitles.tracks.length) {
        config.subtitle = configs.subtitles.tracks;
    }

    /*
    |--------------------------------------------------------------------------
    | Analytics
    |--------------------------------------------------------------------------
    */

    if (configs.advanced.analytics.enabled) {
        config.analytics = {
            tag: configs.advanced.analytics.tag,

            appName: configs.advanced.analytics.appName,
        };
    }

    /*
    |--------------------------------------------------------------------------
    | YouTube
    |--------------------------------------------------------------------------
    */

    if (configs.source.youtubeApiKey) {
        config.ytAPIKey = configs.source.youtubeApiKey;
    }

    /*
    |--------------------------------------------------------------------------
    | 360VR videos
    |--------------------------------------------------------------------------
    */
   if(configs.source.type == '360'){
    config.v360 = true;
   }


    /*
    |--------------------------------------------------------------------------
    | Vast
    |--------------------------------------------------------------------------
    */

    if (configs.advertising.enabled) {
        config.vast = configs.advertising.vastUrl;
    }

    console.log(config);

    return config;
}

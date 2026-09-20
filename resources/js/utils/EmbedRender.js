function renderIframe(token, appURL, title = 'Video Player', path='player') {
    return `<div class="esyPlayer-embed">
    <iframe
        src="${appURL}/${path}/${token}"
        title="${title}"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>

<style>
    .esyPlayer-embed {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }

    .esyPlayer-embed iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
        display: block;
    }
</style>`;
}


async function loadTrunstile() {
    const turnstileScript = document.createElement('script');

    turnstileScript.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

    turnstileScript.async = true;
    turnstileScript.defer = true;

    document.head.appendChild(turnstileScript);
}

function exportToken(){
    return btoa('esyPlayer.com');
}

function getTurnstileToken(container) {
    return new Promise((resolve, reject) => {
        const render = () => {
            if (!window.turnstile) {
                reject(new Error('Turnstile is not loaded.'));
                return;
            }

            window.turnstile.render(container, {
                sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,

                callback: (token) => {
                    resolve(token);
                },

                'expired-callback': () => {
                    resolve('');
                },

                'error-callback': () => {
                    reject(new Error('Turnstile verification failed.'));
                },
            });
        };

        if (window.turnstile) {
            render();
        } else {
            loadTrunstile()
                .then(render)
                .catch(reject);
        }
    });
}


export default {
    loadTrunstile,
    renderIframe,
    exportToken,
    getTurnstileToken,
};
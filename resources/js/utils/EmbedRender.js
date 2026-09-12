import { usePage } from "@inertiajs/vue3";

export default function renderIframe(token){
    const page = usePage();
    return `<div class="esyPlayer-embed">
    <iframe
        src="${page.props.appURL}/watch/${token}"
        title="{TITLE}"
        allow="autoplay; fullscreen; picture-in-picture; playsinline;"
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
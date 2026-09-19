<script setup>
import RenderPlayer from '@/components/player/RenderPlayer.vue';
import generatePlayerConfig from '@/utils/playerConfig';
import { Head, usePage } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
const page = usePage();
const playerData = ref();


onMounted(() => {
    if(page.props?.player){
        playerData.value = generatePlayerConfig(page.props?.player?.configuration);
    }
});

</script>

<template>
    <div class="w-full h-full responsive">
        <Head :title="playerData?.name" />
        <RenderPlayer :config="playerData" />
    </div>
</template>
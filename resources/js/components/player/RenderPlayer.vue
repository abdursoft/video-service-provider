<template>
    <div
        class="group relative aspect-video w-full overflow-hidden
            bg-black shadow-2xl"
    >
        <div id="player" ref="playerElement"></div>
    </div>
</template>

<script setup>
import {
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    toRaw,
    watch,
} from 'vue'

import {Player} from './player'

const props = defineProps({
    config: {
        type: Object,
        default: () => ({}),
    },
})

const playerElement = ref(null)

let playerInstance = null
let initializing = false


const destroyPlayer = () => {

    if (!playerInstance) {
        return
    }

    try {
        playerInstance.destroy?.()
    } catch (error) {
        console.warn('Player destroy error:', error)
    }

    playerInstance = null
}


/*
|--------------------------------------------------------------------------
| Create player
|--------------------------------------------------------------------------
*/

const createPlayer = async () => {

    if (initializing) {
        return
    }

    initializing = true

    try {

        // Destroy existing instance
        destroyPlayer()

        await nextTick()

        if (!playerElement.value) {
            return
        }

        if (!props.config) {
            return
        }


        /*
        |--------------------------------------------------------------------------
        | IMPORTANT
        |--------------------------------------------------------------------------
        | Remove everything created by the previous player.
        |--------------------------------------------------------------------------
        */

        playerElement.value.innerHTML = ''


        /*
        |--------------------------------------------------------------------------
        | Get plain configuration
        |--------------------------------------------------------------------------
        */

        const config = toRaw(props.config)

        console.log('Creating player:', config)


        /*
        |--------------------------------------------------------------------------
        | Create new player
        |--------------------------------------------------------------------------
        */

        playerInstance = Player({
            ...config
        })

    } finally {

        initializing = false

    }
}


/*
|--------------------------------------------------------------------------
| Initial player
|--------------------------------------------------------------------------
*/

onMounted(() => {
    createPlayer()
})


/*
|--------------------------------------------------------------------------
| Watch configuration
|--------------------------------------------------------------------------
*/

watch(
    () => props.config,
    () => {
        createPlayer()
    },
    {
        deep: true,
    }
)


/*
|--------------------------------------------------------------------------
| Cleanup
|--------------------------------------------------------------------------
*/

onBeforeUnmount(() => {

    destroyPlayer()

    if (playerElement.value) {
        playerElement.value.innerHTML = ''
    }

})
</script>
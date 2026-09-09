<template>
    <div>

        <SettingsHeader title="Playback" description="Control how viewers interact with your video." />

        <div class="mt-8 space-y-4">

            <ToggleRow v-model="model.playback.autoplay" title="Autoplay"
                description="Start the video automatically." />

            <ToggleRow v-model="model.playback.loop" title="Loop" description="Restart the video after it ends." />

            <ToggleRow v-model="model.playback.pip" title="Picture in Picture"
                description="Allow the player to float above other content." />

            <ToggleRow v-model="model.playback.chromecast" title="Chromecast"
                description="Allow casting to compatible devices." premium />


            <!-- Speed -->

            <div class="rounded-xl border border-white/[0.07]
                       bg-[#080808] p-5">

                <div class="flex justify-between">

                    <div>

                        <p class="text-sm font-medium text-white">
                            Playback speed
                        </p>

                        <p class="mt-1 text-xs text-white/30">
                            Select available playback speeds.
                        </p>

                    </div>

                </div>


                <div class="mt-5 flex flex-wrap gap-2">

                    <button v-for="speed in speedOptions" :key="speed" @click="toggleSpeed(speed)"
                        class="rounded-lg border px-4 py-2.5 text-xs transition" :class="model.playback.speed.includes(speed)
                                ? 'border-[#C9A227]/40 bg-[#C9A227]/10 text-[#C9A227]'
                                : 'border-white/10 text-white/35'
                            ">
                        {{ speed }}x
                    </button>

                </div>


                <div class="mt-6">

                    <label class="setting-label">
                        Default speed
                    </label>

                    <select v-model.number="model.playback.defaultSpeed" class="setting-input">
                        <option v-for="speed in model.playback.speed" :key="speed" :value="speed">
                            {{ speed }}x
                        </option>
                    </select>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue'
import ToggleRow from './ToggleRow.vue'

const model = defineModel()

/*
|--------------------------------------------------------------------------
| Ensure playback configuration exists
|--------------------------------------------------------------------------
*/

if (!model.value.playback) {
    model.value.playback = {
        autoplay: false,
        loop: false,

        speed: [0.5, 1, 1.5, 2],
        defaultSpeed: 1,

        backward: false,
        forward: false,

        pip: false,
        chromecast: false,
    }
}


/*
|--------------------------------------------------------------------------
| Ensure speed array exists
|--------------------------------------------------------------------------
*/

if (!Array.isArray(model.value.playback.speed)) {
    model.value.playback.speed = [0.5, 1, 1.5, 2]
}


const speedOptions = [
    0.5,
    1,
    1.25,
    1.5,
    1.75,
    2,
]


/*
|--------------------------------------------------------------------------
| Toggle playback speed
|--------------------------------------------------------------------------
*/

const toggleSpeed = (speed) => {

    const speeds = model.value.playback.speed


    // Remove speed
    if (speeds.includes(speed)) {

        // Don't allow all speeds to be removed
        if (speeds.length === 1) {
            return
        }


        model.value.playback.speed =
            speeds
                .filter(item => item !== speed)
                .sort((a, b) => a - b)


        // Reset default speed if it was removed
        if (
            model.value.playback.defaultSpeed === speed
        ) {
            model.value.playback.defaultSpeed =
                model.value.playback.speed.includes(1)
                    ? 1
                    : model.value.playback.speed[0]
        }

        return
    }



    // Add speed
    model.value.playback.speed = ([
        ...speeds,
        speed,
    ].sort((a, b) => a - b))
}

</script>
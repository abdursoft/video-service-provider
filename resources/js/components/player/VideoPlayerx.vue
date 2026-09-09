<template>
    <div class="group relative aspect-video w-full overflow-hidden rounded-2xl
               border border-white/10 bg-black shadow-2xl">

        <!-- Poster -->
        <img v-if="poster" :src="poster" alt="" class="absolute inset-0 h-full w-full object-cover" />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t
                   from-black/80 via-transparent to-black/20" />


        <!-- Center Play -->
        <button @click="togglePlay" class="absolute left-1/2 top-1/2 flex h-16 w-16
                   -translate-x-1/2 -translate-y-1/2 items-center
                   justify-center rounded-full bg-[#C9A227]
                   text-black shadow-[0_0_50px_rgba(201,162,39,0.25)]
                   transition duration-300 hover:scale-110
                   hover:bg-[#E5C766]">
            <svg v-if="!playing" class="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>

            <svg v-else class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
            </svg>
        </button>


        <!-- Controls -->
        <div class="absolute inset-x-0 bottom-0 px-5 pb-4">

            <!-- Progress -->
            <div class="mb-3 h-1 cursor-pointer rounded-full bg-white/20">
                <div class="h-full rounded-full bg-[#C9A227]" :style="{ width: `${progress}%` }" />
            </div>


            <div class="flex items-center justify-between">

                <div class="flex items-center gap-4">

                    <button @click="togglePlay" class="text-white transition hover:text-[#C9A227]">
                        {{ playing ? '❚❚' : '▶' }}
                    </button>

                    <span class="text-xs text-white/70">
                        00:00
                    </span>

                </div>


                <button class="text-white transition hover:text-[#C9A227]">
                    ⛶
                </button>

            </div>

        </div>


        <!-- Watermark -->
        <div class="absolute bottom-16 right-5 select-none text-xs
                   font-semibold tracking-widest text-white/50">
            ESY
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    poster: {
        type: String,
        default: ''
    },

    src: {
        type: String,
        default: ''
    }
})

const playing = ref(false)
const progress = ref(0)

const togglePlay = () => {
    playing.value = !playing.value
}
</script>
<template>
    <div class="border-b border-white/[0.06]">

        <button type="button" class="flex w-full items-center
                   justify-between gap-6 py-6
                   text-left" @click="open = !open">

            <span class="text-sm font-medium
                       transition" :class="open
                            ? 'text-white'
                            : 'text-white/65'
                        ">
                {{ question }}
            </span>


            <span class="flex h-7 w-7 shrink-0
                       items-center justify-center
                       rounded-full border
                       border-white/10
                       text-white/30
                       transition duration-200" :class="open
                            ? 'rotate-45 border-[#C9A227]/30 text-[#C9A227]'
                            : ''
                        ">
                +
            </span>

        </button>


        <div v-if="open" class="overflow-hidden pb-6">

            <p class="max-w-2xl text-xs leading-6
                       text-white/35">
                {{ answer }}
            </p>

        </div>

    </div>
</template>


<script setup>

import { ref } from 'vue'

defineProps({

    question: {
        type: String,
        required: true,
    },

    answer: {
        type: String,
        required: true,
    },

})

const open = ref(false)

</script>
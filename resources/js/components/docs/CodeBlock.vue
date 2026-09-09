<template>

    <div class="group relative mt-6
               overflow-hidden rounded-xl
               border border-white/[0.07]
               bg-[#080808]">

        <div class="flex items-center justify-between
                   border-b border-white/[0.06]
                   px-4 py-3">

            <div class="flex gap-1.5">

                <span class="h-2 w-2 rounded-full
                           bg-white/10" />

                <span class="h-2 w-2 rounded-full
                           bg-white/10" />

                <span class="h-2 w-2 rounded-full
                           bg-white/10" />

            </div>


            <button type="button" class="text-[10px] text-white/25
                       transition hover:text-[#C9A227]" @click="copy">
                {{ copied ? 'Copied!' : 'Copy' }}
            </button>

        </div>


        <pre class="overflow-x-auto p-5
                   text-[12px] leading-6
                   text-white/55"><code>{{ code }}</code></pre>

    </div>

</template>


<script setup>

import { ref } from 'vue'

const props = defineProps({
    code: {
        type: String,
        required: true,
    },
})

const copied = ref(false)


const copy = async () => {

    await navigator.clipboard.writeText(props.code)

    copied.value = true

    setTimeout(() => {
        copied.value = false
    }, 1500)

}

</script>
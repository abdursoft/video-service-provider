<template>

    <div
        class="flex items-center justify-between rounded-xl
               border border-white/[0.07] bg-[#080808] p-4"
    >

        <div class="flex items-center gap-3">

            <div
                class="flex h-9 w-9 items-center justify-center
                       rounded-lg bg-white/[0.03] text-xs text-white/30"
            >
                ≡
            </div>

            <div>

                <p class="text-xs font-medium text-white">
                    {{ title }}
                </p>

                <p class="mt-1 text-[10px] text-white/25">
                    {{ description }}
                </p>

            </div>

        </div>


        <button
            @click="model = !model"
            class="relative h-6 w-11 rounded-full transition"
            :class="model ? 'bg-[#C9A227]' : 'bg-white/10'"
        >

            <span
                class="absolute top-1 h-4 w-4 rounded-full
                       bg-white transition"
                :class="model ? 'left-6' : 'left-1'"
            />

        </button>

    </div>

</template>

<script setup>

const model = defineModel()

defineProps({
    title: String,
    description: String,
})

</script>
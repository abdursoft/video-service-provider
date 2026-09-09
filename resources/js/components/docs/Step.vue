<template>

    <div class="flex gap-5 rounded-xl
               border border-white/[0.06]
               bg-white/[0.015] p-5">

        <div class="flex h-9 w-9 shrink-0
                   items-center justify-center
                   rounded-lg
                   bg-[#C9A227]/[0.08]
                   text-[10px] font-semibold
                   text-[#C9A227]">
            {{ number }}
        </div>


        <div>

            <h3 class="text-sm font-medium
                       text-white/80">
                {{ title }}
            </h3>

            <p class="mt-1 text-xs leading-6
                       text-white/30">
                {{ text }}
            </p>

        </div>

    </div>

</template>


<script setup>

defineProps({
    number: String,
    title: String,
    text: String,
})

</script>
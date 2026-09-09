<template>

    <div class="mt-6 overflow-hidden rounded-xl
               border border-white/[0.07]">

        <div class="grid grid-cols-[1fr_2fr_90px]
                   border-b border-white/[0.06]
                   bg-white/[0.025]
                   px-4 py-3">

            <span class="text-[10px] font-semibold
                       uppercase tracking-wider
                       text-white/25">
                Option
            </span>

            <span class="text-[10px] font-semibold
                       uppercase tracking-wider
                       text-white/25">
                Description
            </span>

            <span class="text-[10px] font-semibold
                       uppercase tracking-wider
                       text-white/25">
                Type
            </span>

        </div>


        <div v-for="(item, index) in items" :key="index" class="grid grid-cols-[1fr_2fr_90px]
                   gap-3 border-b
                   border-white/[0.05]
                   px-4 py-4 last:border-0">

            <code class="text-[11px]
                       text-[#C9A227]">
                {{ item[0] }}
            </code>


            <span class="text-[11px]
                       leading-5 text-white/35">
                {{ item[1] }}
            </span>


            <span class="text-[10px]
                       text-white/25">
                {{ item[2] }}
            </span>

        </div>

    </div>

</template>


<script setup>

defineProps({

    items: {
        type: Array,
        default: () => [],
    },

})

</script>

<style scoped>
.docs-section {
    scroll-margin-top: 110px;
    margin-top: 110px;
}

.docs-text {
    margin-top: 24px;
    font-size: 0.875rem;
    line-height: 1.75rem;
    color: rgb(255 255 255 / 0.35);
}

.docs-subtitle {
    margin-top: 40px;
    font-size: 0.875rem;
    font-weight: 600;
    color: rgb(255 255 255 / 0.75);
}
</style>
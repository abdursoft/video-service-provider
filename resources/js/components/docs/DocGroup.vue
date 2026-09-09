<template>
    <div>

        <p class="mb-3 px-3 text-[10px]
                   font-semibold uppercase
                   tracking-[0.15em]
                   text-white/25">
            {{ title }}
        </p>


        <div class="space-y-0.5">

            <button v-for="item in items" :key="item[0]" type="button" class="w-full rounded-lg px-3 py-2
                       text-left text-xs transition" :class="active === item[0]
                            ? 'bg-[#C9A227]/[0.08] text-[#C9A227]'
                            : 'text-white/35 hover:bg-white/[0.03] hover:text-white/70'
                        " @click="$emit('select', item[0])">
                {{ item[1] }}
            </button>

        </div>

    </div>
</template>


<script setup>

defineProps({

    title: String,

    items: {
        type: Array,
        default: () => [],
    },

    active: String,

})

defineEmits(['select'])

</script>
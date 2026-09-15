<template>
    <div
        class="group rounded-2xl border border-white/[0.07]
               bg-[#090909] p-6
               transition-all duration-300
               hover:-translate-y-1
               hover:border-[#C9A227]/20
               hover:bg-[#0c0c0b]"
    >
        <!-- Icon -->
        <div
            class="flex h-10 w-10 items-center justify-center
                   rounded-xl border border-[#C9A227]/20
                   bg-[#C9A227]/[0.06]
                   text-[#C9A227]"
        >
            <component
                :is="iconComponent"
                class="h-5 w-5"
                :stroke-width="1.6"
            />
        </div>

        <!-- Content -->
        <h3
            class="mt-5 text-sm font-semibold
                   text-white/85"
        >
            {{ title }}
        </h3>

        <p
            class="mt-2 text-xs leading-6
                   text-white/30"
        >
            {{ description }}
        </p>

        <!-- Bottom accent -->
        <div
            class="mt-6 h-px w-8
                   bg-[#C9A227]/30
                   transition-all duration-300
                   group-hover:w-14
                   group-hover:bg-[#C9A227]"
        ></div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

import {
    Code2,
    SlidersHorizontal,
    ListVideo,
    CircleDollarSign,
} from 'lucide-vue-next';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    icon: {
        type: String,
        default: 'embed',
    },
});

const iconMap = {
    embed: Code2,
    customize: SlidersHorizontal,
    playlist: ListVideo,
    monetize: CircleDollarSign,
};

const iconComponent = computed(() => {
    return iconMap[props.icon] ?? Code2;
});
</script>
<template>

    <div>

        <h2 class="text-2xl font-semibold
                   tracking-tight text-white">
            {{ title }}
        </h2>

        <p v-if="description" class="mt-3 max-w-2xl
                   text-sm leading-6
                   text-white/35">
            {{ description }}
        </p>

    </div>

</template>


<script setup>

defineProps({
    title: String,
    description: String,
})

</script>
<template>
    <div>

        <h2 class="text-xl font-semibold text-white">
            {{ title }}
        </h2>

        <p class="mt-2 text-sm leading-6 text-white/35">
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
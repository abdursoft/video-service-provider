<template>
    <div class="group relative overflow-hidden rounded-2xl
               border border-white/[0.07] bg-[#0D0D0D]
               p-7 transition duration-500
               hover:-translate-y-1
               hover:border-[#C9A227]/30">

        <!-- Background glow -->
        <div class="pointer-events-none absolute -right-16 -top-16
                   h-32 w-32 rounded-full bg-[#C9A227]/10
                   opacity-0 blur-3xl transition duration-500
                   group-hover:opacity-100" />


        <!-- Number -->
        <div class="flex h-10 w-10 items-center justify-center
                   rounded-xl border border-[#C9A227]/20
                   bg-[#C9A227]/5">
            <span class="text-xs font-semibold tracking-widest
                       text-[#C9A227]">
                {{ number }}
            </span>
        </div>


        <h3 class="mt-8 text-lg font-medium text-white">
            {{ title }}
        </h3>


        <p class="mt-3 text-sm leading-7 text-white/40">
            {{ description }}
        </p>


        <div class="mt-7 h-px w-8 bg-[#C9A227]/40
                   transition-all duration-500
                   group-hover:w-16" />

    </div>
</template>

<script setup>
defineProps({
    number: String,
    title: String,
    description: String,
})
</script>
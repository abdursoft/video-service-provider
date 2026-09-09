<template>
    <div class="group rounded-2xl border border-white/[0.07]
               bg-[#090909] p-6
               transition-all duration-300
               hover:-translate-y-1
               hover:border-[#C9A227]/20
               hover:bg-[#0c0c0b]">

        <!-- Icon -->

        <div class="flex h-10 w-10 items-center justify-center
                   rounded-xl border border-[#C9A227]/20
                   bg-[#C9A227]/[0.06]
                   text-[#C9A227]">

            <svg v-if="icon === 'embed'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6">
                <path d="m8 9-4 3 4 3" stroke-linecap="round" stroke-linejoin="round" />

                <path d="m16 9 4 3-4 3" stroke-linecap="round" stroke-linejoin="round" />

                <path d="m14 5-4 14" stroke-linecap="round" />
            </svg>


            <svg v-else-if="icon === 'customize'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6">
                <path d="M12 3v18" stroke-linecap="round" />

                <path d="M3 12h18" stroke-linecap="round" />

                <circle cx="12" cy="12" r="8" />
            </svg>


            <svg v-else-if="icon === 'playlist'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6">
                <rect x="3" y="4" width="14" height="16" rx="2" />

                <path d="M7 8h6" stroke-linecap="round" />

                <path d="M7 12h6" stroke-linecap="round" />

                <path d="M7 16h4" stroke-linecap="round" />

                <path d="M19 9v8" stroke-linecap="round" />

                <path d="M16 14h6" stroke-linecap="round" />
            </svg>


            <svg v-else-if="icon === 'monetize'" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6">
                <circle cx="12" cy="12" r="9" />

                <path d="M15 8.5c-.7-.7-1.7-1-3-1
                       -1.7 0-3 .9-3 2.2
                       0 1.4 1.2 1.9 3 2.3
                       1.8.4 3 1 3 2.4
                       0 1.4-1.3 2.3-3 2.3
                       -1.3 0-2.5-.4-3.2-1.2" stroke-linecap="round" />

                <path d="M12 6v12" stroke-linecap="round" />
            </svg>

        </div>


        <!-- Content -->

        <h3 class="mt-5 text-sm font-semibold
                   text-white/85">
            {{ title }}
        </h3>


        <p class="mt-2 text-xs leading-6
                   text-white/30">
            {{ description }}
        </p>


        <!-- Bottom accent -->

        <div class="mt-6 h-px w-8
                   bg-[#C9A227]/30
                   transition-all duration-300
                   group-hover:w-14
                   group-hover:bg-[#C9A227]" />

    </div>
</template>


<script setup>

defineProps({

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

})

</script>
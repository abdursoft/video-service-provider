<template>
    <section class="bg-[#050505] px-5 py-24 lg:px-8">

        <div class="mx-auto max-w-7xl">

            <div class="text-center">

                <p class="text-[10px] font-semibold uppercase
                           tracking-[0.3em] text-white/30">
                    Trusted by creators and businesses
                </p>

            </div>


            <div class="mt-12 grid grid-cols-2 divide-x divide-y
                       divide-white/[0.06] border-y border-white/[0.06]
                       md:grid-cols-4 md:divide-y-0">

                <div v-for="customer in customers" :key="customer" class="flex h-28 items-center justify-center
                           px-6">
                    <span class="text-sm font-semibold tracking-[0.2em]
                               text-white/20 transition hover:text-white/50">
                        {{ customer }}
                    </span>
                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
const customers = [
    'STUDIO',
    'CREATIVE',
    'MEDIA',
    'DIGITAL',
]
</script>
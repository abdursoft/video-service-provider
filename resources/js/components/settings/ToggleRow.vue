<template>
    <div
        class="flex items-center justify-between rounded-xl
               border border-white/[0.07] bg-[#0A0A0A] p-4"
    >

        <div class="pr-6">

            <div class="flex items-center gap-2">

                <h3 class="text-sm font-medium text-white">
                    {{ title }}
                </h3>

                <span
                    v-if="premium"
                    class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                           text-[8px] font-semibold uppercase
                           text-[#C9A227]"
                >
                    PRO
                </span>

            </div>

            <p class="mt-1 text-xs leading-5 text-white/30">
                {{ description }}
            </p>

        </div>


        <button
            @click="model = !model"
            class="relative h-6 w-11 shrink-0 rounded-full transition"
            :class="model ? 'bg-[#C9A227]' : 'bg-white/10'"
            :disabled="authStore.status == 'free' && premium"
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
import { useAuthStore } from '@/stores/Auth';

const model = defineModel()

const authStore = useAuthStore();
console.log(authStore.status)

defineProps({
    title: String,
    description: String,
    premium: Boolean,
})
</script>
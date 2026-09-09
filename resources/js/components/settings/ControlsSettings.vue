<template>
    <div>

        <SettingsHeader
            title="Controls"
            description="Choose which controls appear in your player and where they are placed."
        />

        <div class="mt-8 space-y-3">

            <div
                v-for="control in model.controls.list"
                :key="control.id"
                class="rounded-xl border border-white/10
                       bg-white/[0.02] p-4"
            >

                <div class="flex items-center justify-between gap-5">

                    <div class="min-w-0">

                        <p class="text-sm font-medium text-white/80">
                            {{ control.label }}
                        </p>

                        <p class="mt-1 text-[11px] text-white/30">
                            {{ control.description }}
                        </p>

                    </div>


                    <div
                        class="flex shrink-0 rounded-lg border
                               border-white/10 bg-black p-1"
                    >

                        <button
                            v-for="option in placementOptions"
                            :key="option.value"
                            type="button"
                            @click="control.placement = option.value"
                            class="min-w-[58px] rounded-md px-3 py-2
                                   text-[11px] font-medium transition"
                            :class="
                                control.placement === option.value
                                    ? 'bg-[#C9A227] text-black'
                                    : 'text-white/35 hover:text-white/70'
                            "
                        >
                            {{ option.label }}
                        </button>

                    </div>

                </div>

            </div>

        </div>


        <div class="mt-8">

            <label class="setting-label">
                Control background
            </label>

            <input
                v-model="model.controls.background"
                type="text"
                class="setting-input"
            />

        </div>

    </div>
</template>

<script setup>

import SettingsHeader from './SettingsHeader.vue'

const model = defineModel()

const placementOptions = [
    {
        value: 'hidden',
        label: 'Hidden',
    },
    {
        value: 'left',
        label: 'Left',
    },
    {
        value: 'right',
        label: 'Right',
    },
]

</script>
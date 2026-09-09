<template>
    <div>
        <SettingsHeader title="Branding" description="Add your own identity to the video player." />

        <div class="mt-8 space-y-8">
            <!-- Premium notice -->
            <div class="rounded-xl border border-[#C9A227]/20 bg-[#C9A227]/5 p-4">
                <div class="flex gap-3">
                    <div class="text-[#C9A227]">✦</div>

                    <div>
                        <p class="text-xs font-medium text-[#C9A227]">
                            Premium feature
                        </p>

                        <p class="mt-1 text-xs leading-5 text-white/35">
                            Custom branding and watermarking are available on
                            premium plans.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Watermark -->
            <div>
                <ToggleRow v-model="model.branding.enabled" title="Enable watermark"
                    description="Display your logo on the player." premium />
            </div>

            <!-- Upload -->
            <div v-if="model.branding.enabled">
                <label class="setting-label"> Watermark image </label>
                <input v-model="model.branding.logo" type="text" class="setting-input" placeholder="Logo URL" />
            </div>

            <!-- Position -->
            <div v-if="model.branding.enabled">
                <label class="setting-label"> Position </label>

                <div class="mt-3 grid grid-cols-2 gap-2">
                    <button v-for="position in positions" :key="position.value"
                        @click="handlePosition(position.value)"
                        class="rounded-lg border px-3 py-3 text-xs transition" :class="model.branding.keyword === position.value
                                ? 'border-[#C9A227]/40 bg-[#C9A227]/10 text-[#C9A227]'
                                : 'border-white/10 text-white/40'
                            ">
                        {{ position.label }}
                    </button>
                </div>
            </div>

            <!-- Opacity -->
            <div v-if="model.branding.enabled">
                <div class="flex justify-between">
                    <label class="setting-label"> Opacity </label>

                    <span class="text-xs text-white/40">
                        {{ model.branding.opacity }}%
                    </span>
                </div>

                <input v-model="model.branding.opacity" type="range" min="10" max="100"
                    class="mt-4 w-full accent-[#C9A227]" />
            </div>
        </div>
    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue';
import ToggleRow from './ToggleRow.vue';


const model = defineModel();

const positions = [
    {
        label: 'Top left',
        value: 'top-left',
    },
    {
        label: 'Top right',
        value: 'top-right',
    },
    {
        label: 'Bottom left',
        value: 'bottom-left',
    },
    {
        label: 'Bottom right',
        value: 'bottom-right',
    },
];

function handlePosition(pos){
    model.value.branding.keyword = pos

    if(pos == 'top-left'){
        model.value.branding.position.top = '10px';
        model.value.branding.position.bottom = 'auto';
        model.value.branding.position.left = '30px';
        model.value.branding.position.right = 'auto';
    }

    if(pos == 'top-right'){
        model.value.branding.position.top = '10px';
        model.value.branding.position.bottom = 'auto';
        model.value.branding.position.right = '20px';
        model.value.branding.position.left = 'auto';
    }

    if(pos == 'bottom-left'){
        model.value.branding.position.top = 'auto';
        model.value.branding.position.bottom = '60px';
        model.value.branding.position.left = '30px';
        model.value.branding.position.right = 'auto';
    }

    if(pos == 'bottom-right'){
        model.value.branding.position.top = 'auto';
        model.value.branding.position.bottom = '60px';
        model.value.branding.position.right = '20px';
        model.value.branding.position.left = 'auto';
    }
}
</script>

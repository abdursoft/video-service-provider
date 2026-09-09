<template>
    <div>

        <SettingsHeader
            title="Appearance"
            description="Customize the look and feel of your player."
        />


        <div class="mt-8 space-y-8">

            <!-- Theme -->
            <div>

                <label class="setting-label">
                    Player theme
                </label>

                <div class="grid grid-cols-3 gap-3">

                    <button
                        v-for="theme in themes"
                        :key="theme.value"
                        @click="model.theme = theme.value"
                        class="rounded-xl border p-4 text-left transition"
                        :class="model.theme === theme.value
                            ? 'border-[#C9A227]/50 bg-[#C9A227]/10'
                            : 'border-white/10 hover:border-white/20'"
                    >

                        <div
                            class="h-12 rounded-lg"
                            :class="theme.preview"
                        />

                        <p
                            class="mt-3 text-xs"
                            :class="model.theme === theme.value
                                ? 'text-[#C9A227]'
                                : 'text-white/50'"
                        >
                            {{ theme.label }}
                        </p>

                    </button>

                </div>

            </div>


            <!-- Accent -->
            <div>

                <label class="setting-label">
                    Accent color
                </label>

                <div class="flex gap-3">

                    <button
                        v-for="color in colors"
                        :key="color"
                        @click="model.accentColor = color"
                        class="h-9 w-9 rounded-full border-2 transition"
                        :style="{ backgroundColor: color }"
                        :class="model.accentColor === color
                            ? 'border-white scale-110'
                            : 'border-transparent'"
                    />

                </div>

            </div>


            <!-- Border radius -->
            <div>

                <div class="flex justify-between">

                    <label class="setting-label">
                        Corner radius
                    </label>

                    <span class="text-xs text-white/40">
                        {{ model.radius || 12 }}px
                    </span>

                </div>

                <input
                    v-model="model.radius"
                    type="range"
                    min="0"
                    max="24"
                    class="mt-4 w-full accent-[#C9A227]"
                />

            </div>

        </div>

    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue'

const model = defineModel()

const themes = [
    {
        label: 'Dark',
        value: 'dark',
        preview: 'bg-[#050505] border border-white/10'
    },
    {
        label: 'Light',
        value: 'light',
        preview: 'bg-white'
    },
    {
        label: 'Cinema',
        value: 'cinema',
        preview: 'bg-gradient-to-br from-[#050505] to-[#2b2110]'
    }
]

const colors = [
    '#C9A227',
    '#FFFFFF',
    '#E11D48',
    '#2563EB',
    '#10B981',
]

</script>
<template>
    <div>
        <SettingsHeader
            title="Advanced"
            description="Configure advanced player behavior and integrations."
        />

        <div class="mt-8 space-y-8">

            <!-- Security -->
            <section>

                <div class="mb-4">
                    <p class="text-xs font-medium text-white/70">
                        Security
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Configure player protection features.
                    </p>
                </div>


                <div class="space-y-3">

                    <ToggleRow
                        v-model="model.advanced.encrypt"
                        title="Encryption"
                        description="Enable encrypted player configuration."
                        premium
                    />

                    <ToggleRow
                        v-model="model.advanced.contextMenu"
                        title="Context menu"
                        description="Hide default player context menu."
                        premium
                    />

                </div>

            </section>


            <!-- Interface -->
            <section>

                <div class="mb-4">
                    <p class="text-xs font-medium text-white/70">
                        Interface
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Configure player interface behavior.
                    </p>
                </div>


                <div class="space-y-6">

                    <!-- Language -->
                    <div>

                        <label class="setting-label">
                            Player language
                        </label>

                        <select
                            v-model="model.advanced.language"
                            class="setting-input"
                        >
                            <option value="EN">
                                English
                            </option>

                            <option value="BN">
                                Bengali
                            </option>

                            <option value="ES">
                                Spanish
                            </option>

                            <option value="FR">
                                French
                            </option>

                            <option value="DE">
                                German
                            </option>

                            <option value="AR">
                                Arabic
                            </option>

                            <option value="HI">
                                Hindi
                            </option>
                        </select>

                    </div>


                    <ToggleRow
                        v-model="model.advanced.tooltip"
                        title="Tooltips"
                        description="Show helpful labels when hovering player controls."
                    />

                </div>

            </section>


            <!-- Snap -->
            <section>

                <div class="mb-4">
                    <p class="text-xs font-medium text-white/70">
                        Snap
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Configure video snapping behavior.
                    </p>
                </div>


                <div class="grid gap-5 sm:grid-cols-2">

                    <div>

                        <label class="setting-label">
                            Snap mode
                        </label>

                        <select
                            v-model="model.advanced.snap"
                            class="setting-input"
                        >
                            <option value="no">
                                Disabled
                            </option>

                            <option value="yes">
                                Enabled
                            </option>

                            <option value="auto">
                                Auto
                            </option>
                        </select>

                    </div>


                    <div class="flex items-end">

                        <div class="w-full">
                            <ToggleRow
                                v-model="model.advanced.snapIcon"
                                title="Snap icon"
                                description="Display snap control icon."
                            />
                        </div>

                    </div>

                </div>

            </section>


            <!-- Analytics -->
            <section>

                <div class="mb-4">

                    <div class="flex items-center gap-2">

                        <p class="text-xs font-medium text-white/70">
                            Analytics
                        </p>

                        <span
                            class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                                   text-[8px] font-semibold uppercase
                                   text-[#C9A227]"
                        >
                            PRO
                        </span>

                    </div>

                    <p class="mt-1 text-[11px] text-white/25">
                        Connect player events to your analytics platform.
                    </p>

                </div>


                <div class="space-y-5">

                    <ToggleRow
                        v-model="model.advanced.analytics.enabled"
                        title="Enable analytics"
                        description="Send player analytics events."
                        premium
                    />


                    <div
                        v-if="model.advanced.analytics.enabled"
                        class="grid gap-5 sm:grid-cols-2"
                    >

                        <div>

                            <label class="setting-label">
                                Analytics tag
                            </label>

                            <input
                                v-model="model.advanced.analytics.tag"
                                type="text"
                                placeholder="G-FKJ9WK8CE5"
                                class="setting-input"
                            />

                        </div>


                        <div>

                            <label class="setting-label">
                                Application name
                            </label>

                            <input
                                v-model="model.advanced.analytics.appName"
                                type="text"
                                placeholder="My Video Platform"
                                class="setting-input"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <!-- YouTube -->
            <section>

                <div class="mb-4">

                    <p class="text-xs font-medium text-white/70">
                        YouTube
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Configure YouTube API access for playlist playback.
                    </p>

                </div>


                <div>

                    <label class="setting-label">
                        YouTube API key <span class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                           text-[8px] font-semibold uppercase
                           text-[#C9A227]">pro</span>
                    </label>

                    <input
                        v-model="model.source.youtubeApiKey"
                        type="password"
                        autocomplete="off"
                        placeholder="AIza..."
                        class="setting-input"
                        :readonly="authStore.status == 'free'"
                    />

                    <p class="setting-help">
                        Required when using the player's YouTube playlist
                        functionality.
                    </p>

                </div>

            </section>

        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/Auth.js';
import SettingsHeader from './SettingsHeader.vue'
import ToggleRow from './ToggleRow.vue'

const model = defineModel();
const authStore = useAuthStore();
</script>
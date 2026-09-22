<template>
    <div>
        <SettingsHeader
            title="DRM"
            description="Protect your video content with browser-supported DRM."
        />

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
                            DRM protected playback is available on premium
                            plans.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Enable DRM -->
            <div>
                <ToggleRow
                    v-model="model.drm.enabled"
                    title="Enable DRM"
                    description="Enable encrypted media playback for this player."
                    premium
                />
            </div>

            <!-- DRM configuration -->
            <div
                v-if="model.drm.enabled"
                class="space-y-8"
            >

                <!-- DRM Systems -->
                <div>
                    <label class="setting-label">
                        DRM systems
                    </label>

                    <p class="mt-1 text-xs text-white/30">
                        Select the DRM systems supported by your content.
                    </p>

                    <div class="mt-4 space-y-3">

                        <!-- Widevine -->
                        <div
                            class="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                            <ToggleRow
                                v-model="model.drm.systems.widevine.enabled"
                                title="Widevine"
                                description="Google Widevine for Chrome, Android and compatible browsers."
                            />

                            <div
                                v-if="model.drm.systems.widevine.enabled"
                                class="mt-4"
                            >
                                <label class="setting-label">
                                    License URL
                                </label>

                                <input
                                    v-model="model.drm.systems.widevine.licenseUrl"
                                    type="url"
                                    class="setting-input mt-2"
                                    placeholder="https://license.example.com/widevine"
                                />
                            </div>
                        </div>

                        <!-- PlayReady -->
                        <div
                            class="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                            <ToggleRow
                                v-model="model.drm.systems.playready.enabled"
                                title="PlayReady"
                                description="Microsoft PlayReady for compatible browsers and devices."
                            />

                            <div
                                v-if="model.drm.systems.playready.enabled"
                                class="mt-4"
                            >
                                <label class="setting-label">
                                    License URL
                                </label>

                                <input
                                    v-model="model.drm.systems.playready.licenseUrl"
                                    type="url"
                                    class="setting-input mt-2"
                                    placeholder="https://license.example.com/playready"
                                />
                            </div>
                        </div>

                        <!-- FairPlay -->
                        <div
                            class="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                            <ToggleRow
                                v-model="model.drm.systems.fairplay.enabled"
                                title="FairPlay"
                                description="Apple FairPlay Streaming for Safari and Apple devices."
                            />

                            <div
                                v-if="model.drm.systems.fairplay.enabled"
                                class="mt-4 space-y-4"
                            >
                                <div>
                                    <label class="setting-label">
                                        License URL
                                    </label>

                                    <input
                                        v-model="model.drm.systems.fairplay.licenseUrl"
                                        type="url"
                                        class="setting-input mt-2"
                                        placeholder="https://license.example.com/fairplay"
                                    />
                                </div>

                                <div>
                                    <label class="setting-label">
                                        Certificate URL
                                    </label>

                                    <input
                                        v-model="model.drm.systems.fairplay.certificateUrl"
                                        type="url"
                                        class="setting-input mt-2"
                                        placeholder="https://license.example.com/fairplay/certificate"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- ClearKey -->
                        <div
                            class="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                            <ToggleRow
                                v-model="model.drm.systems.clearkey.enabled"
                                title="ClearKey"
                                description="W3C ClearKey for testing and compatible environments."
                            />

                            <div
                                v-if="model.drm.systems.clearkey.enabled"
                                class="mt-4"
                            >
                                <label class="setting-label">
                                    License URL
                                </label>

                                <input
                                    v-model="model.drm.systems.clearkey.licenseUrl"
                                    type="url"
                                    class="setting-input mt-2"
                                    placeholder="https://license.example.com/clearkey"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Credentials -->
                <div>
                    <ToggleRow
                        v-model="model.drm.credentials"
                        title="Send credentials"
                        description="Include cookies and credentials when requesting DRM licenses."
                    />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import SettingsHeader from './SettingsHeader.vue'
import ToggleRow from './ToggleRow.vue'

const model = defineModel()
</script>
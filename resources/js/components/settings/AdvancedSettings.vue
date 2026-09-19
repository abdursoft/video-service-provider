<template>
    <div>
        <SettingsHeader title="Advanced" description="Configure advanced player behavior and integrations." />

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

                    <ToggleRow v-model="model.advanced.encrypt" title="Encryption"
                        description="Enable encrypted player configuration." premium />

                    <ToggleRow v-model="model.advanced.contextMenu" title="Context menu"
                        description="Hide default player context menu." premium />

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

                        <select v-model="model.advanced.language" class="setting-input">
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


                    <ToggleRow v-model="model.advanced.tooltip" title="Tooltips"
                        description="Show helpful labels when hovering player controls." />

                </div>

            </section>


            <!-- Snap -->
            <section class="hidden">

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

                        <select v-model="model.advanced.snap" class="setting-input">
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
                            <ToggleRow v-model="model.advanced.snapIcon" title="Snap icon"
                                description="Display snap control icon." />
                        </div>

                    </div>

                </div>

            </section>

            <!-- Buffer loader -->
            <section>

                <div class="mb-4">
                    <p class="text-xs font-medium text-white/70">
                        Buffer loader
                    </p>

                    <p class="mt-1 text-[11px] text-white/25">
                        Select a buffer loader
                    </p>
                </div>


                <div class="space-y-6">

                    <!-- Buffer loader selection -->
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                        <template v-for="(icon, index) in loaders" :key="index">

                            <svg
                                v-html="icon.replaceAll(model.loader.color, 'currentColor')"
                                :style="{
                                    color: index === model.loader.icon
                                        ? model.loader.activeColor
                                        : model.loader.color
                                }"
                                class="w-8 h-8 my-3 cursor-pointer transition-colors duration-200"
                                @click="model.loader.icon = index"
                            ></svg>

                        </template>
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

                        <span class="rounded bg-[#C9A227]/10 px-1.5 py-0.5
                                   text-[8px] font-semibold uppercase
                                   text-[#C9A227]">
                            PRO
                        </span>

                    </div>

                    <p class="mt-1 text-[11px] text-white/25">
                        Connect player events to your analytics platform.
                    </p>

                </div>


                <div class="space-y-5">

                    <ToggleRow v-model="model.advanced.analytics.enabled" title="Enable analytics"
                        description="Send player analytics events." premium />


                    <div v-if="model.advanced.analytics.enabled" class="grid gap-5 sm:grid-cols-2">

                        <div>

                            <label class="setting-label">
                                Analytics tag
                            </label>

                            <input v-model="model.advanced.analytics.tag" type="text" placeholder="G-FKJ9WK8CE5"
                                class="setting-input" />

                        </div>


                        <div>

                            <label class="setting-label">
                                Application name
                            </label>

                            <input v-model="model.advanced.analytics.appName" type="text"
                                placeholder="My Video Platform" class="setting-input" />

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

                    <input v-model="model.source.youtubeApiKey" type="password" autocomplete="off" placeholder="AIza..."
                        class="setting-input" :readonly="authStore.status == 'free'" />

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
import ToggleRow from './ToggleRow.vue'; 
const model = defineModel();
const authStore = useAuthStore();

const loaders = [
    `<g><circle cx="12" cy="3" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate0" attributeName="r" begin="0;svgSpinners12DotsScaleRotate2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="4.21" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate1" attributeName="r" begin="svgSpinners12DotsScaleRotate0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="4.21" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate2" attributeName="r" begin="svgSpinners12DotsScaleRotate4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="7.5" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate3" attributeName="r" begin="svgSpinners12DotsScaleRotate1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="7.5" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate4" attributeName="r" begin="svgSpinners12DotsScaleRotate6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="21" cy="12" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate5" attributeName="r" begin="svgSpinners12DotsScaleRotate3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="3" cy="12" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate6" attributeName="r" begin="svgSpinners12DotsScaleRotate8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="16.5" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate7" attributeName="r" begin="svgSpinners12DotsScaleRotate5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="16.5" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate8" attributeName="r" begin="svgSpinners12DotsScaleRotatea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="19.79" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotate9" attributeName="r" begin="svgSpinners12DotsScaleRotate7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="19.79" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotatea" attributeName="r" begin="svgSpinners12DotsScaleRotateb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="12" cy="21" r="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners12DotsScaleRotateb" attributeName="r" begin="svgSpinners12DotsScaleRotate9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"/></g>`,
    `<path fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path>`,
    `<circle cx="4" cy="12" r="0" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove0" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove1" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s" values="20;4"/></circle><circle cx="4" cy="12" r="3" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove2" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove3" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/></circle><circle cx="12" cy="12" r="3" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove4" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove5" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/></circle><circle cx="20" cy="12" r="3" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinners3DotsMove6" fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove7" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/></circle>`,
    `<rect width="2.8" height="12" x="1" y="6" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="5.8" y="6" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="10.6" y="6" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinnersBarsScaleMiddle0" attributeName="y" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="15.4" y="6" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect><rect width="2.8" height="12" x="20.2" y="6" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinnersBarsScaleMiddle1" attributeName="y" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"/><animate attributeName="height" begin="svgSpinnersBarsScaleMiddle0.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"/></rect>`,
    `<rect width="10" height="10" x="1" y="1" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }" rx="1"><animate id="svgSpinnersBlocksShuffle30" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle31" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle32" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle33" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="1" y="13" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }" rx="1"><animate id="svgSpinnersBlocksShuffle34" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle35" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle36" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle37" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s" values="13;1"/></rect><rect width="10" height="10" x="13" y="13" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }" rx="1"><animate id="svgSpinnersBlocksShuffle38" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle39" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s" values="13;1"/><animate id="svgSpinnersBlocksShuffle3a" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s" values="1;13"/><animate id="svgSpinnersBlocksShuffle3b" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s" values="1;13"/></rect>`,
    `<path fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path>`,
    `<circle cx="12" cy="12" r="0" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinnersPulse30" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinnersPulse31" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="${model.value.loader !== undefined
        ? model.value.loader.color
        : '#fff'
    }"><animate id="svgSpinnersPulse32" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle>`,
]

</script>
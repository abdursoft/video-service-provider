<template>
    <div class="min-h-screen bg-[#050505] text-white">
        <SeoHead title="Contact — ESY Player"
            description="Get in touch with the ESY Player team for support, questions, partnerships, and business inquiries."
            url="https://esyplayer.com/contact" />
        <!-- Hero -->
        <section class="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">

            <!-- Background glow -->
            <div class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px]
                       -translate-x-1/2 rounded-full
                       bg-[#C9A227]/[0.06] blur-[120px]"></div>

            <div class="relative mx-auto max-w-5xl text-center">

                <div class="mx-auto flex w-fit items-center gap-2 rounded-full
                           border border-[#C9A227]/20
                           bg-[#C9A227]/[0.05]
                           px-3 py-1.5">
                    <MessageCircle class="h-3.5 w-3.5 text-[#C9A227]" />

                    <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-[#C9A227]">
                        Contact us
                    </span>
                </div>

                <h1 class="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight
                           text-white sm:text-5xl lg:text-6xl">
                    Let's talk about
                    <span class="text-[#C9A227]"> your video.</span>
                </h1>

                <p class="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40
                           sm:text-base">
                    Have a question about our video player, embedding, subscriptions,
                    or monetization? Send us a message and we'll get back to you.
                </p>
            </div>
        </section>


        <!-- Contact Section -->
        <section class="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

            <div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                <!-- Contact Information -->
                <div class="rounded-3xl border border-white/[0.07]
                           bg-[#0a0a0a] p-7 sm:p-8">

                    <div>
                        <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-[#C9A227]">
                            Get in touch
                        </span>

                        <h2 class="mt-3 text-2xl font-semibold text-white">
                            We're here to help.
                        </h2>

                        <p class="mt-3 text-sm leading-6 text-white/35">
                            Whether you're getting started or already using the
                            platform, we're happy to help with your questions.
                        </p>
                    </div>


                    <!-- Email -->
                    <div class="mt-8 flex gap-4 rounded-2xl border border-white/[0.06]
                               bg-white/[0.02] p-4">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center
                                   rounded-xl border border-[#C9A227]/20
                                   bg-[#C9A227]/[0.06] text-[#C9A227]">
                            <Mail class="h-5 w-5" :stroke-width="1.6" />
                        </div>

                        <div>
                            <p class="text-xs text-white/30">
                                Email
                            </p>

                            <a href="mailto:support@esyplayer.com" class="mt-1 block text-sm font-medium text-white/75
                                       transition hover:text-[#C9A227]">
                                support@esyplayer.com
                            </a>
                        </div>
                    </div>


                    <!-- Response -->
                    <div class="mt-3 flex gap-4 rounded-2xl border border-white/[0.06]
                               bg-white/[0.02] p-4">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center
                                   rounded-xl border border-[#C9A227]/20
                                   bg-[#C9A227]/[0.06] text-[#C9A227]">
                            <Clock class="h-5 w-5" :stroke-width="1.6" />
                        </div>

                        <div>
                            <p class="text-xs text-white/30">
                                Response time
                            </p>

                            <p class="mt-1 text-sm font-medium text-white/75">
                                Usually within 2 hours
                            </p>
                        </div>
                    </div>


                    <!-- Support -->
                    <div class="mt-3 flex gap-4 rounded-2xl border border-white/[0.06]
                               bg-white/[0.02] p-4">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center
                                   rounded-xl border border-[#C9A227]/20
                                   bg-[#C9A227]/[0.06] text-[#C9A227]">
                            <LifeBuoy class="h-5 w-5" :stroke-width="1.6" />
                        </div>

                        <div>
                            <p class="text-xs text-white/30">
                                Support
                            </p>

                            <p class="mt-1 text-sm font-medium text-white/75">
                                Product & technical support
                            </p>
                        </div>
                    </div>


                    <!-- Bottom CTA -->
                    <div class="mt-8 rounded-2xl border border-[#C9A227]/15
                               bg-[#C9A227]/[0.04] p-5">
                        <div class="flex items-start gap-3">

                            <HelpCircle class="mt-0.5 h-4 w-4 shrink-0 text-[#C9A227]" :stroke-width="1.7" />

                            <div>
                                <h3 class="text-sm font-medium text-white/80">
                                    Looking for an answer?
                                </h3>

                                <p class="mt-1 text-xs leading-5 text-white/30">
                                    Check our documentation and frequently asked
                                    questions before sending a message.
                                </p>

                                <Link :href="route('docs')" class="mt-3 inline-flex items-center gap-1.5
                                           text-xs font-medium text-[#C9A227]
                                           transition hover:text-[#dfbd3d]">
                                    Visit documentation

                                    <ArrowUpRight class="h-3.5 w-3.5" />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>


                <!-- Form -->
                <div class="rounded-3xl border border-white/[0.07]
                           bg-[#0a0a0a] p-7 sm:p-8 lg:p-10">

                    <div class="mb-8">
                        <span class="text-[10px] font-medium uppercase tracking-[0.18em] text-[#C9A227]">
                            Send a message
                        </span>

                        <h2 class="mt-3 text-2xl font-semibold text-white">
                            How can we help?
                        </h2>

                        <p class="mt-2 text-sm text-white/30">
                            Fill out the form and our team will get back to you.
                        </p>
                    </div>


                    <form @submit.prevent="submit" class="space-y-5">

                        <!-- Name + Email -->
                        <div class="grid gap-5 sm:grid-cols-2">

                            <div>
                                <label for="name" class="mb-2 block text-xs font-medium text-white/55">
                                    Name
                                </label>

                                <input id="name" v-model="form.name" type="text" placeholder="Your name" class="w-full rounded-xl border border-white/10
                                           bg-white/[0.025] px-4 py-3
                                           text-sm text-white
                                           outline-none transition
                                           placeholder:text-white/20
                                           focus:border-[#C9A227]/50
                                           focus:bg-white/[0.04]" required />

                                <p v-if="form.errors.name" class="mt-1.5 text-xs text-red-400">
                                    {{ form.errors.name }}
                                </p>
                            </div>


                            <div>
                                <label for="email" class="mb-2 block text-xs font-medium text-white/55">
                                    Email
                                </label>

                                <input id="email" v-model="form.email" type="email" placeholder="you@example.com" class="w-full rounded-xl border border-white/10
                                           bg-white/[0.025] px-4 py-3
                                           text-sm text-white
                                           outline-none transition
                                           placeholder:text-white/20
                                           focus:border-[#C9A227]/50
                                           focus:bg-white/[0.04]" required />

                                <p v-if="form.errors.email" class="mt-1.5 text-xs text-red-400">
                                    {{ form.errors.email }}
                                </p>
                            </div>

                        </div>


                        <!-- Subject -->
                        <div>
                            <label for="subject" class="mb-2 block text-xs font-medium text-white/55">
                                Subject
                            </label>

                            <select id="subject" v-model="form.subject" class="w-full rounded-xl border border-white/10
                                       bg-[#101010] px-4 py-3
                                       text-sm text-white/70
                                       outline-none transition
                                       focus:border-[#C9A227]/50" required>
                                <option value="" disabled>
                                    Select a subject
                                </option>

                                <option value="general">
                                    General question
                                </option>

                                <option value="technical">
                                    Technical support
                                </option>

                                <option value="billing">
                                    Billing & subscription
                                </option>

                                <option value="player">
                                    Player & embedding
                                </option>

                                <option value="partnership">
                                    Partnership
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>

                            <p v-if="form.errors.subject" class="mt-1.5 text-xs text-red-400">
                                {{ form.errors.subject }}
                            </p>
                        </div>


                        <!-- Message -->
                        <div>
                            <label for="message" class="mb-2 block text-xs font-medium text-white/55">
                                Message
                            </label>

                            <textarea id="message" v-model="form.description" rows="7"
                                placeholder="Tell us how we can help..." class="w-full resize-none rounded-xl border border-white/10
                                       bg-white/[0.025] px-4 py-3
                                       text-sm leading-6 text-white
                                       outline-none transition
                                       placeholder:text-white/20
                                       focus:border-[#C9A227]/50
                                       focus:bg-white/[0.04]" required></textarea>

                            <p v-if="form.errors.message" class="mt-1.5 text-xs text-red-400">
                                {{ form.errors.description }}
                            </p>
                        </div>

                        <div class="flex items-center justify-center flex-column">
                            <div ref="turnstileContainer"></div>
                        </div>


                        <!-- Submit -->
                        <button type="submit" :disabled="form.processing" class="group inline-flex w-full items-center
                                   justify-center gap-2 rounded-xl
                                   bg-[#C9A227] px-5 py-3.5
                                   text-sm font-semibold text-black
                                   transition
                                   hover:bg-[#d7b52d]
                                   disabled:cursor-not-allowed
                                   disabled:opacity-60">
                            <span>
                                {{ form.processing ? 'Sending...' : 'Send message' }}
                            </span>

                            <Send class="h-4 w-4 transition-transform
                                       group-hover:translate-x-0.5" :stroke-width="2" />
                        </button>

                        <div>{{ $page.props.flash?.success }}</div>

                    </form>

                </div>

            </div>

        </section>

    </div>
</template>


<script setup>
import Home from '@/layouts/Home.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import handler from '@/utils/EmbedRender'
import { onMounted, ref } from 'vue';

const turnstileContainer = ref(null);
const turnstileToken = ref('');

import {
    MessageCircle,
    Mail,
    Clock,
    LifeBuoy,
    HelpCircle,
    ArrowUpRight,
    Send,
} from 'lucide-vue-next';
import SeoHead from '@/components/partials/SeoHead.vue';

defineOptions({
    layout: Home
});

const form = useForm({
    name: '',
    email: '',
    subject: '',
    description: '',
    turnstile_token: ''
});


const submit = () => {
    form.turnstile_token = turnstileToken;
    form.post(route('contact.store'), {
        preserveScroll: true,

        onSuccess: () => {
            form.reset();
        },
    });
};

onMounted(async () => {
    await handler.loadTrunstile();
    setTimeout(async () => {
        const token = await handler.getTurnstileToken(turnstileContainer.value);
        turnstileToken.value = token;
    }, 500);
});
</script>
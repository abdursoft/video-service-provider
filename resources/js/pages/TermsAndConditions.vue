<script setup>
import Home from '@/layouts/Home.vue';
import { Head } from '@inertiajs/vue3'
import { FileText, ShieldCheck, CreditCard, Ban, RefreshCw, Scale } from 'lucide-vue-next'

const sections = [
    {
        title: '1. Acceptance of Terms',
        icon: FileText,
        content: [
            'By accessing or using our website and services, you agree to be bound by these Terms and Conditions.',
            'If you do not agree with any part of these terms, you should not use our services.'
        ]
    },
    {
        title: '2. Use of Our Service',
        icon: ShieldCheck,
        content: [
            'You agree to use our service only for lawful purposes and in accordance with these Terms.',
            'You are responsible for maintaining the security of your account and for all activities performed through your account.',
            'You must not use the service to distribute, host, embed, or promote content that violates applicable laws or the rights of others.'
        ]
    },
    {
        title: '3. User Content',
        icon: FileText,
        content: [
            'You retain ownership of content that you submit, upload, or configure through our service.',
            'By using our service, you grant us the permissions reasonably necessary to provide, operate, maintain, and improve the service.',
            'You are solely responsible for ensuring that you have the necessary rights and permissions for any content you use with our service.'
        ]
    },
    {
        title: '4. Payments and Subscriptions',
        icon: CreditCard,
        content: [
            'Some features of our service may require a paid subscription.',
            'Subscription prices, billing intervals, limits, and included features are displayed on the applicable pricing page.',
            'Subscriptions may automatically renew according to the billing interval selected by you unless cancelled before the next billing period.',
            'Payments may be processed by third-party payment providers. We do not directly store your complete payment card information.'
        ]
    },
    {
        title: '5. Prohibited Activities',
        icon: Ban,
        content: [
            'You may not use the service to engage in unlawful, fraudulent, abusive, or harmful activities.',
            'You may not attempt to gain unauthorized access to our systems, accounts, servers, or infrastructure.',
            'You may not interfere with the operation or security of the service or attempt to circumvent usage limits or security mechanisms.'
        ]
    },
    {
        title: '6. Cancellation and Termination',
        icon: RefreshCw,
        content: [
            'You may cancel your subscription according to the cancellation options available through your account.',
            'We reserve the right to suspend or terminate accounts that violate these Terms or applicable laws.',
            'Upon termination, access to certain features or stored information may no longer be available.'
        ]
    },
    {
        title: '7. Service Availability',
        icon: ShieldCheck,
        content: [
            'We aim to keep our service available and reliable, but we do not guarantee uninterrupted or error-free operation.',
            'The service may occasionally be unavailable because of maintenance, updates, technical problems, or circumstances beyond our reasonable control.'
        ]
    },
    {
        title: '8. Intellectual Property',
        icon: Scale,
        content: [
            'Our website, software, branding, design, and other original materials are protected by applicable intellectual property laws.',
            'You may not copy, modify, distribute, sell, or reverse engineer our proprietary software or materials unless expressly permitted by us or applicable law.'
        ]
    },
    {
        title: '9. Disclaimer',
        icon: ShieldCheck,
        content: [
            'The service is provided on an "as is" and "as available" basis to the extent permitted by applicable law.',
            'We do not guarantee that the service will meet every specific requirement or that it will always operate without interruption or errors.'
        ]
    },
    {
        title: '10. Limitation of Liability',
        icon: Scale,
        content: [
            'To the maximum extent permitted by applicable law, we will not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service.',
            'Nothing in these Terms limits liability where such limitation is prohibited by applicable law.'
        ]
    },
    {
        title: '11. Changes to These Terms',
        icon: RefreshCw,
        content: [
            'We may update these Terms from time to time to reflect changes to our services, legal requirements, or business practices.',
            'Updated Terms will be posted on this page. Your continued use of the service after changes become effective constitutes acceptance of the updated Terms.'
        ]
    },
    {
        title: '12. Contact Us',
        icon: FileText,
        content: [
            'If you have questions about these Terms and Conditions, please contact us through our contact page or the support email associated with our service.'
        ]
    }
]

defineOptions({
    layout: Home
});
</script>

<template>
    <Head title="Terms and Conditions" />

    <div class="min-h-screen bg-black text-white">
        <!-- Hero -->
        <section class="border-b border-white/10 pt-20">
            <div class="mx-auto max-w-5xl px-6 py-20 text-center">
                <div
                    class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9A227]/30 bg-[#C9A227]/10"
                >
                    <FileText class="h-8 w-8 text-[#C9A227]" />
                </div>

                <h1 class="text-4xl font-bold tracking-tight md:text-5xl">
                    Terms and Conditions
                </h1>

                <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
                    Please read these Terms and Conditions carefully before using
                    our services.
                </p>

                <p class="mt-4 text-sm text-gray-500">
                    Last updated: September 20, 2026
                </p>
            </div>
        </section>

        <!-- Content -->
        <main class="mx-auto max-w-4xl px-6 py-16">
            <div class="space-y-12">
                <section
                    v-for="section in sections"
                    :key="section.title"
                    class="border-b border-white/10 pb-10 last:border-0"
                >
                    <div class="mb-5 flex items-center gap-3">
                        <component
                            :is="section.icon"
                            class="h-5 w-5 text-[#C9A227]"
                        />

                        <h2 class="text-xl font-semibold">
                            {{ section.title }}
                        </h2>
                    </div>

                    <div class="space-y-4 text-sm leading-7 text-gray-400">
                        <p
                            v-for="paragraph in section.content"
                            :key="paragraph"
                        >
                            {{ paragraph }}
                        </p>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>
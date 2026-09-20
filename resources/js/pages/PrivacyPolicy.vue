<script setup>
import Home from '@/layouts/Home.vue';
import { Head } from '@inertiajs/vue3'
import {
    ShieldCheck,
    Database,
    User,
    CreditCard,
    Cookie,
    Lock,
    Share2,
    Trash2,
    RefreshCw,
    Mail,
} from 'lucide-vue-next'

const sections = [
    {
        title: '1. Introduction',
        icon: ShieldCheck,
        content: [
            'We respect your privacy and are committed to protecting your personal information.',
            'This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you when you use our website and services.'
        ]
    },
    {
        title: '2. Information We Collect',
        icon: Database,
        content: [
            'We may collect information that you provide directly to us when you create an account, use our services, contact us, or otherwise interact with our website.',
            'This may include your name, email address, account information, subscription information, and other information that you voluntarily provide.',
            'We may also automatically collect certain technical information such as your IP address, browser type, operating system, device information, and information about how you interact with our service.'
        ]
    },
    {
        title: '3. Account Information',
        icon: User,
        content: [
            'When you create an account, we collect information necessary to create and manage your account.',
            'You are responsible for ensuring that the information associated with your account is accurate and up to date.',
            'We use this information to authenticate you, provide account-related functionality, and communicate with you about your account.'
        ]
    },
    {
        title: '4. Payment Information',
        icon: CreditCard,
        content: [
            'If you purchase a subscription or other paid service, payment information may be processed by third-party payment providers.',
            'We do not intentionally store complete payment card numbers or sensitive payment credentials on our own servers.',
            'Payment providers may collect and process payment information according to their own privacy policies and terms.'
        ]
    },
    {
        title: '5. How We Use Your Information',
        icon: Database,
        content: [
            'We use collected information to provide, operate, maintain, and improve our services.',
            'We may also use information to authenticate users, process subscriptions, provide customer support, detect abuse, maintain security, troubleshoot technical problems, and communicate important service-related information.',
            'Where permitted by applicable law, we may use aggregated or anonymized information for analytics and service improvement.'
        ]
    },
    {
        title: '6. Cookies and Similar Technologies',
        icon: Cookie,
        content: [
            'We may use cookies and similar technologies to maintain sessions, remember preferences, improve functionality, and understand how our service is used.',
            'Some third-party services integrated with our website may also use cookies or similar technologies.',
            'You may be able to control cookies through your browser settings. Disabling certain cookies may affect the functionality of the service.'
        ]
    },
    {
        title: '7. Data Security',
        icon: Lock,
        content: [
            'We take reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction.',
            'However, no internet transmission or electronic storage system can be guaranteed to be completely secure.'
        ]
    },
    {
        title: '8. Sharing of Information',
        icon: Share2,
        content: [
            'We do not sell your personal information as part of our normal business operations.',
            'We may share information with service providers that help us operate our business, such as hosting providers, payment processors, email providers, analytics providers, and security services.',
            'We may also disclose information when required by law, legal process, or to protect the rights, security, and property of our users, our service, or others.'
        ]
    },
    {
        title: '9. Third-Party Services',
        icon: Share2,
        content: [
            'Our service may integrate with or link to third-party services.',
            'Third-party services operate independently and may have their own privacy policies and terms. We encourage you to review their policies before providing information to them.'
        ]
    },
    {
        title: '10. Data Retention',
        icon: Database,
        content: [
            'We retain personal information for as long as reasonably necessary to provide our services, maintain your account, comply with legal obligations, resolve disputes, and enforce our agreements.',
            'Retention periods may vary depending on the type of information and the purpose for which it was collected.'
        ]
    },
    {
        title: '11. Your Privacy Choices',
        icon: User,
        content: [
            'Depending on applicable law, you may have rights regarding your personal information, including the ability to access, correct, update, or request deletion of certain information.',
            'You may also be able to update certain account information directly through your account settings.'
        ]
    },
    {
        title: '12. Account Deletion',
        icon: Trash2,
        content: [
            'You may request deletion of your account and associated personal information, subject to applicable legal and operational requirements.',
            'Some information may need to be retained where required by law, necessary to prevent fraud or abuse, or needed to establish, exercise, or defend legal claims.'
        ]
    },
    {
        title: '13. Children’s Privacy',
        icon: ShieldCheck,
        content: [
            'Our services are not intended for children where their use would be prohibited by applicable law.',
            'We do not knowingly collect personal information from children in violation of applicable legal requirements.'
        ]
    },
    {
        title: '14. Changes to This Privacy Policy',
        icon: RefreshCw,
        content: [
            'We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices.',
            'When we make changes, we will update the date shown at the top of this page.'
        ]
    },
    {
        title: '15. Contact Us',
        icon: Mail,
        content: [
            'If you have questions, concerns, or requests regarding this Privacy Policy or our handling of personal information, please contact us through our contact page or the support email associated with our service.'
        ]
    }
]

defineOptions({
    layout: Home
});
</script>

<template>
    <Head title="Privacy Policy" />

    <div class="min-h-screen bg-black text-white pt-20">
        <!-- Hero -->
        <section class="border-b border-white/10">
            <div class="mx-auto max-w-5xl px-6 py-20 text-center">
                <div
                    class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C9A227]/30 bg-[#C9A227]/10"
                >
                    <ShieldCheck class="h-8 w-8 text-[#C9A227]" />
                </div>

                <h1 class="text-4xl font-bold tracking-tight md:text-5xl">
                    Privacy Policy
                </h1>

                <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
                    Your privacy matters to us. Learn how we collect, use,
                    protect, and manage your information.
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
// import { createInertiaApp } from '@inertiajs/vue3';

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// createInertiaApp({
//     title: (title) => (title ? `${title} - ${appName}` : appName),
//     progress: {
//         color: '#4B5563',
//     },
// });

import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { createApp, h, DefineComponent } from 'vue';
import VueTelInput from 'vue-tel-input';
import Toast from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import 'vue-tel-input/vue-tel-input.css';
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy';

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob('./pages/**/*.vue', {
            eager: true,
            import: 'default',
        });

        // Normalize the Inertia page name
        const cleanName = name
            .replace(/^\/+/, '')
            .replace(/^pages\//i, '')
            .replace(/\.vue$/i, '');

        const path = `./pages/${cleanName}.vue`;

        const page = pages[path];

        if (!page) {
            console.error('Inertia page not found:', {
                name,
                cleanName,
                path,
                availablePages: Object.keys(pages),
            });

            throw new Error(`Page not found: ${name} (searched for ${path})`);
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        // 1. Create the Vue instance
        const globalOptions = {
            mode: 'auto',
        };
        const toastOptions = {
            position: 'top-right',
            timeout: 3000,
            closeOnClick: true,
        };
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createPinia())
            .use(VueTelInput, globalOptions)
            .use(Toast, toastOptions)
            .use(ZiggyVue, {
                ...Ziggy,
                location:
                    typeof window !== 'undefined'
                        ? window.location.href
                        : props.initialPage.url,
            });

        // 3. Only mount if 'el' exists (this runs only in the browser)
        if (el) {
            app.mount(el);
        }

        // 4. Return the app instance (required for SSR)
        return app;
    },

    // Optional: add progress bar configuration if needed
    progress: {
        color: '#E5C766',
    },
});

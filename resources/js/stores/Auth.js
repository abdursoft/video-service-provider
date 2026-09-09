import { usePage } from '@inertiajs/vue3'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const page = usePage()

    const user = computed(() => page.props.auth.user)

    const status = computed(
        () => page.props.auth.user.package
    )

    const isAuth = computed(() => !!user.value)

    return {
        user,
        status,
        isAuth,
    }
})
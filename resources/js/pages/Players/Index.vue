<template>
    <!-- Main Content -->
    <main class="mx-auto px-5 py-8 lg:px-8">

        <Head title="User players" />

        <div class="flex items-center justify-end mb-3">
            <Link v-if="can('players.create')" :href="route('user.players.create')"
                class="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-[#C9A227]/30 hover:bg-white/[0.04]">
            <div class="rounded-lg bg-[#C9A227]/10 p-2 text-[#C9A227]">
                +
            </div>

            <div>
                <p class="text-sm font-medium text-white">
                    New Player
                </p>

                <p class="text-[11px] text-gray-600">
                    Create a new player
                </p>
            </div>
            </Link>
        </div>
        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4
                    lg:grid-cols-4">

            <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-white/[0.07]
                        bg-white/[0.025] p-5">
                <div class="flex items-center justify-between">

                    <p class="text-xs text-white/35">
                        {{ stat.label }}
                    </p>

                    <component :is="stat.icon" class="h-4 w-4 text-[#C9A227]/50" />

                </div>

                <p class="mt-3 text-2xl font-semibold tracking-tight
                            text-white">
                    {{ stat.value }}
                </p>

            </div>

        </div>


        <!-- Toolbar -->
        <div class="mt-8 flex flex-col gap-4
                    lg:flex-row lg:items-center
                    lg:justify-between">

            <!-- Search -->
            <div class="relative w-full lg:max-w-sm">

                <Search class="absolute left-4 top-1/2 h-4 w-4
                            -translate-y-1/2 text-white/30" />

                <input v-model="search" type="text" placeholder="Search players..." class="w-full rounded-xl border border-white/[0.08]
                            bg-white/[0.03] py-3 pl-11 pr-4
                            text-sm text-white
                            placeholder:text-white/25
                            outline-none transition
                            focus:border-[#C9A227]/40
                            focus:ring-1
                            focus:ring-[#C9A227]/20" />

                <!-- Clear search -->
                <button v-if="search" type="button" @click="search = ''" class="absolute right-3 top-1/2
                            -translate-y-1/2 rounded-md
                            p-1 text-white/30
                            transition hover:text-white">
                    <X class="h-4 w-4" />
                </button>

            </div>


            <!-- Filter -->
            <div class="flex items-center gap-3">

                <div class="flex items-center gap-2
                            text-xs text-white/30">
                    <Filter class="h-4 w-4" />

                    <span class="hidden sm:inline">
                        Filter
                    </span>
                </div>

                <select v-model="status" class="rounded-xl border border-white/[0.08]
                            bg-white/[0.03] px-4 py-3
                            text-sm text-white/70
                            outline-none transition
                            focus:border-[#C9A227]/40">
                    <option value="all" class="bg-[#151515]">
                        All status
                    </option>

                    <option value="active" class="bg-[#151515]">
                        Active
                    </option>

                    <option value="draft" class="bg-[#151515]">
                        Draft
                    </option>
                </select>

            </div>

        </div>


        <!-- Players Table -->
        <div v-if="filteredPlayers.length" class="mt-6 overflow-hidden rounded-2xl
                    border border-white/[0.07]
                    bg-white/[0.02]">

            <!-- Table Header -->
            <div class="hidden grid-cols-[minmax(0,2fr)_1fr_1fr_1fr_auto]
                        gap-6 border-b border-white/[0.07]
                        px-6 py-4
                        text-[10px] font-semibold
                        uppercase tracking-[0.18em]
                        text-white/25 md:grid">
                <span>Player</span>
                <span>Status</span>
                <span>Created</span>
                <span>Usage</span>
                <span>Actions</span>
            </div>


            <!-- Player Rows -->
            <div v-for="player in filteredPlayers" :key="player.id" class="group border-b border-white/[0.06]
                        px-5 py-5 last:border-0
                        md:grid
                        md:grid-cols-[minmax(0,2fr)_1fr_1fr_1fr_auto]
                        md:items-center md:gap-6
                        md:px-6">

                <!-- Player -->
                <div class="flex min-w-0 items-center gap-4">

                    <!-- Thumbnail -->
                    <div class="flex h-12 w-20 shrink-0
                                items-center justify-center
                                overflow-hidden rounded-lg
                                border border-white/[0.08]
                                bg-black">
                        <img v-if="player.thumbnail" :src="player.thumbnail" :alt="player.name"
                            class="h-full w-full object-cover" />

                        <Video v-else class="h-5 w-5 text-[#C9A227]/60" />
                    </div>


                    <!-- Name -->
                    <div class="min-w-0">

                        <p class="truncate text-sm font-medium
                                    text-white">
                            {{ player.name }}
                        </p>

                        <p class="mt-1 truncate text-xs
                                    text-white/30">
                            {{ player.source }}
                        </p>

                    </div>

                </div>


                <!-- Status -->
                <div class="mt-4 md:mt-0">

                    <span class="inline-flex items-center gap-1.5
                                rounded-full border px-2.5 py-1
                                text-[10px] font-medium
                                uppercase tracking-wide" :class="player.status === 'active'
                                    ? 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-400'
                                    : 'border-white/10 bg-white/[0.03] text-white/40'
                                    ">

                        <span class="h-1.5 w-1.5 rounded-full" :class="player.status === 'active'
                            ? 'bg-emerald-400'
                            : 'bg-white/30'
                            "></span>

                        {{ player.status }}

                    </span>

                </div>


                <!-- Created -->
                <div class="mt-3 md:mt-0">

                    <div class="flex items-center gap-2">

                        <CalendarDays class="h-3.5 w-3.5
                                    text-white/20" />

                        <p class="text-xs text-white/40">
                            {{ player.created_at }}
                        </p>

                    </div>

                </div>


                <!-- Usage -->
                <div class="mt-3 md:mt-0">

                    <div class="flex items-center gap-2">

                        <Eye class="h-3.5 w-3.5
                                    text-white/20" />

                        <p class="text-xs text-white/50">
                            {{ player.views.toLocaleString() }}
                            views
                        </p>

                    </div>

                </div>


                <!-- Actions -->
                <div class="mt-4 flex items-center gap-1
                            md:mt-0">

                    <!-- Preview -->
                    <button type="button" title="Preview" @click="previewPlayer(player)" class="rounded-lg p-2
                                text-white/35
                                transition
                                cursor-pointer
                                hover:bg-white/[0.05]
                                hover:text-white">
                        <Eye class="h-4 w-4" />
                    </button>


                    <!-- Edit -->
                    <button type="button" title="Edit" @click="editPlayer(player)" class="rounded-lg p-2
                                text-white/35
                                transition
                                cursor-pointer
                                hover:bg-white/[0.05]
                                hover:text-[#C9A227]">
                        <Pencil class="h-4 w-4" />
                    </button>


                    <!-- Embed -->
                    <button type="button" title="Embed" @click="embedPlayer(player)" class="rounded-lg p-2
                                text-white/35
                                transition
                                cursor-pointer
                                hover:bg-white/[0.05]
                                hover:text-[#C9A227]">
                        <Code2 class="h-4 w-4" />
                    </button>


                    <!-- Delete -->
                    <button type="button" title="Delete" @click="deletePlayer(player)" class="rounded-lg p-2
                                text-white/35
                                transition
                                cursor-pointer
                                hover:bg-red-400/10
                                hover:text-red-400">
                        <Trash2 class="h-4 w-4" />
                    </button>

                </div>

            </div>

        </div>


        <!-- Empty State -->
        <div v-else class="mt-6 rounded-2xl
                    border border-white/[0.07]
                    bg-white/[0.02]
                    px-6 py-20 text-center">

            <div class="mx-auto flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border border-[#C9A227]/20
                        bg-[#C9A227]/[0.05]">
                <Video class="h-6 w-6 text-[#C9A227]" />
            </div>


            <h3 class="mt-5 text-sm font-semibold text-white">
                {{ search || status !== 'all'
                    ? 'No players found'
                    : 'No players yet'
                }}
            </h3>


            <p class="mx-auto mt-2 max-w-sm
                        text-sm leading-6 text-white/35">
                {{
                    search || status !== 'all'
                        ? 'Try changing your search or filter.'
                        : 'Create your first video player and start embedding videos on your website.'
                }}
            </p>


            <button v-if="!search && status === 'all'" type="button" @click="createPlayer" class="mt-6 inline-flex
                        items-center gap-2
                        rounded-xl bg-[#C9A227]
                        px-5 py-3
                        cursor-pointer
                        text-sm font-semibold
                        text-black
                        transition
                        hover:bg-[#D9B43A]">
                <Plus class="h-4 w-4" />

                Create your first player
            </button>

        </div>

    </main>
</template>


<script setup>
import { computed, ref, watch } from 'vue'

import {
    Plus,
    Search,
    X,
    Filter,
    Video,
    Eye,
    Pencil,
    Code2,
    Trash2,
    CalendarDays,
    BarChart3,
    PlayCircle,
} from 'lucide-vue-next'

import UserLayout from '@/layouts/UserLayout.vue'
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import Handler from '@/utils/EmbedRender.js';


defineOptions({
    layout: UserLayout
});

const page = usePage();


const permissions = page.props.auth?.permissions ?? []

const can = (permission) => {
    return permissions.includes(permission)
}

/*
|--------------------------------------------------------------------------
| Search / Filter
|--------------------------------------------------------------------------
*/

const search = ref('')
const status = ref('all')


/*
|--------------------------------------------------------------------------
| Stats
|--------------------------------------------------------------------------
*/

// const stats = [
//     {
//         label: 'Total Players',
//         value: 12,
//         icon: Video,
//     },
//     {
//         label: 'Active Players',
//         value: 10,
//         icon: PlayCircle,
//     },
//     {
//         label: 'Total Views',
//         value: '24.8K',
//         icon: Eye,
//     },
//     {
//         label: 'Monthly Views',
//         value: '8.4K',
//         icon: BarChart3,
//     },
// ]


/*
|--------------------------------------------------------------------------
| Players
|--------------------------------------------------------------------------
|
| This is temporary data.
| Later we will replace this with Inertia props from Laravel.
|
*/

const players = computed(() => page.props?.players);
const stats = computed(() =>
    [
        {
            label: 'Total Players',
            value: page.props?.players?.length,
            icon: Video,
        },
        {
            label: 'Active Players',
            value: page.props?.active,
            icon: PlayCircle,
        },
        {
            label: 'Total Views',
            value: page.props?.total_views,
            icon: Eye,
        },
        {
            label: 'Monthly Views',
            value: page.props?.monthly_views,
            icon: BarChart3,
        }
    ]
);

/*
|--------------------------------------------------------------------------
| Filtered Players
|--------------------------------------------------------------------------
*/

const filteredPlayers = computed(() => {


    return players.value.filter((player) => {

        const query = search.value
            .trim()
            .toLowerCase()

        const matchesSearch =
            !query ||
            player.name
                .toLowerCase()
                .includes(query) ||
            player?.source
                ?.toLowerCase()
                ?.includes(query)

        const matchesStatus =
            status.value === 'all' ||
            player.status === status.value

        return matchesSearch && matchesStatus
    })
})


/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/

const createPlayer = () => {
    console.log('Create player')
    router.visit(route('user.players.create'))
}


const previewPlayer = (player) => {
    console.log('Preview player:', player)
    window.open(route('player.render', player.id), '_blank');
}


const editPlayer = (player) => {
    console.log('Edit player:', player)
    router.visit(route('user.players.edit', player.id))
}


const embedPlayer = async (player) => {
    console.log('Embed player:', player)
    const iframe = Handler.renderIframe(player.id, page.props.appURL, player.name);
    try {
        await window?.navigator?.clipboard?.writeText(iframe);
    } catch (error) {
        console.error("Copy failed:", error);
    }
}


const deletePlayer = (player) => {


    const confirmed = confirm(
        `Are you sure you want to delete "${player.name}"?`
    )

    if (!confirmed) {
        return
    }

    router.delete(route('user.players.destroy', player.id));
}
</script>
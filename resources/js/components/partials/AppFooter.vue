<template>
    <footer class="border-t border-white/10 bg-[#050505]">
        <div class="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <!-- Brand -->
                <div class="lg:col-span-2">
                    <div class="flex items-center gap-3">
                        <div class="flex h-12 w-12 items-center justify-center">
                            <span class="text-sm font-bold text-[#C9A227]">
                                <img src="/logo.png" alt="" />
                            </span>
                        </div>

                        <div class="leading-none">
                            <div class="text-sm font-bold tracking-[0.25em] text-white">
                                ESY
                            </div>

                            <div class="mt-1 text-[9px] font-medium tracking-[0.35em] text-[#C9A227]">
                                PLAYER
                            </div>
                        </div>
                    </div>

                    <p class="mt-6 max-w-md text-sm leading-7 text-white/45">
                        A simple and powerful video embedding platform. Create
                        beautiful players and embed your videos anywhere.
                    </p>
                </div>

                <!-- Product -->
                <div>
                    <h3 class="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                        Product
                    </h3>

                    <div class="mt-5 flex flex-col gap-3 text-sm">
                        <RouterLink to="/embed" class="text-white/45 transition hover:text-[#C9A227]">
                            Embed
                        </RouterLink>

                        <RouterLink to="/pricing" class="text-white/45 transition hover:text-[#C9A227]">
                            Pricing
                        </RouterLink>

                        <a href="#" class="text-white/45 transition hover:text-[#C9A227]">
                            Documentation
                        </a>
                    </div>
                </div>

                <!-- Company -->
                <div>
                    <h3 class="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                        Company
                    </h3>

                    <div class="mt-5 flex flex-col gap-3 text-sm">
                        <a href="#" class="text-white/45 transition hover:text-[#C9A227]">
                            About
                        </a>

                        <a href="#" class="text-white/45 transition hover:text-[#C9A227]">
                            Contact
                        </a>

                        <a href="#" class="text-white/45 transition hover:text-[#C9A227]">
                            Privacy
                        </a>

                        <a href="#" class="text-white/45 transition hover:text-[#C9A227]">
                            Terms
                        </a>
                    </div>
                </div>
            </div>

            <div
                class="mt-16 flex flex-col text-center justify-center md:justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">
                <p>
                    © {{ new Date().getFullYear() }} ESY Player. All rights
                    reserved.
                </p>

                <p>Built for the modern web.</p>
            </div>
        </div>
    </footer>
</template>

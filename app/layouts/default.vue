<script setup lang="ts"></script>

<template>
    <div class="flex flex-col min-h-screen items-center mx-auto">
        <header
            class="sticky top-0 z-10 w-full min-h-25 bg-white/60 dark:bg-black/70 backdrop-blur-2xl border-b border-slate-600/15 pt-6"
        >
            <Navbar />
        </header>

        <main class="px-4 overflow-hidden md:overflow-visible">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<style scoped></style>

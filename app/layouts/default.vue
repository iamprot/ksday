<script setup lang="ts">
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>

<template>
    <div class="flex flex-col min-h-90 items-center bg-pale">
        <header
            class="sticky top-0 z-50 w-full min-h-25 bg-white/60 backdrop-blur-2xl border-b border-slate-600/15 pt-6"
        >
            <div
                class="flex max-w-7xl h-full mx-auto px-4 justify-between items-center"
            >
                <NuxtLink to="/">
                    <UiKsLogo />
                </NuxtLink>

                <nav class="flex gap-6 items-center">
                    <a href="https://im.systems" class="hidden min-[660px]:flex">
                        <div
                            class="group flex items-center gap-2 py-3 px-6 rounded-full bg-slate-300/30 hover:bg-white border-2 border-slate-400/30 transition-colors duration-300 ease-in"
                        >
                            <!-- <Icon name="solar:hashtag-bold" size="20" class="group-hover:text-primary" /> -->
                            <span
                                class="text-base font-medium group-hover:text-primary"
                                >О Knowledge Space</span
                            >
                        </div>
                    </a>
                    <UiBaseButton
                        label="Зарегистрироваться"
                        @click="scrollToSection('contact')"
                    />
                </nav>
            </div>
        </header>

        <main class="px-4">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>

<style scoped></style>

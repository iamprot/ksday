<script setup lang="ts">
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>

<template>
    <div
        class="flex max-w-7xl h-full mx-auto px-4 justify-between items-center"
    >
        <NuxtLink to="/">
            <UiKsLogo />
        </NuxtLink>

        <nav class="flex gap-2 items-center">
            <a href="https://im.systems" class="hidden min-[660px]:flex">
                <div
                    class="group flex items-center gap-2 py-3 px-6 rounded-full bg-white dark:bg-gray-800/30 ring ring-slate-400/30 dark:hover:bg-gray-800 focus:ring-accent transition-all duration-300 ease-in shadow-accent dark:shadow-light hover:shadow-xl/20 dark:hover:shadow-none"
                >
                    <Icon
                        name="solar:alt-arrow-right-linear"
                        size="24"
                        class="group-hover:text-primary dark:text-light group-hover:dark:text-white"
                    />
                    <span class="text-base font-medium group-hover:text-primary dark:text-light group-hover:dark:text-white"
                        >О Knowledge Space</span
                    >
                </div>
            </a>
            <UiBaseButton
                label="Зарегистрироваться"
                @click="scrollToSection('contact')"
                size="small"
            />
            <UiColorModeButton />
        </nav>
    </div>
</template>

<style scoped></style>

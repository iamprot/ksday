<script setup lang="ts">
interface Props {
    title: string | null;
    description: string | null;
    image: string | null;
}

const props = defineProps<Props>();

</script>

<template>
    <div
        class="group relative flex flex-col bg-white dark:bg-gray-900/80 dark:hover:bg-blue-800/20 border border-gray-300/50 dark:border dark:border-gray-800 p-8 gap-4 md:gap-8 rounded-smooth hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-[#1F3259]/50 dark:shadow-2xl transition-all duration-300 overflow-hidden"
    >
        <div class="font-bold text-2xl text-primary dark:text-light">
            <span>{{ title }}</span>
        </div>
        <div class="text-dark dark:text-white/60 font-light text-balance leading-7 w-3/4">
            <span>{{ description }}</span>
        </div>
        <div
            class="absolute -right-5 bottom-4 w-32 md:w-43 shrink-0 group-hover:scale-105 transition-all duration-300"
        >
            <img :src="`images/${image}`" />
        </div>
    </div>
</template>

<style scoped></style>

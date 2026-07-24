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
        class="group relative flex flex-col bg-white p-8 gap-4 md:gap-8 rounded-smooth hover-shadow-soft-blue transition-all duration-300 overflow-hidden"
    >
        <div class="font-bold text-2xl text-primary">
            <span>{{ title }}</span>
        </div>
        <div class="text-dark text-balance leading-7 w-3/4">
            <span>{{ description }}</span>
        </div>
        <div class="absolute -right-5 bottom-4 w-32 md:w-43 shrink-0 group-hover:scale-105 transition-all duration-300">
            <img :src="`images/${image}`" />
        </div>
    </div>
</template>

<style scoped></style>

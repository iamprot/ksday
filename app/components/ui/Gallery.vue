<script setup lang="ts">
const photos = [
    {
        source: "photo/00.jpg",
        description: "KS Day 2025 Photo 1",
    },
    {
        source: "photo/01.jpg",
        description: "KS Day 2025 Photo 2",
    },
    {
        source: "photo/02.jpg",
        description: "KS Day 2025 Photo 3",
    },
    {
        source: "photo/03.jpg",
        description: "KS Day 2025 Photo 4",
    },
    {
        source: "photo/04.jpg",
        description: "KS Day 2025 Photo 5",
    },
];
</script>

<template>
    <div
        class="grid grid-cols-1 md:grid-cols-3 max-w-7xl w-full shrink overflow-hidden gap-4 md:gap-8"
    >
        <div
            v-for="(photo, idx) in photos"
            :key="idx"
            :class="idx === 0 ? 'md:row-span-2' : ''"
            class="relative overflow-hidden rounded-2xl"
            v-motion-pop-bottom
            :delay="idx * 200"
        >
            <img
                :src="photo.source"
                :alt="photo.description"
                class="w-full h-full object-cover transition-transform duration-400 ease-in hover:scale-102"
            />
        </div>
    </div>
</template>

<style scoped></style>

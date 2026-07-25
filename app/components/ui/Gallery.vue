<script setup lang="ts">
const photos = [
    {
        source: "photo/05.mp4",
        description: "KS Day 2025 Photo 1",
        type: "video",
    },
    {
        source: "photo/01.jpg",
        description: "KS Day 2025 Photo 2",
        type: "image",
    },
    {
        source: "photo/02.jpg",
        description: "KS Day 2025 Photo 3",
        type: "image",
    },
    {
        source: "photo/03.jpg",
        description: "KS Day 2025 Photo 4",
        type: "image",
    },
    {
        source: "photo/04.jpg",
        description: "KS Day 2025 Photo 5",
        type: "image",
    },
];
</script>

<template>
    <div
        class="grid grid-cols-1 md:grid-cols-3 max-w-7xl w-full shrink overflow-hidden gap-4 md:gap-8"
    >
        <div
            v-for="(item, idx) in photos"
            :key="idx"
            :class="idx === 0 ? 'md:row-span-2' : ''"
            class="relative overflow-hidden rounded-2xl"
            v-motion-pop-bottom
            :delay="idx * 200"
        >
            <img
                v-if="item.type === 'image'"
                :src="item.source"
                :alt="item.description"
                class="w-full h-full object-cover transition-transform duration-300 ease-in hover:scale-102"
            />

            <video v-else autoplay muted loop>
                <source :src="item.source" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<style scoped></style>

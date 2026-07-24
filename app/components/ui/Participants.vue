<script setup lang="ts">
const logos = [
    "binnopharm",
    "bonduelle",
    "borjomi",
    "cherkizovo",
    "detsky_mir",
    "gazpromban",
    "gazpromneft",
    "hoff",
    "lenta",
    "metalloinvest",
    "nornikel",
    "novatek",
    "psb",
    "rosneft",
    "rusagro",
    "salym",
    "sibur",
    "splat",
    "teva",
    "x5",
];
</script>

<template>
    <div>
        <div
            class="text-3xl font-bold text-center my-8"
            v-motion-pop-bottom
            :delay="200"
        >
            Участники 2025 года
        </div>
        <div
            class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center justify-center"
        >
            <div
                v-for="(logo, idx) in logos"
                :key="idx"
                class="text-center p-4 h-4 md:h-10! rounded-lg py-8 md:py-12 shrink-0 bg-center bg-no-repeat transition-opacity duration-300 ease-in"
                :style="{ backgroundImage: `url(logos/${logo}.png)` }"
                v-motion-pop-bottom
                :delay="idx * 16"
            ></div>
        </div>
    </div>
</template>

<style scoped></style>

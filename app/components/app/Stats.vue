<script setup lang="ts"></script>

<template>
    <UiBaseContainer id="stats">
        <div class="relative flex flex-col gap-16 max-w-7xl">
            <UiCircle class="absolute -left-64 -top-64 overflow-hidden" />
            <div
                class="z-1 flex flex-col gap-8 items-center md:items-start w-full md:w-3/4"
            >
                <UiTagline
                    label="Как это было"
                    v-motion-pop-bottom
                    :delay="200"
                />
                <UiHeadline
                    label="KS DAY 2025 в цифрах и кадрах"
                    v-motion-pop-bottom
                    :delay="200"
                />
            </div>
            <UiGallery />
            <UiFeatures />
            <UiParticipants />
        </div>
    </UiBaseContainer>
</template>

<style scoped>
#stats {
    scroll-margin-top: 64px;
}
</style>

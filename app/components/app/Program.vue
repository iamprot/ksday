<template>
    <UiBaseContainer id="program">
        <div class="relative flex flex-col gap-16 max-w-7xl">
            <UiCircle class="absolute -left-64 -top-64 overflow-hidden" />
            <div class="z-2 flex flex-col gap-8 items-center md:items-start">
                <UiTagline label="Программа" v-motion-pop-bottom :delay="200" />
                <UiHeadline
                    label="Как пройдет вечер"
                    v-motion-pop-bottom
                    :delay="200"
                />
            </div>
            <UiTimeline />
            <UiBanner />
        </div>
    </UiBaseContainer>
</template>

<script setup lang="ts"></script>

<style scoped>
#program {
    scroll-margin-top: 64px;
}
</style>

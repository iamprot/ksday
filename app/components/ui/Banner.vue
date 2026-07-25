<script setup lang="ts"></script>

<template>
    <div
        class="flex flex-row items-center gap-6 bg-white dark:bg-gray-800/60 backdrop-blur-xl border border-[#EAEDF5] dark:border-gray-700/60 dark:text-white/80 rounded-smooth pb-8 pt-8 pl-8 pr-8 bg-auto bg-no-repeat bg-position-[right_1rem_center] md:bg-position-[right_5rem_center] bg-[url(/info.png)] text-dark/50 text-xl font-light leading-7"
        v-motion-pop-bottom
        :duration="200"
    >   <div class="inline-flex p-4 bg-[#0073FF]/10 rounded-2xl">
        <Icon name="mdi:information-outline" size="32" class="text-light"/>
    </div>
        <span>Зарегистрированные участники получат полную программу на&nbsp;e-mail</span>
    </div>
</template>

<style scoped></style>

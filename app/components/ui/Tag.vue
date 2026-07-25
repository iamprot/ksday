<script setup lang="ts">
interface Props {
    label?: string | null;
    icon?: string | null;
}

const props = defineProps<Props>();
</script>

<template>
    <div
        class="inline-flex shrink-0 w-fit items-center gap-3 py-2.5 px-5 rounded-2xl bg-white dark:bg-gray-800/60 backdrop-blur-xl border border-[#EAEDF5] dark:border-gray-700 text-primary dark:text-white/80"
    >
        <Icon :name="`${icon}`" :size="20" class="text-primary dark:text-light" />
        <span class="text-[14px] md:text-base">{{ label }}</span>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
interface Props {
    label?: string | null;
}

const props = defineProps<Props>();
</script>

<template>
    <h2 class="text-dark dark:text-white text-center md:text-start text-balance text-4xl md:text-6xl font-bold md:leading-16">
        {{ label }}
    </h2>
</template>

<style scoped>

</style>
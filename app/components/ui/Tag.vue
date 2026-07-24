<script setup lang="ts">
interface Props {
    label?: string | null;
    icon?: string | null;
}

const props = defineProps<Props>();

</script>

<template>
    <div class="inline-flex shrink-0 w-fit items-center gap-3 py-2.5 px-5 rounded-2xl bg-white border border-[#EAEDF5] text-primary">
    <Icon :name="`${icon}`" :size="20" class="text-primary" />
        <span>{{ label }}</span>
    </div>
</template>

<style scoped>

</style>
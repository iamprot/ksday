<script setup lang="ts">
interface Props {
    label?: string | null;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="text-accent text-center md:text-start w-fit text-balance uppercase text-sm font-medium tracking-[20%]">
        {{ label }}
    </div>
</template>

<style scoped>

</style>
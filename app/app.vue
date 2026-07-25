<script setup lang="ts"></script>
<template>
    <div>
        <NuxtLoadingIndicator :height="5" :throttle="0" color="#4437f9" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}

.page-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.page-enter-from {
    opacity: 0;
    transform: translateY(5px);
}
</style>

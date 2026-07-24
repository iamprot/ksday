<script setup lang="ts"></script>
<template>
    <div>
        <NuxtLoadingIndicator
            :throttle="10"
            color="#ff0000"
            :height="25"
        />
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

<script setup lang="ts">
useSeoMeta({
    title: "KS Day 2026 | Официальная страница мероприятия",
    description: "Главное событие года для тех, кто планирует: кейсы заказчиков Knowledge Space, новые технологии платформы и искусственный интеллект и многое другое",
    ogTitle: "KS Day 2026",
    ogDescription: "Главное событие года для тех, кто планирует: кейсы заказчиков Knowledge Space, новые технологии платформы и искусственный интеллект, награждение лучших проектов и вечер живого общения.",
    ogImage: "https://ksday2026.im.systems/ks_day_media.png",
    ogUrl: "https://ksday2026.im.systems",
    robots: "follow"
});

useHead({
    link: [
        {
            rel: "canonical",
            href: "https://ksday2026.im.systems",
        },
    ],
});
</script>

<template>
    <main class="flex flex-col">
        <AppHero />
        <AppAbout />
        <AppStats />
        <AppProgram />
        <AppContact />
    </main>
</template>

<style scoped>

</style>
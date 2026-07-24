<script setup lang="ts">
const cards = [
    {
        title: "Кейсы заказчиков",
        description:
            "Практика интегрированного планирования из первых рук: как платформу KS используют лидеры FMCG, металлургии, ритейла и других отраслей.",
        image: "case.png",
    },
    {
        title: "Технологии KS и ИИ",
        description:
            "Что нового в платформе: релизы года, дорожная карта и сценарии применения искусственного интеллекта в бизнес-планировании.",
        image: "target.png",
    },
    {
        title: "Живое общение",
        description:
            "Сотня коллег по цеху в одном зале: обмен опытом с командами планирования крупнейших компаний страны — без формальностей.",
        image: "puzzle.png",
    },
    {
        title: "Награждение проектов",
        description:
            "Церемония KS Awards: отмечаем лучшие проекты года и команды, которые двигают планирование вперёд. Вечер завершает банкет.",
        image: "cup.png",
    },
];
</script>

<template>
    <UiBaseContainer id="about">
        <div class="relative flex flex-col gap-16 max-w-7xl">
            <UiCircle class="absolute -left-64 -top-64 overflow-hidden" />
            <div
                class="z-1 flex flex-col gap-8 items-center md:items-start w-full md:w-3/4"
            >
                <UiTagline
                    label="О мероприятии"
                    v-motion-pop-bottom
                    :delay="200"
                />
                <UiHeadline
                    label="Один вечер – весь опыт сообщества KS"
                    v-motion-pop-bottom
                    :delay="200"
                />
            </div>
            <div class="z-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <UiAboutCard
                    v-for="(card, idx) in cards"
                    :key="idx"
                    :title="card.title"
                    :description="card.description"
                    :image="card.image"
                    v-motion-pop-bottom
                    :delay="idx * 100"
                />
            </div>
        </div>
    </UiBaseContainer>
</template>

<style scoped>
#about {
    scroll-margin-top: 64px;
}
</style>

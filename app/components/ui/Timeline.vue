<script setup lang="ts">
const events = [
    {
        time: "15:00",
        title: "Сбор гостей и регистрация",
        description: "Welcome-кофе, регистрация.",
    },
    {
        time: "15:30",
        title: "Пленарная сессия",
        description:
            "Открытие KS DAY 2026, ключевые итоги и планы Knowledge Space. Новые возможности платформы и сценарии применения искусственного интеллекта в планировании.",
        badge: "детали уточняются",
    },
    {
        time: "16:00",
        title: "Кейсы заказчиков",
        description:
            "Практика внедрений в FMCG, металлургии, ритейле и других отраслях. Состав спикеров будет объявлен дополнительно.",
        badge: "детали уточняются",
    },
    {
        time: "18:00",
        title: "Награждение лучших проектов",
        description: "Церемония KS Awards.",
    },
    {
        time: "18:30",
        title: "Банкет и нетворкинг",
        description:
            "Неформальное общение с коллегами и командой Knowledge Space до 22:00.",
    },
];
</script>

<template>
    <div>
        <div
            v-for="(event, idx) in events"
            :key="idx"
            class="flex flex-col md:flex-row py-6 gap-2 md:gap-20 items-start md:items-center border-b last:border-0 border-slate-500/20"
            v-motion-pop-bottom
            :delay="idx * 100"
        >
            <div class="text-primary font-bold text-3xl md:text-5xl">
                {{ event.time }}
            </div>
            <div class="flex flex-col gap-5">
                <div
                    class="text-dark font-bold text-2xl flex gap-4 items-center"
                >
                    {{ event.title }}
                    <span
                        v-if="event.badge?.length"
                        class="inline-block shrink-0 bg-white px-2 pb-1 h-5 rounded-full border border-primary/50 text-primary text-[14px] uppercase font-normal"
                        >{{ event.badge }}</span
                    >
                </div>
                <div>{{ event.description }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

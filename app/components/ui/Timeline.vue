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
        badge: "Программа в разработке",
    },
    {
        time: "16:00",
        title: "Кейсы заказчиков, часть 1",
        description:
            "Практика внедрений в промышленности и металлургии.",
        badge: "Программа в разработке",
    },
    {
        time: "17:30",
        title: "Кофе–брейк",
        description: null,
    },
    {
        time: "17:45",
        title: "Кейсы заказчиков, часть 2",
        description:
            "Практика внедрений в FMCG, ритейле и других отраслях.",
        badge: "Программа в разработке",
    },
    {
        time: "19:00",
        title: "Церемония награждения",
        description: "Церемония KS Awards.",
    },
    {
        time: "19:30",
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
            class="grid grid-rows-1 md:grid-cols-4 py-6 gap-2 md:gap-20 items-start md:items-center border-b last:border-0 border-slate-500/20"
            v-motion-pop-bottom
            :delay="idx * 100"
        >
            <div
                class="text-primary dark:text-accent font-bold text-3xl md:text-5xl"
            >
                {{ event.time }}
            </div>
            <div class="flex flex-col gap-5 md:col-span-3">
                <div
                    class="text-dark dark:text-white font-medium text-2xl flex gap-4 items-center"
                >
                    {{ event.title }}
                    <span
                        v-if="event.badge?.length"
                        class="inline-block shrink-0 bg-white dark:bg-gray-800 px-2 pb-4.5 pt-1 h-5 rounded-full border border-primary/50 dark:border-gray-700 text-primary dark:text-light text-[12px] font-medium"
                        >{{ event.badge }}</span
                    >
                </div>
                <div class="text-dark dark:text-white/60">
                    {{ event.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
const tags = [
    {
        icon: "solar:calendar-minimalistic-linear",
        label: "30 сентября 2026",
    },
    {
        icon: "solar:clock-circle-linear",
        label: "15:00 – 22:00",
    },
    {
        icon: "solar:map-point-linear",
        label: "Hotel Continental, ул. Тверская, 22, Москва",
    },
];
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>

<template>
    <UiBaseContainer>
        <div class="flex items-center justify-center max-w-7xl">
            <div
                class="relative flex flex-col gap-12 md:gap-16 items-center md:items-start"
            >
                <UiCircle class="absolute -left-64 -top-64 overflow-hidden" />
                <div
                    class="z-1 flex flex-col gap-4 md:gap-8 items-center md:items-start"
                    v-motion-pop-bottom
                >
                    <UiTagline label="Ежегодная конференция Knowledge Space" />
                    <h1 class="flex items-end py-4 gap-2">
                        <span
                            class="text-dark font-black text-[52px]/13 md:text-[96px]/18 tracking-tighter"
                            >KS DAY</span
                        >
                        <span class="text-light font-black text-[96px]/18"
                            >/</span
                        >
                        <span class="text-accent font-extrabold text-[48px]/10"
                            >2026</span
                        >
                    </h1>
                </div>
                <div
                    class="z-1 flex items-center lg:items-start flex-col md:flex-row gap-2"
                >
                    <UiTag
                        v-for="(tag, idx) in tags"
                        :key="idx"
                        :label="tag.label"
                        :icon="tag.icon"
                        v-motion-pop-bottom
                        :delay="idx * 200"
                    />
                </div>
                <p
                    class="z-1 text-dark text-balance text-center md:text-start leading-8 md:leading-9 text-base md:text-xl w-full md:w-3/4"
                    v-motion-pop-bottom
                    :delay="200"
                >
                    Главное событие года для тех, кто планирует: кейсы
                    заказчиков Knowledge Space, новые технологии платформы и
                    искусственный интеллект, награждение лучших проектов и вечер
                    живого общения.
                </p>
                <div
                    class="z-1 flex flex-col w-full md:flex-row gap-4 md:gap-6 justify-center md:justify-start"
                >
                    <UiBaseButton
                        label="Зарегистрироваться"
                        @click="scrollToSection('contact')"
                        v-motion-pop-bottom
                        :delay="200"
                    />
                    <UiBaseButton
                        label="Подробнее о событии"
                        variant="secondary"
                        @click="scrollToSection('about')"
                        v-motion-pop-bottom
                        :delay="300"
                    />
                </div>
                <UiTagline
                    label="Будущее создается в пространстве знаний"
                    v-motion-pop-bottom
                    :delay="300"
                />
            </div>
            <UiHeroImage
                class="absolute hidden md:block h-[120%] right-[10%] top-[-10%]"
                v-motion-fade-visible-once
                :duration="400"
                :delay="200"
                :initial="{
                    x: -100,
                    scale: 0.8,
                    opacity: 0
                }"
                :enter="{
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                        ease: 'easeOut',
                    }
                }"
            />
        </div>
    </UiBaseContainer>
</template>

<style scoped></style>

<script setup lang="ts">
const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
</script>

<template>
    <footer
        class="w-full flex flex-col gap-16 mx-40 px-4 justify-center items-center py-16 bg-[#1B1E27] text-white"
    >
        <div
            class="flex flex-col md:flex-row justify-between w-full max-w-7xl gap-12"
        >
            <div class="flex gap-6 flex-col items-center md:items-start">
                <div><UiKsLogoWhite color="white" /></div>
                <div class="text-white/70 text-center md:text-start">
                    Российская no-code платформа<br />
                    для интегрированного бизнес-планирования.
                </div>
            </div>
            <div class="flex flex-col items-center shrink-0">
                <div class="flex flex-col gap-4 text-white/70 text-center md:text-left">
                    <span
                        class="hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
                        @click="scrollToSection('about')"
                        >О мероприятии</span
                    >
                    <span
                        class="hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
                        @click="scrollToSection('stats')"
                        >KS Day 2025</span
                    >
                    <span
                        class="hover:text-white hover:cursor-pointer transition-all duration-300 ease-in"
                        @click="scrollToSection('program')"
                        >Программа</span
                    >
                    <span
                        class="hover:text-white hover:cursor-pointer"
                        @click="scrollToSection('contact')"
                        >Регистрация</span
                    >
                </div>
            </div>
            <div class="flex flex-col gap-5 items-center md:items-start">
                <div class="flex flex-row gap-2">
                    <Icon
                        name="solar:map-point-linear"
                        size="24"
                        class="text-light"
                    />
                    <span class="font-light text-white/70"
                        >Hotel Continental, ул. Тверская, 22, Москва</span
                    >
                </div>
                <div class="flex flex-row gap-2">
                    <Icon
                        name="solar:letter-linear"
                        size="24"
                        class="text-light"
                    />
                    <span class="font-light text-white/70"
                        >marketing@im.systems</span
                    >
                </div>
                <div class="flex flex-row gap-2">
                    <Icon
                        name="solar:laptop-minimalistic-outline"
                        size="24"
                        class="text-light"
                    />
                    <span class="font-light text-white/70">im.systems</span>
                </div>
            </div>
        </div>
        <div
            class="flex flex-row w-full max-w-7xl justify-between text-sm text-white/40"
        >
            <span>&copy; 2026 Knowledge Space.<br />Все права защищены.</span>
            <span class="text-right">KS Day 2026 / 30 сентября / Москва</span>
        </div>
    </footer>
</template>

<style scoped></style>

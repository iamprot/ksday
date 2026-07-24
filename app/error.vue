<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
    error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });

const errorData = computed(() => {
    const code = props.error?.statusCode;

    switch (code) {
        case 404:
            return {
                title: "404",
                subtitle: "Упс.. страница не найдена",
                message: "Давайте вернемся на главную страницу.",
            };
        case 500:
            return {
                title: "500",
                subtitle: "Ошибка сервера",
                message: "Что-то пошло не так на нашей стороне. Мы уже работаем над исправлением.",
            };
        case 302:
            return {
                title: "302",
                subtitle: "Страница перемещена",
                message: "Этот раздел временно недоступен или был перенесен. Пожалуйста, вернитесь на главную.",
            };
        case 403:
            return {
                title: "403",
                subtitle: "Доступ запрещен",
                message: "У вас нет прав для просмотра этой страницы.",
            };
        default:
            return {
                title: String(code || "Ошибка"),
                subtitle: "Непредвиденная ошибка",
                message: props.error?.message || "Произошла неизвестная ошибка. Попробуйте обновить страницу.",
            };
    }
});

</script>

<template>
   <NuxtLayout>
        <div class="flex flex-col gap-8 min-h-[calc(100vh-100px)] items-center justify-center text-center px-4">
            
            <h1 class="font-bold text-8xl md:text-9xl text-primary tracking-tighter leading-none">
                {{ errorData.title }}
            </h1>

            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
                {{ errorData.subtitle }}
            </h2>

            <p class="text-lg text-dark/50 max-w-md leading-relaxed">
                {{ errorData.message }}
            </p>
            <UiBaseButton label="На главную страницу" @click="handleError"/>
        </div>
    </NuxtLayout>
</template>
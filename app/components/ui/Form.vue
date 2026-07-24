<script setup lang="ts">
import { ref, computed } from "vue";

interface FormData {
    fullName: string;
    company: string;
    position: string;
    email: string;
    agreed: boolean;
    honeypot: string;
}

const form = ref<FormData>({
    fullName: "",
    company: "",
    position: "",
    email: "",
    agreed: false,
    honeypot: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const isModalOpen = ref(false);

const isFormValid = computed(() => {
    if (form.value.honeypot.trim() !== "") return false;

    return (
        form.value.fullName.trim() !== "" &&
        form.value.company.trim() !== "" &&
        form.value.position.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email) &&
        form.value.agreed
    );
});

const handleSubmit = async () => {
    if (form.value.honeypot.trim() !== "") return;
    if (!isFormValid.value || isSubmitting.value) return;

    isSubmitting.value = true;
    try {
        // Имитация запроса (замените на ваш API)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        isSubmitted.value = true;
        isModalOpen.value = true;
    } finally {
        isSubmitting.value = false;
    }
};

const closeModal = () => {
    isModalOpen.value = false;
    // Опционально: очистить форму после закрытия
    // form.value = { fullName: '', company: '', position: '', email: '', agreed: false, honeypot: '' };
};
</script>

<template>
    <div
        class="w-full max-w-6xl mx-auto px-2 py-8"
        v-motion-pop-bottom
        :duration="900"
    >
        <div
            class="relative flex flex-col lg:flex-row gap-8 rounded-[32px] bg-white/10 border border-light/20 overflow-hidden"
        >
            <!-- Фоновое изображение -->
            <div
                class="absolute -right-20 -top-10 hidden md:block md:w-100 md:h-100 bg-[url('/email.png')] bg-contain bg-top-right bg-no-repeat opacity-30 pointer-events-none z-0"
                aria-hidden="true"
            ></div>

            <!-- Контейнер формы -->
            <div
                class="flex flex-col justify-center p-8 md:p-12 w-full md:w-[90%] z-20"
            >
                <form
                    @submit.prevent="handleSubmit"
                    class="flex flex-col gap-4"
                >
                    <!-- Honeypot (вынесен из grid для безопасности) -->
                    <input
                        type="text"
                        name="formId"
                        v-model="form.honeypot"
                        autocomplete="off"
                        tabindex="-1"
                        class="absolute -left-96 -top-96 -z-10 opacity-0 pointer-events-none"
                        aria-hidden="true"
                    />

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            v-model="form.fullName"
                            type="text"
                            placeholder="Имя Фамилия"
                            class="w-full bg-white rounded-2xl px-5 py-4 text-base text-gray-900 placeholder:text-gray-500 outline-none focus:ring-4 focus:ring-white/60 transition"
                        />
                        <input
                            v-model="form.company"
                            type="text"
                            placeholder="Название компании"
                            class="w-full bg-white rounded-2xl px-5 py-4 text-base text-gray-900 placeholder:text-gray-500 outline-none focus:ring-4 focus:ring-white/60 transition"
                        />
                        <input
                            v-model="form.position"
                            type="text"
                            placeholder="Должность"
                            class="w-full bg-white rounded-2xl px-5 py-4 text-base text-gray-900 placeholder:text-gray-500 outline-none focus:ring-4 focus:ring-white/60 transition"
                        />
                        <input
                            v-model="form.email"
                            type="email"
                            placeholder="Email"
                            class="w-full bg-white rounded-2xl px-5 py-4 text-base text-gray-900 placeholder:text-gray-500 outline-none focus:ring-4 focus:ring-white/60 transition"
                        />
                    </div>

                    <!-- Сабмит -->
                    <div
                        class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4"
                    >
                        <label
                            class="flex items-start gap-3 cursor-pointer group max-w-md"
                        >
                            <div class="relative mt-0.5 shrink-0">
                                <input
                                    v-model="form.agreed"
                                    type="checkbox"
                                    class="peer sr-only"
                                />
                                <div
                                    class="w-5 h-5 rounded-full border-2 border-gray-300 bg-white peer-checked:border-accent peer-checked:bg-accent transition flex items-center justify-center"
                                >
                                    <svg
                                        v-if="form.agreed"
                                        class="w-3 h-3 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="3"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <span class="text-[12px] text-white leading-snug">
                                Даю согласие на обработку персональных данных и
                                соглашаюсь с&nbsp;<a
                                    href="#"
                                    class="underline text-light hover:text-white transition"
                                    >политикой обработки персональных данных</a
                                >
                            </span>
                        </label>

                        <button
                            type="submit"
                            :disabled="
                                !isFormValid || isSubmitting || isSubmitted
                            "
                            class="inline-flex items-center justify-center gap-2 w-full md:w-fit text-white font-medium px-8 py-3.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition shrink-0 btn__submit btn__submit-colors"
                        >
                            <svg
                                v-if="isSubmitting"
                                class="animate-spin h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                />
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>

                            <!-- Динамический текст кнопки -->
                            <span v-if="isSubmitted">Отправлено</span>
                            <span v-else-if="isSubmitting">Отправка...</span>
                            <span v-else>Отправить заявку</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Модальное окно -->
        <Teleport to="body">
            <Transition name="modal">
                <div
                    v-if="isModalOpen"
                    class="fixed inset-0 z-99 flex items-center justify-center p-4"
                    @click.self="closeModal"
                    @keydown.escape="closeModal"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        class="absolute inset-0 bg-black/50 backdrop-blur-md"
                    />

                    <div
                        class="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center transform transition-all"
                    >
                        <div
                            class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6"
                        >
                            <svg
                                class="h-8 w-8 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>

                        <h3 class="text-xl font-bold text-gray-900 mb-2">
                            Форма отправлена!
                        </h3>
                        <p class="text-gray-600 mb-8">
                            Ожидайте уведомления на почту
                        </p>

                        <button
                            @click="closeModal"
                            class="w-full bg-accent text-white font-medium py-3.5 rounded-full hover:bg-primary transition hover:cursor-pointer"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
.btn__submit {
    position: relative;
    z-index: 1;
    user-select: none;
    cursor: pointer;
    /*** full width block ***/
    /* width: 100%; */
}

.btn__submit-colors {
    background: linear-gradient(
        90deg,
        var(--color-light),
        var(--color-light),
        var(--color-light)
    );
    background-size: 400%;
}

.btn__submit:hover {
    animation: animate-49 8s linear infinite;
}

@keyframes animate-49 {
    0% {
        background-position: 0%;
    }

    100% {
        background-position: 400%;
    }
}

.btn__submit:before {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
}

.btn__submit:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate-49 8s linear infinite;
}

.btn__submit:disabled {
    pointer-events: none;
    opacity: 0.65;
    color: #7e7e7e;
    box-shadow: none;
    background: #dcdcdc;
}

/* Анимация модального окна */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-enter-from .relative,
.modal-leave-to .relative {
    transform: scale(0.9);
}
</style>

<script setup lang="ts">
</script>

<template>
    <section class="relative w-full" id="contact">
        <div
            class="relative flex flex-col gap-4 md:gap-16 max-w-7xl w-full pb-12 px-4 pt-12 md:py-36 bg-linear-to-b from-primary to-accent rounded-t-[64px]"
            v-motion-pop-bottom
            :duration="200"
        >
            <div
                class="z-2 flex flex-col gap-8 items-center justify-center text-center"
            >
                <!-- <div
                    class="uppercase text-light tracking-[20%] text-sm font-medium"
                    v-motion-pop-bottom
                    :delay="200"
                >
                    регистрация
                </div> -->
                <h2
                    class="font-bold text-3xl md:text-6xl text-white"
                    v-motion-pop-bottom
                    :delay="400"
                >
                    Увидимся 30 сентября<br />на KS DAY 2026!
                </h2>
                <div
                    class="font-normal text-2xl text-white"
                    v-motion-pop-bottom
                    :delay="600"
                >
                    До встречи на конференции!
                </div>
            </div>
            <!-- <UiForm /> -->
        </div>
    </section>
</template>

<style scoped>
#contact {
    scroll-margin-top: 100px;
}
</style>

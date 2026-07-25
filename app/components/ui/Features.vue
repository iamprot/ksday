<script setup lang="ts">

const features = [
    {
        amount: 100,
        description: "участников из крупнейших<br>компаний России",
    },
    {
        amount: 10,
        description: "докладов<br>и кейсов заказчиков",
    },
    {
        amount: 10,
        description: "отраслей: от FMCG<br>до металлургиии нефтегаза",
    },
];

</script>

<template>
    <div class="flex flex-col md:flex-row gap-4 md:gap-8">
        <div
            v-for="(item, idx) in features"
            :key="idx"
            class="flex flex-col gap-2 bg-white dark:bg-gray-900/60 border border-gray-300/50 dark:border dark:border-gray-800 p-6 md:p-8 rounded-smooth w-full items-center justify-start"
            v-motion-pop-bottom
            :delay="idx * 200"
        >
            <div class="text-5xl md:text-7xl font-medium text-primary dark:text-light">
                {{ item.amount }}+
            </div>
            <div class="text-center text-dark dark:text-white/70 font-light" v-html="item.description"></div>
        </div>
    </div>
</template>

<style scoped></style>

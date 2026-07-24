<script setup lang="ts">
const features = [
    {
        amount: "100+",
        description: "участников из крупнейших компаний России",
    },
    {
        amount: "10+",
        description: "докладов и кейсов заказчиков",
    },
    {
        amount: "10+",
        description: "отраслей: от FMCG до металлургиии нефтегаза",
    },
];
</script>

<template>
    <div class="flex flex-col md:flex-row gap-4 md:gap-8">
        <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-smooth w-full items-center justify-start"
            v-motion-pop-bottom
            :delay="idx * 200"
        >
            <div class="text-5xl md:text-7xl font-medium text-primary">
                {{ feature.amount }}
            </div>
            <div class="text-center">{{ feature.description }}</div>
        </div>
    </div>
</template>

<style scoped></style>

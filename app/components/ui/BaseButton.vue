<script setup lang="ts">
interface Props {
    label?: string;
    variant?: "primary" | "secondary";
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    label: "",
    variant: "primary",
    type: "button",
    disabled: false,
    loading: false,
});

const variantClasses = computed(() => {
    const variants = {
        primary: "bg-accent text-white hover:bg-primary focus:ring-accent",
        secondary:
            "bg-white ring-2 ring-primary/20 text-primary hover:bg-[#F1F6FF] hover:ring-primary/50 focus:ring-accent",
    };
    return variants[props.variant];
});


</script>

<template>
    <button
        :type="type"
        :disabled="disabled || loading"
        :class="[
            'inline-flex items-center justify-center font-medium py-3 px-6 rounded-full hover:-translate-y-px',
            'transition-all duration-300 hover:cursor-pointer',
            variantClasses,
        ]"
    >
        <!-- Спиннер при загрузке -->

        <span>{{ label }}</span>
    </button>
</template>

<style scoped></style>

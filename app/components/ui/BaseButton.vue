<script setup lang="ts">
interface Props {
    label?: string;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    size?: "default" | "small"
}

const props = withDefaults(defineProps<Props>(), {
    label: "",
    variant: "primary",
    type: "button",
    disabled: false,
    loading: false,
    size: "default"
});

const variantClasses = computed(() => {
    const variants = {
        primary: "bg-accent dark:bg-primary dark:hover:bg-accent text-white hover:bg-primary focus:ring-accent",
        secondary:
            "bg-white dark:bg-gray-800/30 ring-1 ring-gray-300 dark:ring-gray-500/50 backdrop-blur-xl text-primary dark:text-white/80 hover:bg-[#F1F6FF] dark:hover:bg-gray-800 focus:ring-accent",
    };
    return variants[props.variant];
});

const sizeClasses = computed(() => {
    const sizes = {
        default: "py-3 px-6 font-medium",
        small: "py-2 px-4 md:py-3 md:px-5 font-normal md:font-normal text-sm md:text-base"
    }
    return sizes[props.size]
})

</script>

<template>
    <button
        :type="type"
        :disabled="disabled || loading"
        :class="[
            'inline-flex items-center justify-center rounded-full',
            'transition-all duration-300 hover:cursor-pointer',
            variantClasses,
            sizeClasses
        ]"
    >
        <span>{{ label }}</span>
    </button>
</template>

<style scoped></style>

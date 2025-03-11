<script lang="ts" setup>
	import { tv } from 'tailwind-variants';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';

	const props = defineProps<{
		variant?: 'text' | 'contained' | 'outlined';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		label: string;
		class?: string;
		rounded?: 'full' | 'md' | 'lg';
		disabled?: boolean;
		type?: 'submit' | 'button' | 'reset';
		fullWidth?: boolean;
		onClick?: (event: MouseEvent) => void;
		onBlur?: (event: FocusEvent) => void;
	}>();

	const buttonClasses = tv({
		base: 'px-6 py-2 duration-500 font-semibold transition-colors ease-in-out flex items-center justify-center gap-1 cursor-pointer w-48',
		variants: {
			variant: {
				text: 'text-monza-500 hover:text-monza-400 active:bg-monza-50',
				contained:
					'bg-monza-500 text-white hover:bg-monza-600 active:bg-monza-700',
				outlined:
					'bg-transparent text-monza-500 border-monza-500 hover:bg-monza-500 hover:text-white border hover:border-transparent active:bg-monza-600 active:text-white',
			},
			size: {
				xs: 'text-xs',
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg',
				xl: 'text-xl',
			},
			rounded: {
				full: 'rounded-full',
				md: 'rounded-md',
				lg: 'rounded-lg',
			},
		},
		defaultVariants: {
			variant: 'text',
			size: 'sm',
			rounded: 'md',
		},
	});
</script>

<template>
	<button
		:class="
			twMerge(
				clsx(
					buttonClasses({
						variant: props.variant,
						size: props.size,
						rounded: props.rounded,
					}),
					{
						'pointer-events-none opacity-50': props.disabled,
					},
					{
						'w-full': props.fullWidth,
					},
					props.class
				)
			)
		"
		:disabled="props.disabled"
		:aria-disabled="props.disabled ? 'true' : 'false'"
		:tabindex="props.disabled ? -1 : 0"
		:aria-label="props.label"
		:type="props.type"
		@click="props.onClick"
	>
		<slot name="icon-left" />
		{{ props.label }}
		<slot name="icon-right" />
	</button>
</template>

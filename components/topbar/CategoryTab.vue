<template>
	<button
		:class="[
			'flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium transition-colors',
			active
				? 'bg-blue-500 text-white'
				: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
		]"
		@click="$emit('click')"
	>
		<span>{{ name }}</span>
	</button>
</template>

<script setup lang="ts">
	defineProps({
		name: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: false,
		},
	});

	defineEmits(['click']);
</script>

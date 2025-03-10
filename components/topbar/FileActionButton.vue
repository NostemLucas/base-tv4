<template>
	<button
		class="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none"
		@click="$emit('click')"
	>
		<component :is="icon" class="h-3 w-3" />
		<span v-if="props.label">{{ props.label }}</span>
	</button>
</template>

<script setup lang="ts">
	import * as LucideIcons from 'lucide-vue-next';

	const props = defineProps({
		icon: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			default: '',
		},
	});

	defineEmits(['click']);
</script>

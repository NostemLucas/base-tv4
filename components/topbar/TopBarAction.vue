<template>
	<button
		class="rounded-full p-1 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
		@click="$emit('click')"
	>
		<component :is="props.icon" class="h-5 w-5" />
	</button>
</template>

<script setup lang="ts">
	import * as LucideIcons from 'lucide-vue-next';

	const props = defineProps({
		icon: {
			type: String,
			required: true,
		},
	});

	defineEmits(['click']);
</script>

<template>
	<div class="flex items-center rounded border border-gray-200">
		<button
			class="border-r border-gray-200 px-2 py-0.5 hover:bg-gray-100"
			@click="zoomOut"
		>
			<minus-icon class="h-3 w-3 text-gray-600" />
		</button>
		<button class="px-2 py-0.5 hover:bg-gray-100" @click="zoomIn">
			<plus-icon class="h-3 w-3 text-gray-600" />
		</button>
	</div>
</template>

<script setup lang="ts">
	import { MinusIcon, PlusIcon } from 'lucide-vue-next';

	const emit = defineEmits(['zoom-in', 'zoom-out']);

	const zoomIn = () => {
		emit('zoom-in');
	};

	const zoomOut = () => {
		emit('zoom-out');
	};
</script>

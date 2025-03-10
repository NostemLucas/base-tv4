<template>
	<div
		class="fixed right-4 bottom-4 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
	>
		<button
			class="rounded p-1 hover:bg-gray-100 disabled:opacity-50"
			:disabled="zoomLevel <= 50"
			@click="zoomOut"
		>
			<minus-icon class="h-4 w-4 text-gray-600" />
		</button>

		<div class="relative w-24">
			<input
				v-model="zoomLevel"
				type="range"
				min="50"
				max="150"
				class="h-1 w-full appearance-none rounded-full bg-gray-200 accent-blue-600"
				@input="handleZoom"
			/>
		</div>

		<button
			class="rounded p-1 hover:bg-gray-100 disabled:opacity-50"
			:disabled="zoomLevel >= 150"
			@click="zoomIn"
		>
			<plus-icon class="h-4 w-4 text-gray-600" />
		</button>

		<span class="min-w-[3ch] text-xs font-medium text-gray-600">
			{{ zoomLevel }}%
		</span>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { Minus as MinusIcon, Plus as PlusIcon } from 'lucide-vue-next';

	const zoomLevel = ref(100);

	const zoomIn = () => {
		if (zoomLevel.value < 150) {
			zoomLevel.value += 10;
			handleZoom();
		}
	};

	const zoomOut = () => {
		if (zoomLevel.value > 50) {
			zoomLevel.value -= 10;
			handleZoom();
		}
	};

	const handleZoom = () => {
		emit('zoom-change', zoomLevel.value);
	};

	function emit(arg0: string, value: number) {
		throw new Error('Function not implemented.');
	}
</script>

<style scoped></style>

<template>
	<div class="flex h-14 items-center justify-center border-b border-gray-200">
		<button
			class="rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
			@click="$emit('toggle-expand')"
		>
			<grid-icon class="h-5 w-5" />
		</button>
	</div>
</template>

<script setup lang="ts">
	import { GridIcon } from 'lucide-vue-next';

	defineEmits(['toggle-expand']);
</script>

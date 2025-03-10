<template>
	<div class="flex items-center rounded border border-gray-200">
		<button
			v-for="view in views"
			:key="view.type"
			class="border-r border-gray-200 px-2 py-0.5 last:border-r-0 hover:bg-gray-100"
			:class="{ 'bg-gray-100': currentView === view.type }"
			@click="toggleView(view.type)"
		>
			<component :is="view.icon" class="h-3 w-3 text-gray-600" />
		</button>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { ListIcon, LayoutGridIcon, ColumnsIcon } from 'lucide-vue-next';

	interface View {
		type: string;
		icon: any;
	}

	const views: View[] = [
		{ type: 'list', icon: ListIcon },
		{ type: 'grid', icon: LayoutGridIcon },
		{ type: 'columns', icon: ColumnsIcon },
	];

	const currentView = ref<string>('list');

	const toggleView = (viewType: string): void => {
		currentView.value = viewType;
	};
</script>

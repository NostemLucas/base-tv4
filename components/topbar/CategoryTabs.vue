<template>
	<div class="hide-scrollbar flex h-10 items-center overflow-x-auto px-4">
		<div class="flex items-center gap-2">
			<div
				class="flex items-center gap-1 rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
			>
				<circle-icon class="h-4 w-4 fill-blue-500 text-blue-500" />
				<span>AFFORDABLE AND CLEAN ENERGY</span>
			</div>

			<CategoryTab
				v-for="tab in tabs"
				:key="tab.name"
				:name="tab.name"
				:active="activeTab === tab.name"
				@click="selectTab(tab.name)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { CircleIcon } from 'lucide-vue-next';
	import CategoryTab from './CategoryTab.vue';
	const tabs = [
		{ name: 'ELECTRIC USAGE' },
		{ name: 'CO₂ EMISSIONS' },
		{ name: 'OTHER' },
	];

	const activeTab = ref('ELECTRIC USAGE');

	const selectTab = (tabName: any) => {
		activeTab.value = tabName;
		// Implementar lógica adicional si es necesario
	};
</script>

<style scoped>
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>

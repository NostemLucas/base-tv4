<template>
	<div>
		<!-- Mobile overlay -->
		<div
			v-if="isSidebarOpen"
			class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity lg:hidden"
			@click="toggleSidebar"
		/>

		<!-- Sidebar -->
		<aside
			:class="[
				'fixed inset-y-0 left-0 z-50 flex w-16 flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out lg:static',
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
				isExpandedSidebar ? 'lg:w-48' : 'lg:w-16',
			]"
		>
			<SidebarHeader @toggle-expand="toggleExpandSidebar" />
			<SidebarNavigation
				:is-expanded="isExpandedSidebar"
				:items="navigationItems"
			/>
			<SidebarFooter :is-expanded="isExpandedSidebar" />
		</aside>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import SidebarHeader from './SidebarHeader.vue';
	import SidebarNavigation from './SidebarNavigation.vue';
	import SidebarFooter from './SidebarFooter.vue';
	import { storeToRefs } from 'pinia';
	import { useSidebarStore } from '~/store/sidebar';

	const sidebarStore = useSidebarStore();
	const { isSidebarOpen, isExpandedSidebar } = storeToRefs(sidebarStore);
	const { toggleSidebar, toggleExpandSidebar } = sidebarStore;

	const navigationItems = [
		{ name: 'Home', icon: 'Home', active: true },
		{ name: 'Gráficas', icon: 'PieChart', active: false },
		{ name: 'Facturas', icon: 'FileText', active: false },
		{ name: 'Ventas', icon: 'BarChart', active: false },
		{ name: 'Usuarios', icon: 'Users', active: false },
		{ name: 'Ayuda', icon: 'HelpCircle', active: false },
		{ name: 'Links', icon: 'Share', active: false },
		{ name: 'ESG', icon: 'BarChart2', active: false },
		{ name: 'Más', icon: 'Menu', active: false },
	];
</script>

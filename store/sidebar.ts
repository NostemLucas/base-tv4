import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		isSidebarOpen: false,
		isExpandedSidebar: false,
	}),

	actions: {
		toggleSidebar() {
			this.isSidebarOpen = !this.isSidebarOpen;
		},

		toggleExpandSidebar() {
			this.isExpandedSidebar = !this.isExpandedSidebar;
		},

		closeSidebar() {
			this.isSidebarOpen = false;
		},
	},
});

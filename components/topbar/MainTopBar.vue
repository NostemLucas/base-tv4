<template>
	<div class="flex h-14 items-center justify-between px-4">
		<div class="flex items-center gap-2">
			<button
				class="rounded-md p-1 text-gray-600 hover:bg-gray-100 lg:hidden"
				@click="toggleSidebar"
			>
				<menu-icon class="h-5 w-5" />
			</button>

			<div class="flex items-center gap-1">
				<span class="text-sm font-semibold text-gray-700">Codex</span>
				<div
					class="ml-1 flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700"
				>
					<span class="h-2 w-2 rounded-full bg-blue-500"></span>
					General
					<chevron-down-icon class="h-3 w-3" />
				</div>
			</div>
		</div>

		<div class="relative hidden md:block">
			<search-icon
				class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
			/>
			<input
				type="text"
				placeholder="Buscar"
				class="w-64 rounded-md border border-gray-200 py-1.5 pr-3 pl-9 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
			/>
		</div>

		<div class="flex items-center gap-3">
			<TopBarAction icon="Bell" @click="toggleNotifications" />
			<TopBarAction icon="Settings" @click="openSettings" />
			<TopBarAction icon="Download" @click="downloadData" />
			<TopBarAction icon="HelpCircle" @click="openHelp" />
			<TopBarAction icon="Circle" @click="toggleTheme" />
			<div
				class="h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-orange-100"
				@click="openProfile"
			>
				<img
					src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WgQHB6tjxKdjwGHMcrAjRPUpwo8kbP.png"
					alt="User avatar"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { MenuIcon, SearchIcon, ChevronDownIcon } from 'lucide-vue-next';
	import { useSidebarStore } from '~/store/sidebar';
	import TopBarAction from './TopBarAction.vue';
	const sidebarStore = useSidebarStore();
	const { toggleSidebar } = sidebarStore;

	const toggleNotifications = () => {
		// Implementar lógica
	};

	const openSettings = () => {
		// Implementar lógica
	};

	const downloadData = () => {
		// Implementar lógica
	};

	const openHelp = () => {
		// Implementar lógica
	};

	const toggleTheme = () => {
		// Implementar lógica
	};

	const openProfile = () => {
		// Implementar lógica
	};
</script>

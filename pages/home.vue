<template>
	<div class="flex h-screen w-full bg-gray-50">
		<!-- Sidebar - Mobile overlay when open -->
		<div
			v-if="isSidebarOpen"
			class="fixed inset-0 z-40 bg-black/20 lg:hidden"
			@click="toggleSidebar"
		></div>

		<!-- Sidebar -->
		<aside
			:class="[
				'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static',
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
			]"
		>
			<!-- Sidebar Header -->
			<div class="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
				<span class="text-sm font-semibold text-blue-600">ESG Indicators</span>
				<div
					class="ml-2 flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700"
				>
					<span class="h-2 w-2 rounded-full bg-blue-500"></span>
					General
					<chevron-down-icon class="h-3 w-3" />
				</div>
			</div>

			<!-- Sidebar Navigation -->
			<nav class="flex-1 overflow-y-auto">
				<ul class="py-2">
					<li
						v-for="(item, index) in sidebarItems"
						:key="index"
						class="relative px-3 py-1"
					>
						<a
							href="#"
							:class="[
								'flex w-full flex-col items-center justify-center rounded-lg p-2 text-xs text-gray-600 transition-colors hover:bg-gray-100',
								item.active ? 'bg-gray-100' : '',
							]"
						>
							<component :is="item.icon" class="mb-1 h-5 w-5" />
							<span>{{ item.name }}</span>
						</a>
					</li>
				</ul>
			</nav>

			<!-- Sidebar Footer -->
			<div class="mt-auto border-t border-gray-200 p-3">
				<div class="flex flex-col items-center p-2 text-xs text-gray-600">
					<user-icon class="mb-1 h-5 w-5" />
					<span>My Profile</span>
				</div>
			</div>
		</aside>

		<!-- Main Content -->
		<div class="flex w-full flex-1 flex-col lg:pl-0">
			<!-- Topbar -->
			<header
				class="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4"
			>
				<!-- Left section with menu toggle and breadcrumb -->
				<div class="flex items-center gap-2">
					<button class="p-1 lg:hidden" @click="toggleSidebar">
						<menu-icon class="h-5 w-5 text-gray-600" />
					</button>

					<div class="flex items-center gap-1 text-sm text-gray-600">
						<file-icon class="h-4 w-4" />
						<span>File</span>
						<chevron-right-icon class="h-3 w-3" />
						<span>Export</span>
					</div>

					<div class="ml-4 hidden items-center gap-2 md:flex">
						<button
							class="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600"
						>
							<share-icon class="h-3 w-3" />
							<span>Share</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600"
						>
							<message-circle-icon class="h-3 w-3" />
							<span>Chat in Teams</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600"
						>
							<lightbulb-icon class="h-3 w-3" />
							<span>Get Insights</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600"
						>
							<edit-icon class="h-3 w-3" />
							<span>Edit</span>
						</button>
					</div>
				</div>

				<!-- Right section with search and actions -->
				<div class="flex items-center gap-3">
					<!-- Search -->
					<div class="relative hidden md:block">
						<search-icon
							class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
						/>
						<input
							type="text"
							placeholder="Search"
							class="w-64 rounded-md border border-gray-200 py-1.5 pr-3 pl-9 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<!-- Action icons -->
					<div class="flex items-center gap-3">
						<button class="text-gray-600 hover:text-gray-800">
							<bell-icon class="h-5 w-5" />
						</button>
						<button class="text-gray-600 hover:text-gray-800">
							<settings-icon class="h-5 w-5" />
						</button>
						<button class="text-gray-600 hover:text-gray-800">
							<download-icon class="h-5 w-5" />
						</button>
						<button class="text-gray-600 hover:text-gray-800">
							<help-circle-icon class="h-5 w-5" />
						</button>
						<button class="text-gray-600 hover:text-gray-800">
							<circle-icon class="h-5 w-5" />
						</button>
						<div class="h-8 w-8 overflow-hidden rounded-full bg-orange-100">
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BjQGDi4E8HGbH2aMuspazsDcoGlOvw.png"
								alt="User avatar"
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</header>

			<!-- Main Content Area -->
			<main class="flex-1 overflow-auto bg-gray-50 p-4">
				<!-- Card placeholder - not focusing on content as requested -->
				<div class="rounded-lg bg-white p-6 shadow">
					<div class="mb-4 flex items-center">
						<div
							class="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100"
						>
							<bolt-icon class="h-4 w-4 text-blue-600" />
						</div>
						<h2 class="text-lg font-semibold text-gray-800">
							Access to electricity
						</h2>
					</div>

					<!-- Placeholder for the map and charts -->
					<div
						class="flex aspect-video items-center justify-center rounded-lg bg-gray-100"
					>
						<span class="text-gray-400">
							Map and chart content would go here
						</span>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import {
		Menu as MenuIcon,
		File as FileIcon,
		ChevronRight as ChevronRightIcon,
		Share as ShareIcon,
		MessageCircle as MessageCircleIcon,
		Lightbulb as LightbulbIcon,
		Edit as EditIcon,
		Search as SearchIcon,
		Bell as BellIcon,
		Settings as SettingsIcon,
		Download as DownloadIcon,
		HelpCircle as HelpCircleIcon,
		Circle as CircleIcon,
		User as UserIcon,
		Home as HomeIcon,
		PieChart as PieChartIcon,
		BarChart2 as BarChartIcon,
		FileText as FileTextIcon,
		Users as UsersIcon,
		ChevronDown as ChevronDownIcon,
		Bolt as BoltIcon,
	} from 'lucide-vue-next';

	// Sidebar state
	const isSidebarOpen = ref(false);

	// Toggle sidebar function
	const toggleSidebar = () => {
		isSidebarOpen.value = !isSidebarOpen.value;
	};

	// Sidebar navigation items
	const sidebarItems = [
		{ name: 'Home', icon: HomeIcon, active: true },
		{ name: 'Create', icon: PieChartIcon, active: false },
		{ name: 'Spaces', icon: FileTextIcon, active: false },
		{ name: 'Files', icon: FileTextIcon, active: false },
		{ name: 'Team', icon: UsersIcon, active: false },
		{ name: 'Help', icon: HelpCircleIcon, active: false },
		{ name: 'Shared Links', icon: ShareIcon, active: false },
		{ name: 'ESG', icon: BarChartIcon, active: false },
		{ name: 'More', icon: MenuIcon, active: false },
	];
</script>

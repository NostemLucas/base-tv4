<template>
	<div class="flex h-screen w-full overflow-hidden bg-gray-50">
		<!-- Sidebar - Mobile overlay when open -->
		<div
			v-if="isSidebarOpen"
			class="fixed inset-0 z-40 bg-black/20 lg:hidden"
			@click="toggleSidebar"
		></div>

		<!-- Sidebar -->
		<aside
			:class="[
				'fixed inset-y-0 left-0 z-50 flex w-16 flex-col border-r border-gray-200 bg-white transition-all duration-300 lg:static',
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
				isExpandedSidebar ? 'lg:w-48' : 'lg:w-16',
			]"
		>
			<!-- Sidebar Header -->
			<div
				class="flex h-14 items-center justify-center border-b border-gray-200"
			>
				<button
					class="rounded-md p-2 hover:bg-gray-100"
					@click="toggleExpandSidebar"
				>
					<grid-icon class="h-5 w-5 text-gray-600" />
				</button>
			</div>

			<!-- Sidebar Navigation -->
			<nav class="flex-1 overflow-y-auto py-2">
				<ul class="space-y-1">
					<li
						v-for="(item, index) in sidebarItems"
						:key="index"
						class="relative px-2"
					>
						<a
							href="#"
							:class="[
								'flex w-full flex-col items-center justify-center rounded-lg p-2 text-[10px] text-gray-600 transition-colors hover:bg-gray-100',
								item.active ? 'bg-gray-100 text-blue-600' : '',
								isExpandedSidebar
									? 'lg:flex-row lg:justify-start lg:gap-3 lg:px-3 lg:text-xs'
									: '',
							]"
						>
							<component :is="item.icon" class="mb-1 h-5 w-5 lg:mb-0" />
							<span :class="isExpandedSidebar ? 'lg:flex-1' : ''">
								{{ item.name }}
							</span>
						</a>
					</li>
				</ul>
			</nav>

			<!-- Sidebar Footer -->
			<div class="mt-auto border-t border-gray-200 p-2">
				<div
					class="flex cursor-pointer flex-col items-center rounded-lg p-2 text-[10px] text-gray-600 hover:bg-gray-100"
					:class="isExpandedSidebar ? 'lg:flex-row lg:gap-3 lg:text-xs' : ''"
				>
					<user-icon class="mb-1 h-5 w-5 lg:mb-0" />
					<span>My Profile</span>
				</div>
			</div>
		</aside>

		<!-- Main Content -->
		<div class="flex w-full flex-1 flex-col">
			<!-- Topbar -->
			<header class="flex flex-col border-b border-gray-200 bg-white">
				<!-- Main Topbar -->
				<div class="flex h-14 items-center justify-between px-4">
					<!-- Left section with menu toggle and breadcrumb -->
					<div class="flex items-center gap-2">
						<button class="p-1 lg:hidden" @click="toggleSidebar">
							<menu-icon class="h-5 w-5 text-gray-600" />
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

					<!-- Search -->
					<div class="relative hidden md:block">
						<search-icon
							class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
						/>
						<input
							type="text"
							placeholder="Buscar"
							class="w-64 rounded-md border border-gray-200 py-1.5 pr-3 pl-9 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<!-- Right section with actions -->
					<div class="flex items-center gap-3">
						<button
							class="text-gray-600 hover:text-gray-800"
							@click="toggleNotifications"
						>
							<bell-icon class="h-5 w-5" />
						</button>
						<button
							class="text-gray-600 hover:text-gray-800"
							@click="openSettings"
						>
							<settings-icon class="h-5 w-5" />
						</button>
						<button
							class="text-gray-600 hover:text-gray-800"
							@click="downloadData"
						>
							<download-icon class="h-5 w-5" />
						</button>
						<button class="text-gray-600 hover:text-gray-800" @click="openHelp">
							<help-circle-icon class="h-5 w-5" />
						</button>
						<button
							class="text-gray-600 hover:text-gray-800"
							@click="toggleTheme"
						>
							<circle-icon class="h-5 w-5" />
						</button>
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

				<!-- File Navigation Bar -->
				<div
					class="flex h-10 items-center border-t border-b border-gray-200 px-4 text-xs"
				>
					<div class="mr-2 flex items-center gap-1">
						<chevron-left-icon class="h-4 w-4 text-gray-500" />
					</div>

					<div class="flex items-center gap-1 text-gray-600">
						<file-icon class="h-4 w-4" />
						<span>File</span>
					</div>

					<chevron-right-icon class="mx-1 h-3 w-3 text-gray-400" />

					<div class="flex items-center gap-1 text-gray-600">
						<span>Export</span>
					</div>

					<div class="mx-2 h-4 border-r border-gray-300"></div>

					<div class="flex items-center gap-3">
						<button
							class="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
							@click="shareDocument"
						>
							<share-icon class="h-3 w-3" />
							<span>Share</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
							@click="openChat"
						>
							<message-circle-icon class="h-3 w-3" />
							<span>Chat in Teams</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
							@click="getInsights"
						>
							<lightbulb-icon class="h-3 w-3" />
							<span>Get Insights</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-600 hover:bg-gray-100"
							@click="editDocument"
						>
							<edit-icon class="h-3 w-3" />
							<span>Edit</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md px-1 py-1 text-xs text-gray-600 hover:bg-gray-100"
							@click="openMoreMenu"
						>
							<more-horizontal-icon class="h-4 w-4" />
						</button>
					</div>

					<!-- Right side buttons -->
					<div class="ml-auto flex items-center gap-2">
						<button
							class="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs text-white"
							@click="openCollaboration"
						>
							C
						</button>
						<div class="flex items-center rounded border border-gray-200">
							<button
								class="border-r border-gray-200 px-2 py-0.5 hover:bg-gray-100"
								@click="toggleView('list')"
							>
								<list-icon class="h-3 w-3 text-gray-600" />
							</button>
							<button
								class="border-r border-gray-200 px-2 py-0.5 hover:bg-gray-100"
								@click="toggleView('grid')"
							>
								<layout-grid-icon class="h-3 w-3 text-gray-600" />
							</button>
							<button
								class="px-2 py-0.5 hover:bg-gray-100"
								@click="toggleView('columns')"
							>
								<columns-icon class="h-3 w-3 text-gray-600" />
							</button>
						</div>
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
					</div>
				</div>

				<!-- Category Tabs -->
				<div class="hide-scrollbar flex h-10 items-center overflow-x-auto px-4">
					<div class="flex items-center gap-2">
						<div
							class="flex items-center gap-1 rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
						>
							<circle-icon class="h-4 w-4 fill-blue-500 text-blue-500" />
							<span>AFFORDABLE AND CLEAN ENERGY</span>
						</div>

						<button
							class="flex items-center gap-1 rounded-md bg-blue-500 px-3 py-1 text-xs font-medium text-white"
							@click="selectTab('electric')"
						>
							<span>ELECTRIC USAGE</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
							@click="selectTab('emissions')"
						>
							<span>CO₂ EMISSIONS</span>
						</button>

						<button
							class="flex items-center gap-1 rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
							@click="selectTab('other')"
						>
							<span>OTHER</span>
						</button>
					</div>
				</div>
			</header>

			<!-- Main Content Area -->
			<main class="relative flex-1 overflow-auto bg-gray-50 p-4">
				<!-- Card placeholder - not focusing on content as requested -->
				<div class="rounded-lg bg-white p-6 shadow">
					<div class="mb-4 flex items-center">
						<h2 class="text-lg font-semibold text-blue-700">
							Access to electricity has improved around the world in the last 20
							years
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

				<!-- Zoom controls at bottom -->
				<div
					class="absolute right-4 bottom-4 flex items-center gap-2 rounded-md bg-white px-2 py-1 shadow"
				>
					<input
						v-model="zoomLevel"
						type="range"
						min="50"
						max="150"
						class="w-24"
						@input="handleZoom"
					/>
					<span class="text-xs text-gray-600">{{ zoomLevel }}%</span>
				</div>

				<!-- Feedback button -->
				<div class="absolute top-1/2 right-0 -translate-y-1/2 transform">
					<button
						class="origin-bottom-left translate-x-8 -rotate-90 transform rounded-l-md bg-blue-600 px-2 py-6 text-xs font-medium text-white"
						@click="provideFeedback"
					>
						Feedback
					</button>
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
		ChevronLeft as ChevronLeftIcon,
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
		Grid as GridIcon,
		MoreHorizontal as MoreHorizontalIcon,
		List as ListIcon,
		LayoutGrid as LayoutGridIcon,
		Columns as ColumnsIcon,
		Plus as PlusIcon,
		Minus as MinusIcon,
	} from 'lucide-vue-next';

	// Sidebar state
	const isSidebarOpen = ref(false);
	const isExpandedSidebar = ref(false);
	const zoomLevel = ref(60);
	const activeTab = ref('electric');

	// Toggle sidebar function
	const toggleSidebar = () => {
		isSidebarOpen.value = !isSidebarOpen.value;
	};

	// Toggle expanded sidebar
	const toggleExpandSidebar = () => {
		isExpandedSidebar.value = !isExpandedSidebar.value;
	};

	// Sidebar navigation items
	const sidebarItems = [
		{ name: 'Home', icon: HomeIcon, active: true },
		{ name: 'Gráficas', icon: PieChartIcon, active: false },
		{ name: 'Facturas', icon: FileTextIcon, active: false },
		{ name: 'Ventas', icon: FileTextIcon, active: false },
		{ name: 'Usuarios', icon: UsersIcon, active: false },
		{ name: 'Ayuda', icon: HelpCircleIcon, active: false },
		{ name: 'Shared Links', icon: ShareIcon, active: false },
		{ name: 'ESG', icon: BarChartIcon, active: false },
		{ name: 'Mas', icon: MoreHorizontalIcon, active: false },
	];

	// Button functionality
	const toggleNotifications = () => {
		alert('Notifications panel toggled');
	};

	const openSettings = () => {
		alert('Settings panel opened');
	};

	const downloadData = () => {
		alert('Downloading data...');
	};

	const openHelp = () => {
		alert('Help center opened');
	};

	const toggleTheme = () => {
		alert('Theme toggled');
	};

	const openProfile = () => {
		alert('Profile opened');
	};

	const shareDocument = () => {
		alert('Share document dialog opened');
	};

	const openChat = () => {
		alert('Teams chat opened');
	};

	const getInsights = () => {
		alert('Getting insights...');
	};

	const editDocument = () => {
		alert('Edit mode activated');
	};

	const openMoreMenu = () => {
		alert('More options menu opened');
	};

	const openCollaboration = () => {
		alert('Collaboration panel opened');
	};

	const toggleView = (viewType) => {
		alert(`View changed to ${viewType}`);
	};

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
		// This would actually apply zoom to the content
		console.log(`Zoom level set to ${zoomLevel.value}%`);
	};

	const selectTab = (tab) => {
		activeTab.value = tab;
		alert(`Selected tab: ${tab}`);
	};

	const provideFeedback = () => {
		alert('Feedback form opened');
	};
</script>

<style>
	/* Hide scrollbar but allow scrolling */
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none; /* Chrome, Safari and Opera */
	}
</style>

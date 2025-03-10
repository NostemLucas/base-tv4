<template>
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
			<FileActionButton icon="Share" label="Share" @click="shareDocument" />
			<FileActionButton
				icon="MessageCircle"
				label="Chat in Teams"
				@click="openChat"
			/>
			<FileActionButton
				icon="Lightbulb"
				label="Get Insights"
				@click="getInsights"
			/>
			<FileActionButton icon="Edit" label="Edit" @click="editDocument" />
			<FileActionButton icon="MoreHorizontal" @click="openMoreMenu" />
		</div>

		<div class="ml-auto flex items-center gap-2">
			<button
				class="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-medium text-white"
				@click="openCollaboration"
			>
				C
			</button>
			<ViewToggle />
			<ZoomButtons />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon, FileIcon } from 'lucide-vue-next';
	import FileActionButton from './FileActionButton.vue';
	import ViewToggle from './ViewToggle.vue';
	import ZoomButtons from './ZoomButtons.vue';

	const shareDocument = () => {
		// Implementar lógica
	};

	const openChat = () => {
		// Implementar lógica
	};

	const getInsights = () => {
		// Implementar lógica
	};

	const editDocument = () => {
		// Implementar lógica
	};

	const openMoreMenu = () => {
		// Implementar lógica
	};

	const openCollaboration = () => {
		// Implementar lógica
	};
</script>

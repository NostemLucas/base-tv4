<template>
	<div class="flex h-screen w-full overflow-hidden bg-gray-50">
		<AppSidebar />
		<div class="flex w-full flex-1 flex-col">
			<AppTopBar />
			<main class="relative flex-1 overflow-auto bg-gray-50 p-4">
				<slot />
				<ZoomControls />
				<FeedbackButton />
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AppSidebar from '@/components/sidebar/AppSidebar.vue';
	import AppTopBar from '@/components/topbar/AppTopBar.vue';
	import ZoomControls from '@/components/controls/ZoomControls.vue';
	import FeedbackButton from '@/components/controls/FeedbackButton.vue';
</script>

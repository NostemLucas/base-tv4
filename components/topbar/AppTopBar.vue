<template>
	<header class="flex flex-col border-b border-gray-200 bg-white">
		<MainTopBar />
		<FileNavigation />
		<CategoryTabs />
	</header>
</template>

<script setup lang="ts">
	import MainTopBar from './MainTopBar.vue';
	import FileNavigation from './FileNavigation.vue';
	import CategoryTabs from './CategoryTabs.vue';
</script>

<template>
	<div class="flex h-screen w-full overflow-hidden bg-gray-50">
		<Sidebar />
		<div class="flex w-full flex-1 flex-col">
			<Topbar />
			<MainContent />
		</div>
	</div>
</template>

<script setup lang="ts">
	import Sidebar from '~/components/sidebarv2/SideBar2.vue';
	import Topbar from '~/components/sidebarv2/TopBar2.vue';
	import MainContent from '~/components/sidebarv2/MainContent2.vue';
</script>

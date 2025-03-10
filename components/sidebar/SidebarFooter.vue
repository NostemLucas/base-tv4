<template>
	<div class="mt-auto border-t border-gray-200 p-2">
		<button
			class="flex w-full items-center rounded-lg p-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
			:class="{ 'justify-center': !isExpanded }"
		>
			<user-icon class="h-5 w-5 flex-shrink-0" />
			<span v-if="isExpanded" class="ml-3">Mi Perfil</span>
		</button>
	</div>
</template>

<script setup>
	import { UserIcon } from 'lucide-vue-next';

	defineProps({
		isExpanded: {
			type: Boolean,
			default: false,
		},
	});
</script>

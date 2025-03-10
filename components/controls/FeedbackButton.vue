<template>
	<button
		class="fixed top-1/2 right-0 z-30 origin-right -translate-y-1/2 rotate-90 transform rounded-t-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow-lg transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
		@click="openFeedback"
	>
		Feedback
	</button>
</template>

<script setup>
	const emit = defineEmits(['feedback']);

	const openFeedback = () => {
		emit('feedback');
	};
</script>

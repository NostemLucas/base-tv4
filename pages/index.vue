<template>
	<div class="bg-background text- container">
		<NuxtLink to="/home">
			<Button label="label">
				<template #icon-right><LucideGithub /></template>
			</Button>
		</NuxtLink>

		<Button variant="contained" rounded="full" label="secondary">
			<template #icon-right><LucideGithub /></template>
		</Button>
		<Button variant="outlined" full-width to="/home" label="outlined" disabled>
			<template #icon-left><LucideGithub /></template>
		</Button>
		<Input label="label" />
	</div>
</template>
<script setup>
	import Button from '@/components/buttons/Button.vue';
	import { LucideGithub } from '#components';
	import Input from '@/components/inputs/Input.vue';
</script>

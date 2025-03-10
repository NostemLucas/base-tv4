<template>
	<nav class="flex-1 overflow-y-auto py-2">
		<ul class="space-y-1 px-2">
			<li v-for="item in props.items" :key="item.name">
				<a
					href="#"
					:class="[
						'flex items-center rounded-lg p-2 text-sm font-medium transition-colors',
						item.active
							? 'bg-gray-100 text-blue-600'
							: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
						isExpanded ? 'justify-start' : 'justify-center',
					]"
				>
					<component :is="item.icon" class="h-5 w-5 flex-shrink-0" />
					<span
						v-if="props.isExpanded"
						class="ml-3 overflow-hidden text-ellipsis whitespace-nowrap"
					>
						{{ item.name }}
					</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	import * as LucideIcons from 'lucide-vue-next';

	interface Item {
		name: string;
		icon: string;
		active: boolean;
	}

	const props = defineProps({
		items: {
			type: Array as PropType<Item[]>,
			required: true,
		},
		isExpanded: {
			type: Boolean,
			default: false,
		},
	});
</script>

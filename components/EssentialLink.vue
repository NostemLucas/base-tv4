<template>
	<a
		:href="props.url"
		v-if="props.modulosEntityList == null"
		class="block rounded-lg p-4 hover:bg-gray-100"
	>
		<div v-if="props.icono" class="flex items-center">
			<i :class="props.icono" class="mr-2 text-2xl"></i>
			<div class="text-sm font-semibold">{{ props.titulo }}</div>
		</div>
	</a>

	<!--
  <div v-else class="p-4">
    <div class="flex items-center">
      <i :class="props.icono" class="text-2xl mr-2"></i>
      <div class="text-sm font-semibold">{{ props.titulo }}</div>
    </div>
    <div class="mt-2">
      <a
        v-for="link in props.modulosEntityList"
        :key="link.url"
        :href="link.url"
        class="block p-2 hover:bg-gray-100 rounded-lg"
      >
        <div v-if="link.icono" class="flex items-center">
          <i :class="link.icono" class="text-xl mr-2"></i>
          <div class="text-sm">{{ link.titulo }}</div>
        </div>
        <div v-else class="text-sm">{{ link.titulo }}</div>
      </a>
    </div>
  </div>
  -->
</template>

<script setup>
	defineOptions({
		name: 'EssentialLink',
	});

	const props = defineProps({
		titulo: {
			type: String,
			required: true,
		},

		descripcion: {
			type: String,
			default: '',
		},

		url: {
			type: String,
			default: '#',
		},

		icono: {
			type: String,
			default: '',
		},
		modulosEntityList: Array,
	});
</script>

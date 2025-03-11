<template>
	<div class="flex flex-col space-y-6">
		<!-- Card for Product Search -->
		<div class="h-[201px] rounded-lg bg-white p-4 shadow-lg">
			<div class="rounded-t-lg bg-gray-100 p-4 text-[#17202a]">
				<div class="flex items-center text-lg font-bold">
					<i class="material-icons text-sm">search</i>
					<span class="ml-2">BÚSQUEDA DE PRODUCTOS</span>
				</div>
			</div>
			<div class="p-4">
				<div class="flex flex-col gap-4 md:flex-row">
					<div class="w-full md:w-1/2">
						<div class="relative">
							<input
								type="text"
								class="w-full rounded-md border border-gray-300 p-2 uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none"
								placeholder="BUSQUEDA DE PRODUCTO*"
								v-model="busqueda"
							/>
							<div class="absolute inset-y-0 left-0 flex items-center pl-3">
								<i class="material-icons text-gray-400">content_paste_search</i>
							</div>
							<button
								class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
								@click="openFormProductos()"
							>
								<i class="material-icons text-sm">add_shopping_cart</i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Card for Product Search Results -->
		<div class="rounded-lg bg-white p-4 shadow-lg">
			<div class="rounded-t-lg bg-gray-100 p-4 text-[#17202a]">
				<div class="flex items-center text-lg font-bold">
					<i class="material-icons text-sm">add_shopping_cart</i>
					<span class="ml-2">RESULTADO DE LA BÚSQUEDA DE PRODUCTOS</span>
				</div>
			</div>
			<div class="p-4">
				<table class="w-full table-auto border-collapse">
					<thead>
						<tr>
							<th class="px-4 py-2 text-left">Nombre Producto</th>
							<th class="px-4 py-2 text-center">Precio Venta</th>
							<th class="px-4 py-2 text-center">Descuento Venta</th>
							<th class="px-4 py-2 text-center">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in rows" :key="row.idProductoServicios">
							<td class="px-4 py-2 uppercase" @click="toggleSelect(row)">
								{{ row.nombreProducto }}
							</td>
							<td class="px-4 py-2 text-center">
								<span class="rounded-full bg-gray-200 px-2 py-1 text-sm">
									{{
										new Intl.NumberFormat('de-DE', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										}).format(row.precioVentaBusqueda)
									}}
									Bs.
								</span>
							</td>
							<td class="px-4 py-2 text-center">
								<span class="rounded-full bg-gray-200 px-2 py-1 text-sm">
									{{
										new Intl.NumberFormat('de-DE', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										}).format(row.descuentoVentaBusqueda)
									}}
									Bs.
								</span>
							</td>
							<td class="px-4 py-2 text-center">
								<button
									class="rounded-full px-4 py-2 text-blue-600 hover:bg-blue-50"
									@click="viewProductDetails(row)"
								>
									Detalle del Producto
								</button>
							</td>
						</tr>
					</tbody>
				</table>
				<div
					v-if="rows.length === 0"
					class="mt-4 flex items-center justify-center space-x-2"
				>
					<i class="material-icons text-2xl">lens_blur</i>
					<span><b>La bandeja de búsqueda está vacía.</b></span>
				</div>
			</div>
		</div>

		<!-- Product Form Dialog -->
		<div
			v-if="showFormProductos"
			class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-gray-500"
		>
			<div class="w-96 rounded-lg bg-white p-6 shadow-lg">
				<FormProductosServicios></FormProductosServicios>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useRoute } from 'vue-router';
	import FormProductosServicios from '../../components/ProductosServicios/FormProductosServicios.vue';
	import { ventasStore } from '../../stores/ventas-store';
	import { productoStore } from '../../stores/productos-store';

	const ventaStore = ventasStore();
	const store = productoStore();

	const columns = [
		{
			name: 'nombreProducto',
			field: 'nombreProducto',
			label: 'Nombre Producto',
			align: 'left',
		},
		{
			name: 'precioVentaBusqueda',
			field: 'precioVentaBusqueda',
			label: 'Precio Venta',
			align: 'center',
		},
		{
			name: 'descuentoVentaBusqueda',
			field: 'descuentoVentaBusqueda',
			label: 'Precio Descuento Venta',
			align: 'center',
		},
		{ name: 'acciones', field: 'acciones', label: 'Acciones', align: 'center' },
	];

	export default {
		components: { FormProductosServicios },
		setup() {
			const busqueda = ref('');
			const rows = ref([]);
			const showFormProductos = ref(false);
			const selected = ref([]);
			const getSelectedString = () => {
				return selected.value.length === 0
					? ''
					: `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`;
			};

			const openFormProductos = () => {
				store.showFormProductos = true;
			};

			const closeFormProductos = () => {
				store.showFormProductos = false;
			};

			const toggleSelect = (row) => {
				row.selected = !row.selected;
			};

			const viewProductDetails = (row) => {
				// Implement your logic here
			};

			return {
				busqueda,
				rows,
				selected,
				showFormProductos,
				columns,
				getSelectedString,
				openFormProductos,
				closeFormProductos,
				toggleSelect,
				viewProductDetails,
			};
		},
	};
</script>

<style scoped>
	/* You can add custom styles here if needed */
</style>

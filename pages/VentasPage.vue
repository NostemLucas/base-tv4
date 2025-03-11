<template>
	<div class="bg-white p-4">
		<div class="-mx-2 flex flex-wrap">
			<div class="w-full p-2 md:w-1/2">
				<ProductosBusqueda />
			</div>
			<div class="w-full p-2 md:w-1/2" v-show="productosSeleccionadosPage">
				<SeleccionClientes />
				<br />
				<ProductosSeleccionados />
			</div>
			<div class="w-full p-2 md:w-1/2" v-show="procesarPagoPage">
				<ProcesarPedido />
			</div>
			<div class="w-full p-2 md:w-1/2" v-show="finalizarPagoPage">
				<ConclucionPedido />
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import ProductosBusqueda from '~/components/ventas/ProductosBusqueda.vue';
	import SeleccionClientes from '~/components/ventas/SeleccionClientes.vue';
	import ProductosSeleccionados from '~/components/ventas/ProductosSeleccionados.vue';
	import ProcesarPedido from '~/components/ventas/ProcesarPedido.vue';
	import ConclucionPedido from '~/components/ventas/ConclucionPedido.vue';
	import { mapState, storeToRefs } from 'pinia';

	import { ventasStore } from '~/stores/ventas-store';
	const ventaStore = ventasStore();
	const { procesarPago, finalizarPago, productosSeleccionados } =
		storeToRefs(ventaStore);

	const procesarPagoPage = false;
	const finalizarPagoPage = false;
	const productosSeleccionadosPage = false;
	export default {
		components: {
			ProductosBusqueda,
			SeleccionClientes,
			ProductosSeleccionados,
			ProcesarPedido,
			ConclucionPedido,
		},
		setup() {
			return {
				procesarPagoPage: ref(procesarPago),
				finalizarPagoPage: ref(finalizarPago),
				productosSeleccionadosPage: ref(productosSeleccionados),
			};
		},
		computed: {
			...mapState(ventasStore, [
				'productosList',
				'producto',
				'operacion',
				'subTotal',
				'totalDescuentos',
				'totalPagar',
				'glosa',
				'efectivoCliente',
				'cambioCliente',
				'procesarPago',
				'finalizarPago',
				'productosSeleccionados',
			]),
		},
		mounted() {
			//this.procesarPeidio();
		},
		methods: {
			procesarPeidio() {
				ventaStore.setProcesarPga(true);
			},
		},
	};
</script>

<style scoped>
	.my-card {
		width: 100%;
	}
</style>

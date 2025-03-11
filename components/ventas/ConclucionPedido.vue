<template>
	<div class="container mx-auto p-4">
		<!-- Card for the process of the order -->
		<div class="rounded-lg bg-white p-6 shadow-lg">
			<!-- Header Section -->
			<div class="flex items-center text-xl font-semibold text-gray-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					stroke-width="2"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M5 12h14M12 5l7 7-7 7"
					/>
				</svg>
				<b>FINALIZACIÓN DE PEDIDO</b>
			</div>

			<!-- Processing Section -->
			<div
				v-show="imagenProcesandoPage"
				class="flex items-center justify-center py-4"
			>
				<div class="text-center font-bold text-gray-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mx-auto h-10 w-10 animate-spin text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 3v9m0 0l4-4m-4 4l-4-4"
						/>
					</svg>
					<p class="mt-2">PROCESANDO PEDIDO</p>
				</div>
			</div>

			<!-- PDF Display Section -->
			<div v-show="!imagenProcesandoPage" class="py-4">
				<object
					:type="pdfMimeType"
					:data="facturaPDFPage"
					class="h-96 w-full"
				></object>
			</div>

			<!-- Separator -->
			<div class="my-4 border-t border-gray-300"></div>

			<!-- Action Buttons -->
			<div class="flex justify-end">
				<button
					@click="returnPedidos()"
					class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
				>
					NUEVO PEDIDO
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { defineComponent, ref } from 'vue';
	import { ventasStore } from '../../stores/ventas-store.js';
	import { clienteStore } from '../../stores/clientes-store.js';
	import * as ventasServices from '../../services/ventas.services.js';
	const ventaStore = ventasStore();
	const cliStore = clienteStore();

	export default defineComponent({
		setup() {
			const imagenProcesandoPage = ref(false);
			const facturaPDFPage = ref(null);
			const pdfMimeType = 'application/pdf'; // MIME type for PDF rendering

			const returnPedidos = () => {
				ventaStore.setNuevaVenta();
				cliStore.newCliente();
				this.$router.push('/home/VentasPage');
				location.reload();
			};

			return {
				imagenProcesandoPage,
				facturaPDFPage,
				pdfMimeType,
				returnPedidos,
			};
		},
	});
</script>

<style scoped>
	/* Optional custom styling for additional effects or tweaks */
</style>

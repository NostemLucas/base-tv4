<template>
	<div class="flex flex-col space-y-4">
		<div class="w-full">
			<div class="rounded-lg bg-white shadow">
				<div class="rounded-t-lg bg-gray-300 p-4 text-gray-800">
					<div class="flex items-center text-lg font-bold">
						<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7 16h10V6H7v10zm0-12h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0h10V6H7v10zm0-12h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							/>
						</svg>
						PEDIDOS SELECCIONADOS
					</div>
				</div>
				<div class="p-4">
					<table class="min-w-full bg-white">
						<thead>
							<tr>
								<th class="py-2">Cantidad</th>
								<th class="py-2">Nombre Producto</th>
								<th class="py-2">Precio Unitario (Bs)</th>
								<th class="py-2">Precio Descuento (Bs)</th>
								<th class="py-2">Sub-Total (Bs)</th>
								<th class="py-2">Acciones</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in rows" :key="row.name">
								<td class="py-2 text-center">{{ row.cantidadVenta }}</td>
								<td class="py-2 uppercase">{{ row.nombreProducto }}</td>
								<td class="py-2 text-center">
									{{
										new Intl.NumberFormat('de-DE', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										}).format(row.precioVenta)
									}}
									<!-- Popup edit for precioVenta -->
								</td>
								<td class="py-2 text-center">
									{{
										new Intl.NumberFormat('de-DE', {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										}).format(row.descuentoVenta)
									}}
									<!-- Popup edit for descuentoVenta -->
								</td>
								<td class="py-2 text-center">
									<span
										class="rounded bg-gray-600 px-2.5 py-0.5 text-sm font-semibold text-white"
									>
										{{
											new Intl.NumberFormat('de-DE', {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											}).format(row.subTotal)
										}}
										Bs.
									</span>
								</td>
								<td class="py-2 text-center">
									<div class="flex justify-center space-x-2">
										<button
											@click="addCantidad(row)"
											class="text-blue-600 hover:text-blue-900"
										>
											<svg
												class="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
												/>
											</svg>
										</button>
										<button
											@click="subtractCantidad(row)"
											class="text-blue-600 hover:text-blue-900"
										>
											<svg
												class="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
												/>
											</svg>
										</button>
										<button
											@click="deleteProductoPedido(row.idProductoServicios)"
											class="text-red-600 hover:text-red-900"
										>
											<svg
												class="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
												/>
											</svg>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<br />

					<div class="flex items-center justify-between">
						<div class="text-sm font-bold text-gray-800">
							SUB-TOTAL DE LOS PRODUCTOS SELECCIONADOS
						</div>
						<div class="text-right">
							{{
								new Intl.NumberFormat('de-DE', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								}).format(subTotal)
							}}
							<b>Bs.</b>
						</div>
					</div>
					<hr class="my-2 border-gray-600" />
					<div class="flex items-center justify-between">
						<div class="text-sm font-bold text-gray-800">
							DESCUENTO ADICIONAL
						</div>

						<div v-show="!showInputTotalDescuento" class="text-right">
							{{
								new Intl.NumberFormat('de-DE', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								}).format(descuentoAdicional)
							}}
							<b>Bs.</b>
						</div>
						<div v-show="showInputTotalDescuento" class="text-right">
							<input
								type="number"
								v-model="descuentoAdicional"
								class="rounded border p-1"
								@change="calcularTotales()"
							/>
						</div>
					</div>
					<hr class="my-2 border-gray-600" />
					<div class="flex items-center justify-between">
						<div class="text-sm font-bold text-gray-800">TOTAL A PAGAR</div>
						<div class="text-right">
							<b>
								{{
									new Intl.NumberFormat('de-DE', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									}).format(totalPagar)
								}}
								&nbsp;Bs.
							</b>
						</div>
					</div>
				</div>
				<div class="p-4">
					<div class="flex justify-center space-x-4">
						<button class="btn btn-outline w-full" @click="procesarPeidio()">
							<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
								/>
							</svg>
							Realizar Cobro
						</button>
						<button class="btn btn-outline w-full" @click="efectuarPago()">
							<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
								/>
							</svg>
							Cotizar Pedido
						</button>
						<button
							class="btn btn-outline w-full"
							@click="showAdicionarDescuento()"
						>
							<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
								/>
							</svg>
							Add. Descuento
						</button>
						<button class="btn btn-outline w-full" @click="returnPedidos()">
							<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
								/>
							</svg>
							Nuevo Pedido
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { mapState, storeToRefs } from 'pinia';
	import { ventasStore } from '../../stores/ventas-store';
	import Swal from 'sweetalert2';
	const ventaStore = ventasStore();
	const {
		productosList,
		producto,
		operacion,
		subTotal,
		totalDescuentos,
		totalPagar,
		glosa,
		efectivoCliente,
		cambioCliente,
		procesarPago,
		finalizarPago,
	} = storeToRefs(ventaStore);

	import { clienteStore } from '../../stores/clientes-store';
	const cliStore = clienteStore();
	const { cliente, clienteList, showModalForm } = storeToRefs(cliStore);

	import * as ventasServices from '../../services/ventas.services.js';

	const showInputTotalDescuento = false;
	const columns = [
		{
			name: 'cantidadVenta',
			align: 'center',
			label: 'Cantidad',
			field: 'cantidadVenta',
		},
		{
			name: 'nombreProducto',
			align: 'left',
			label: 'Nombre Producto',
			field: 'nombreProducto',
			style: 'width: 10px',
		},
		{
			name: 'precioVenta',
			label: 'Precio Unitario (Bs)',
			field: 'precioVenta',
		},
		{
			name: 'descuentoVenta',
			label: 'Precio Descuento (Bs)',
			field: 'descuentoVenta',
		},
		{ name: 'subTotal', label: 'Sub-Total (Bs)', field: 'subTotal' },
		{ name: 'operacion', label: 'Acciones', field: 'operacion' },
	];

	const rows = [];
	const descuentoAdicional = 0;

	export default {
		setup() {
			return {
				efectivoCheck: ref(false),
				fromPago: ref({}),
				descuentoAdicional: ref(0),
				showInputTotalDescuento: ref(false),
				rows: ref(productosList),
				columns,
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
			]),
			...mapState(clienteStore, ['cliente']),
		},
		mounted() {
			this.iniciarFormPago();
		},
		created() {
			this.initPage();
		},
		methods: {
			async initPage() {
				this.usuarioForm = JSON.parse(sessionStorage.getItem('usuario'));
			},
			addCantidad(rowSelect) {
				rowSelect.subTotal = 0;
				rowSelect.cantidadVenta = rowSelect.cantidadVenta + 1;
				if (rowSelect.descuentoVenta == 0) {
					rowSelect.subTotal = rowSelect.cantidadVenta * rowSelect.precioVenta;
				} else {
					rowSelect.subTotal =
						rowSelect.cantidadVenta * rowSelect.precioVenta -
						rowSelect.descuentoVenta;
				}
				this.calcularTotales();
			},
			subtractCantidad(rowSelect) {
				if (rowSelect.cantidadVenta > 1) {
					if (rowSelect.descuentoVenta == 0) {
						rowSelect.subTotal =
							rowSelect.cantidadVenta * rowSelect.precioVenta;
					} else {
						rowSelect.subTotal =
							rowSelect.cantidadVenta * rowSelect.precioVenta -
							rowSelect.descuentoVenta;
					}
					rowSelect.cantidadVenta = rowSelect.cantidadVenta - 1;
					//rowSelect.subTotal = rowSelect.cantidadVenta * rowSelect.precioVenta;
					this.calcularTotales();
				}
			},
			addCantidadEdit(rowSelect) {
				if (rowSelect.descuentoVenta == 0) {
					rowSelect.subTotal = rowSelect.cantidadVenta * rowSelect.precioVenta;
				} else {
					rowSelect.subTotal =
						rowSelect.cantidadVenta * rowSelect.precioVenta -
						rowSelect.descuentoVenta;
				}
				//rowSelect.subTotal = rowSelect.cantidadVenta * rowSelect.descuentoVenta;
				this.calcularTotales();
			},
			editPresioUnitario(rowSelect) {
				if (rowSelect.descuentoVenta == 0) {
					rowSelect.subTotal = rowSelect.cantidadVenta * rowSelect.precioVenta;
				} else {
					rowSelect.subTotal =
						rowSelect.cantidadVenta * rowSelect.precioVenta -
						rowSelect.descuentoVenta;
				}
				//rowSelect.subTotal = rowSelect.cantidadVenta * rowSelect.descuentoVenta;
				this.calcularTotales();
			},

			calcularTotales() {
				let subTotalPedidos = 0;

				for (const row of productosList.value) {
					if (row.descuentoVenta == 0) {
						row.subTotal = row.cantidadVenta * row.precioVenta;
					} else {
						row.subTotal =
							row.cantidadVenta * row.precioVenta - row.descuentoVenta;
					}
					subTotalPedidos = subTotalPedidos + row.subTotal;
				}
				ventaStore.setSubTotal(Number(subTotalPedidos.toFixed(2)));
				ventaStore.setDescuentoAdicional(this.descuentoAdicional);
				let totalAPagar = subTotalPedidos - this.descuentoAdicional;
				ventaStore.setTotalPagar(Number(totalAPagar.toFixed(2)));
			},

			deleteProductoPedido(idProducto) {
				for (let i = 0; i <= productosList.value.length; i++) {
					if (productosList.value[i].idProductoServicios == idProducto) {
						productosList.value.splice(i, 1);
						this.calcularTotales();
						return;
					}
				}
			},
			procesarPeidio() {
				let clienteStore = cliente.value;
				if (clienteStore.id == null) {
					Swal.fire({
						title: '¿No se seleccionó a un Cliente?',
						icon: 'question',
						showCancelButton: true,
						cancelButtonColor: '#eaecee',
						cancelButtonText: 'Cancelar',
						confirmButtonColor: '#283747',
						confirmButtonText: 'Aceptar',
					}).then((result) => {
						if (result.isConfirmed) {
							clienteStore.id = 'ff4ae4be-0b33-47e2-9e3c-551f6557a2d9'; // SIN DATOS DEL CLIENTE
							cliStore.addCliente(clienteStore);
							ventaStore.setProcesarPga(true);
						}
					});
				} else {
					ventaStore.setProcesarPga(true);
				}
			},
			showAdicionarDescuento() {
				this.showInputTotalDescuento = true;
			},
			async efectuarPago() {
				let ventaProcesar = {};
				if (clienteStore.id == null) {
					let clienteStore = {};
					clienteStore.id = 'ff4ae4be-0b33-47e2-9e3c-551f6557a2d9'; // SIN DATOS DEL CLIENTE
					cliStore.addCliente(clienteStore);
				}
				ventaProcesar.cliente = cliente.value;
				ventaProcesar.productosList = productosList.value;
				ventaProcesar.formaPago = this.fromPago;
				ventaProcesar.formaPago.totalEfectivo = this.fromPago.totalPagar;
				ventaProcesar.formaPago.totalTarjeta = 0;
				ventaProcesar.formaPago.totalTransQR = 0;
				ventaProcesar.formaPago.totalTransferencia = 0;

				ventaProcesar.usuario = this.usuarioForm.username;
				ventaProcesar.fidEntidad = this.usuarioForm.fidEntidad;
				ventaProcesar.claveTipoComprobanteVenta = 27;
				ventaStore.setImagenProcesando(true);
				ventaStore.setfinalizarPago(true);

				await ventasServices
					.procesarVentas(ventaProcesar)
					.then((res) => {
						ventaStore.setImagenProcesando(false);
						this.generarCotizacionPDF(res.data.idVenta);
					})
					.catch((err) => {
						console.log(err);
					});
			},
			async generarCotizacionPDF(idVentas) {
				await ventasServices
					.generarCotizacionPDF(idVentas)
					.then((res) => {
						if (res.data.codigo == 0) {
							ventaStore.setFacturaPDF(
								'data:application/pdf;base64,' + res.data.certificado_pdf
							);
						} else {
							ventaStore.setFacturaPDF(null);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},

			iniciarFormPago() {
				this.fromPago.glosa = glosa;
				this.fromPago.subTotal = subTotal;
				this.fromPago.totalPagar = totalPagar;
				this.fromPago.totalPagar = 0;
				this.fromPago.efectivoCliente = efectivoCliente;
				this.fromPago.cambioCliente = cambioCliente;
				this.fromPago.isEntegraInmediata = true;
			},
			returnPedidos() {
				ventaStore.setNuevaVenta();
				cliStore.newCliente();
			},
		},
	};
</script>

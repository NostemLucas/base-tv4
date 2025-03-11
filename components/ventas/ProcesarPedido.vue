<template>
	<div class="container mx-auto p-4">
		<!-- Card Container -->
		<div class="rounded-lg bg-white p-6 shadow-lg">
			<!-- Header Section -->
			<div class="mb-4 flex items-center text-xl font-semibold text-gray-800">
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
				<b>MÉTODO DE PAGO</b>
			</div>

			<!-- Payment Methods Section -->
			<div class="space-y-4">
				<button
					:class="{
						'border-2 border-blue-600': efectivoCheck,
						'bg-blue-600 text-white': colorEfectivo,
					}"
					class="flex w-full items-center justify-center rounded-md px-4 py-2"
					@click="changeColorEfectivo()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4zM3 15a2 2 0 002-2h4a2 2 0 002 2v4a2 2 0 00-2 2H5a2 2 0 00-2-2v-4z"
						/>
					</svg>
					EFECTIVO
				</button>

				<button
					:class="{
						'border-2 border-green-600': tarjetaCheck,
						'bg-green-600 text-white': colorTarjeta,
					}"
					class="flex w-full items-center justify-center rounded-md px-4 py-2"
					@click="changeColorTarjeta()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 17a2 2 0 002 2h16a2 2 0 002-2V5c0-1.1-.89-2-1.99-2zM5 17V5h14v12H5z"
						/>
					</svg>
					TARJETA
				</button>

				<button
					:class="{
						'border-2 border-yellow-500': qrCheck,
						'bg-yellow-500 text-white': colorQr,
					}"
					class="flex w-full items-center justify-center rounded-md px-4 py-2"
					@click="changeColorQr()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 2L12 5M12 19L12 22M4 12L7 12M17 12L20 12M9.5 9.5L14.5 14.5M9.5 14.5L14.5 9.5"
						/>
					</svg>
					QR
				</button>

				<button
					:class="{
						'border-2 border-teal-600': transBancariaCheck,
						'bg-teal-600 text-white': colorBanca,
					}"
					class="flex w-full items-center justify-center rounded-md px-4 py-2"
					@click="changeColorBanca()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 17a2 2 0 002 2h16a2 2 0 002-2V5c0-1.1-.89-2-1.99-2zM5 17V5h14v12H5z"
						/>
					</svg>
					TRANS. BANCARIA
				</button>
			</div>

			<!-- Glosa and Amount Section -->
			<div class="mt-4 space-y-4">
				<div class="w-full">
					<label class="block text-sm font-medium text-gray-700">GLOSA</label>
					<input
						v-model="fromPago.glosa"
						type="text"
						class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
					/>
				</div>

				<div class="w-full">
					<label class="block text-sm font-medium text-gray-700">
						SUBTOTAL A PAGAR (Bs)
					</label>
					<input
						v-model="fromPago.totalPagar"
						type="text"
						class="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
						readonly
					/>
				</div>

				<!-- Conditional Payment Fields -->
				<div v-if="efectivoCheck" class="w-full">
					<label class="block text-sm font-medium text-gray-700">
						EFECTIVO RECIBIDO POR EL CLIENTE (Bs)
					</label>
					<input
						v-model="fromPago.totalEfectivo"
						type="number"
						class="w-full rounded-md border border-gray-300 px-4 py-2 text-right focus:ring-2 focus:ring-blue-600 focus:outline-none"
						@update:model-value="calcularCambio"
						required
					/>
				</div>

				<div v-if="tarjetaCheck" class="w-full">
					<label class="block text-sm font-medium text-gray-700">
						TRANSFERENCIA RECIBIDA POR TARJETA DEL CLIENTE (Bs)
					</label>
					<input
						v-model="fromPago.totalTarjeta"
						type="number"
						class="w-full rounded-md border border-gray-300 px-4 py-2 text-right focus:ring-2 focus:ring-blue-600 focus:outline-none"
						@update:model-value="calcularCambio"
						required
					/>
				</div>

				<div v-if="qrCheck" class="w-full">
					<label class="block text-sm font-medium text-gray-700">
						TRANSFERENCIA RECIBIDA POR QR (Bs)
					</label>
					<input
						v-model="fromPago.totalTransQR"
						type="number"
						class="w-full rounded-md border border-gray-300 px-4 py-2 text-right focus:ring-2 focus:ring-blue-600 focus:outline-none"
						@update:model-value="calcularCambio"
						required
					/>
				</div>

				<div v-if="transBancariaCheck" class="w-full">
					<label class="block text-sm font-medium text-gray-700">
						TRANSFERENCIA REALIZADA ENTRE CUENTAS BANCARIAS (Bs)
					</label>
					<input
						v-model="fromPago.totalTransferencia"
						type="number"
						class="w-full rounded-md border border-gray-300 px-4 py-2 text-right focus:ring-2 focus:ring-blue-600 focus:outline-none"
						@update:model-value="calcularCambio"
						required
					/>
				</div>

				<div class="w-full">
					<label class="block text-sm font-medium text-gray-700">
						CAMBIO DEL CLIENTE (Bs)
					</label>
					<input
						v-model="fromPago.cambioCliente"
						type="text"
						class="w-full rounded-md border border-gray-300 px-4 py-2 text-right focus:ring-2 focus:ring-blue-600 focus:outline-none"
						readonly
					/>
				</div>
			</div>

			<!-- Delivery Type Section -->
			<div class="mt-4 flex items-center justify-between">
				<span class="text-gray-700">EMITIR NOTA DE ENTREGA</span>
				<input
					v-model="fromPago.isEntegraInmediata"
					type="checkbox"
					class="form-checkbox text-blue-600"
					@click="changeTipoEntrega"
				/>
				<span class="text-gray-700">EMITIR FACTURA</span>
			</div>

			<!-- Action Buttons Section -->
			<div class="mt-6 flex justify-end space-x-4">
				<button
					@click="returnPedidos"
					class="rounded-md bg-gray-300 px-6 py-2 text-gray-800 hover:bg-gray-400"
				>
					RETORNAR A PEDIDOS
				</button>
				<button
					@click="efectuarPago"
					class="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
				>
					PROCESAR PAGO
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { defineComponent, ref, onMounted } from 'vue';
	import { sucursalStore } from '../../stores/sucursales-store.js';
	import { storeToRefs, mapState } from 'pinia';
	import Swal from 'sweetalert2';
	import { clienteStore } from '../../stores/clientes-store';
	import * as ventasServices from '../../services/ventas.services.js';
	const cliStore = clienteStore();
	const { cliente, clienteList, showModalForm } = storeToRefs(cliStore);

	const ventaStore = ventasStore();

	const colorEfectivo = ref(null);
	const colorTarjeta = ref(null);
	const colorQr = ref(null);
	const colorBanca = ref(null);

	const {
		productosList,
		producto,
		operacion,
		subTotal,
		descuentoAdicional,
		totalPagar,
		glosa,
		efectivoCliente,
		cambioCliente,
		procesarPago,
		finalizarPago,
		totalEfectivo,
		totalTarjeta,
		totalTransQR,
		totalTransferencia,
		efectivoCheck,
		tarjetaCheck,
		qrCheck,
		transBancariaCheck,
		otrosCheck,
	} = storeToRefs(ventaStore);

	const moneyFormatForDirective = {
		decimal: ',',
		thousands: '.',
		prefix: '$ ',
		precision: 2,
		masked: false,
	};

	export default defineComponent({
		components: {
			...mapState(ventasStore, [
				'productosList',
				'producto',
				'operacion',
				'subTotal',
				'descuentoAdicional',
				'totalPagar',
				'glosa',
				'efectivoCliente',
				'cambioCliente',
				'procesarPago',
				'finalizarPago',
			]),
			...mapState(clienteStore, ['cliente']),
		},
		setup() {
			return {
				efectivoCheck: ref(false),
				tarjetaCheck: ref(false),
				qrCheck: ref(false),
				transBancariaCheck: ref(false),
				otrosCheck: ref(false),
				fromPago: ref({}),
				showFormEfectivo: ref(false),
				showFormOtros: ref(false),
				colorTipoEntregaActivo: ref('blue-grey-9'),
				colorTipoEntregaInactivo: ref('grey'),

				colorEfectivo: ref('blue-grey-9'),
				colorTarjeta: ref('blue-grey-9'),
				colorQr: ref('blue-grey-9'),
				colorBanca: ref('blue-grey-9'),
			};
		},
		created() {
			this.initPage();
			this.iniciarFormPago();
		},
		mounted() {
			this.iniciarFormPago();
		},
		methods: {
			async initPage() {
				this.usuarioForm = JSON.parse(sessionStorage.getItem('usuario'));
			},
			closeModal() {
				store.openAndCloseModal(false);
			},
			iniciarFormPago() {
				this.fromPago.glosa = glosa;
				this.fromPago.subTotal = subTotal;
				this.fromPago.descuentoAdicional = descuentoAdicional;
				console.log('descuentoAdicional:  ' + this.fromPago.descuentoAdicional);
				this.fromPago.totalPagar = totalPagar;
				this.fromPago.efectivoCliente = efectivoCliente;
				this.fromPago.cambioCliente = cambioCliente;
				this.fromPago.isEntegraInmediata = true;

				this.fromPago.totalEfectivo = totalEfectivo;
				this.fromPago.totalTarjeta = totalTarjeta;
				this.fromPago.totalTransQR = totalTransQR;
				this.fromPago.totalTransferencia = totalTransferencia;

				this.efectivoCheck = efectivoCheck;
				this.tarjetaCheck = tarjetaCheck;
				this.qrCheck = qrCheck;
				this.transBancariaCheck = transBancariaCheck;
				this.otrosCheck = otrosCheck;
			},
			seleccionarMetodoPago() {
				if (
					this.fromPago.totalEfectivo >= this.fromPago.totalTarjeta &&
					this.fromPago.totalEfectivo >= this.fromPago.totalTransQR &&
					this.fromPago.totalEfectivo >= this.fromPago.totalTransferencia
				) {
					this.fromPago.claveMetodoPago = '751';
				}
				if (
					this.fromPago.totalTarjeta >= this.fromPago.totalEfectivo &&
					this.fromPago.totalTarjeta >= this.fromPago.totalTransQR &&
					this.fromPago.totalTarjeta >= this.fromPago.totalTransferencia
				) {
					this.fromPago.claveMetodoPago = '753';
				}
				if (
					this.fromPago.totalTransQR >= this.fromPago.totalEfectivo &&
					this.fromPago.totalTransQR >= this.fromPago.totalTarjeta &&
					this.fromPago.totalTransQR >= this.fromPago.totalTransferencia
				) {
					this.fromPago.claveMetodoPago = '713';
				}
				if (
					this.fromPago.totalTransferencia >= this.fromPago.totalEfectivo &&
					this.fromPago.totalTransferencia >= this.fromPago.totalTarjeta &&
					this.fromPago.totalTransferencia >= this.fromPago.totalTransQR
				) {
					this.fromPago.claveMetodoPago = '704';
				}
				/* switch (metodoPago) {
        case "EFECTIVO":
          this.fromPago.claveMetodoPago = "751";
          this.showFormEfectivo = true;
          this.showFormOtros = true;
          break;
        case "TARJETA":
          this.fromPago.claveMetodoPago = "753";
          this.showFormEfectivo = true;
          this.showFormOtros = false;
          break;
        case "QR":
          this.fromPago.claveMetodoPago = "713";
          this.showFormEfectivo = true;
          this.showFormOtros = false;
          break;
        case "TRANS_BANCARIA":
          this.fromPago.claveMetodoPago = "704";
          this.showFormEfectivo = true;
          this.showFormOtros = false;
          break;
        case "OTROS":
          this.fromPago.claveMetodoPago = "759";
          this.showFormEfectivo = true;
          this.showFormOtros = false;
          break;
      }*/
			},
			calcularCambio() {
				let subtotalA =
					this.fromPago.totalEfectivo +
					this.fromPago.totalTarjeta +
					this.fromPago.totalTransQR +
					this.fromPago.totalTransferencia;

				this.fromPago.cambioCliente =
					Number(this.fromPago.totalEfectivo) +
					Number(this.fromPago.totalTarjeta) +
					Number(this.fromPago.totalTransQR) +
					Number(this.fromPago.totalTransferencia) -
					Number(this.fromPago.totalPagar);

				this.fromPago.cambioClienteBandera = this.fromPago.cambioCliente;
				console.log(this.fromPago.cambioCliente);

				if (this.fromPago.cambioCliente < 0) {
					this.fromPago.cambioCliente = 0;
				}
			},
			returnPedidos() {
				ventaStore.setReturnProductosSeleccionados();
			},
			async efectuarPago() {
				if (
					this.efectivoCheck ||
					this.tarjetaCheck ||
					this.qrCheck ||
					this.transBancariaCheck
				) {
					if (this.fromPago.cambioClienteBandera < 0) {
						Swal.fire({
							customClass: { container: 'my-swal' },
							title:
								'¡Los montos introducidos deben ser iguales al SUBTOTAL A PAGAR!',
							icon: 'warning',
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'Aceptar',
						}).then((result) => {
							if (result.isConfirmed) {
							}
						});
					} else {
						this.efectuarPagoConfirm();
					}
				} else {
					Swal.fire({
						customClass: { container: 'my-swal' },
						title: '¡Debe seleccionar un método de pago!',
						icon: 'warning',
						confirmButtonColor: '#283747',
						confirmButtonText: 'Aceptar',
					}).then((result) => {
						if (result.isConfirmed) {
						}
					});
				}
			},
			async efectuarPagoConfirm() {
				if (
					this.efectivoCheck ||
					this.tarjetaCheck ||
					this.qrCheck ||
					this.transBancariaCheck
				) {
					this.seleccionarMetodoPago();
					let ventaProcesar = {};
					ventaProcesar.cliente = cliente.value;
					ventaProcesar.productosList = productosList.value;
					ventaProcesar.formaPago = this.fromPago;

					ventaProcesar.usuario = this.usuarioForm.username;
					ventaProcesar.fidEntidad = this.usuarioForm.fidEntidad;
					ventaProcesar.totalEfectivo = this.fromPago.totalEfectivo;
					ventaProcesar.totalTarjeta = this.fromPago.totalTarjeta;
					ventaProcesar.totalTransferencia = this.fromPago.totalTransferencia;
					ventaProcesar.totalCuentas = this.fromPago.totalCuentas;

					if (this.fromPago.isEntegraInmediata) {
						ventaProcesar.claveTipoComprobanteVenta = 25; // ELECTRÓNICA EN LÍNEA
					}
					if (!this.fromPago.isEntegraInmediata) {
						ventaProcesar.claveTipoComprobanteVenta = 28; // COMPROBANTE DE VENTA
					}

					ventaStore.setImagenProcesando(true);
					ventaStore.setfinalizarPago(true);
					ventaStore.setFacturaPDF(null);

					await ventasServices
						.procesarVentas(ventaProcesar)
						.then((res) => {
							if (ventaProcesar.claveTipoComprobanteVenta == 25) {
								// ELECTRÓNICA EN LÍNEA
								this.generarFacturaPDF(res.data.idVenta);
							}
							if (ventaProcesar.claveTipoComprobanteVenta == 28) {
								// COMPROBANTE DE VENTA
								this.generarComprobantePDF(res.data.idVenta);
							}
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					Swal.fire({
						customClass: { container: 'my-swal' },
						title: '¡Debe seleccionar un método de pago!',
						icon: 'warning',
						confirmButtonColor: '#3085d6',
						confirmButtonText: 'Aceptar',
					}).then((result) => {
						if (result.isConfirmed) {
						}
					});
				}
			},
			async generarFacturaPDF(idVentas) {
				await ventasServices
					.generarFacturaPDF(idVentas)
					.then((res) => {
						if (res.data.codigo == 0) {
							ventaStore.setFacturaPDF(
								'data:application/pdf;base64,' + res.data.certificado_pdf
							);
							ventaStore.setImagenProcesando(false);
						} else {
							ventaStore.setFacturaPDF(null);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			async generarComprobantePDF(idVentas) {
				await ventasServices
					.generarComprobantePDF(idVentas)
					.then((res) => {
						if (res.data.codigo == 0) {
							ventaStore.setFacturaPDF(
								'data:application/pdf;base64,' + res.data.certificado_pdf
							);
							ventaStore.setImagenProcesando(false);
						} else {
							ventaStore.setFacturaPDF(null);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},
			changeTipoEntrega() {
				if (this.fromPago.isEntegraInmediata) {
					this.colorTipoEntregaActivo = 'blue-grey-9';
					this.colorTipoEntregaInactivo = 'grey';
				} else {
					this.colorTipoEntregaActivo = 'grey';
					this.colorTipoEntregaInactivo = 'blue-grey-9';
				}
			},
			changeColorEfectivo() {
				this.efectivoCheck = !this.efectivoCheck;
				if (this.efectivoCheck) {
					//this.colorEfectivo = "green-5";
				} else {
					//this.colorEfectivo = "blue-grey-9";
					this.fromPago.totalEfectivo = null;
				}

				if (
					this.efectivoCheck == true &&
					this.tarjetaCheck == false &&
					this.qrCheck == false &&
					this.transBancariaCheck == false
				) {
					this.fromPago.totalEfectivo = this.fromPago.totalPagar;
				} else {
					this.fromPago.totalEfectivo = null;
				}
				this.calcularCambio();
			},
			changeColorTarjeta() {
				this.tarjetaCheck = !this.tarjetaCheck;
				if (this.tarjetaCheck) {
				} else {
					this.fromPago.totalTarjeta = null;
				}
				if (
					this.efectivoCheck == true &&
					this.tarjetaCheck == false &&
					this.qrCheck == false &&
					this.transBancariaCheck == false
				) {
					this.fromPago.totalEfectivo = this.fromPago.totalPagar;
				} else {
					this.fromPago.totalEfectivo = null;
				}
				this.calcularCambio();
			},
			changeColorQr() {
				this.qrCheck = !this.qrCheck;
				if (this.qrCheck) {
				} else {
					this.fromPago.totalTransQR = null;
				}
				if (
					this.efectivoCheck == true &&
					this.tarjetaCheck == false &&
					this.qrCheck == false &&
					this.transBancariaCheck == false
				) {
					this.fromPago.totalEfectivo = this.fromPago.totalPagar;
				} else {
					this.fromPago.totalEfectivo = null;
				}
				this.calcularCambio();
			},
			changeColorBanca() {
				this.transBancariaCheck = !this.transBancariaCheck;
				if (this.transBancariaCheck) {
				} else {
					this.fromPago.totalTransferencia = null;
				}
				if (
					this.efectivoCheck == true &&
					this.tarjetaCheck == false &&
					this.qrCheck == false &&
					this.transBancariaCheck == false
				) {
					this.fromPago.totalEfectivo = this.fromPago.totalPagar;
				} else {
					this.fromPago.totalEfectivo = null;
				}
				this.calcularCambio();
			},
			focusTotalEfectivo() {
				if (this.fromPago.totalEfectivo == 0) {
					this.fromPago.totalEfectivo = null;
				}
			},
			focusTotalTarjeta() {
				if (this.fromPago.totalTarjeta == 0) {
					this.fromPago.totalTarjeta = null;
				}
			},
			focusTotalTransQR() {
				if (this.fromPago.totalTransQR == 0) {
					this.fromPago.totalTransQR = null;
				}
			},
			focusTotalTransferencia() {
				if (this.fromPago.totalTransferencia == 0) {
					this.fromPago.totalTransferencia = null;
				}
			},
		},
	});
</script>

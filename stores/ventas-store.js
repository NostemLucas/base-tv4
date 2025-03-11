import { defineStore } from 'pinia';

export const ventasStore = defineStore('ventasStore', {
	state: () => ({
		productosBusquedaList: [],
		productosList: [],
		producto: {},
		operacion: '',
		subTotal: 0,
		descuentoAdicional: 0,
		totalPagar: 0,
		efectivoCliente: null,
		cambioCliente: 0,
		glosa: null,
		productosSeleccionados: true,
		procesarPago: false,
		finalizarPago: false,
		selectedProductos: [],

		imagenProcesando: false,
		facturaPDF: null,

		totalEfectivo: 0,
		totalTarjeta: 0,
		totalTransQR: 0,
		totalTransferencia: 0,

		efectivoCheck: false,
		tarjetaCheck: false,
		qrCheck: false,
		transBancariaCheck: false,
		otrosCheck: false,
	}),
	getters: {
		getProcesarPago: (state) => state.procesarPago,
		getSelectProductos: (state) => state.selectedProductos,
	},
	actions: {
		addProductoList(productosList) {
			this.productosList = productosList;
			//this.productosList.push(productosList) ;
		},
		setSubTotal(subTotal) {
			this.subTotal = subTotal;
		},
		setDescuentoAdicional(descuentoAdicional) {
			this.descuentoAdicional = descuentoAdicional;
		},
		setTotalPagar(totalPagar) {
			this.totalPagar = totalPagar;
		},
		setProductosSeleccionados(estado) {
			this.productosSeleccionados = estado;
			if (this.productosSeleccionados == true) {
				this.procesarPago = false;
				this.finalizarPago = false;
			}
		},
		setReturnProductosSeleccionados() {
			this.productosSeleccionados = true;
			this.procesarPago = false;
			this.finalizarPago = false;
		},
		setProcesarPga(estado) {
			this.procesarPago = estado;
			if (this.procesarPago == true) {
				this.productosSeleccionados = false;
				this.finalizarPago = false;
			}

			this.glosa = '';
			//this.descuentoAdicional=0;
			this.efectivoCliente = 0;
			this.cambioCliente = 0;

			this.totalEfectivo = 0;
			this.totalTarjeta = 0;
			this.totalTransQR = 0;
			this.totalTransferencia = 0;

			this.efectivoCheck = false;
			this.tarjetaCheck = false;
			this.qrCheck = false;
			this.transBancariaCheck = false;
			this.otrosCheck = false;
			this.productosBusquedaList = [];
		},
		setNuevaVenta() {
			this.productosSeleccionados = true;
			this.procesarPago = false;
			this.finalizarPago = false;
			this.productosList = [];
			this.selectedProductos = [];
			this.subTotal = 0;
			this.descuentoAdicional = 0;
			this.totalPagar = 0;
		},
		setCliente(cliente) {
			this.cliente = cliente;
		},
		setfinalizarPago(finalizarPago) {
			this.finalizarPago = finalizarPago;
			if (this.finalizarPago == true) {
				this.procesarPago = false;
				this.productosSeleccionados = false;
			}
		},
		setImagenProcesando(imagenProcesando) {
			this.imagenProcesando = imagenProcesando;
		},
		setFacturaPDF(pdf) {
			this.facturaPDF = pdf;
		},
	},
});

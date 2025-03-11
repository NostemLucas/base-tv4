import { defineStore } from 'pinia';
import Productos from '~/models/Productos';
import * as productosServices from '../services/productos.services';

export const productoStore = defineStore('productoStore', {
	state: () => ({
		prouctos: { ...new Productos() },
		prouctosList: [],
		imageneList: [],
		claveCategoriasList: [],
		sucursalList: [],
		operacion: '',
		showModalProductosForm: false,
		count: 0,
		name: 'Adalid',
		showModalHomolagProductoForm: false,
		showModalInventario: false,
		showFormProductos: false,
		nombreBusqueda: null,
	}),
	getters: {
		getProducto: (state) => state.prouctos,
		getShowModalProductosForm: (state) => state.showModalProductosForm,
		getSucursalList: (state) => state.sucursalList,
	},
	actions: {
		operacionProuctos(operacion) {
			this.operacion = operacion;
		},
		addProducto(productos) {
			this.prouctos = productos.productosServicios;
		},
		setProducto(productos) {
			this.prouctos = productos;
		},
		addImagenes(imagenesList) {
			this.imageneList = imagenesList;
		},
		addClaveCategoriaList(claveCategoriasList) {
			this.claveCategoriasList = claveCategoriasList;
		},
		addsucursalList(sucursalList) {
			this.sucursalList = sucursalList;
		},
		clearVariables() {
			(this.prouctos = new Productos()), (this.imageneList = []);
			this.claveCategoriasList = [];
			this.sucursalList = [];
		},

		async findAllProducto(idEntidad) {
			await productosServices
				.findAll(idEntidad)
				.then((res) => {
					this.prouctosList = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},

		newProducto() {
			this.producto = new Productos();
		},
		openAndCloseModal(showModalProductosForm) {
			this.showModalProductosForm = showModalProductosForm;
		},
		opeModalHomologacion(showModalHomolagProductoForm) {
			this.showModalHomolagProductoForm = showModalHomolagProductoForm;
		},
		openShowModalInventario(showModalInventario) {
			this.showModalInventario = showModalInventario;
		},
		openShowFormProductos(showFormProductos) {
			this.showFormProductos = showFormProductos;
		},
	},
});

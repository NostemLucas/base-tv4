import { defineStore } from 'pinia';
import * as categoriaServices from '../services/cateroria.services';

export const categoriaStore = defineStore('categoriaStore', {
	state: () => ({
		categoria: {
			id: null,
			nombre: '',
			color: '',
		},
		categoriaList: [],
		operacion: 'NUEVO',
		showModalCategoriaForm: false,
	}),
	getters: {
		getcategoria: (state) => state.categoria,
		getshowModalCategoriaForm: (state) => state.showModalCategoriaForm,
	},
	actions: {
		operacioncategoria(operacion) {
			this.operacion = operacion;
		},
		addcategoria(categoria) {
			this.categoria = categoria;
		},
		async findAllcategoria(tipocategoria) {
			await categoriaServices
				.findAll(tipocategoria)
				.then((res) => {
					this.categoriaList = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async findAllCategoriasByEntidad(fidEntidad) {
			await categoriaServices
				.findAllCategoriasByEntidad(fidEntidad)
				.then((res) => {
					this.categoriaList = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		newcategoria() {
			this.categoria = {
				id: null,
				nombre: '',
				color: '',
			};
		},
		openAndCloseModal(showModalCategoriaForm) {
			this.showModalCategoriaForm = showModalCategoriaForm;
		},
	},
});

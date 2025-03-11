import { defineStore } from 'pinia';
import * as sucursalServices from '../services/cateroria.services';

export const sucursalStore = defineStore('sucursalStore', {
	state: () => ({
		sucursal: {
			id: '',
			idTipoDocumento: null,
			nroDocumento: 0,
			complemento: '',
			razonSocial: '',
			telefono: '',
			correoElectronico: '',
		},
		sucursalList: [],
		operacion: '',
		showModalsucursalForm: false,
		count: 0,
		name: 'Adalid',
	}),
	getters: {
		getsucursal: (state) => state.sucursal,
		getshowModalsucursalForm: (state) => state.showModalsucursalForm,
	},
	actions: {
		operacionsucursal(operacion) {
			this.operacion = operacion;
		},
		addsucursal(sucursal) {
			this.sucursal = sucursal;
		},
		async findAllsucursal(tiposucursal) {
			await sucursalServices
				.findAll(tiposucursal)
				.then((res) => {
					this.sucursalList = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		newsucursal() {
			this.sucursal = {
				id: '',
				idTipoDocumento: null,
				nroDocumento: 0,
				complemento: '',
				razonSocial: '',
				telefono: '',
				correoElectronico: '',
			};
		},
		openAndCloseModal(showModalsucursalForm) {
			this.showModalsucursalForm = showModalsucursalForm;
		},
	},
});

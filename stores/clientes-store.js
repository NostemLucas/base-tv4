import { defineStore } from 'pinia';
import Clientes from '~/models/Clientes';
import * as clienteServices from '../services/cliente.services';

export const clienteStore = defineStore('clienteStore', {
	state: () => ({
		cliente: new Clientes(),
		clienteList: [],
		operacion: '',
		showModalForm: false,
		count: 0,
		name: 'Adalid',
	}),
	getters: {
		getCliente: (state) => state.cliente,
		getShowModalForm: (state) => state.showModalForm,
	},
	actions: {
		operacionCliente(operacion) {
			this.operacion = operacion;
		},
		addCliente(cliente) {
			this.cliente = cliente;
			this.cliente.nroIdentificacionTriburaria = cliente.nroDocumento;
			this.cliente.idEntificacionTributaria = cliente.id;
		},

		async findAllCliente(tipoCliente, fidEntidad) {
			await clienteServices
				.findAll(tipoCliente, fidEntidad)
				.then((res) => {
					this.clienteList = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async findAllEntidades() {
			await clienteServices
				.findAllEntidades()
				.then((res) => {
					this.clienteList = res.data;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		newCliente() {
			this.cliente = new Clientes();
		},
		openAndCloseModal(showModalForm) {
			this.showModalForm = showModalForm;
		},
	},
});

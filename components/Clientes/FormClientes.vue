<template>
	<div class="w-full">
		<div class="flex flex-col items-start p-4">
			<div class="w-full rounded-lg bg-white shadow-md">
				<div class="rounded-t-lg bg-gray-300 p-4 text-gray-800">
					<div class="text-lg font-semibold">{{ operacion }} CLIENTE</div>
				</div>
				<form @submit.prevent="operacionForm" class="space-y-4 p-4">
					<div v-show="!showProgres">
						<div class="space-y-4">
							<div class="flex justify-center space-x-4">
								<div class="w-1/2">
									<label class="block text-gray-700">TIPO DE DOCUMENTO *</label>
									<select
										v-model="formCliente.idTipoDocumento"
										class="w-full rounded-lg border border-gray-300 p-2"
										required
									>
										<option
											v-for="option in options"
											:key="option.idTipoDocumento"
											:value="option.idTipoDocumento"
										>
											{{ option.tipoDocumento }}
										</option>
									</select>
								</div>
								<div class="w-1/3">
									<label class="block text-gray-700">
										NÚMERO DE DOCUMENTO *
									</label>
									<input
										v-model="formCliente.nroDocumento"
										type="number"
										class="w-full rounded-lg border border-gray-300 p-2"
										required
									/>
								</div>
								<div class="w-1/6">
									<label class="block text-gray-700">COMPLEMENTO</label>
									<input
										v-model="formCliente.complementoDocumento"
										type="text"
										class="w-full rounded-lg border border-gray-300 p-2"
									/>
								</div>
							</div>
							<div class="flex justify-center space-x-4">
								<div class="w-full">
									<label class="block text-gray-700">
										NOMBRE COMPLETO/RAZÓN SOCIAL *
									</label>
									<input
										v-model="formCliente.razonSocial"
										type="text"
										class="w-full rounded-lg border border-gray-300 p-2 uppercase"
										required
									/>
								</div>
							</div>
							<div class="flex justify-center space-x-4">
								<div class="w-1/2">
									<label class="block text-gray-700">TELÉFONO</label>
									<input
										v-model="formCliente.telefono"
										type="text"
										class="w-full rounded-lg border border-gray-300 p-2"
									/>
								</div>
								<div class="w-1/2">
									<label class="block text-gray-700">CORREO ELECTRÓNICO</label>
									<input
										v-model="formCliente.correoElectronico"
										type="email"
										class="w-full rounded-lg border border-gray-300 p-2"
									/>
								</div>
							</div>
							<div class="flex justify-center space-x-4">
								<div class="w-full">
									<label class="block text-gray-700">
										INFORMACIÓN ADICIONAL (PACIENTE, REPRESENTANTE LEGAL Y/O
										OTROS)
									</label>
									<input
										v-model="formCliente.informacionAdicional"
										type="text"
										class="w-full rounded-lg border border-gray-300 p-2 uppercase"
									/>
								</div>
							</div>
						</div>
					</div>
					<div v-show="showProgres" class="flex justify-center">
						<div class="text-lg font-bold text-gray-800">
							<svg
								class="h-10 w-10 animate-spin text-gray-800"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								></circle>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
								></path>
							</svg>
							PROCESANDO SOLICITUD
						</div>
					</div>
					<hr />
					<div class="flex justify-end space-x-4 p-4">
						<button
							type="reset"
							class="rounded-lg bg-gray-500 px-4 py-2 text-white"
							@click="closeModal"
						>
							CANCELAR
						</button>
						<button
							type="submit"
							class="rounded-lg bg-green-500 px-4 py-2 text-white"
						>
							GUARDAR
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import { useStore } from 'pinia';
	import Swal from 'sweetalert2';
	import { clienteStore } from '../../stores/clientes-store.js';
	import * as clienteServices from '../../services/cliente.services.js';

	const store = clienteStore();
	const { cliente, showModalForm } = storeToRefs(store);
	const formCliente = ref(store.getCliente);
	const $q = useQuasar();

	const showProgres = ref(false);
	const formCliente = ref({
		id: '',
		idTipoDocumento: 1093,
		nroDocumento: 0,
		complemento: '',
		razonSocial: '',
		telefono: '',
		correoElectronico: '',
		informacionAdicional: '',
	});
	const options = [
		{ idTipoDocumento: 1093, tipoDocumento: 'CI - CEDULA DE IDENTIDAD' },
		{
			idTipoDocumento: 1095,
			tipoDocumento: 'NIT - NÚMERO DE IDENTIFICACIÓN TRIBUTARIA',
		},
		{
			idTipoDocumento: 1094,
			tipoDocumento: 'CEX - CEDULA DE IDENTIDAD DE EXTRANJERO',
		},
	];
	const usuarioForm = ref({});

	const mensajePositive = () => {
		$q.notify({
			position: 'bottom-right',
			type: 'positive',
			message: 'La operación ha sido procesada con éxito.',
		});
	};

	const mensajeNegative = () => {
		$q.notify({
			type: 'negative',
			message:
				'La operación no pudo completarse, inténtelo nuevamente o contáctese con su administrador.',
		});
	};

	const initPage = async () => {
		usuarioForm.value = JSON.parse(sessionStorage.getItem('usuario'));
	};

	const operacionForm = async () => {
		switch (store.operacion) {
			case 'NUEVO':
				confirmSave();
				break;
			case 'EDITAR':
				confirmUpdate();
				break;
			case 'ELIMINAR':
				confirmDelete();
				break;
		}
		store.findAllCliente('CLIENTE', usuarioForm.value.fidEntidad);
	};

	const confirmSave = async () => {
		Swal.fire({
			customClass: { container: 'my-swal' },
			title: '¿Está seguro de registrar al nuevo CLIENTE?',
			text: '¡Si acepta realizar la operación el registro se guardará en el sistema!',
			icon: 'question',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Aceptar',
		}).then((result) => {
			if (result.isConfirmed) {
				save();
			}
		});
	};

	const save = async () => {
		formCliente.value.fidClienteEntidad = usuarioForm.value.fidEntidad;
		formCliente.value.idTipoCliente = 12; // CLIENTE
		showProgres.value = true;
		await clienteServices
			.save(formCliente.value)
			.then((res) => {
				if (res.data.estado) {
					store.openAndCloseModal(false);
					store.findAllEntidades();
					store.addCliente(res.data.cliente);
					mensajePositive();
				} else {
					mensajeNegative();
				}
				showProgres.value = false;
			})
			.catch((err) => {
				console.log(err);
				showProgres.value = false;
				mensajeNegative();
			});
	};

	const confirmUpdate = async () => {
		Swal.fire({
			customClass: { container: 'my-swal' },
			title: '¿Está seguro de actualizar la información del CLIENTE?',
			text: '¡Si acepta realizar la operación el registro se guardará en el sistema!',
			icon: 'question',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Aceptar',
		}).then((result) => {
			if (result.isConfirmed) {
				update();
			}
		});
	};

	const update = async () => {
		await clienteServices
			.update(formCliente.value)
			.then((res) => {
				store.openAndCloseModal(false);
				store.findAllCliente('CLIENTE', usuarioForm.value.fidEntidad);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const confirmDelete = async () => {
		Swal.fire({
			title: '¿Está seguro de eliminar la información del CLIENTE?',
			text: '¡Si acepta realizar la operación el registro se guardará en el sistema!',
			icon: 'question',
			showCancelButton: true,
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Aceptar',
		}).then((result) => {
			if (result.isConfirmed) {
				update();
			}
		});
	};

	const closeModal = () => {
		store.openAndCloseModal(false);
	};

	onMounted(() => {
		initPage();
	});
</script>

<style scoped>
	.my-swal {
		z-index: 10001 !important;
	}
	.my-card {
		width: 100%;
	}
</style>

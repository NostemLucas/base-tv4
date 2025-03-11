<template>
	<div class="w-full">
		<div class="flex flex-col items-start p-4">
			<div class="w-full rounded-lg bg-white shadow-md">
				<div class="rounded-t-lg bg-blue-500 p-4 text-white">
					<div class="text-lg font-semibold">NUEVA CATEGORIA</div>
				</div>
				<div class="p-4">
					<form
						@submit.prevent="operacionForm"
						@reset="onReset"
						class="space-y-4"
					>
						<div class="flex justify-center space-x-4">
							<div class="w-2/3">
								<label class="block text-gray-700">
									NOMBRE DE PRODUCTO O SERVICIO*
								</label>
								<input
									v-model="formCategoria.nombre"
									type="text"
									class="w-full rounded-lg border border-gray-300 p-2 uppercase"
									placeholder="Nombre Completo de la Categoria"
									required
								/>
							</div>
							<div class="w-1/3">
								<label class="block text-gray-700">Color</label>
								<div class="relative">
									<input
										v-model="formCategoria.color"
										type="text"
										class="w-full rounded-lg border border-gray-300 p-2"
										placeholder="Seleccione un color"
									/>
									<div
										class="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
									>
										<input
											type="color"
											v-model="formCategoria.color"
											class="h-6 w-6 cursor-pointer border-none"
										/>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<hr />
				<div class="flex justify-end space-x-4 p-4">
					<button
						type="reset"
						class="rounded-lg bg-red-500 px-4 py-2 text-white"
						@click="closeModal"
					>
						CANCELAR
					</button>
					<button
						type="submit"
						class="rounded-lg bg-green-500 px-4 py-2 text-white"
						@click="confirmSave"
					>
						GUARDAR
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { defineComponent, ref, onMounted } from 'vue';
	import { categoriaStore } from '../../stores/categoriaProductos-store.js';
	import { storeToRefs, mapState } from 'pinia';
	import * as categoriaServices from '../../services/cateroria.services.js';
	import Swal from 'sweetalert2';
	const store = categoriaStore();
	const { cliente, showModalForm } = storeToRefs(store);
	const formCliente = ref(store.getCliente);
	export default defineComponent({
		components: {},
		setup() {
			return {
				formCategoria: ref({}),
			};
		},
		computed: {
			...mapState(categoriaStore, [
				'categoria',
				'showModalCategoriaForm',
				'categoriaList',
				'operacion',
			]),
		},
		created() {
			this.initPage();
		},
		methods: {
			async initPage() {
				this.usuarioForm = JSON.parse(sessionStorage.getItem('usuario'));
			},
			closeModal() {
				store.openAndCloseModal(false);
			},
			async operacionForm() {
				this.operacion = 'NUEVO';

				switch (this.operacion) {
					case 'NUEVO':
						this.confirmSave();
						break;
					case 'EDITAR':
						this.confirmUpdate();
						break;
					case 'ELIMINAR':
						this.confirmDelete();
						break;
				}
			},
			async confirmSave() {
				Swal.fire({
					customClass: { container: 'my-swal' },
					title: '¿Está seguro de registrar la nueva CATEGORIA?',
					text: '¡Si acepta realizar la operación el registro se guardará en el sistema!',
					icon: 'question',
					showCancelButton: true,
					cancelButtonColor: '#d33',
					cancelButtonText: 'Cancelar',
					confirmButtonColor: '#3085d6',
					confirmButtonText: 'Aceptar',
				}).then((result) => {
					if (result.isConfirmed) {
						this.save();
					}
				});
			},
			async save() {
				this.formCategoria.fidEntidad = this.usuarioForm.fidEntidad;
				await categoriaServices
					.save(this.formCategoria)
					.then((res) => {
						store.openAndCloseModal(false);
						store.findAllCategoriasByEntidad(this.usuarioForm.fidEntidad);
						$q.notify({
							type: 'positive',
							message: 'La CATEGORIA fue registrada correctamente.',
						});
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	});
</script>

<style scoped>
	.my-card {
		width: 100%;
	}
</style>

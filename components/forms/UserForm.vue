<template>
	<form @submit="onSubmit" class="space-y-4">
		<!-- Campo de nombre -->
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700">
				Nombre
			</label>
			<input
				id="name"
				v-model="form.name"
				type="text"
				class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				:class="{ 'border-red-500': errors.name }"
			/>
			<p v-if="errors.name" class="mt-1 text-sm text-red-600">
				{{ errors.name }}
			</p>
		</div>

		<!-- Campo de email -->
		<div>
			<label for="email" class="block text-sm font-medium text-gray-700">
				Email
			</label>
			<input
				id="email"
				v-model="form.email"
				type="email"
				class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				:class="{ 'border-red-500': errors.email }"
			/>
			<p v-if="errors.email" class="mt-1 text-sm text-red-600">
				{{ errors.email }}
			</p>
		</div>

		<!-- Campo de edad -->
		<div>
			<label for="age" class="block text-sm font-medium text-gray-700">
				Edad
			</label>
			<input
				id="age"
				v-model="form.age"
				type="number"
				class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm"
				:class="{ 'border-red-500': errors.age }"
			/>
			<p v-if="errors.age" class="mt-1 text-sm text-red-600">
				{{ errors.age }}
			</p>
		</div>

		<!-- Botón de envío -->
		<button
			type="submit"
			class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 w-full rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
			:disabled="apiStore.isLoading"
		>
			<span v-if="apiStore.isLoading">
				<span class="mr-2">Cargando...</span>
			</span>
			<span v-else>Guardar</span>
		</button>

		<!-- Mensaje de error de la API -->
		<p v-if="apiStore.error" class="text-sm text-red-600">
			{{ apiStore.error }}
		</p>
	</form>
</template>

<script setup lang="ts">
	import { useForm } from 'vee-validate';
	import { toTypedSchema } from '@vee-validate/zod';
	import * as z from 'zod';
	import { useApiStore } from '~/store/api';

	// Esquema de validación con Zod
	const validationSchema = toTypedSchema(
		z.object({
			name: z
				.string()
				.min(1, 'El nombre es requerido')
				.min(2, 'El nombre debe tener al menos 2 caracteres'),
			email: z
				.string()
				.min(1, 'El email es requerido')
				.email('El email no es válido'),
			age: z
				.number()
				.min(18, 'Debes ser mayor de 18 años')
				.max(120, 'La edad no es válida'),
		})
	);

	// Estado inicial del formulario
	const initialValues = {
		name: '',
		email: '',
		age: 18,
	};

	// Usar vee-validate con el esquema de Zod
	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema,
		initialValues,
	});

	// Store de la API
	const apiStore = useApiStore();

	// Manejar el envío del formulario
	const onSubmit = handleSubmit(async (values) => {
		try {
			// Intentar obtener datos de caché primero
			const cachedData = apiStore.getCachedData('user-form');
			if (cachedData) {
				console.log('Usando datos en caché:', cachedData);
				return;
			}

			// Si no hay caché, hacer la petición
			const response = await apiStore.fetchApi('/users', {
				method: 'POST',
				body: JSON.stringify(values),
			});

			// Guardar respuesta en caché
			apiStore.setCachedData('user-form', response);

			// Resetear formulario
			resetForm();

			// Mostrar mensaje de éxito
			alert('Usuario guardado correctamente');
		} catch (error) {
			console.error('Error al guardar usuario:', error);
		}
	});
</script>

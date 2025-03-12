<template>
	<div class="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
		<main class="flex flex-1 items-center justify-center p-4">
			<div class="w-full max-w-md">
				<!-- Logo -->
				<div class="mb-8 flex justify-center">
					<NuxtImg src="/logo.png" alt="Logo" class="h-16" format="webp" />
				</div>

				<!-- Card de Login -->
				<div
					class="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-neutral-800"
				>
					<!-- Barra superior -->
					<div class="bg-primary-600 h-2"></div>

					<div class="p-6 sm:p-8">
						<!-- Header con título y switch de tema -->
						<div class="mb-6 flex items-center justify-between">
							<h1
								class="text-2xl font-semibold text-neutral-900 dark:text-white"
							>
								Iniciar Sesión
							</h1>

							<!-- Toggle de tema -->
							<div class="flex items-center gap-3 text-sm">
								<span
									:class="{
										'text-primary-600 font-medium': !isDark,
										'text-neutral-500 dark:text-neutral-400': isDark,
									}"
								>
									Claro
								</span>
								<label class="relative inline-block h-6 w-12 cursor-pointer">
									<input
										v-model="isDark"
										type="checkbox"
										class="h-0 w-0 opacity-0"
										@change="toggleTheme"
									/>
									<span
										class="absolute inset-0 rounded-full bg-neutral-200 transition-all duration-300 before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 dark:bg-neutral-700"
										:class="{ 'bg-primary-600 before:translate-x-6': isDark }"
									></span>
								</label>
								<span
									:class="{
										'text-primary-600 font-medium': isDark,
										'text-neutral-500 dark:text-neutral-400': !isDark,
									}"
								>
									Oscuro
								</span>
							</div>
						</div>

						<!-- Formulario -->
						<form @submit="onSubmit" class="space-y-4">
							<!-- Username -->
							<div>
								<div class="relative">
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
									>
										<user-icon
											class="h-5 w-5 text-neutral-500 dark:text-neutral-400"
										/>
									</div>
									<input
										id="username"
										v-model="values.username"
										type="text"
										placeholder="Nombre de Usuario"
										class="focus:border-primary-500 focus:ring-primary-500/20 dark:focus:border-primary-500 w-full rounded-lg border border-neutral-200 py-3 pr-4 pl-10 text-neutral-900 transition-all outline-none focus:ring-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
										:class="{
											'border-red-500 focus:border-red-500 focus:ring-red-500/20':
												errors.username,
										}"
									/>
								</div>
								<p v-if="errors.username" class="mt-1.5 text-sm text-red-500">
									{{ errors.username }}
								</p>
							</div>

							<!-- Password -->
							<div>
								<div class="relative">
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
									>
										<lock-icon
											class="h-5 w-5 text-neutral-500 dark:text-neutral-400"
										/>
									</div>
									<input
										id="password"
										v-model="values.password"
										:type="showPassword ? 'text' : 'password'"
										placeholder="Contraseña"
										class="focus:border-primary-500 focus:ring-primary-500/20 dark:focus:border-primary-500 w-full rounded-lg border border-neutral-200 py-3 pr-10 pl-10 text-neutral-900 transition-all outline-none focus:ring-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
										:class="{
											'border-red-500 focus:border-red-500 focus:ring-red-500/20':
												errors.password,
										}"
									/>
									<button
										type="button"
										class="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
										@click="togglePasswordVisibility"
									>
										<eye-icon v-if="showPassword" class="h-5 w-5" />
										<eye-off-icon v-else class="h-5 w-5" />
									</button>
								</div>
								<p v-if="errors.password" class="mt-1.5 text-sm text-red-500">
									{{ errors.password }}
								</p>
							</div>

							<!-- Recordar sesión y Olvidé contraseña -->
							<div class="flex items-center justify-between">
								<label class="flex items-center">
									<input
										v-model="rememberMe"
										type="checkbox"
										class="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-neutral-300 dark:border-neutral-600"
									/>
									<span
										class="ml-2 text-sm text-neutral-600 dark:text-neutral-400"
									>
										Recordar sesión
									</span>
								</label>
								<a
									href="#"
									class="text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400 text-sm"
								>
									¿Olvidaste tu contraseña?
								</a>
							</div>

							<!-- Botón de login -->
							<button
								type="submit"
								class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 w-full rounded-lg px-4 py-3 font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-70 dark:focus:ring-offset-neutral-900"
								:disabled="apiStore.isLoading"
							>
								<span
									v-if="apiStore.isLoading"
									class="flex items-center justify-center"
								>
									<loader-icon class="mr-2 h-5 w-5 animate-spin" />
									Iniciando sesión...
								</span>
								<span v-else>Iniciar Sesión</span>
							</button>

							<!-- Registro -->
							<p
								class="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400"
							>
								¿No tienes una cuenta?
								<NuxtLink
									to="/register"
									class="text-primary-600 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-400 font-medium"
								>
									Regístrate aquí
								</NuxtLink>
							</p>
						</form>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { useForm } from 'vee-validate';
	import { toTypedSchema } from '@vee-validate/zod';
	import * as z from 'zod';
	import { useApiStore } from '~/store/api';

	// Estado del tema
	const isDark = ref(false);
	const showPassword = ref(false);
	const rememberMe = ref(false);

	// Esquema de validación
	const validationSchema = toTypedSchema(
		z.object({
			username: z
				.string()
				.min(1, 'El usuario es requerido')
				.min(3, 'El usuario debe tener al menos 3 caracteres'),
			password: z
				.string()
				.min(1, 'La contraseña es requerida')
				.min(6, 'La contraseña debe tener al menos 6 caracteres'),
		})
	);

	// Estado inicial
	const initialValues = {
		username: '',
		password: '',
	};

	// Usar vee-validate con Zod
	const { handleSubmit, errors, values } = useForm({
		validationSchema,
		initialValues,
	});

	// Store de la API
	const apiStore = useApiStore();

	// Cambiar tema
	const toggleTheme = () => {
		// Aplicar clase dark al html
		if (isDark.value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	// Mostrar/ocultar contraseña
	const togglePasswordVisibility = () => {
		showPassword.value = !showPassword.value;
	};

	// Manejar envío del formulario
	const onSubmit = handleSubmit(async (values) => {
		try {
			const response = await apiStore.fetchApi<{ token: string }>(
				'/auth/login',
				{
					method: 'POST',
					body: JSON.stringify({
						username: values.username,
						password: values.password,
						remember: rememberMe.value,
					}),
				}
			);

			// Guardar token
			apiStore.setToken(response.token);

			// Mostrar mensaje de éxito
			alert('¡Inicio de sesión exitoso!');

			// Redireccionar al dashboard
			navigateTo('/dashboard');
		} catch (error) {
			// El mensaje de error ya está en apiStore.error
			alert(apiStore.error || 'Error al iniciar sesión');
		}
	});

	// Inicializar tema según preferencia del sistema
	if (typeof window !== 'undefined') {
		isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
		toggleTheme();
	}
</script>

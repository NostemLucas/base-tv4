<template>
	<div class="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-900">
		<main class="flex flex-1 items-center justify-center p-4 md:p-6">
			<div class="w-full max-w-md">
				<!-- Logo and Brand -->
				<div class="mb-8 flex justify-center">
					<div class="flex items-center gap-2">
						<div
							class="bg-primary flex h-10 w-10 items-center justify-center rounded-full shadow-lg"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-white"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
								></path>
							</svg>
						</div>
						<span class="text-2xl font-bold text-neutral-900 dark:text-white">
							SynergySoft
						</span>
					</div>
				</div>

				<!-- Login Card -->
				<div
					class="overflow-hidden rounded-xl bg-white shadow-xl transition-all dark:bg-neutral-800"
				>
					<!-- Header bar -->
					<div class="bg-primary h-2"></div>

					<!-- Login Form -->
					<div class="p-6 sm:p-8">
						<div class="mb-6 flex items-center justify-between">
							<h1
								class="text-2xl font-semibold text-neutral-950 dark:text-white"
							>
								Iniciar Sesión
							</h1>

							<!-- Mode Toggle with improved contrast -->
							<div class="flex items-center gap-3 text-sm">
								<span
									:class="{
										'text-primary font-medium': isLive,
										'text-neutral-600 dark:text-neutral-400': !isLive,
									}"
								>
									Claro
								</span>
								<label class="relative inline-block h-6 w-12 cursor-pointer">
									<input
										v-model="isLive"
										type="checkbox"
										class="h-0 w-0 opacity-0"
										@change="toggleMode"
									/>
									<span
										class="absolute inset-0 rounded-full bg-neutral-300 transition-all duration-300 before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:shadow-sm before:transition-all before:duration-300 dark:bg-neutral-700"
										:class="{ 'bg-primary before:translate-x-6': !isLive }"
									/>
								</label>
								<span
									:class="{
										'text-primary font-medium': !isLive,
										'text-neutral-600 dark:text-neutral-400': isLive,
									}"
								>
									Oscuro
								</span>
							</div>
						</div>

						<form @submit.prevent="onSubmit" class="space-y-5">
							<!-- Username Field -->
							<div>
								<div class="relative">
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-neutral-500 dark:text-neutral-400"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
											></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
									</div>
									<input
										id="username"
										v-model="form.username"
										type="text"
										placeholder="Nombre de Usuario"
										class="focus:border-primary focus:ring-primary/20 dark:focus:border-primary w-full rounded-lg border border-neutral-200 py-3 pr-4 pl-10 transition-all outline-none focus:ring-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
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

							<!-- Password Field -->
							<div>
								<div class="relative">
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-neutral-500 dark:text-neutral-400"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										>
											<rect
												x="3"
												y="11"
												width="18"
												height="11"
												rx="2"
												ry="2"
											></rect>
											<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
										</svg>
									</div>
									<input
										id="password"
										v-model="form.password"
										:type="showPassword ? 'text' : 'password'"
										placeholder="Contraseña"
										class="focus:border-primary focus:ring-primary/20 dark:focus:border-primary w-full rounded-lg border border-neutral-200 py-3 pr-10 pl-10 transition-all outline-none focus:ring-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
										:class="{
											'border-red-500 focus:border-red-500 focus:ring-red-500/20':
												errors.password,
										}"
									/>
									<button
										type="button"
										class="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
										@click="togglePasswordVisibility"
									>
										<svg
											v-if="showPassword"
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
											></path>
											<line x1="1" y1="1" x2="23" y2="23"></line>
										</svg>
										<svg
											v-else
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
											></path>
											<circle cx="12" cy="12" r="3"></circle>
										</svg>
									</button>
								</div>
								<p v-if="errors.password" class="mt-1.5 text-sm text-red-500">
									{{ errors.password }}
								</p>
							</div>

							<!-- Help Link -->
							<div class="flex justify-end">
								<a
									href="#"
									class="hover:text-primary dark:hover:text-primary text-sm text-neutral-600 transition-colors dark:text-neutral-400"
								>
									¿Necesitas ayuda?
								</a>
							</div>

							<!-- Login Button -->
							<button
								type="submit"
								class="bg-primary hover:bg-primary/90 focus:ring-primary w-full rounded-lg px-4 py-3 font-medium text-white shadow-sm transition-all hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-70 dark:focus:ring-offset-neutral-900"
								:disabled="isSubmitting"
							>
								<span
									v-if="isSubmitting"
									class="flex items-center justify-center"
								>
									<svg
										class="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
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
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Iniciando sesión...
								</span>
								<span v-else>Iniciar Sesión</span>
							</button>

							<!-- Free Trial Link -->
							<div class="text-center">
								<p class="text-sm text-neutral-700 dark:text-neutral-300">
									¿No tienes una cuenta?
									<a
										href="#"
										class="text-primary hover:text-primary/90 font-medium"
									>
										Prueba la versión gratuita
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>

		<!-- Footer -->
		<footer
			class="mt-auto border-t border-neutral-200 bg-white px-6 py-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
		>
			<div class="mx-auto max-w-7xl">
				<div
					class="flex flex-col items-center justify-between gap-4 md:flex-row"
				>
					<!-- Left side links -->
					<div class="flex items-center">
						<a
							href="#"
							target="_blank"
							class="hover:text-primary flex items-center gap-1 text-sm font-medium text-neutral-800 transition-colors dark:text-neutral-200"
						>
							SynergySoft
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
								></path>
								<polyline points="15 3 21 3 21 9"></polyline>
								<line x1="10" y1="14" x2="21" y2="3"></line>
							</svg>
						</a>
					</div>

					<!-- Center links -->
					<div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
						<a
							href="#"
							class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
						>
							IBKR Escritorio
						</a>
						<a
							href="#"
							class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
						>
							Estación de Trabajo (TWS)
						</a>
						<div class="flex items-center gap-1">
							<a
								href="#"
								class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
							>
								IBKR Móvil
							</a>
							<span class="flex gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 text-neutral-500 dark:text-neutral-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
									<line x1="12" y1="18" x2="12.01" y2="18"></line>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 text-neutral-500 dark:text-neutral-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
									></path>
								</svg>
							</span>
						</div>
						<div class="flex items-center gap-1">
							<a
								href="#"
								class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
							>
								IBKR GlobalTrader
							</a>
							<span class="flex gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 text-neutral-500 dark:text-neutral-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
									<line x1="12" y1="18" x2="12.01" y2="18"></line>
								</svg>
							</span>
						</div>
						<div class="flex items-center gap-1">
							<a
								href="#"
								class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
							>
								IBKR Forecast Trader
							</a>
							<span
								class="bg-primary rounded-sm px-1.5 py-0.5 text-xs font-medium text-white"
							>
								NUEVO
							</span>
						</div>
					</div>

					<!-- Right side links -->
					<div class="flex items-center gap-4">
						<a
							href="#"
							class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
						>
							Contáctanos
						</a>
						<span class="text-neutral-300 dark:text-neutral-700">|</span>
						<a
							href="#"
							class="hover:text-primary text-sm text-neutral-700 transition-colors dark:text-neutral-300"
						>
							Acerca de Nosotros
						</a>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
	import { ref, reactive, watch } from 'vue';
	import { useForm } from 'vee-validate';
	import { toTypedSchema } from '@vee-validate/zod';
	import * as z from 'zod';

	// Define validation schema with Zod
	const validationSchema = toTypedSchema(
		z.object({
			username: z
				.string()
				.min(1, 'El nombre de usuario es obligatorio')
				.min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
			password: z
				.string()
				.min(1, 'La contraseña es obligatoria')
				.min(6, 'La contraseña debe tener al menos 6 caracteres'),
		})
	);

	// Use vee-validate's useForm
	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema,
	});

	const form = reactive({
		username: '',
		password: '',
	});

	const isLive = ref(true);
	const showPassword = ref(false);
	const isSubmitting = ref(false);

	// Handle dark mode toggle
	const toggleMode = () => {
		const isDark = !isLive.value;
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		console.log(`Cambiado a modo ${isLive.value ? 'Claro' : 'Oscuro'}`);
	};

	// Initialize dark mode based on system preference
	const initDarkMode = () => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			isLive.value = false;
			document.documentElement.classList.add('dark');
		}
	};

	// Call once when component is mounted
	if (typeof window !== 'undefined') {
		initDarkMode();
	}

	const togglePasswordVisibility = () => {
		showPassword.value = !showPassword.value;
	};

	// Form submission handler with vee-validate
	const onSubmit = handleSubmit(async (values) => {
		try {
			isSubmitting.value = true;

			// Simular llamada a API
			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log('Inicio de sesión exitoso:', {
				username: values.username,
				password: '********', // Nunca registrar contraseñas reales
				mode: isLive.value ? 'Claro' : 'Oscuro',
			});

			// Aquí iría la redirección o lógica post-login
		} catch (error) {
			console.error('Error de inicio de sesión:', error);
		} finally {
			isSubmitting.value = false;
		}
	});
</script>

<style>
	:root {
		--primary: #e11d48;
		--primary-hover: #be123c;
	}

	/* Tailwind v4 compatible dark mode */
	.dark {
		color-scheme: dark;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			color-scheme: dark;
		}
	}
</style>

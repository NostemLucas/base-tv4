<template>
	<div class="flex min-h-screen flex-col bg-slate-50">
		<main class="flex flex-1 items-center justify-center p-4">
			<div class="w-full max-w-md">
				<div class="mb-8 flex justify-center">
					<img
						src="https://www.interactivebrokers.com/images/web/logos/ib-logo.svg"
						alt="Interactive Brokers"
						class="h-10"
					/>
				</div>

				<div
					class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
				>
					<!-- Blue header bar -->
					<div class="h-2 bg-blue-600" />

					<!-- Login Form -->
					<div class="p-6 sm:p-8">
						<div class="mb-6 flex items-center justify-between">
							<h1 class="text-2xl font-semibold text-slate-800">
								Iniciar Sesión
							</h1>

							<!-- Toggle Switch -->
							<div class="flex items-center gap-3 text-sm">
								<span
									:class="{
										'font-medium text-blue-600': isLive,
										'text-slate-500': !isLive,
									}"
								>
									Claro
								</span>
								<label class="relative inline-block h-6 w-12">
									<input
										v-model="isLive"
										type="checkbox"
										class="h-0 w-0 opacity-0"
										@change="toggleMode"
									/>
									<span
										class="absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-full bg-slate-200 transition-all duration-300 before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300"
										:class="{ 'bg-blue-600 before:translate-x-6': !isLive }"
									/>
								</label>
								<span
									:class="{
										'font-medium text-blue-600': !isLive,
										'text-slate-500': isLive,
									}"
								>
									Oscuro
								</span>
							</div>
						</div>

						<div class="mb-4">
							<div class="relative">
								<div
									class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 text-slate-400"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<input
									v-model="username"
									type="text"
									placeholder="Nombre de Usuario"
									class="w-full rounded-lg border border-slate-300 py-3 pr-4 pl-10 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									:class="{
										'border-red-500 focus:border-red-500 focus:ring-red-500':
											errors.username,
									}"
								/>
							</div>
							<p v-if="errors.username" class="mt-1 text-sm text-red-600">
								{{ errors.username }}
							</p>
						</div>

						<!-- Password Field -->
						<div class="mb-2">
							<div class="relative">
								<div
									class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5 text-slate-400"
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
									v-model="password"
									:type="showPassword ? 'text' : 'password'"
									placeholder="Contraseña"
									class="w-full rounded-lg border border-slate-300 py-3 pr-10 pl-10 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									:class="{
										'border-red-500 focus:border-red-500 focus:ring-red-500':
											errors.password,
									}"
								/>
								<button
									type="button"
									class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
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
							<p v-if="errors.password" class="mt-1 text-sm text-red-600">
								{{ errors.password }}
							</p>
						</div>

						<!-- Need Help Link -->
						<div class="mb-6 flex justify-end">
							<a
								href="#"
								class="text-sm text-slate-500 transition-colors hover:text-blue-600"
							>
								Need help?
							</a>
						</div>

						<!-- Login Button -->
						<button
							class="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							:disabled="isLoading"
							@click="login"
						>
							<span v-if="isLoading" class="flex items-center justify-center">
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
								Logging in...
							</span>
							<span v-else>Inciar Sesion</span>
						</button>

						<!-- Free Trial Link -->
						<div class="mt-4 text-center">
							<p class="text-sm text-slate-600">
								No tienes una cuenta?
								<a
									href="#"
									class="font-medium text-blue-600 hover:text-blue-800"
								>
									Resgitarte
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>

		<!-- Footer -->
		<footer class="mt-auto border-t border-slate-200 px-6 py-4">
			<div class="mx-auto max-w-7xl">
				<div
					class="flex flex-col items-center justify-between gap-4 md:flex-row"
				>
					<!-- Left side links -->
					<div class="flex items-center">
						<a
							href="https://www.interactivebrokers.com"
							target="_blank"
							class="flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-blue-600"
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

					<div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
						<a
							href="#"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
						>
							IBKR Desktop
						</a>
						<a
							href="#"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
						>
							Trader Workstation (TWS)
						</a>
						<div class="flex items-center gap-1">
							<a
								href="#"
								class="text-sm text-slate-600 transition-colors hover:text-blue-600"
							>
								IBKR Mobile
							</a>
							<span class="flex gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 text-slate-500"
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
									class="h-4 w-4 text-slate-500"
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
								class="text-sm text-slate-600 transition-colors hover:text-blue-600"
							>
								IBKR GlobalTrader
							</a>
							<span class="flex gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 text-slate-500"
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
									class="h-4 w-4 text-slate-500"
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
								class="text-sm text-slate-600 transition-colors hover:text-blue-600"
							>
								IBKR Forecast Trader
							</a>
							<span
								class="rounded-sm bg-blue-600 px-1.5 py-0.5 text-xs font-medium text-white"
							>
								NEW
							</span>
						</div>
						<a
							href="#"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
						>
							IBKR APIs
						</a>
					</div>

					<!-- Right side links -->
					<div class="flex items-center gap-4">
						<a
							href="#"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
						>
							Contact Us
						</a>
						<span class="text-slate-300">|</span>
						<a
							href="#"
							class="text-sm text-slate-600 transition-colors hover:text-blue-600"
						>
							About Our Trading Platform
						</a>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
	import { ref, reactive } from 'vue';

	const isLive = ref(true);
	const username = ref('');
	const password = ref('');
	const showPassword = ref(false);
	const isLoading = ref(false);
	const errors = reactive({
		username: '',
		password: '',
	});

	const toggleMode = () => {
		console.log(`Switched to ${isLive.value ? 'Live' : 'Paper'} mode`);
	};

	const togglePasswordVisibility = () => {
		showPassword.value = !showPassword.value;
	};

	const validateForm = () => {
		let isValid = true;

		errors.username = '';
		errors.password = '';

		if (!username.value.trim()) {
			errors.username = 'Username is required';
			isValid = false;
		}

		if (!password.value) {
			errors.password = 'Password is required';
			isValid = false;
		}

		return isValid;
	};

	const login = async () => {
		if (!validateForm()) return;

		try {
			isLoading.value = true;

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log('Login attempt with:', {
				username: username.value,
				password: '********', // Never log actual passwords
				mode: isLive.value ? 'Live' : 'Paper',
			});

			// Handle successful login here
			// For demo purposes, we'll just log a success message
			console.log('Login successful!');
		} catch (error) {
			console.error('Login failed:', error);
		} finally {
			isLoading.value = false;
		}
	};
</script>

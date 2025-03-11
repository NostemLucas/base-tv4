<template>
	<div class="flex min-h-screen items-center justify-center bg-gray-100">
		<div class="overflow-hidden rounded-lg bg-white shadow-md md:flex">
			<div
				class="hidden items-center justify-center bg-gray-800 p-8 md:flex md:w-1/2"
			>
				<div>
					<h2 class="mb-2 text-4xl font-bold text-white">¡Bienvenido!</h2>
					<p class="text-white">¡Inicie sesión en su cuenta para comenzar!</p>
				</div>
			</div>
			<div class="w-full p-8 md:w-1/2">
				<div class="mb-8 text-center">
					<h2 class="text-4xl font-bold text-gray-800">GALILEO SOFTWARE</h2>
				</div>
				<form @submit.prevent="loginUsuario" class="space-y-6">
					<div>
						<label class="block text-gray-700">Nombre de Usuario</label>
						<input
							v-model="loginForm.username"
							type="text"
							class="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
						/>
					</div>
					<div>
						<label class="block text-gray-700">Contraseña</label>
						<input
							v-model="loginForm.password"
							type="password"
							class="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
						/>
					</div>
					<div>
						<button
							type="submit"
							class="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
						>
							Ingresar al Sistema
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useRouter } from 'vue-router';
	import * as usuarioServices from '../services/usuario.services';
	import Login from '~/models/Login';
	import { loginStore } from '~/stores/login-store'; // Asegúrate de importar el store

	export default {
		setup() {
			const storeLogin = loginStore();
			const { login, usuario } = storeToRefs(storeLogin);
			const router = useRouter();

			const loginForm = ref(new Login());
			const usuarioForm = ref(usuario);

			const loginUsuario = async () => {
				await usuarioServices
					.loginUsuario(loginForm.value)
					.then((res) => {
						storeLogin.setUsuario(res.data);
						findUsuarioByIdSistema(res.data.usuario.username, 1);
					})
					.catch((err) => {
						console.log(err);
					});
			};

			const findUsuarioByIdSistema = async (usuario, idSistema) => {
				await usuarioServices
					.findUsuarioByIdSistema(usuario, idSistema)
					.then((res) => {
						storeLogin.setInfoUsuario(res.data.usuario);
						router.push('/home/VentasPage'); // Redirigir usando el enrutador de Nuxt
					})
					.catch((err) => {
						console.log(err);
					});
			};

			return {
				loginForm,
				usuarioForm,
				loginUsuario,
				title: 'Bienvenido al Sistema',
				email: '',
				username: '',
				password: '',
				repassword: '',
				register: false,
				passwordFieldType: 'password',
				btnLabel: 'Ingrese al Sistema',
				visibility: true,
				visibilityIcon: 'visibility',
				formRegistro: {},
				formLogin: {},
			};
		},
	};
</script>

<style scoped>
	.bg-auth {
		background-image: url('../../src/assets/bg-auth.jpeg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>

import { defineStore } from 'pinia';
import Login from '~/models/Login';
import UsuarioInfo from '~/models/UsuarioInfo';

export const loginStore = defineStore('loginStore', {
	state: () => ({
		login: { ...new Login() },
		usuario: {},
		infoUsuario: { ...new UsuarioInfo() },
	}),
	getters: {
		getCliente: (state) => state.login,
		getInfoUsuario: (state) => state.infoUsuario,
	},
	actions: {
		setUsuario(usuario) {
			this.usuario = usuario;
			sessionStorage.setItem('token', this.usuario.access_token);
			sessionStorage.setItem('usuario', JSON.stringify(this.usuario.usuario));
		},

		setInfoUsuario(infoUsuario) {
			this.infoUsuario = infoUsuario;
			sessionStorage.setItem('infoUsuario', JSON.stringify(this.infoUsuario));
		},
	},
});

import { http, httpLogin } from './api.services';

export async function loginUsuario(login) {
	return await httpLogin().post(`v1/usuario/login`, login);
}

export async function findUsuarioByIdSistema(usuario, idSistema) {
	return await http().get(
		`usuario/findUsuarioByIdSistema/${usuario}/${idSistema}`
	);
}

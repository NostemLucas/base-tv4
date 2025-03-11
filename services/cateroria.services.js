import { http } from './api.services';

export async function save(categoria) {
	return await http().post(`categorias/saveCategoria`, categoria);
}

export async function findAllCategoriasByEntidad(idEntidad) {
	return await http().get(`categorias/findAllByEntidad/${idEntidad}`);
}

import { http } from './api.services';

export async function findAll(idEntidad) {
	return await http().get(`productos/findByAllEntidad/${idEntidad}`);
}
export async function findByUpdate(idProducto) {
	return await http().get(`productos/findByUpdate/${idProducto}`);
}
export async function save(producto) {
	return await http().post(`productos/save/`, producto);
}

export async function update(producto) {
	return await http().post(`productos/update`, producto);
}
export async function findEntidadById(producto) {
	return await http().post(`productos/update`, producto);
}
export async function changeEstado(estado, id) {
	return await http().get(`productos/changeEstado/${estado}/${id}`);
}

export async function homologarProducto(producto) {
	return await http().post(`productos/homologarProducto`, producto);
}

export async function getSecuencialProducto(idEntidad, claveTipoProducto) {
	return await http().get(
		`productos/getSecuencialProducto/${idEntidad}/${claveTipoProducto}`
	);
}

export async function findInventarioByIdEntidadAndIdProducto(
	idEntidad,
	idProducto
) {
	if (idProducto != null) {
		return await http().get(
			`productos/findInventarioByIdEntidadAndIdProducto/${idEntidad}/${idProducto}`
		);
	} else {
		return await http().get(
			`productos/findInventarioByIdEntidadAndIdProducto/${idEntidad}`
		);
	}
}

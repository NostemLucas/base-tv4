import { http } from '../services/api.services';

export async function findAll(tipoCliente, fidEntidad) {
	return await http().get(`cliente/findAll/${tipoCliente}/${fidEntidad}`);
}
export async function findAllEntidades() {
	return await http().get(`cliente/findAllEntidades`);
}

export async function findEntidadById(fidEntidad) {
	return await http().get(`cliente/findEntidadById/${fidEntidad}`);
}
export async function save(cliente) {
	return await http().post(`cliente/save`, cliente);
}

export async function saveEntidad(cliente) {
	return await http().post(`cliente/saveEntidad`, cliente);
}

export async function update(cliente) {
	return await http().post(`cliente/update`, cliente);
}

export async function updateEntidad(cliente) {
	return await http().post(`cliente/updateEntidad`, cliente);
}

export async function changeEstado(estado, id) {
	return await http().put(`cliente/chageEstado/${estado}/${id}`);
}

export async function findAllSucursales(id) {
	return await http().get(`cliente/findAllSucursales/${id}`);
}

export async function findByNit(nroDocumento, complemento) {
	if (complemento == null) {
		complemento = 'NULL';
	}
	if (complemento == '') {
		complemento = 'NULL';
	}
	return await http().get(`cliente/findByNit/${nroDocumento}/${complemento}`);
}
export async function findActividadEconomica(identificacionTributaria) {
	return await http().get(
		`cliente/findActividadEconomica/${identificacionTributaria}`
	);
}
export async function findProductosActividadEconomica(
	identificacionTributaria,
	codigoCAEB
) {
	return await http().get(
		`cliente/findProductosActividadEconomica/${identificacionTributaria}/${codigoCAEB}`
	);
}
export async function findUnidadMedida(grupo, identificacionTributaria) {
	return await http().get(
		`facturacion/sincronizacion/findParametricasByGrupoAndIdentificacionTributaria/${grupo}/${identificacionTributaria}`
	);
}
export async function findAllClientes(idEntidad) {
	return await http().get(`cliente/findAllClientes/${idEntidad}`);
}

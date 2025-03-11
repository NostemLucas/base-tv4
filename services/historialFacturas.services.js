import { http } from './api.services';

export async function findAllFacturasByIdEntidad(solicitudBusqueda) {
	return await http().post(
		`factura/findAllFacturasByIdEntidad`,
		solicitudBusqueda
	);
}

export async function anulacionFacturaByIdFactura(
	idFacturaCabecera,
	idMotivoAnulacion
) {
	return await http().get(
		`factura/anulacionFacturaByIdFactura/${idFacturaCabecera}/${idMotivoAnulacion}`
	);
}
export async function reversionAnulacionFacturaByIdFactura(idFacturaCabecera) {
	return await http().get(
		`factura/reversionAnulacionFacturaByIdFactura/${idFacturaCabecera}`
	);
}
export async function imprimirFacturaPDF(idVentas) {
	return await http().get(`factura/imprimirFacturaPDF/${idVentas}`);
}

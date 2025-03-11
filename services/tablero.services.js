import { http } from './api.services';

export async function tableroVentasSucursal(idEntidadMatriz) {
	return await http().get(`tablero/tableroVentasSucursal/${idEntidadMatriz}`);
}

export async function tableroProductosSucursal(idEntidadMatriz) {
	return await http().get(
		`tablero/tableroProductosSucursal/${idEntidadMatriz}`
	);
}
export async function tableroTipoVentaSucursal(idEntidadMatriz) {
	return await http().get(
		`tablero/tableroTipoVentaSucursal/${idEntidadMatriz}`
	);
}
export async function tableroMetodoPagoSucursal(idEntidadMatriz) {
	return await http().get(
		`tablero/tableroMetodoPagoSucursal/${idEntidadMatriz}`
	);
}
export async function tableroUsuarioSucursal(idEntidadMatriz) {
	return await http().get(`tablero/tableroUsuarioSucursal/${idEntidadMatriz}`);
}

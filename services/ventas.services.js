import { http } from './api.services';

export async function findAllVentasEntidad(formBusqueda) {
	return await http().post(`ventas/findAllVentasEntidad`, formBusqueda);
}

export async function procesarVentas(ventaProcesar) {
	return await http().post(`ventas/procesarVentas`, ventaProcesar);
}
export async function generarFacturaPDF(fidVentas) {
	return await http().get(`factura/generarFacturaPDF/${fidVentas}`);
}
export async function generarComprobantePDF(fidVentas) {
	return await http().get(`factura/generarComprobantePDF/${fidVentas}`);
}
export async function generarCotizacionPDF(fidVentas) {
	return await http().get(`factura/generarCotizacionPDF/${fidVentas}`);
}
export async function procesarVentasFacturacion(fidVentas) {
	return await http().get(`ventas/procesarVentasFacturacion/${fidVentas}`);
}

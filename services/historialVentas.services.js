import { http } from "./api.services";

export async function findAllVentasHistoricas(formBusqueda) {
  return await http().post(`ventas/findAllVentasHistoricas`,formBusqueda);
}



export async function imprimirFacturaPDF(idVentas) {
  return await http().get(`factura/imprimirFacturaPDF/${idVentas}`);
}
export async function generarComprobantePDF(fidVentas) {
  return await http().get(`factura/generarComprobantePDF/${fidVentas}`);
}

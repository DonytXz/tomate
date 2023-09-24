import { menuItem } from "@/types/DashboardTypes";

export const menuItems: Array<menuItem> = [
  { src: "dashboard.svg", txt: "Dashboard", subMenu: false },
  { src: "catalogo.svg", txt: "Cátalogo", subMenu: true },
  { src: "ventas.svg", txt: "Ventas", subMenu: true },
  { src: "tiposVentas.svg", txt: "Tipos de Venta", subMenu: false },
  { src: "promociones.svg", txt: "Promociones", subMenu: true },
  { src: "caja.svg", txt: "Caja", subMenu: true },
  { src: "reservaciones.svg", txt: "Reservaciones", subMenu: false },
  { src: "tableros.svg", txt: "Tableros", subMenu: true },
  { src: "usuarios.svg", txt: "Usuarios", subMenu: true },
  { src: "mesas.svg", txt: "Mesas", subMenu: true },
  { src: "reportes.svg", txt: "Reportes", subMenu: true },
];

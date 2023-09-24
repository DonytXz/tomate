import { menuItem } from "@/types/DashboardTypes";

export const menuItems: Array<menuItem> = [
  { src: "/", srcImg: "/dashboard.svg", txt: "Dashboard", subMenu: false },
  { src: "/catalog", srcImg: "/catalogo.svg", txt: "Cátalogo", subMenu: true },
  { src: "/sales", srcImg: "/ventas.svg", txt: "Ventas", subMenu: true },
  {
    src: "/sales/types",
    srcImg: "/tiposVentas.svg",
    txt: "Tipos de Venta",
    subMenu: false,
  },
  {
    src: "/promotions",
    srcImg: "/promociones.svg",
    txt: "Promociones",
    subMenu: true,
  },
  { src: "/cashRegister", srcImg: "/caja.svg", txt: "Caja", subMenu: true },
  {
    src: "/reservations",
    srcImg: "/reservaciones.svg",
    txt: "Reservaciones",
    subMenu: false,
  },
  { src: "/boards", srcImg: "/tableros.svg", txt: "Tableros", subMenu: true },
  { src: "/users", srcImg: "/usuarios.svg", txt: "Usuarios", subMenu: true },
  { src: "/tables", srcImg: "/mesas.svg", txt: "Mesas", subMenu: true },
  { src: "/reports", srcImg: "/reportes.svg", txt: "Reportes", subMenu: true },
];

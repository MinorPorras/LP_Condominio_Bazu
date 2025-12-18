type hexColor = `#${string}`;

//IconHome
export interface IconProps {
  width?: number;
  height?: number;
  color?: hexColor;
  className?: string;
}

export type TABS_TYPE =
  | "Inicio"
  | "Galería"
  | "Sobre nosostros"
  | "Servicios"
  | "Contacto"
  | "¿Donde encontrarnos?";

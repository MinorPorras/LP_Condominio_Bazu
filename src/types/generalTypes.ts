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
  | "Apartamentos"
  | "Servicios"
  | "Contacto"
  | "¿Donde encontrarnos?"
  | "Preguntas frecuentes";

export type ANCHOR_IDS =
  | "home-section"
  | "gallery-section"
  | "services-section"
  | "apartment-section"
  | "about-us-section"
  | "contact-section"
  | "location-section"
  | "faq-section";

export interface carouseItem {
  src: string;
  alt: string;
  description: string;
}

export interface mainNavbarItem {
  text: string;
  anchor: ANCHOR_IDS;
  selectedItem: string;
  handleItemClick: (item: string) => void;
  isCollapsed: boolean;
  IconComponent: React.ElementType;
}

export interface TABS_ICONS_TYPE {
  key: TABS_TYPE;
  value: React.ElementType;
  anchor: ANCHOR_IDS;
}

export type MAIN_NAVBAR_HOOKS_PROPS = {
  selectedNavBarItem: string;
  handleNavbarItemClick: (item: string) => void;
};

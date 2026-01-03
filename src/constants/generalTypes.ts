import type React from "react";

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
  | "Apartamentos"
  | "Servicios"
  | "Contacto"
  | "¿Donde encontrarnos?"
  | "Preguntas frecuentes"
  | "Home"
  | "Gallery"
  | "Apartments"
  | "Services"
  | "Contact"
  | "Where to find us?"
  | "FAQ";

export type ANCHOR_IDS =
  | "inicio"
  | "galeria"
  | "servicios"
  | "apartamentos"
  | "contactos"
  | "ubicacion"
  | "faq";

export interface carouseItem {
  src: string;
  alt: Record<SUPPORTED_LANGS_ABR, string>;
}

export interface mainNavbarItem {
  text: string;
  anchor: ANCHOR_IDS;
  selectedItem: string;
  handleItemClick: (item: string) => void;
  isCollapsed: boolean;
  IconComponent: React.ElementType;
}

export type TABS_KEY_TYPE = Record<SUPPORTED_LANGS_ABR, TABS_TYPE>;

export interface TABS_ICONS_TYPE {
  key: TABS_KEY_TYPE;
  iconComponent: React.ElementType;
  anchor: ANCHOR_IDS;
}

export type MAIN_NAVBAR_HOOKS_PROPS = {
  selectedNavBarItem: string;
  handleNavbarItemClick: (item: string) => void;
};

export type NUMBER_COUNTRY_CODE = `+${number}`;

export type CR_PHONE_NUMBER = `${string}-${string}`;

export type SUPPORTED_LANGS_ABR = "es" | "en";

export type SUPPORTED_LANGS_CPL = "Español" | "English";
export interface LanguageContextType {
  language: SUPPORTED_LANGS_ABR;
  setLanguage: (lang: SUPPORTED_LANGS_ABR) => void;
  getLanguageCPL: () => SUPPORTED_LANGS_CPL;
}

export interface LANGUAGE_SELECTOR_PROPS {
  isCollapsed: boolean;
  isSpanish: boolean;
  handleToggleLanguage: () => void;
  className: string;
}

export interface ServiceItemProps {
  name: Record<SUPPORTED_LANGS_ABR, string>;
  IconComponent: React.ElementType;
  isLeftAligned: boolean;
  imgSrc?: string;
  imgAlt?: Record<SUPPORTED_LANGS_ABR, string>;
}

export interface ServiceCardItemProps {
  name: string;
  IconComponent: React.ElementType;
  isLeftAligned: boolean;
  imgSrc?: string;
  imgAlt?: string;
}

export interface FAQItemProps {
  question: Record<SUPPORTED_LANGS_ABR, string>;
  answer: Record<SUPPORTED_LANGS_ABR, string>;
  eventKey: string;
}
export interface AccordionFAQItemProps {
  question: string;
  answer: string;
  eventKey: string;
}

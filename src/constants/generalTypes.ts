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
  | "home-section"
  | "gallery-section-title"
  | "services-section-title"
  | "apartment-section-title"
  | "contact-section-title"
  | "location-section-title"
  | "faq-section-title";

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

export const SUPPORTED_LANGS: Record<SUPPORTED_LANGS_ABR, SUPPORTED_LANGS_CPL> =
  {
    es: "Español",
    en: "English",
  };

export interface LanguageContextType {
  language: SUPPORTED_LANGS_ABR;
  setLanguage: (lang: SUPPORTED_LANGS_ABR) => void;
  getLanguageCPL: () => SUPPORTED_LANGS_CPL;
}

export interface LANGUAGE_SELECTOR_PROPS{
  isCollapsed: boolean,
  isSpanish: boolean
  handleToggleLanguage: () => void
}

export interface ServiceItemProps {
  name: string;
  IconComponent: React.ElementType;
  isLeftAligned: boolean;
  imgSrc?: string;
  imgAlt?: string;
}

export interface AccordionFAQItemProps {
  question: string;
  answer: string;
  eventKey: string;
}

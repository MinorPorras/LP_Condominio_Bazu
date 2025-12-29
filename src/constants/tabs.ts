//Types
import type {TABS_ICONS_TYPE, TABS_KEY_TYPE } from "./generalTypes";

//Icons
import { IconCamera } from "../components/icons/menu/iconCamera";
import { IconHome } from "../components/icons/menu/iconHome";
import { IconLocation } from "../components/icons/general/iconLocation";
import { IconMedalStar } from "../components/icons/menu/iconMedalStar";
import { IconPhone } from "../components/icons/general/iconPhone";
import { IconFaq } from "../components/icons/menu/iconFaq";
import { IconApartment } from "../components/icons/menu/iconApartment";

export const TABS: TABS_KEY_TYPE[]= [
  {
    es: "Inicio",
    en: "Home",
  },
  {
    es: "Galería",
    en: "Gallery",
  },
  {
    es: "Servicios",
    en: "Services",
  },
  {
    es: "Apartamentos",
    en: "Apartments",
  },
  {
    es: "Contacto",
    en: "Contact",
  },
  {
    es: "¿Donde encontrarnos?",
    en: "Where to find us?",
  },
  {
    es: "Preguntas frecuentes",
    en: "FAQ",
  },
]

export const TAB_INFO: TABS_ICONS_TYPE[] = [
  {
    key: TABS[0],
    iconComponent: IconHome,
    anchor: "home-section",
  },
  {
    key: TABS[1],
    iconComponent: IconCamera,
    anchor: "gallery-section-title",
  },
  {
    key:TABS[2],
    iconComponent: IconMedalStar,
    anchor: "services-section-title",
  },
  {
    key: TABS[3],
    iconComponent: IconApartment,
    anchor: "apartment-section-title",
  },
  {
    key: TABS[4],
    iconComponent: IconPhone,
    anchor: "contact-section-title",
  },
  {
    key: TABS[5],
    iconComponent: IconLocation,
    anchor: "location-section-title",
  },
  {
    key: TABS[6],
    iconComponent: IconFaq,
    anchor: "faq-section-title",
  },
];

export default {
  TABS,
  TAB_INFO,
};

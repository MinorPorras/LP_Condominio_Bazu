//Types
import type { TABS_ICONS_TYPE, TABS_KEY_TYPE } from "./generalTypes";

//Icons
import { IconCamera } from "../components/icons/menu/iconCamera";
import { IconHome } from "../components/icons/menu/iconHome";
import { IconLocation } from "../components/icons/general/iconLocation";
import { IconMedalStar } from "../components/icons/menu/iconMedalStar";
import { IconPhone } from "../components/icons/general/iconPhone";
import { IconFaq } from "../components/icons/menu/iconFaq";
import { IconApartment } from "../components/icons/menu/iconApartment";

export const TABS: TABS_KEY_TYPE[] = [
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
];

export const TAB_INFO: TABS_ICONS_TYPE[] = [
  {
    key: TABS[0],
    iconComponent: IconHome,
    anchor: "inicio",
  },
  {
    key: TABS[1],
    iconComponent: IconCamera,
    anchor: "galeria",
  },
  {
    key: TABS[2],
    iconComponent: IconMedalStar,
    anchor: "servicios",
  },
  {
    key: TABS[3],
    iconComponent: IconApartment,
    anchor: "apartamentos",
  },
  {
    key: TABS[4],
    iconComponent: IconPhone,
    anchor: "contactos",
  },
  {
    key: TABS[5],
    iconComponent: IconLocation,
    anchor: "ubicacion",
  },
  {
    key: TABS[6],
    iconComponent: IconFaq,
    anchor: "faq",
  },
];

export default {
  TABS,
  TAB_INFO,
};

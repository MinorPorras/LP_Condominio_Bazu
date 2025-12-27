//Types
import type { TABS_ICONS_TYPE, TABS_TYPE } from "./generalTypes";

//Icons
import { IconCamera } from "../components/icons/menu/iconCamera";
import { IconHome } from "../components/icons/menu/iconHome";
import { IconLocation } from "../components/icons/general/iconLocation";
import { IconMedalStar } from "../components/icons/menu/iconMedalStar";
import { IconPhone } from "../components/icons/general/iconPhone";
import { IconFaq } from "../components/icons/menu/iconFaq";
import { IconApartment } from "../components/icons/menu/iconApartment";

export const TABS: TABS_TYPE[] = [
  "Inicio",
  "Galería",
  "Servicios",
  "Apartamentos",
  "Contacto",
  "¿Donde encontrarnos?",
  "Preguntas frecuentes",
];

export const TAB_ICONS: TABS_ICONS_TYPE[] = [
  {
    key: "Inicio",
    value: IconHome,
    anchor: "home-section",
  },
  {
    key: "Galería",
    value: IconCamera,
    anchor: "gallery-section-title",
  },
  {
    key: "Servicios",
    value: IconMedalStar,
    anchor: "services-section-title",
  },
  {
    key: "Apartamentos",
    value: IconApartment,
    anchor: "apartment-section-title",
  },
  {
    key: "Contacto",
    value: IconPhone,
    anchor: "contact-section-title",
  },
  {
    key: "¿Donde encontrarnos?",
    value: IconLocation,
    anchor: "location-section-title",
  },
  {
    key: "Preguntas frecuentes",
    value: IconFaq,
    anchor: "faq-section-title",
  },
];

export default {
  TABS,
  TAB_ICONS
};

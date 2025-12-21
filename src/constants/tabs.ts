//Types
import type { TABS_ICONS_TYPE, TABS_TYPE } from "./generalTypes";

//Icons
import { IconCamera } from "../components/icons/menu/iconCamera";
import { IconHome } from "../components/icons/menu/iconHome";
import { IconLocation } from "../components/icons/general/iconLocation";
import { IconMedalStar } from "../components/icons/menu/iconMedalStar";
import { IconPeople } from "../components/icons/general/iconPeople";
import { IconPhone } from "../components/icons/general/iconPhone";
import { IconFaq } from "../components/icons/menu/iconFaq";
import { IconApartment } from "../components/icons/menu/iconApartment";

export const TABS: TABS_TYPE[] = [
  "Inicio",
  "Galería",
  "Servicios",
  "Apartamentos",
  "Sobre nosostros",
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
    anchor: "gallery-section",
  },
  {
    key: "Servicios",
    value: IconMedalStar,
    anchor: "services-section",
  },
  {
    key: "Apartamentos",
    value: IconApartment,
    anchor: "apartment-section",
  },
  {
    key: "Sobre nosostros",
    value: IconPeople,
    anchor: "about-us-section",
  },
  {
    key: "Contacto",
    value: IconPhone,
    anchor: "contact-section",
  },
  {
    key: "¿Donde encontrarnos?",
    value: IconLocation,
    anchor: "location-section",
  },
  {
    key: "Preguntas frecuentes",
    value: IconFaq,
    anchor: "faq-section",
  },
];

export default {
  TABS,
  TAB_ICONS
};

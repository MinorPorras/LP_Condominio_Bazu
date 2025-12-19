import { IconCamera } from "./components/icons/menu/iconCamera";
import { IconHome } from "./components/icons/menu/iconHome";
import { IconLocation } from "./components/icons/general/iconLocation";
import IconMedalStar from "./components/icons/menu/iconMedalStar";
import { IconPeople } from "./components/icons/general/iconPeople";
import { IconPhone } from "./components/icons/general/iconPhone";
import type { TABS_TYPE } from "./types/generalTypes";
import img_cocina from "./assets/img/img_cocina.jpg";
import img_sala from "./assets/img/img_sala_entrada_01.jpg";
import img_sala_02 from "./assets/img/img_sala_entrada_02.jpg";
import img_habitacion from "./assets/img/img_habitacion_01.jpg";
import img_havitacion_02 from "./assets/img/img_habitacion_02.jpg";
import type { carouseItem, TABS_ICONS_TYPE } from "./types/generalTypes";
import IconFaq from "./components/icons/menu/iconFaq";

export const TABS: TABS_TYPE[] = [
  "Inicio",
  "Galería",
  "Servicios",
  "Sobre nosostros",
  "Contacto",
  "¿Donde encontrarnos?",
  "Preguntas frecuentes"
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
  }
];

export const carouselItems: carouseItem[] = [
  {
    src: img_cocina,
    alt: "Cocina",
    title: "Cocina",
    description: "Descripción de la cocina.",
  },
  {
    src: img_sala,
    alt: "Sala de entrada 01",
    title: "Sala de entrada 01",
    description: "Descripción de la sala de entrada 01.",
  },
  {
    src: img_sala_02,
    alt: "Sala de entrada 02",
    title: "Sala de entrada 02",
    description: "Descripción de la sala de entrada 02.",
  },
  {
    src: img_habitacion,
    alt: "Habitación 01",
    title: "Habitación 01",
    description: "Descripción de la habitación 01.",
  },
  {
    src: img_havitacion_02,
    alt: "Habitación 02",
    title: "Habitación 02",
    description: "Descripción de la habitación 02.",
  },
];

export default {
  TABS,
  TAB_ICONS,
  carouselItems,
};

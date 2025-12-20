//Types
import type { TABS_TYPE } from "./types/generalTypes";
import type { carouseItem, TABS_ICONS_TYPE } from "./types/generalTypes";

//Icons
import { IconCamera } from "./components/icons/menu/iconCamera";
import { IconHome } from "./components/icons/menu/iconHome";
import { IconLocation } from "./components/icons/general/iconLocation";
import { IconMedalStar } from "./components/icons/menu/iconMedalStar";
import { IconPeople } from "./components/icons/general/iconPeople";
import { IconPhone } from "./components/icons/general/iconPhone";
import { IconFaq } from "./components/icons/menu/iconFaq";
import { IconApartment } from "./components/icons/menu/iconApartment";

//Image apartment carousel
import img_cocina from "./assets/img_cocina.webp";
import img_sala from "./assets/img_sala_entrada_01.webp";
import img_sala_02 from "./assets/img_sala_entrada_02.webp";
import img_habitacion from "./assets/img_habitacion_01.webp";
import img_havitacion_02 from "./assets/img_habitacion_02.webp";

//Image main carousel
import img_entrada_01 from "./assets/img_entrada_01.webp";
import img_fachada_condominio from "./assets/img_fachada_condominio.webp";
import img_parqueo_01 from "./assets/img_parqueo_01.webp";
import img_parqueo_02 from "./assets/img_parqueo_02.webp";
import img_pasillo_condominio_01 from "./assets/img_pasillo_condominio_01.webp";
import img_pasillo_condominio_02 from "./assets/img_pasillo_condominio_02.webp";
import img_playground from "./assets/img_playground.webp";
import img_vista_general_superior from "./assets/img_vista_general_superior.webp";

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

export const mainCarouselItems: carouseItem[] = [
  {
    src: img_entrada_01,
    alt: "Entrada",
    description: "Descripción de la entrada.",
  },
  {
    src: img_fachada_condominio,
    alt: "Fachada",
    description: "Descripción de la fachada.",
  },
  {
    src: img_parqueo_01,
    alt: "Parqueo",
    description: "Descripción del parqueo.",
  },
  {
    src: img_parqueo_02,
    alt: "Parqueo",
    description: "Descripción del parqueo.",
  },
  {
    src: img_pasillo_condominio_01,
    alt: "Pasillo",
    description: "Descripción del pasillo.",
  },
  {
    src: img_pasillo_condominio_02,
    alt: "Pasillo 2",
    description: "Descripción del pasillo 2.",
  },
  {
    src: img_playground,
    alt: "Playground",
    description: "Descripción del playground.",
  },
  {
    src: img_vista_general_superior,
    alt: "Vista general",
    description: "Descripción de la vista general.",
  },
];

export const apartmentCarouselItems: carouseItem[] = [
  {
    src: img_cocina,
    alt: "Cocina",
    description: "Descripción de la cocina.",
  },
  {
    src: img_sala,
    alt: "Sala de entrada 01",
    description: "Descripción de la sala de entrada 01.",
  },
  {
    src: img_sala_02,
    alt: "Sala de entrada 02",
    description: "Descripción de la sala de entrada 02.",
  },
  {
    src: img_habitacion,
    alt: "Habitación 01",
    description: "Descripción de la habitación 01.",
  },
  {
    src: img_havitacion_02,
    alt: "Habitación 02",
    description: "Descripción de la habitación 02.",
  },
];

export default {
  TABS,
  TAB_ICONS,
  mainCarouselItems,
  apartmentCarouselItems,
};

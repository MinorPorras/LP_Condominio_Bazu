//Types
import type { ServiceItemProps } from "./generalTypes";

//Icons
import { IconCarDriving } from "../components/icons/general/iconCarDriving";
import { IconHappyEmoji } from "../components/icons/general/iconHappyEmoji";
import { iconWIFI } from "../components/icons/general/iconWIFI";

//Images
import img_parqueo_01 from "../assets/img_parqueo_01.webp";
import img_playgorund from "../assets/img_playground.webp";

export const SERVICE_ITEMS: ServiceItemProps[] = [
  {
    name: {
      es: "Parqueo exclusivo para residentes",
      en: "Exclusive parking for residents",
    },
    IconComponent: IconCarDriving,
    isLeftAligned: true,
    imgSrc: img_parqueo_01,
    imgAlt: {
      es: "Imagen del parqueo vacío para demostrar el espacio que existe para parquear un vehículo",
      en: "Image of the parking lot that shows the space available for a vehicle to park",
    },
  },
  {
    name: {
      es: "Zona de juegos para niños y niñas",
      en: "Playground for children",
    },
    IconComponent: IconHappyEmoji,
    isLeftAligned: false,
    imgSrc: img_playgorund,
    imgAlt: {
      es: "Imagen de la zona de juegos para menores de edad en la que se pueden ver los toboganes, hamacas y demás juegos para niños y niñas.",
      en: "Image of the playground for children and young people, where swings, swings and other games for children and young people can be seen.",
    },
  },
  {
    name: {
      es: "Servicio WI-FI incluido",
      en: "WI-FI service included",
    },
    IconComponent: iconWIFI,
    isLeftAligned: true,
  },
];

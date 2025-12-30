//Types
import type { ServiceItemProps } from "./generalTypes";

//Icons
import { IconCarDriving } from "../components/icons/general/iconCarDriving";
import { IconHappyEmoji } from "../components/icons/general/iconHappyEmoji";
import { iconWIFI } from "../components/icons/general/iconWIFI";

//Images
import  img_parqueo_01  from "../assets/img_parqueo_01.webp"
import img_playgorund from "../assets/img_playground.webp"

export const servicesItems: ServiceItemProps[] = [
  {
    name: "Parqueo exclusivo para residentes",
    IconComponent: IconCarDriving,
    isLeftAligned: true,
    imgSrc: img_parqueo_01,
    imgAlt: "Imagen del parqueo vacío para demostrar el espacio que existe para parquear un vehículo",
  },
  {
    name: "Zonas de juegos para niños y niñas",
    IconComponent: IconHappyEmoji,
    isLeftAligned: false,
    imgSrc: img_playgorund,
    imgAlt: "Imagen de la zona de juegos para menores de edad en la que se pueden ver los toboganes, hamacas y demás juegos para niños y niñas"
  },
  {
    name: "Servicio WI-FI incluido",
    IconComponent: iconWIFI,
    isLeftAligned: true,
  }
];

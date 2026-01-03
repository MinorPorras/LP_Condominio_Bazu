//Image apartment carousel
import img_cocina from "../assets/img_cocina.webp";
import img_sala from "../assets/img_sala_entrada_01.webp";
import img_sala_02 from "../assets/img_sala_entrada_02.webp";
import img_habitacion from "../assets/img_habitacion_01.webp";
import img_havitacion_02 from "../assets/img_habitacion_02.webp";

//Image main carousel
import img_entrada_01 from "../assets/img_entrada_01.webp";
import img_fachada_condominio from "../assets/img_fachada_condominio.webp";
import img_parqueo_01 from "../assets/img_parqueo_01.webp";
import img_parqueo_02 from "../assets/img_parqueo_02.webp";
import img_pasillo_condominio_01 from "../assets/img_pasillo_condominio_01.webp";
import img_pasillo_condominio_02 from "../assets/img_pasillo_condominio_02.webp";
import img_playground from "../assets/img_playground.webp";
import img_vista_general_superior from "../assets/img_vista_general_superior.webp";

import type { carouseItem } from "./generalTypes";

export const mainCarouselItems: carouseItem[] = [
  {
    src: img_entrada_01,
    alt: {
      es: "Imagen de la entrada del condominio Bazú vista desde el parqueo, mostrando las escaleras al segundo piso, algunas de las plantas que adornan la entrada y la zona de ingreso a los apartamentos.",
      en: "Image of the entry of Condominio Bazú that shows the escalators to the second floor, some of the plants that adorn the entry and the entrance to the apartments.",
    },
  },
  {
    src: img_fachada_condominio,
    alt: {
      es: "Imagen que muestra los apartamentos desde afuera, mostrando el parqueo, el cartel con  el nombre del condominio y la fachada de este.",
      en: "Image that shows the apartments from outside, showing the parking, the name of the condominium and the facade of it.",
    },
  },
  {
    src: img_parqueo_01,
    alt: {
      es: "Imagen del parqueo vacío para demostrar el espacio que existe para parquear un vehículo dentro de las instalaciones del condominio.",
      en: "Image of the parking lot that shows the space available for a vehicle to park inside the condominium facilities.",
    },
  },
  {
    src: img_parqueo_02,
    alt: {
      es: "Segunda imagen que muestra el parqueo desde una perspectiva distinta, mostrando el espacio disponible para parquear un vehículo.",
      en: "Second image that shows the parking lot from a different perspective, showing the space available for a vehicle to park.",
    },
  },
  {
    src: img_pasillo_condominio_01,
    alt: {
      es: "Imagen que muestra los pasillos para acceder a los apartamentos del primer piso, así como la entrada al condominio y la zona de juegos para niños y niñas.",
      en: "Image that shows the hallway that allows the entry of the apartments in the first floor, the entry to the condominium and the playground for the children.",
    },
  },
  {
    src: img_pasillo_condominio_02,
    alt: {
      es: "Segunda imagen del pasillo que muestrauna de las zonas comunes del condominio y varias plantas en el centro que adornan el camino.",
      en: "Second image of the hallway that shows one of the common areas of the condominium and several plants in the center that adorn the path.",
    },
  },
  {
    src: img_playground,
    alt: {
      es: "Imagen que muestra la zona de juegos para niños y niñas, en esta se ve el tobogan, el pasamanos, un par de hamacas y una zona de pasto zintético para que los niños puedan jugar.",
      en: "Image that shows the playground for the children, in this photo, the slide, a pair of swings, and a zone with synthetic grass are shown.",
    },
  },
  {
    src: img_vista_general_superior,
    alt: {
      es: "Imagen que muestra una vista de los apartamentos desde la parte superior de las escaleras, mostrando la entrada al parqueo y las plantas que decoran la entrada.",
      en: "Image that shwos a view of the apartments from the top of the stairs, showing the entrance to the parking lot and showing the plants the decor the entrace.",
    },
  },
];

export const apartmentCarouselItems: carouseItem[] = [
  {
    src: img_cocina,
    alt: {
      es: "Imagen de la cocina de uno de los apartamentos, mostrando el fregadero para lavar los platos, entanterías par guardar alimentos, espacio para una refrigeradora y cocina y un desayunador alto en el que comer",
      en: "Image of the kitchen of one of the apartments, thios one shows the sink for whashing the dishes, shelvs for storing food, some space for a refrigerator y and a stove and a breakfast nook",
    },
  },
  {
    src: img_sala,
    alt: {
      es: "Imagen que muestra la sala de entrada completa de uno de los apartamentos, mostrando las multiples ventanas con las que cuenta y el ingreso a los pasillos para llegar al cuarto de baño y a las habitaciones",
      en: "Image that shows completely the entrace room of one of the apartments, showing the multiple windows it has and the entrace to the hallway that gives access to the bathroom and the rooms",
    },
  },
  {
    src: img_sala_02,
    alt: {
      es: "Imagen que muestra otra perspectiva de la sala de entrada, se muestra la puerta de entrada al apartamento así como la cocina y el acceso al cuarto de pilas",
      en: "Image that shows another perspective of the entrace room, showing the door to enter the apartment, as well as the kitchen and the access to the cleaning room",
    },
  },
  {
    src: img_habitacion,
    alt: {
      es: "Imagen que muestra una de las 2 habitaciones de uno de los apartamentos, mostrando varias estánterías, un armario, espacio para una cama y una puerta que lleva a una sala de almacen",
      en: "Image that shows one of the two rooms of one of the apartments, showing its various shelves, a cupboard, space for one bed and door that goes to a storage room",
    },
  },
  {
    src: img_havitacion_02,
    alt: {
      es: "Imagen que muestra la segunda habitación de una de los apartamentos, mostrando un armario, espacio para una cama y una ventana que da al cuarto de pilas",
      en: "Image that shows the second room of one of the apartments, showing a cupboard, space for one bed and a window that gets to the cleaning room",
    },
  },
];

export default {
  mainCarouselItems,
  apartmentCarouselItems,
};

import { IconCamera } from "./components/icons/menu/iconCamera";
import { IconHome } from "./components/icons/menu/iconHome";
import { IconLocation } from "./components/icons/general/iconLocation";
import IconMedalStar from "./components/icons/menu/iconMedalStar";
import { IconPeople } from "./components/icons/general/iconPeople";
import { IconPhone } from "./components/icons/general/iconPhone";
import type { TABS_TYPE } from "./types/iconTypes";


export const TABS: TABS_TYPE[] = ["Inicio", "Galería", "Sobre nosostros", "Servicios", "Contacto", "¿Donde encontrarnos?"];

export const TAB_ICONS: Record<TABS_TYPE, React.ElementType> = {
    Inicio: IconHome,
    Galería: IconCamera,
    "Sobre nosostros": IconPeople,
    Servicios: IconMedalStar,
    Contacto: IconPhone,
    "¿Donde encontrarnos?": IconLocation
}

export default TABS;



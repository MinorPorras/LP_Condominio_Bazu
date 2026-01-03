import logoNegro from "../../assets/img_logo_condo_bazu_negro.webp";
import fondoInicio from "../../assets/img_vista_general.webp";
import { useLanguage } from "../../hooks/useLanguage";

export function Inicio() {
  const { language } = useLanguage();

  const text = {
    es:{
      titleText: "Alquiler de apartamentos en Bello Horizonte, Escazú.",
      backgroundImageAlt: "Imagen con vista general de la entrada del Condominio Bazú, mostrando los pasillos y escaleras para llegar a los apartamentos, zonas de recreación y demás.",
      logoAlt: "Logo de Condominio Bazú en color negro",
    },
    en:{
      titleText: "Apartment rental in Bello Horizonte, Escazú.",
      backgroundImageAlt: "Image with a general view of the entrance to Condominio Bazú, showing its corridors and escalators to reach apartments on the second floor, recreation zones and other amenities",
      logoAlt: "Logo of Condominio Bazú in black color",
    }
  }[language]
  return (
    <section id="inicio">
      <header className="img-logo-container">
        <img
          src={fondoInicio}
          alt={text.backgroundImageAlt}
          className="inicio-background-img"
          fetchPriority="high"
        />
        <img src={logoNegro} alt={text.logoAlt} className="img-logo" fetchPriority="high"/>
      </header>

      <h1>{text.titleText}</h1>
    </section>
  );
}

export default Inicio;

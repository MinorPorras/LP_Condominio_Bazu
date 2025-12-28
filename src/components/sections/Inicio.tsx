import logoNegro from "../../assets/img_logo_condo_bazu_negro.webp";
import fondoInicio from "../../assets/img_vista_general.webp";
import { useLanguage } from "../../hooks/useLanguage";

export function Inicio() {
  const { language } = useLanguage();

  const titleText =
    language === "es"
      ? "Alquiler de apartamentos en Bello Horizonte, Escazú."
      : "Apartment rental in Bello Horizonte, Escazú.";

      const backgroundImageAlt = language === "es" ?
      "Imagen con vista general de la entrada del Condominio Bazú, mostrando los pasillos y escaleras para llegar a los apartamentos, zonas de recreación y demás."
      : "Image with a general view of the entrance to Condominio Bazú, showing its corridors and escalators to reach apartments on the second floor, recreation zones and other amenities"

      const logoAlt = language === "es" ?
      "Logo de Condominio Bazú en color negro"
      : "Logo of Condominio Bazú in black color"


  return (
    <section id="home-section">
      <header className="img-logo-container">
        <img
          src={fondoInicio}
          alt={backgroundImageAlt}
          className="inicio-background-img"
        />
        <img
          src={logoNegro}
          alt={logoAlt}
          className="img-logo"
        />
      </header>

      <h1>{titleText}</h1>
    </section>
  );
}

export default Inicio;

import logoNegro from "../../assets/img_logo_condo_bazu_negro.webp";
import fondoInicio from "../../assets/img_vista_general.webp";

export function Inicio() {
  return (
    <section id="home-section">
      <header className="img-logo-container">
        <img
          src={fondoInicio}
          alt="Imagen con vista general de la entrada del Condominio Bazú, mostrando los pasillos y escaleras para llegar a los apartamentos, zonas de recreación y demás."
          className="inicio-background-img"
        />
        <img
          src={logoNegro}
          alt="Logo de Condominio Bazú en color negro"
          className="img-logo"
        />
      </header>

      <h1>Alquiler de apartamentos en Bello Horizonte, Escazú.</h1>
    </section>
  );
}

export default Inicio;

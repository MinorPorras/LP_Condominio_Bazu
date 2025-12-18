import logoNegro from "../../assets/darkIcons/img_logo_condo_bazu_negro.webp";

export function Inicio() {
  return (
    <section>
      <header className="img-logo-container">
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

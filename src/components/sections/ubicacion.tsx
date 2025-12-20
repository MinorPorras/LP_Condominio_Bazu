import IconWaze from "../icons/general/iconWaze";

export function Ubicacion() {
  return (
    <section id="location-section">
      <h2 className="title-center blaze-orange-background">Ubicación estratégica con acceso sencillo a San José y Escazú</h2>
      <p>
        Disfrute de la calma y tranquilidad en una zona con fácil acceso a muchas servicios
      </p>
      <div className="maps-iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31441.508086731956!2d-84.15833115577699!3d9.918252600139223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd83d863c907%3A0x3c0951ab599c8fa!2sCondominio%20Baz%C3%BA!5e0!3m2!1ses!2scr!4v1766201391997!5m2!1ses!2scr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ubicación de Condominio Bazú"
          referrerPolicy="no-referrer-when-downgrade"
          className="maps-iframe"
        ></iframe>
        <div className="maps-iframe-links-container">
          <h3>
            {" "}
            <IconWaze className="icon-sz-1" />
            Llega a nosotros con waze:
          </h3>
          <p>
            Puede encontrar nuestra dirección en el siguiente enlace: 
            <a
              className="general-link blaze-orange-text"
              href="https://maps.app.goo.gl/ugBuyBVgV7xCeb1PA"
            >
               ¡Encuentranos aquí!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;

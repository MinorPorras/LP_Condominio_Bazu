import IconWaze from "../icons/general/iconWaze";
import { WAZE_LOCATION_URL } from "../../constants/urlConstants";
import { useLanguage } from "../../hooks/useLanguage";
import { iframeMapUrl } from "../../constants/urlConstants";

export function Ubicacion() {
  const { language } = useLanguage();

  const text = {
    es: {
      title: "Ubicación estratégica con acceso sencillo a San José y Escazú",
      description:
        "Disfrute de la calma y tranquilidad en una zona con fácil acceso a muchas zonas concurridas",
      iframeTitle: "Ubicación de Condominio Bazú",
      wazeTitle: "Llega a nosotros con Waze",
      wazeDescription:
        "Puede encontrar nuestra dirección en el siguiente enlace:",
      wazeButton: "¡Encuentranos aquí!",
    },
    en: {
      title: "Location with easy access to San José and Escazú",
      description:
        "Enjoy peace and tranquility in a zone with easy access to many interconnected areas",
      iframeTitle: "Condominio Bazú Location",
      wazeTitle: "Get to us with Waze",
      wazeDescription: "You can find our address in the following link:",
      wazeButton: "¡Find us here!",
    },
  }[language];

  return (
    <>
      <h2
        className="title-center spanFull mauve-shadow-background"
        id="ubicacion"
      >
        {text.title}
      </h2>
      <section id="location-section">
        <p>{text.description}</p>
        <div className="maps-iframe-container">
          <iframe
            src={iframeMapUrl}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={text.iframeTitle}
            referrerPolicy="no-referrer-when-downgrade"
            className="maps-iframe"
          ></iframe>
          <div className="maps-iframe-links-container">
            <h3>
              <IconWaze className="icon-sz-1" />
              {text.wazeTitle}
            </h3>
            <p>{text.wazeDescription}</p>
            <br />
            <a className="button-main-style" href={WAZE_LOCATION_URL}>
              <span>{text.wazeButton}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ubicacion;

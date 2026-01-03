import { countryCode, phoneNumber } from "../../constants/generalConst";
import { whastappUrl } from "../../constants/urlConstants";
import { WhatsappContactSection } from "../WhatsappContactSection";
import { useLanguage } from "../../hooks/useLanguage";

export function Contacto() {
  const { language } = useLanguage();

  const text = {
    es: {
      title: "¡Consulte la disponibilidad y agende su visita!",
      description:
        "Llamanos o envíanos un mensaje por medio de whastapp en el siguiente número:",
      buttonText: "Iniciar chat",
    },
    en: {
      title: "¡Check availability and schedule your visit!",
      description: "Call us or send us a message throught whatsapp with the following number",
      buttonText: "Start chat",
    },
  }[language];

  const clickhandler = () => {
    window.open(whastappUrl, "_blank");
  };

  return (
    <>
      <header>
        <h2
          className="title blaze-orange-background"
          id="contact-section-title"
        >
          {text.title}
        </h2>
      </header>
      <section id="contact-section">
        <div className="contact-section-content">
          <p>{text.description}</p>

          <WhatsappContactSection
            countryCode={countryCode}
            phoneNumber={phoneNumber}
          />
        </div>

        <footer>
          <button className="button-64" role="button" onClick={clickhandler}>
            <span className="text">{text.buttonText}</span>
          </button>
        </footer>
      </section>
    </>
  );
}

export default Contacto;

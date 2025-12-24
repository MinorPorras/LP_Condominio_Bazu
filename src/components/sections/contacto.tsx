import type {
  CR_PHONE_NUMBER,
  NUMBER_COUNTRY_CODE,
} from "../../constants/generalTypes";
import { WhatsappContactSection } from "./WhatsappContactSection";

export function Contacto() {
  const countryCode: NUMBER_COUNTRY_CODE = "+506";
  const urlPhoneNumber = "83883316";
  const phoneNumber: CR_PHONE_NUMBER = "8388-3316";
  const message =
    "Hola! Me interesa conocer más información sobre Condominio Bazú";
  const whastappUrl = `https://api.whatsapp.com/send?phone=${urlPhoneNumber}&text=${message}`;

  const clickhandler = () => {
    window.open(whastappUrl, "_blank");
  };
  return (
    <section id="contact-section">
      <header>
        <h2 className="title blaze-orange-background">
          ¡Consulte la disponibilidad y agende su visita!
        </h2>
      </header>

      <div className="contact-section-content">
        <p>Contáctenos por medio de whastapp en el siguiente número:</p>

        <WhatsappContactSection
          countryCode={countryCode}
          phoneNumber={phoneNumber}
        />
      </div>

      <footer>
        <button className="button-64" role="button" onClick={clickhandler}>
          <span className="text">Iniciar chat</span>
        </button>
      </footer>
    </section>
  );
}

export default Contacto;

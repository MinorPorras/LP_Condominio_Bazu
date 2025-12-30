import type {
  CR_PHONE_NUMBER,
  NUMBER_COUNTRY_CODE,
} from "../../constants/generalTypes";
import { WhatsappContactSection } from "../WhatsappContactSection";

export function Contacto() {
  const countryCode: NUMBER_COUNTRY_CODE = "+506";
  const urlPhoneNumber = "83883316";
  const phoneNumber: CR_PHONE_NUMBER = "8388-3316";
  const message =
    "Hola! Me interesa conocer más información sobre Condominio Bazú";
  const whastappUrl = `https://api.whatsapp.com/send?phone=${countryCode}${urlPhoneNumber}&text=${message}`;

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
          ¡Consulte la disponibilidad y agende su visita!
        </h2>
      </header>
      <section id="contact-section">
        <div className="contact-section-content">
          <p>
            Llamanos o envíanos un mensaje por medio de whastapp en el siguiente
            número:
          </p>

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
    </>
  );
}

export default Contacto;

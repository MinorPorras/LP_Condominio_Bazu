import { IconWhatsApp } from "../icons/general/whatsappIcon";

export function Contacto() {
  return (
    <section id="contact-section">
      <h2>¡Consulte la disponibilidad y agende su visita!</h2>

      <p>Contáctenos por medio de whastapp en el siguiente número:</p>
      <div className="whatsapp-num-container">
        <IconWhatsApp className="whatsapp-icon" />

      </div>
    </section>
  );
}

export default Contacto;

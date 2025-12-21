import { IconWhatsApp } from "../icons/general/whatsappIcon";


export function WhatsappContactSection() {
  const phoneNumber = "83602296";
  const message =
    "Hola! Me interesa conocer más información sobre Condominio Bazú";
  const whastappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <>
      <h2>¡Consulte la disponibilidad y agende su visita!</h2>
      <p>Contáctenos por medio de whastapp en el siguiente número:</p>
      <IconWhatsApp />
      <a href={whastappUrl} target="_blank" rel="noopener noreferrer" />
    </>
  );
}

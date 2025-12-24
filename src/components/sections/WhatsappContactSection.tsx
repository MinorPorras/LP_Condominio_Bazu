import { IconWhatsApp } from "../icons/general/whatsappIcon";
import type {CR_PHONE_NUMBER, NUMBER_COUNTRY_CODE} from '../../constants/generalTypes'

export function WhatsappContactSection({ countryCode, phoneNumber }: { countryCode: NUMBER_COUNTRY_CODE; phoneNumber: CR_PHONE_NUMBER }) {
  return (
    <div className="whatsapp-num-container">
      <IconWhatsApp className="icon-sz-5" />
      <h3 className="numberText">{countryCode} {phoneNumber}</h3>
    </div>
  );
}

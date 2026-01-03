import { countryCode, urlPhoneNumber, WhatsappMessage } from "./generalConst";

export const WAZE_LOCATION_URL =
  "https://ul.waze.com/ul?place=ChIJB8lj2IP9oI8R-siZtRqVwAM&ll=9.91825660%2C-84.12227870&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";

export const whastappUrl = `https://api.whatsapp.com/send?phone=${countryCode}${urlPhoneNumber}&text=${WhatsappMessage}`;

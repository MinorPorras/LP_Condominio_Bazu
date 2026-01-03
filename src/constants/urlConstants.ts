import { countryCode, urlPhoneNumber, WhatsappMessage } from "./generalConst";

export const WAZE_LOCATION_URL =
  "https://ul.waze.com/ul?place=ChIJB8lj2IP9oI8R-siZtRqVwAM&ll=9.91825660%2C-84.12227870&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";

export const whastappUrl = `https://api.whatsapp.com/send?phone=${countryCode}${urlPhoneNumber}&text=${WhatsappMessage}`;

export const iframeMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31441.508086731956!2d-84.15833115577699!3d9.918252600139223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd83d863c907%3A0x3c0951ab599c8fa!2sCondominio%20Baz%C3%BA!5e0!3m2!1ses!2scr!4v1766201391997!5m2!1ses!2scr`;

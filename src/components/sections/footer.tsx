import { useLanguage } from "../../hooks/useLanguage";
import { LanguageSelector } from "../LanguageSelector";
import { IconPhone } from "../icons/general/iconPhone";
import { IconLocation } from "../icons/general/iconLocation";
import { IconWhatsApp } from "../icons/general/whatsappIcon";
import logoNegro from "../../assets/img_logo_condo_bazu_negro.webp";
import { countryCode, phoneNumber } from "../../constants/generalConst";
import { whastappUrl } from "../../constants/urlConstants";

export function Footer() {
  const { language, setLanguage } = useLanguage();

  // Textos traducidos simples
  const t = {
    es: {
      logoAlt: "Logo de Condominio Bazú en color negro",
      rights: "Todos los derechos reservados.",
      location: "San José, Escazú, Urbanización Nuevo Horizonte, avenida Bazú",
      contact: "Contáctenos",
      whatsappLinkText: "Iniciar chat",
    },
    en: {
      logoAlt: "Logo of Condominio Bazú in black color",
      rights: "All rights reserved.",
      location: "San José, Escazú, Nuevo Horizonte Urbanization, Bazú Avenue",
      contact: "Contact Us",
      whatsappLinkText: "Start chat",
    },
  }[language];

  const isSpanish = language === "es";

  const handleToggleLanguage = () => {
    const newLang = isSpanish ? "en" : "es";
    setLanguage(newLang);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logoNegro} alt={t.logoAlt} className="img-logo" loading="lazy"/>
        </div>

        <div className="footer-language-selector-container">
          <LanguageSelector
            isCollapsed={false}
            isSpanish={isSpanish}
            handleToggleLanguage={handleToggleLanguage}
            className="language-selector-footer"
          />
        </div>

        <div className="footer-contact">
          <h3>{t.contact}</h3>
          <ul>
            <li>
              <IconLocation className="footer-logo" />
              <span>{t.location}</span>
            </li>
            <li>
              <IconPhone className="footer-logo" />
              <span>{`${countryCode} ${phoneNumber}`}</span>
            </li>
            <li>
              <a
                href={whastappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <IconWhatsApp className="footer-logo icon-sz-3" />
                <span>{t.whatsappLinkText}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2026 Condominio Bazú. {t.rights}</p>
      </div>
    </footer>
  );
}

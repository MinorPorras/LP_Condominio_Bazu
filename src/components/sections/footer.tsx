import { useLanguage } from "../../hooks/useLanguage";
import { LanguageSelector } from "../LanguageSelector";
import { IconPhone } from "../icons/general/iconPhone";
import { IconLocation } from "../icons/general/iconLocation";
import { IconWhatsApp } from "../icons/general/whatsappIcon";
import logoNegro from "../../assets/img_logo_condo_bazu_negro.webp";

export function Footer() {
  const { language, setLanguage } = useLanguage();

  // Textos traducidos simples
  const t = {
    es: {
      logoAlt: "Logo de Condominio Bazú en color negro",
      rights: "Todos los derechos reservados.",
      location: "Alajuelita, San José, Costa Rica.",
      contact: "Contáctenos",
      links: "Enlaces rápidos",
      services: "Servicios",
    },
    en: {
      logoAlt: "Logo of Condominio Bazú in black color",
      rights: "All rights reserved.",
      location: "Alajuelita, San Jose, Costa Rica.",
      contact: "Contact Us",
      links: "Quick Links",
      services: "Services",
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
        {/* Sección 1: Logo y Eslogan */}
        <div className="footer-brand">
          <img src={logoNegro} alt={t.logoAlt} className="img-logo" />
        </div>

        <div className="footer-language-selector-container">
          <LanguageSelector
            isCollapsed={false}
            isSpanish={isSpanish}
            handleToggleLanguage={handleToggleLanguage}
            className="language-selector-footer"
          />
        </div>

        {/* Sección 2: Contacto Directo */}
        <div className="footer-contact">
          <h3>{t.contact}</h3>
          <ul>
            <li>
              <IconLocation className="footer-logo" />
              <span>Cerca de La Aurora y Bello Horizonte</span>
            </li>
            <li>
              <IconPhone className="footer-logo" />
              <span>+506 8388-3316</span>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=50683883316&text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Condominio%20Baz%C3%BA"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <IconWhatsApp className="footer-logo icon-sz-3" /> WhatsApp
                Directo
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

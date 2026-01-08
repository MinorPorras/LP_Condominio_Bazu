import { countryCode, phoneNumber } from "../../constants/generalConst";
import { whastappUrl } from "../../constants/urlConstants";
import { WhatsappContactSection } from "../WhatsappContactSection";
import { useLanguage } from "../../hooks/useLanguage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Contacto() {
  const containerRef = useRef(null);

  const { language } = useLanguage();

  useGSAP(() => {
    if (!containerRef.current) {
      return;
    }

    const tl = gsap.timeline();

    tl.from(".title", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title",
        start: "top 70%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    }).from(".contact-section-content", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-section-content",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    }).from(".button-main-style", {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".button-main-style",
        start: "top 90%",
        end: "center 80%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    }, "-=0.5");

    return () => {
      tl.kill();
    }
  }, { scope: containerRef });

  const text = {
    es: {
      title: "¡Consulte la disponibilidad y agende su visita!",
      description:
        "Llamanos o envíanos un mensaje por medio de whastapp en el siguiente número:",
      buttonText: "Iniciar chat",
    },
    en: {
      title: "¡Check availability and schedule your visit!",
      description:
        "Call us or send us a message throught whatsapp with the following number",
      buttonText: "Start chat",
    },
  }[language];

  const clickhandler = () => {
    window.open(whastappUrl, "_blank");
  };

  return (
    <article className="section-container" ref={containerRef}>
      <header>
        <h2 className="title blaze-orange-background" id="contactos">
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
          <button
            className="button-main-style"
            role="button"
            onClick={clickhandler}
          >
            <span className="text">{text.buttonText}</span>
          </button>
        </footer>
      </section>
    </article>
  );
}

export default Contacto;

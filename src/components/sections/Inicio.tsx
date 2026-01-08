import { useRef } from "react";
import logoNegro from "../../assets/img_logo_condo_bazu_negro.webp";
import fondoInicio from "../../assets/img_vista_general.webp";
import { useLanguage } from "../../hooks/useLanguage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Inicio() {
  const { language } = useLanguage();

  const backgroundRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!backgroundRef.current || !logoRef.current || !titleRef.current) {
      return;
    }

    gsap.set(backgroundRef.current, { opacity: 0 });
    gsap.set(logoRef.current, { opacity: 0, y: -100 });
    gsap.set(titleRef.current, { opacity: 0, x: -50 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(backgroundRef.current, { opacity: 1, duration: 1 })
      .to(
        logoRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .to(titleRef.current, { opacity: 1, x: 0, duration: 0.7 }, "-=0.8");
  });

  const text = {
    es: {
      titleText: "Alquiler de apartamentos en Bello Horizonte, Escazú.",
      backgroundImageAlt:
        "Imagen con vista general de la entrada del Condominio Bazú, mostrando los pasillos y escaleras para llegar a los apartamentos, zonas de recreación y demás.",
      logoAlt: "Logo de Condominio Bazú en color negro",
    },
    en: {
      titleText: "Apartment rental in Bello Horizonte, Escazú.",
      backgroundImageAlt:
        "Image with a general view of the entrance to Condominio Bazú, showing its corridors and escalators to reach apartments on the second floor, recreation zones and other amenities",
      logoAlt: "Logo of Condominio Bazú in black color",
    },
  }[language];

  return (
    <section id="inicio">
      <header className="img-logo-container">
        <img
          src={fondoInicio}
          alt={text.backgroundImageAlt}
          className="inicio-background-img"
          fetchPriority="high"
          ref={backgroundRef}
        />
        <img
          src={logoNegro}
          alt={text.logoAlt}
          className="img-logo"
          fetchPriority="high"
          ref={logoRef}
        />
      </header>

      <h1 ref={titleRef}>{text.titleText}</h1>
    </section>
  );
}

export default Inicio;

import { ServicesCard } from "../ServicesCard";
import { SERVICE_ITEMS } from "../../constants/servicesItems";
import { useLanguage } from "../../hooks/useLanguage";
import type { SUPPORTED_LANGS_ABR } from "../../constants/generalTypes";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Servicios() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
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
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  const { language }: { language: SUPPORTED_LANGS_ABR } = useLanguage();

  const title =
    language === "es"
      ? "Descubre los servicios y comodidades que ofrecemos:"
      : "Discover the services and amenities we offer:";

  return (
    <article className="section-container" ref={containerRef}>
      <h2 className="title blaze-orange-background" id="servicios">
        {title}
      </h2>
      <section id="services-section">
        {SERVICE_ITEMS.map((service, index) => {
          return (
            <ServicesCard
              key={`services-card-${service.name[language]}-${index}`}
              name={service.name[language]}
              IconComponent={service.IconComponent}
              isLeftAligned={service.isLeftAligned}
              imgAlt={service.imgAlt && service.imgAlt[language]}
              imgSrc={service.imgSrc}
            />
          );
        })}
      </section>
    </article>
  );
}

export default Servicios;

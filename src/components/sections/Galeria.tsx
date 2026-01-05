import { GalleryCarousel } from "../galleryCarousel.tsx";
import { mainCarouselItems } from "../../constants/carouselItems.ts";
import { useLanguage } from "../../hooks/useLanguage.tsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
}

export function Galeria() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      const splitText = new SplitText("section-with-gallery-text", {
        type: "lines",
      });

      const tl = gsap.timeline();

      tl.to(".title-left", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".title-left",
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      })
        .from(splitText.lines, {
          x: -100,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".title-left",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        })
        .to(".section-with-gallery-text", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".title-left",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        })
        .to(".gallery-carousel-container", {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".title-left",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        });
    },
    { scope: containerRef }
  );

  const { language } = useLanguage();

  const t = {
    es: {
      title: "Un recorrido por nuestras instalaciones",
      description:
        "Explore la galería de imágenes de nuestra áreas comunes y amenidades.",
    },
    en: {
      title: "A tour of our facilities",
      description: "Explore the gallery of our common areas and amenities",
    },
  }[language];

  return (
    <article className="section-container" ref={containerRef}>
      <h2
        className="title title-left spanFull mauve-shadow-background"
        id="galeria"
      >
        {t.title}
      </h2>
      <section id="gallery-section" className="section-with-gallery">
        <p className="section-with-gallery-text">{t.description}</p>

        <div className="gallery-carousel-container">
          <GalleryCarousel
            carouselItems={mainCarouselItems}
            idName="condo-carousel"
          />
        </div>
      </section>
    </article>
  );
}

export default Galeria;

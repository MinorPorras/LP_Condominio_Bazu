import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import { apartmentCarouselItems } from "../../constants/carouselItems";
import { GalleryCarousel } from "../galleryCarousel";
import { useMemo, useRef } from "react";
import { useLanguage } from "../../hooks/useLanguage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export function ApartmentGallery() {
  const containerRef = useRef(null);
  const textContainerRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { language } = useLanguage();

  const text = useMemo(() => {
    return {
      es: {
        titleText: "Descubre nuestros apartamentos",
        description: "Explora la galería de imágenes de nuestros apartamentos",
      },
      en: {
        titleText: "Discover our apartments",
        description: "Explore the gallery of our apartments",
      },
    }[language];
  }, [language]);

  useGSAP(
    () => {
      if (!titleRef.current || !textContainerRef.current) return;

      gsap.fromTo(
        titleRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );

      // 2. Animación de la descripción con SplitText
      const split = new SplitText(textContainerRef.current, {
        type: "words",
      });

      gsap.from(split.words, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 60%",
          end: "center 70%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });

      return () => {
        split.revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [language],
      revertOnUpdate: true,
    }
  );

  return (
    <article className="section-container" ref={containerRef}>
      <h2
        className="title title-right spanFull smokey-rose-background"
        id="apartamentos"
        ref={titleRef}
        key={`title-${language}`}
      >
        {text.titleText}
      </h2>
      <section id="apartment-section" className="section-with-gallery">
        <p
          className="section-with-gallery-text-right"
          ref={textContainerRef}
          key={`desc-${language}`}
        >
          {text.description}
        </p>
        <GalleryCarousel
          carouselItems={apartmentCarouselItems}
          idName="apartment-carousel"
        />
      </section>
    </article>
  );
}

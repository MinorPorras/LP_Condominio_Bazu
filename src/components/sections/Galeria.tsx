import { GalleryCarousel } from "../galleryCarousel.tsx";
import { mainCarouselItems } from "../../constants/carouselItems.ts";
import { useLanguage } from "../../hooks/useLanguage.tsx";

export function Galeria() {
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
    <>
      <h2
        className="title title-left spanFull mauve-shadow-background"
        id="galeria"
      >
        {t.title}
      </h2>
      <section id="gallery-section" className="section-with-gallery">
        <p>{t.description}</p>

        <div className="gallery-carousel-container">
          <GalleryCarousel
            carouselItems={mainCarouselItems}
            idName="condo-carousel"
          />
        </div>
      </section>
    </>
  );
}

export default Galeria;

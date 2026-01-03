import { apartmentCarouselItems } from "../../constants/carouselItems";
import { useLanguage } from "../../hooks/useLanguage";
import { GalleryCarousel } from "../galleryCarousel";

export function ApartmentGallery() {
  const { language } = useLanguage();
  
  const text = {
    es: {
      titleText: "Descubre nuestros apartamentos",
      description: "Explora la galería de imágenes de nuestros apartamentos",
    },
    en: {
      titleText: "Discover our apartments",
      description: "Explore the gallery of our apartments",
    },
  }[language];


  return (
    <>
      <h2
        className="title title-right spanFull smokey-rose-background"
        id="apartment-section-title"
      >
        {text.titleText}
      </h2>
      <section id="apartment-section">
        <p>{text.description}</p>
        <div className="gallery-carousel-container apartment-carousel">
          <GalleryCarousel
            carouselItems={apartmentCarouselItems}
            idName="apartment-carousel"
          />
        </div>
      </section>
    </>
  );
}

import { apartmentCarouselItems } from "../../constants/carouselItems";
import { GalleryCarousel } from "../galleryCarousel";

export function ApartmentGallery() {
  return (
    <>
      <h2
        className="title title-right spanFull smokey-rose-background"
        id="apartment-section-title"
      >
        Descubre nuestros apartamentos
      </h2>
      <section id="apartment-section">
        <p>Explora la galería de imágenes de nuestros apartamentos</p>
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

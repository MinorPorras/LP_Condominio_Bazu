import {apartmentCarouselItems} from "../../constants/carouselItems";
import { GalleryCarousel } from "./galleryCarousel";

export function ApartmentGallery() {
  return (
    <section id="apartment-section">
      <h2 className="title title-right spanFull smokey-rose-background">
        Descubre nuestros apartamentos
      </h2>
      <p>Explora la galería de imágenes de nuestros apartamentos</p>
      <GalleryCarousel
        carouselItems={apartmentCarouselItems}
        idName="apartment-carousel"
      />
    </section>
  );
}

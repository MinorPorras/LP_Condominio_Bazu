import { GalleryCarousel } from "../galleryCarousel.tsx";
import { mainCarouselItems } from "../../constants/carouselItems.ts";

export function Galeria() {
  return (
    <>
      <h2 className="title title-left spanFull mauve-shadow-background" id="gallery-section-title">
        Un recorrido por nuestras instalaciones
      </h2>
      <section id="gallery-section">
        <p>
          Explore la galería de imágenes de nuestra áreas comunes y amenidades.
        </p>

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

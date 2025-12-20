import { GalleryCarousel } from "./galleryCarousel";
import { mainCarouselItems } from "../../constants.ts";


export function Galeria() {
  return (
    <section id="gallery-section">
      <h2 className="title title-left spanFull mauve-shadow-background">Un recorrido por nuestras instalaciones</h2>
      <p>
        Explore la galería de imágenes de nuestra áreas comunes y amenidades.
      </p>

      <GalleryCarousel carouselItems={mainCarouselItems} idName="condo-carousel"/>
    </section>
  );
}

export default Galeria;

import { GalleryCarousel } from "./galleryCarousel";

export function Galeria() {
  return (
    <section id="gallery-section">
      <h2 className="title title-left spanFull mauve-shadow-background">Un recorrido por nuestras instalaciones</h2>
      <p>
        Explore la galería de imágenes de nuestros apartamentos y áreas comunes.
      </p>

      <GalleryCarousel />
    </section>
  );
}

export default Galeria;

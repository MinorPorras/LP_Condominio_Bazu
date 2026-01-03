import IconLeftArrow from "./icons/general/iconLeftArrow.tsx";
import { IconRightArrow } from "./icons/general/iconRightArrow.tsx";
import type { carouseItem } from "../constants/generalTypes.ts";
import { mainCarouselItems } from "../constants/carouselItems.ts";
import { useLanguage } from "../hooks/useLanguage.tsx";

export function GalleryCarousel({
  carouselItems = mainCarouselItems,
  idName = "condo-carousel",
}: {
  carouselItems?: carouseItem[];
  idName: string;
}) {
  const { language } = useLanguage();

  return (
    <div
      id={idName}
      data-bs-ride="carousel"
      data-bs-interval="5000"
      className="carousel carousel-dark slide gallery-carousel-base"
    >
      {carouselItems.length > 2 && (
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={`${idName}-item-${index}`}
              type="button"
              data-bs-target={`#${idName}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
      <div className="carousel-inner">
        {carouselItems.map((image, index) => {
          const imageAlt = image.alt[language];
          return (
            <div
              key={`${idName}-image-${index}`}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image.src}
                className="d-block carousel-image"
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          );
        })}
        ;
      </div>
      <button
        className="carousel-control-prev carousel-control-custom"
        type="button"
        data-bs-target={`#${idName}`}
        data-bs-slide="prev"
      >
        <IconLeftArrow color="#fff" />
      </button>
      <button
        className="carousel-control-next carousel-control-custom"
        type="button"
        data-bs-target={`#${idName}`}
        data-bs-slide="next"
      >
        <IconRightArrow color="#fff" />
      </button>
    </div>
  );
}

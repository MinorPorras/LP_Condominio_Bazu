import IconLeftArrow from "../icons/general/iconLeftArrow";
import { IconRightArrow } from "../icons/general/iconRightArrow";
import { carouselItems } from "../../constants.ts";

export function GalleryCarousel() {
  return (
    <div id="condo-carousel" className="carousel carousel-dark slide">
      {carouselItems.length > 2 && (
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#condo-carousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
      <div className="carousel-inner">
        {carouselItems.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="10000"
          >
            <img
              src={image.src}
              className="d-block carousel-image"
              alt={image.alt}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.title}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev carousel-control-custom"
        type="button"
        data-bs-target="#condo-carousel"
        data-bs-slide="prev"
      >
        <IconLeftArrow color="#fff" />
      </button>
      <button
        className="carousel-control-next carousel-control-custom"
        type="button"
        data-bs-target="#condo-carousel"
        data-bs-slide="next"
      >
        <IconRightArrow color="#fff" />
      </button>
    </div>
  );
}

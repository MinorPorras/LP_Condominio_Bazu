import type { ServiceItemProps } from "../constants/generalTypes";

export function ServicesCard({
  name,
  IconComponent,
  isLeftAligned,
  imgSrc,
  imgAlt,
}: ServiceItemProps) {
  return (
    <>
      {imgSrc ? (
        <img src={imgSrc} className="services-card-img" alt={imgAlt} />
      ) : (
        <IconComponent
          className="services-card-icon"
          color="#5e4a55"
        />
      )}
      <article
        className={`services-card ${isLeftAligned ? "left-aligned" : ""}`}
      >
        <h3 className="services-card-title">
          {imgSrc ? (
            <IconComponent
              className="services-card-icon icon-sz-cover-100"
              color="#ffffffff"
            />
          ) : (
            <></>
          )}

          {name}
        </h3>
      </article>
    </>
  );
}

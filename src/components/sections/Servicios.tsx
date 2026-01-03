import { ServicesCard } from "../ServicesCard";
import { SERVICE_ITEMS } from "../../constants/servicesItems";
import { useLanguage } from "../../hooks/useLanguage";
import type { SUPPORTED_LANGS_ABR } from "../../constants/generalTypes";

export function Servicios() {
  const { language }: { language: SUPPORTED_LANGS_ABR } = useLanguage();

  const title =
    language === "es"
      ? "Descubre los servicios y comodidades que ofrecemos:"
      : "Discover the services and amenities we offer:";

  return (
    <>
      <h2 className="title blaze-orange-background" id="servicios">
        {title}
      </h2>
      <section id="services-section">
        {SERVICE_ITEMS.map((service, index) => {
          return (
            <div
              key={`services-section-${service.name}`}
              className={`services-section-card-container ${
                service.isLeftAligned ? "left-aligned" : ""
              }`}
            >
              <ServicesCard
                key={`services-card-${service.name[language]}-${index}`}
                name={service.name[language]}
                IconComponent={service.IconComponent}
                isLeftAligned={service.isLeftAligned}
                imgAlt={service.imgAlt && service.imgAlt[language]}
                imgSrc={service.imgSrc}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Servicios;

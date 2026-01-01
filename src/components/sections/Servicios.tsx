import { ServicesCard } from "../ServicesCard";
import { servicesItems } from "../../constants/servicesItems";

export function Servicios() {
  return (
    <>
      <h2 className="title blaze-orange-background" id="services-section-title">
        Descubra los servicios y comodidades que ofrecemos:
      </h2>
      <section id="services-section">
        {servicesItems.map((service) => {
          return (
            <div
              key={`services-section-${service.name}`}
              className={`services-section-card-container ${
                service.isLeftAligned ? "left-aligned" : ""
              }`}
            >
              <ServicesCard
                key={service.name}
                name={service.name}
                IconComponent={service.IconComponent}
                isLeftAligned={service.isLeftAligned}
                imgAlt={service.imgAlt}
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

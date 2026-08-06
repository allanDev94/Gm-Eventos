import { useState } from "react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import ServiceModal from "../../components/ServiceModal/ServiceModal";

import ServicesHeader from "./components/ServicesHeader/ServicesHeader";

import { SERVICES_FALLBACK_IMAGE, services } from "./data/servicesData";

import "./Services.css";

function Services({ showHeader = true, limit }) {
  const [selectedService, setSelectedService] = useState(null);

  const hasLimit = Number.isInteger(limit) && limit > 0;

  const visibleServices = hasLimit ? services.slice(0, limit) : services;

  const showViewAllButton =
    hasLimit && visibleServices.length < services.length;

  const openServiceModal = (service) => {
    if (!service.hasDetails) {
      return;
    }

    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const handleServiceKeyDown = (event, service) => {
    if (!service.hasDetails) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openServiceModal(service);
    }
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = SERVICES_FALLBACK_IMAGE;
  };

  return (
    <>
      <section className="services">
        <Container>
          {showHeader && <ServicesHeader />}

          <div
            className={`services__grid ${
              hasLimit ? "services__grid--preview" : ""
            }`}
          >
            {visibleServices.map((service) => (
              <article
                className={`service-card ${
                  service.hasDetails ? "service-card--interactive" : ""
                }`}
                key={service.id}
                role={service.hasDetails ? "button" : undefined}
                tabIndex={service.hasDetails ? 0 : undefined}
                aria-haspopup={service.hasDetails ? "dialog" : undefined}
                aria-label={
                  service.hasDetails
                    ? `Ver detalles de ${service.title}`
                    : undefined
                }
                onClick={
                  service.hasDetails
                    ? () => openServiceModal(service)
                    : undefined
                }
                onKeyDown={
                  service.hasDetails
                    ? (event) => handleServiceKeyDown(event, service)
                    : undefined
                }
              >
                <img
                  className="service-card__image"
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />

                <div className="service-card__overlay" aria-hidden="true" />

                <div className="service-card__body">
                  <div className="service-card__content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <div className="service-card__services">
                    <p className="service-card__includes-label">Incluye:</p>

                    <ul className="service-card__features">
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {service.hasDetails && (
                    <span className="service-card__details-label">
                      Ver detalles
                      <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          {showViewAllButton && (
            <div className="services__footer">
              <Button to="/servicios" variant="secondary">
                Ver todos los servicios
              </Button>
            </div>
          )}
        </Container>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeServiceModal} />
      )}
    </>
  );
}

export default Services;

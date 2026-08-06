import { useState } from "react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import ServiceModal from "./components/ServiceModal/ServiceModal";

import ServicesGrid from "./components/ServicesGrid/ServicesGrid";
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

  return (
    <>
      <section className="services" id="servicios">
        <Container>
          {showHeader && <ServicesHeader />}

          <ServicesGrid
            services={visibleServices}
            fallbackImage={SERVICES_FALLBACK_IMAGE}
            onOpen={openServiceModal}
            isPreview={hasLimit}
          />

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

import { useState } from "react";

import { motion, useReducedMotion } from "motion/react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import ServiceModal from "../../components/ServiceModal/ServiceModal";

import ServiceCard from "./components/ServiceCard/ServiceCard";
import ServicesHeader from "./components/ServicesHeader/ServicesHeader";

import { SERVICES_FALLBACK_IMAGE, services } from "./data/servicesData";

import { servicesGridVariants } from "./animations/servicesAnimations";

import "./Services.css";

function Services({ showHeader = true, limit }) {
  const shouldReduceMotion = useReducedMotion();

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
      <section className="services">
        <Container>
          {showHeader && <ServicesHeader />}

          <motion.div
            className={`services__grid ${
              hasLimit ? "services__grid--preview" : ""
            }`}
            variants={servicesGridVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {visibleServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                fallbackImage={SERVICES_FALLBACK_IMAGE}
                onOpen={openServiceModal}
              />
            ))}
          </motion.div>

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

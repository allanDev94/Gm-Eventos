import { motion, useReducedMotion } from "motion/react";

import ServiceCard from "../ServiceCard/ServiceCard";

import { servicesGridVariants } from "../../animations/servicesAnimations";

import "./ServicesGrid.css";

function ServicesGrid({ services, fallbackImage, onOpen, isPreview = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`services-grid ${isPreview ? "services-grid--preview" : ""}`}
      variants={servicesGridVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.08,
      }}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          fallbackImage={fallbackImage}
          onOpen={onOpen}
        />
      ))}
    </motion.div>
  );
}

export default ServicesGrid;

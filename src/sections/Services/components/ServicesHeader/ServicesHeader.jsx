import { motion, useReducedMotion } from "motion/react";

import Button from "../../../../components/Button/Button";

import {
  servicesHeaderVariants,
  servicesHeadingVariants,
  servicesIntroductionVariants,
} from "../../animations/servicesAnimations";

import "./ServicesHeader.css";

function ServicesHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      className="services-header"
      variants={servicesHeaderVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.35,
      }}
    >
      <motion.div
        className="services-header__heading"
        variants={servicesHeadingVariants}
      >
        <p className="services-header__eyebrow">Nuestros servicios</p>

        <h2 className="services-header__title">
          Experiencias diseñadas para <span>cada tipo de evento</span>
        </h2>
      </motion.div>

      <motion.div
        className="services-header__introduction"
        variants={servicesIntroductionVariants}
      >
        <p>
          Combinamos música, sonido, iluminación y producción para crear
          celebraciones memorables. Cada propuesta se adapta al estilo, espacio
          y necesidades de nuestros clientes.
        </p>

        <Button to="/contacto" variant="secondary">
          Solicitar cotización
        </Button>
      </motion.div>
    </motion.header>
  );
}

export default ServicesHeader;

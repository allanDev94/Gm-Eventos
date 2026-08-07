import { motion, useReducedMotion } from "motion/react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import GradientText from "../../components/GradientText/GradientText";

import {
  heroBackgroundVariants,
  heroContentVariants,
  heroItemVariants,
} from "./animations/heroAnimations";

import "./Hero.css";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <motion.img
        className="hero__background"
        src="/assets/img/hero01.JPG"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        variants={heroBackgroundVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      />

      <div className="hero__overlay" aria-hidden="true" />

      <Container>
        <motion.div
          className="hero__content"
          variants={heroContentVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={heroItemVariants}>
            Producción de eventos
          </motion.p>

          <motion.h1
            className="hero__title"
            id="hero-title"
            variants={heroItemVariants}
          >
            Creamos momentos que se convierten en{" "}
            <GradientText>recuerdos</GradientText>
          </motion.h1>

          <motion.p className="hero__description" variants={heroItemVariants}>
            Sonido, iluminación, DJ y producción para matrimonios, eventos
            corporativos, graduaciones y celebraciones.
          </motion.p>

          <motion.div className="hero__actions" variants={heroItemVariants}>
            <Button to="/contacto">Cotizar evento</Button>

            <Button to="/servicios" variant="secondary">
              Ver servicios
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;

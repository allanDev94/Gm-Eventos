import { motion, useReducedMotion } from "motion/react";

import Button from "../../../../components/Button/Button";
import GradientText from "../../../../components/GradientText/GradientText";

import "./PortfolioHeader.css";

const smoothEase = [0.16, 1, 0.3, 1];

const headingVariants = {
  hidden: {
    opacity: 0,
    x: -42,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.78,
      ease: smoothEase,
    },
  },
};

const introductionVariants = {
  hidden: {
    opacity: 0,
    x: 42,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.78,
      delay: 0.06,
      ease: smoothEase,
    },
  },
};

function PortfolioHeader() {
  const shouldReduceMotion = useReducedMotion();

  const viewportSettings = {
    once: true,
    amount: 0.08,
    margin: "0px 0px 120px 0px",
  };

  return (
    <div className="portfolio-header">
      <motion.div
        className="portfolio-header__heading"
        variants={headingVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportSettings}
      >
        <p className="portfolio-header__eyebrow">Eventos realizados</p>

        <h2 className="portfolio-header__title" id="portfolio-title">
          Experiencias creadas para <GradientText>momentos únicos</GradientText>
        </h2>
      </motion.div>

      <motion.div
        className="portfolio-header__introduction"
        variants={introductionVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={viewportSettings}
      >
        <p>
          Cada evento tiene una identidad diferente. Diseñamos propuestas
          adaptadas al espacio, al público y a la experiencia que cada cliente
          desea crear.
        </p>

        <Button to="/contacto" variant="secondary">
          Cuéntanos tu idea
        </Button>
      </motion.div>
    </div>
  );
}

export default PortfolioHeader;

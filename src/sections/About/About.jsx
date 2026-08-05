import { ArrowUpRight, Layers, MessagesSquare } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import "./About.css";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

import CommitmentSection from "./components/CommitmentSection/CommitmentSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import StorySection from "./components/StorySection/StorySection";
import ValuesSection from "./components/ValuesSection/ValuesSection";

import { ctaBenefits } from "./data/aboutData";

import {
  ctaActionItemVariants,
  ctaActionsVariants,
  ctaContainerVariants,
  ctaContentVariants,
  ctaItemVariants,
} from "./animations/aboutAnimations";

function About({ showHeader = true }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`about ${!showHeader ? "about--without-header" : ""}`}
      id="nosotros"
    >
      <Container>
        {showHeader && (
          <header className="about__heading">
            <p className="about__eyebrow">Sobre GM Eventos</p>

            <h2 className="about__title">
              Nos involucramos en cada detalle para que disfrutes tu evento
            </h2>
          </header>
        )}

        <StorySection />

        <ProcessSection />

        <ValuesSection />

        <CommitmentSection />

        <motion.div
          className="about__cta"
          variants={ctaContainerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <motion.span
            className="about__cta-glow about__cta-glow--one"
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 18, 0],
                    y: [0, -14, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="about__cta-glow about__cta-glow--two"
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -14, 0],
                    y: [0, 12, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="about__cta-content"
            variants={ctaContentVariants}
          >
            <motion.p className="about__eyebrow" variants={ctaItemVariants}>
              Comencemos a planificar
            </motion.p>

            <motion.h2 variants={ctaItemVariants}>
              Conversemos sobre el evento que estás <span>imaginando</span>
            </motion.h2>

            <motion.p
              className="about__cta-description"
              variants={ctaItemVariants}
            >
              Cuéntanos tu idea y prepararemos una propuesta adaptada al tipo de
              celebración, espacio, cantidad de invitados y experiencia que
              deseas crear.
            </motion.p>

            <motion.ul
              className="about__cta-benefits"
              variants={ctaItemVariants}
            >
              {ctaBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <li key={benefit.id}>
                    <Icon size={18} strokeWidth={1.9} aria-hidden="true" />

                    <span>{benefit.text}</span>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>

          <motion.div
            className="about__cta-actions"
            variants={ctaActionsVariants}
          >
            <motion.div
              className="about__cta-action-note"
              variants={ctaActionItemVariants}
            >
              <span>
                <MessagesSquare
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <div>
                <strong>¿Tienes una idea?</strong>
                <p>Conversemos y comencemos a darle forma.</p>
              </div>
            </motion.div>

            <motion.div variants={ctaActionItemVariants}>
              <Button
                to="/contacto"
                variant="primary"
                className="about__cta-button about__cta-button--primary"
              >
                <span>Cotizar mi evento</span>

                <ArrowUpRight size={20} strokeWidth={2} aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.div variants={ctaActionItemVariants}>
              <Button
                to="/servicios"
                variant="secondary"
                className="about__cta-button about__cta-button--secondary"
              >
                <span>Explorar servicios</span>

                <Layers size={19} strokeWidth={1.9} aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.p
              className="about__cta-response"
              variants={ctaActionItemVariants}
            >
              Te orientaremos para encontrar la propuesta adecuada para tu
              evento.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;

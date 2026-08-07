import { ArrowUpRight, Sparkles } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import GradientText from "../../components/GradientText/GradientText";

import {
  callToActionButtonsVariants,
  callToActionItemVariants,
  callToActionPanelVariants,
} from "./animations/callToActionAnimations";

import "./CallToAction.css";

function CallToAction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="call-to-action" aria-labelledby="call-to-action-title">
      <div className="call-to-action__ambient" aria-hidden="true" />

      <Container>
        <motion.div
          className="call-to-action__content"
          variants={callToActionPanelVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
            margin: "0px 0px 100px 0px",
          }}
        >
          <div className="call-to-action__text">
            <motion.div
              className="call-to-action__eyebrow"
              variants={callToActionItemVariants}
            >
              <Sparkles size={16} strokeWidth={1.9} aria-hidden="true" />

              <span>Hagamos realidad tu evento</span>
            </motion.div>

            <motion.h2
              className="call-to-action__title"
              id="call-to-action-title"
              variants={callToActionItemVariants}
            >
              Cuéntanos tu idea y preparemos una{" "}
              <GradientText>experiencia memorable</GradientText>
            </motion.h2>

            <motion.p
              className="call-to-action__description"
              variants={callToActionItemVariants}
            >
              Conversemos sobre el tipo de evento, la cantidad de invitados y
              los servicios que necesitas. Prepararemos una propuesta adaptada a
              tu celebración.
            </motion.p>
          </div>

          <motion.div
            className="call-to-action__actions"
            variants={callToActionButtonsVariants}
          >
            <Button to="/contacto" variant="primary">
              <span>Solicitar cotización</span>

              <ArrowUpRight size={18} strokeWidth={1.9} aria-hidden="true" />
            </Button>

            <Button to="/servicios" variant="secondary">
              Explorar servicios
            </Button>

            <p className="call-to-action__note">
              Atención personalizada para cada tipo de evento.
            </p>
          </motion.div>

          <div className="call-to-action__decoration" aria-hidden="true" />
        </motion.div>
      </Container>
    </section>
  );
}

export default CallToAction;

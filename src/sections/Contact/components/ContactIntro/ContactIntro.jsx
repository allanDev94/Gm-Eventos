import { Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { contactHighlights } from "../../data/contactData";

import {
  contactColumnVariants,
  contactItemVariants,
  contactListVariants,
} from "../../animations/contactAnimations";

import "./ContactIntro.css";

function ContactIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="contact-intro"
      variants={contactColumnVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
    >
      <div className="contact-intro__content">
        <p className="contact-intro__eyebrow">Hablemos de tu evento</p>

        <h1>
          Cuéntanos tu idea y comencemos a <span>darle forma</span>
        </h1>

        <p className="contact-intro__description">
          Comparte los detalles principales de tu celebración. Con esa
          información podremos preparar una propuesta adaptada a lo que
          necesitas.
        </p>
      </div>

      <motion.ul
        className="contact-intro__highlights"
        variants={contactListVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
      >
        {contactHighlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <motion.li key={highlight.id} variants={contactItemVariants}>
              <span className="contact-intro__highlight-icon">
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>

              <div>
                <strong>{highlight.title}</strong>
                <p>{highlight.description}</p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>

      <div className="contact-intro__response">
        <Clock3 size={18} strokeWidth={1.8} aria-hidden="true" />

        <div>
          <strong>Respuesta oportuna</strong>
          <span>
            Revisaremos tu solicitud y te contactaremos a la brevedad.
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default ContactIntro;

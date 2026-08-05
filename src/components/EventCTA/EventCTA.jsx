import { ArrowUpRight, Layers, MessagesSquare } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import Button from "../Button/Button";

import {
  ctaActionItemVariants,
  ctaActionsVariants,
  ctaContainerVariants,
  ctaContentVariants,
  ctaItemVariants,
} from "./eventCTAAnimations";

import "./EventCTA.css";

function EventCTA({
  eyebrow,
  title,
  highlightedText,
  description,
  benefits = [],
  noteTitle,
  noteText,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  responseText,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  const sectionClasses = `event-cta ${className}`.trim();

  return (
    <motion.section
      className={sectionClasses}
      variants={ctaContainerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <motion.span
        className="event-cta__glow event-cta__glow--one"
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
        className="event-cta__glow event-cta__glow--two"
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

      <motion.div className="event-cta__content" variants={ctaContentVariants}>
        <motion.p className="event-cta__eyebrow" variants={ctaItemVariants}>
          {eyebrow}
        </motion.p>

        <motion.h2 variants={ctaItemVariants}>
          {title} {highlightedText && <span>{highlightedText}</span>}
        </motion.h2>

        <motion.p className="event-cta__description" variants={ctaItemVariants}>
          {description}
        </motion.p>

        {benefits.length > 0 && (
          <motion.ul className="event-cta__benefits" variants={ctaItemVariants}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <li key={benefit.id}>
                  {Icon && (
                    <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                  )}

                  <span>{benefit.text}</span>
                </li>
              );
            })}
          </motion.ul>
        )}
      </motion.div>

      <motion.div className="event-cta__actions" variants={ctaActionsVariants}>
        <motion.div
          className="event-cta__note"
          variants={ctaActionItemVariants}
        >
          <span className="event-cta__note-icon">
            <MessagesSquare size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>

          <div>
            <strong>{noteTitle}</strong>
            <p>{noteText}</p>
          </div>
        </motion.div>

        <motion.div variants={ctaActionItemVariants}>
          <Button
            to={primaryTo}
            variant="primary"
            className="event-cta__button event-cta__button--primary"
          >
            <span>{primaryLabel}</span>

            <ArrowUpRight size={20} strokeWidth={2} aria-hidden="true" />
          </Button>
        </motion.div>

        <motion.div variants={ctaActionItemVariants}>
          <Button
            to={secondaryTo}
            variant="secondary"
            className="event-cta__button event-cta__button--secondary"
          >
            <span>{secondaryLabel}</span>

            <Layers size={19} strokeWidth={1.9} aria-hidden="true" />
          </Button>
        </motion.div>

        {responseText && (
          <motion.p
            className="event-cta__response"
            variants={ctaActionItemVariants}
          >
            {responseText}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
}

export default EventCTA;

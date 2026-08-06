import { Check, X } from "lucide-react";

import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import Button from "../../../../components/Button/Button";

import {
  portfolioBackdropVariants,
  portfolioModalVariants,
} from "../../animations/portfolioAnimations";

import PortfolioGallery from "./PortfolioGallery";

import "./PortfolioModal.css";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function PortfolioModal({ event, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!event) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === "Escape") {
        onClose();
        return;
      }

      if (keyboardEvent.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector),
      );

      if (focusableElements.length === 0) {
        keyboardEvent.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];

      const lastElement = focusableElements[focusableElements.length - 1];

      if (keyboardEvent.shiftKey && document.activeElement === firstElement) {
        keyboardEvent.preventDefault();
        lastElement.focus();
      }

      if (!keyboardEvent.shiftKey && document.activeElement === lastElement) {
        keyboardEvent.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);

      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previousFocusRef.current?.focus?.();
    };
  }, [event, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {event && (
        <motion.div
          className="portfolio-modal"
          variants={portfolioBackdropVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          exit="exit"
          onMouseDown={(mouseEvent) => {
            if (mouseEvent.target === mouseEvent.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.section
            className="portfolio-modal__panel"
            ref={dialogRef}
            variants={portfolioModalVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`portfolio-modal-title-${event.id}`}
            aria-describedby={`portfolio-modal-description-${event.id}`}
            tabIndex={-1}
          >
            <button
              className="portfolio-modal__close"
              ref={closeButtonRef}
              type="button"
              aria-label="Cerrar detalles del evento"
              onClick={onClose}
            >
              <X size={23} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <div className="portfolio-modal__gallery">
              <PortfolioGallery key={event.id} event={event} />
            </div>

            <div className="portfolio-modal__content">
              <p className="portfolio-modal__eyebrow">{event.category}</p>

              <h2
                className="portfolio-modal__title"
                id={`portfolio-modal-title-${event.id}`}
              >
                {event.title}
              </h2>

              <p
                className="portfolio-modal__description"
                id={`portfolio-modal-description-${event.id}`}
              >
                {event.details || event.description}
              </p>

              {event.features?.length > 0 && (
                <div className="portfolio-modal__services">
                  <h3>Servicios disponibles para este tipo de evento</h3>

                  <ul>
                    {event.features.map((feature) => (
                      <li key={feature}>
                        <Check size={17} strokeWidth={2} aria-hidden="true" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="portfolio-modal__cta">
                <p>
                  Cuéntanos cómo imaginas tu evento y prepararemos una propuesta
                  adaptada a tus necesidades.
                </p>

                <Button to="/contacto" variant="primary">
                  Cotizar mi evento
                </Button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default PortfolioModal;

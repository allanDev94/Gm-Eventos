import { useCallback, useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { ArrowLeft, Check, X } from "lucide-react";

import Button from "../../../../components/Button/Button";

import {
  reducedModalVariants,
  serviceModalBackdropVariants,
  serviceModalContentVariants,
  serviceModalDialogVariants,
  serviceModalGalleryVariants,
} from "../../animations/servicesAnimations";

import ServiceGallery from "./ServiceGallery";

import "./ServiceModal.css";

function ServiceModal({ service, onClose }) {
  const shouldReduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(true);

  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const requestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement = document.activeElement;

    document.body.style.overflow = "hidden";

    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        requestClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimeout);

      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      if (
        previouslyFocusedElement instanceof HTMLElement &&
        previouslyFocusedElement.isConnected
      ) {
        previouslyFocusedElement.focus();
      }
    };
  }, [requestClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      requestClose();
    }
  };

  const handleExitComplete = () => {
    onCloseRef.current();
  };

  const backdropVariants = shouldReduceMotion
    ? reducedModalVariants
    : serviceModalBackdropVariants;

  const dialogVariants = shouldReduceMotion
    ? reducedModalVariants
    : serviceModalDialogVariants;

  const galleryVariants = shouldReduceMotion
    ? reducedModalVariants
    : serviceModalGalleryVariants;

  const contentVariants = shouldReduceMotion
    ? reducedModalVariants
    : serviceModalContentVariants;

  return createPortal(
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isOpen && (
        <motion.div
          className="service-modal"
          role="presentation"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onMouseDown={handleBackdropClick}
        >
          <motion.article
            ref={dialogRef}
            className="service-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-description"
            variants={dialogVariants}
          >
            <button
              ref={closeButtonRef}
              className="service-modal__close"
              type="button"
              aria-label="Cerrar información del servicio"
              onClick={requestClose}
            >
              <X size={22} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <motion.div
              className="service-modal__gallery"
              variants={galleryVariants}
            >
              <ServiceGallery service={service} />
            </motion.div>

            <motion.div
              className="service-modal__content"
              variants={contentVariants}
            >
              <p className="service-modal__eyebrow">
                {service.eyebrow || "Servicio GM Eventos"}
              </p>

              <h2 className="service-modal__title" id="service-modal-title">
                {service.title}
              </h2>

              <p
                className="service-modal__description"
                id="service-modal-description"
              >
                {service.longDescription}
              </p>

              {service.includes?.length > 0 && (
                <section className="service-modal__section">
                  <h3>¿Qué incluye?</h3>

                  <ul className="service-modal__includes">
                    {service.includes.map((item) => (
                      <li key={item}>
                        <Check size={17} strokeWidth={2} aria-hidden="true" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {service.optional?.length > 0 && (
                <section className="service-modal__section">
                  <h3>Servicios adicionales</h3>

                  <div className="service-modal__optional">
                    {service.optional.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </section>
              )}

              <p className="service-modal__note">
                Cada propuesta se adapta al lugar, cantidad de invitados y
                estilo de la celebración.
              </p>

              <div className="service-modal__actions">
                <Button to="/contacto" variant="primary" onClick={requestClose}>
                  Cotizar este servicio
                </Button>

                <button
                  className="service-modal__secondary-action"
                  type="button"
                  onClick={requestClose}
                >
                  <ArrowLeft size={17} strokeWidth={1.8} aria-hidden="true" />

                  <span>Volver a los servicios</span>
                </button>
              </div>
            </motion.div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ServiceModal;

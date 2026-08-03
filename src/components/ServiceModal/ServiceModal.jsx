import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Button from "../Button/Button";

import "./ServiceModal.css";

const CLOSING_ANIMATION_DURATION = 500;

function ServiceModal({ service, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const isClosingRef = useRef(false);
  const onCloseRef = useRef(onClose);

  const images =
    service.images?.length > 0 ? service.images : ["/assets/img/events/01.JPG"];

  const activeImage = images[activeImageIndex] || images[0];

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const requestClose = () => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;
    setIsClosing(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const closingDelay = prefersReducedMotion ? 0 : CLOSING_ANIMATION_DURATION;

    closeTimeoutRef.current = window.setTimeout(() => {
      onCloseRef.current();
    }, closingDelay);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement = document.activeElement;

    document.body.style.overflow = "hidden";

    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

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

      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }

      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;

      previouslyFocusedElement?.focus?.();
    };
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      requestClose();
    }
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/assets/img/events/01.JPG";
  };

  return createPortal(
    <div
      className={`service-modal ${
        isClosing ? "service-modal--closing" : "service-modal--opening"
      }`}
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <article
        ref={dialogRef}
        className="service-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
      >
        <button
          ref={closeButtonRef}
          className="service-modal__close"
          type="button"
          aria-label="Cerrar información del servicio"
          onClick={requestClose}
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="service-modal__gallery">
          <div className="service-modal__main-image">
            <img
              key={activeImage}
              src={activeImage}
              alt={`${service.title}, fotografía ${activeImageIndex + 1}`}
              onError={handleImageError}
            />
          </div>

          {images.length > 1 && (
            <div
              className="service-modal__thumbnails"
              aria-label="Galería de fotografías"
            >
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={`service-modal__thumbnail ${
                    activeImageIndex === index
                      ? "service-modal__thumbnail--active"
                      : ""
                  }`}
                  type="button"
                  aria-label={`Ver fotografía ${index + 1}`}
                  aria-pressed={activeImageIndex === index}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    onError={handleImageError}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="service-modal__content">
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
            <div className="service-modal__section">
              <h3>¿Qué incluye?</h3>

              <ul className="service-modal__includes">
                {service.includes.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.optional?.length > 0 && (
            <div className="service-modal__section">
              <h3>Servicios adicionales</h3>

              <div className="service-modal__optional">
                {service.optional.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          )}

          <p className="service-modal__note">
            Cada propuesta se adapta al lugar, cantidad de invitados y estilo de
            la celebración.
          </p>

          <div className="service-modal__actions">
            <Button to="/contacto" variant="primary" onClick={onClose}>
              Cotizar este servicio
            </Button>

            <button
              className="service-modal__secondary-action"
              type="button"
              onClick={requestClose}
            >
              Volver a los servicios
            </button>
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}

export default ServiceModal;

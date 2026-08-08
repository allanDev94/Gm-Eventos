import { useRef, useState } from "react";

import {
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { availableServices, eventTypes } from "../../data/contactData";

import {
  CONTACT_LIMITS,
  getLocalDate,
  validateContactField,
  validateContactForm,
} from "../../validation/contactValidation";

import { buildWhatsAppMessage, createWhatsAppUrl } from "../../utils/whatsapp";

import { contactColumnVariants } from "../../animations/contactAnimations";

import ContactSuccess from "../ContactSuccess/ContactSuccess";

import "./ContactForm.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  services: [],
  message: "",
};

function ContactForm() {
  const shouldReduceMotion = useReducedMotion();
  const formRef = useRef(null);

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setSubmitError("");
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    const fieldError = validateContactField(name, formData);

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: fieldError,
    }));
  };

  const handleServiceChange = (serviceId) => {
    setFormData((currentData) => {
      const isSelected = currentData.services.includes(serviceId);

      return {
        ...currentData,
        services: isSelected
          ? currentData.services.filter((service) => service !== serviceId)
          : [...currentData.services, serviceId],
      };
    });

    setErrors((currentErrors) => ({
      ...currentErrors,
      services: "",
    }));

    setSubmitError("");
  };

  const focusFirstError = (validationErrors) => {
    const firstError = Object.keys(validationErrors)[0];

    if (!firstError) {
      return;
    }

    requestAnimationFrame(() => {
      const form = formRef.current;

      if (!form) {
        return;
      }

      const target =
        firstError === "services"
          ? form.querySelector('input[name="services"]')
          : form.querySelector(`[name="${firstError}"]`);

      target?.focus();
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitError("");

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      focusFirstError(validationErrors);
      return;
    }

    try {
      const phoneNumber = import.meta.env.VITE_GM_WHATSAPP_NUMBER;

      const message = buildWhatsAppMessage(
        formData,
        eventTypes,
        availableServices,
      );

      const whatsappUrl = createWhatsAppUrl(phoneNumber, message);

      /*
       * Abrimos WhatsApp solamente en una nueva pestaña.
       * No usamos window.location ni ningún fallback
       * que reemplace la página actual.
       */
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setErrors({});
      setSubmitted(true);
    } catch {
      setSubmitError(
        "No pudimos preparar WhatsApp en este momento. Inténtalo nuevamente.",
      );
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError("");
    setSubmitted(false);
  };

  if (submitted) {
    return <ContactSuccess onReset={handleReset} />;
  }

  return (
    <motion.form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
      variants={contactColumnVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
    >
      <header className="contact-form__header">
        <div>
          <p>Solicitud de cotización</p>

          <h2>Datos principales del evento</h2>
        </div>

        <span>Campos obligatorios *</span>
      </header>

      <div className="contact-form__grid">
        {/* NOMBRE */}
        <div className="contact-form__field">
          <label htmlFor="contact-name">Nombre completo *</label>

          <div className="contact-form__control">
            <UserRound size={18} strokeWidth={1.8} aria-hidden="true" />

            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tu nombre"
              autoComplete="name"
              maxLength={CONTACT_LIMITS.name}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
          </div>

          {errors.name && (
            <span className="contact-form__error" id="contact-name-error">
              {errors.name}
            </span>
          )}
        </div>

        {/* CORREO */}
        <div className="contact-form__field">
          <label htmlFor="contact-email">Correo electrónico *</label>

          <div className="contact-form__control">
            <Mail size={18} strokeWidth={1.8} aria-hidden="true" />

            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="correo@ejemplo.cl"
              autoComplete="email"
              maxLength={CONTACT_LIMITS.email}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
            />
          </div>

          {errors.email && (
            <span className="contact-form__error" id="contact-email-error">
              {errors.email}
            </span>
          )}
        </div>

        {/* TELÉFONO */}
        <div className="contact-form__field">
          <label htmlFor="contact-phone">Teléfono *</label>

          <div className="contact-form__control">
            <Phone size={18} strokeWidth={1.8} aria-hidden="true" />

            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+56 9 1234 5678"
              autoComplete="tel"
              inputMode="tel"
              maxLength={CONTACT_LIMITS.phone}
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "contact-phone-error" : undefined
              }
            />
          </div>

          {errors.phone && (
            <span className="contact-form__error" id="contact-phone-error">
              {errors.phone}
            </span>
          )}
        </div>

        {/* TIPO DE EVENTO */}
        <div className="contact-form__field">
          <label htmlFor="contact-event-type">Tipo de evento *</label>

          <div className="contact-form__control">
            <select
              id="contact-event-type"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-invalid={Boolean(errors.eventType)}
              aria-describedby={
                errors.eventType ? "contact-event-type-error" : undefined
              }
            >
              {eventTypes.map((eventType) => (
                <option
                  key={eventType.value || "empty"}
                  value={eventType.value}
                >
                  {eventType.label}
                </option>
              ))}
            </select>
          </div>

          {errors.eventType && (
            <span className="contact-form__error" id="contact-event-type-error">
              {errors.eventType}
            </span>
          )}
        </div>

        {/* FECHA */}
        <div className="contact-form__field">
          <label htmlFor="contact-date">Fecha aproximada</label>

          <div className="contact-form__control">
            <CalendarDays size={18} strokeWidth={1.8} aria-hidden="true" />

            <input
              id="contact-date"
              type="date"
              name="eventDate"
              value={formData.eventDate}
              min={getLocalDate()}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.eventDate)}
              aria-describedby={
                errors.eventDate ? "contact-date-error" : undefined
              }
            />
          </div>

          {errors.eventDate && (
            <span className="contact-form__error" id="contact-date-error">
              {errors.eventDate}
            </span>
          )}
        </div>

        {/* UBICACIÓN */}
        <div className="contact-form__field">
          <label htmlFor="contact-location">Comuna o ubicación *</label>

          <div className="contact-form__control">
            <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />

            <input
              id="contact-location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ej. Maipú, Santiago"
              maxLength={CONTACT_LIMITS.location}
              required
              aria-invalid={Boolean(errors.location)}
              aria-describedby={
                errors.location ? "contact-location-error" : undefined
              }
            />
          </div>

          {errors.location && (
            <span className="contact-form__error" id="contact-location-error">
              {errors.location}
            </span>
          )}
        </div>

        {/* SERVICIOS */}
        <fieldset
          className="contact-form__services"
          aria-describedby={
            errors.services ? "contact-services-error" : undefined
          }
        >
          <legend>Servicios requeridos *</legend>

          <div className="contact-form__service-options">
            {availableServices.map((service) => {
              const isSelected = formData.services.includes(service.id);

              return (
                <label
                  key={service.id}
                  className={
                    isSelected
                      ? "contact-form__service contact-form__service--selected"
                      : "contact-form__service"
                  }
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service.id}
                    checked={isSelected}
                    onChange={() => handleServiceChange(service.id)}
                  />

                  <span>{service.label}</span>
                </label>
              );
            })}
          </div>

          {errors.services && (
            <span className="contact-form__error" id="contact-services-error">
              {errors.services}
            </span>
          )}
        </fieldset>

        {/* MENSAJE */}
        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-message">
            Cuéntanos brevemente sobre tu evento *
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Cantidad aproximada de invitados, lugar, horario o detalles importantes."
            rows={3}
            maxLength={CONTACT_LIMITS.message}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-count"
            }
          />

          <div className="contact-form__field-footer">
            <div>
              {errors.message && (
                <span
                  className="contact-form__error"
                  id="contact-message-error"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <span className="contact-form__counter" id="contact-message-count">
              {formData.message.length}/{CONTACT_LIMITS.message}
            </span>
          </div>
        </div>
      </div>

      {/* ERROR GENERAL */}
      {submitError && (
        <p className="contact-form__submit-error" role="alert">
          {submitError}
        </p>
      )}

      {/* BOTÓN */}
      <button className="contact-form__submit" type="submit">
        <span>Continuar por WhatsApp</span>

        <MessageCircle size={19} strokeWidth={1.9} aria-hidden="true" />
      </button>

      {/* PRIVACIDAD */}
      <p className="contact-form__privacy">
        Tus datos serán utilizados únicamente para gestionar y responder tu
        solicitud de cotización. Este formulario no guarda una copia de tus
        datos en el sitio.
      </p>
    </motion.form>
  );
}

export default ContactForm;

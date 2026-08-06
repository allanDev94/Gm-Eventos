import { useState } from "react";

import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { availableServices, eventTypes } from "../../data/contactData";

import { validateContactForm } from "../../validation/contactValidation";
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

function getLocalDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function ContactForm() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return <ContactSuccess onReset={handleReset} />;
  }

  return (
    <motion.form
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
              placeholder="Tu nombre"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
            />
          </div>

          {errors.name && (
            <span className="contact-form__error">{errors.name}</span>
          )}
        </div>

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
              placeholder="correo@ejemplo.cl"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
            />
          </div>

          {errors.email && (
            <span className="contact-form__error">{errors.email}</span>
          )}
        </div>

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
              placeholder="+56 9 1234 5678"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
            />
          </div>

          {errors.phone && (
            <span className="contact-form__error">{errors.phone}</span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-event-type">Tipo de evento *</label>

          <div className="contact-form__control">
            <select
              id="contact-event-type"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              aria-invalid={Boolean(errors.eventType)}
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
            <span className="contact-form__error">{errors.eventType}</span>
          )}
        </div>

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
            />
          </div>
        </div>

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
              placeholder="Ej. Maipú, Santiago"
              aria-invalid={Boolean(errors.location)}
            />
          </div>

          {errors.location && (
            <span className="contact-form__error">{errors.location}</span>
          )}
        </div>

        <fieldset className="contact-form__services">
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
                    checked={isSelected}
                    onChange={() => handleServiceChange(service.id)}
                  />

                  <span>{service.label}</span>
                </label>
              );
            })}
          </div>

          {errors.services && (
            <span className="contact-form__error">{errors.services}</span>
          )}
        </fieldset>

        <div className="contact-form__field contact-form__field--full">
          <label htmlFor="contact-message">
            Cuéntanos brevemente sobre tu evento *
          </label>

          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cantidad aproximada de invitados, lugar, horario o detalles importantes."
            rows={3}
            aria-invalid={Boolean(errors.message)}
          />

          {errors.message && (
            <span className="contact-form__error">{errors.message}</span>
          )}
        </div>
      </div>

      <button className="contact-form__submit" type="submit">
        <span>Solicitar cotización</span>

        <Send size={19} strokeWidth={1.9} aria-hidden="true" />
      </button>
    </motion.form>
  );
}

export default ContactForm;

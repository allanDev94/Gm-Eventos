import {
  availableServices,
  eventTypes,
} from "../../../src/sections/Contact/data/contactOptions";

import { CONTACT_LIMITS } from "../../../src/sections/Contact/validation/contactValidation";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidEventType(eventType) {
  return eventTypes.some(
    (option) => option.value && option.value === eventType,
  );
}

function areValidServices(services) {
  const validServiceIds = new Set(
    availableServices.map((service) => service.id),
  );

  return services.every((serviceId) => validServiceIds.has(serviceId));
}

function isValidCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);

  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function getChileDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Santiago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

export function validateContactData(data) {
  const errors = {};

  /* ========================================
     NOMBRE
  ======================================== */

  if (!data.name) {
    errors.name = "Ingresa tu nombre.";
  } else if (data.name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  } else if (data.name.length > CONTACT_LIMITS.name) {
    errors.name = `El nombre no puede superar ${CONTACT_LIMITS.name} caracteres.`;
  }

  /* ========================================
     CORREO
  ======================================== */

  if (!data.email) {
    errors.email = "Ingresa tu correo.";
  } else if (data.email.length > CONTACT_LIMITS.email) {
    errors.email = "El correo ingresado es demasiado largo.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Ingresa un correo válido.";
  }

  /* ========================================
     TELÉFONO
  ======================================== */

  const phoneDigits = data.phone.replace(/\D/g, "");

  if (!data.phone) {
    errors.phone = "Ingresa tu teléfono.";
  } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = "Ingresa un teléfono válido.";
  }

  /* ========================================
     TIPO DE EVENTO
  ======================================== */

  if (!data.eventType) {
    errors.eventType = "Selecciona el tipo de evento.";
  } else if (!isValidEventType(data.eventType)) {
    errors.eventType = "Selecciona un tipo de evento válido.";
  }

  /* ========================================
     FECHA
  ======================================== */

  if (data.eventDate) {
    if (!isValidCalendarDate(data.eventDate)) {
      errors.eventDate = "Ingresa una fecha válida.";
    } else if (data.eventDate < getChileDate()) {
      errors.eventDate = "La fecha del evento no puede ser anterior a hoy.";
    }
  }

  /* ========================================
     UBICACIÓN
  ======================================== */

  if (!data.location) {
    errors.location = "Indica la comuna o ubicación.";
  } else if (data.location.length < 2) {
    errors.location = "Ingresa una ubicación válida.";
  } else if (data.location.length > CONTACT_LIMITS.location) {
    errors.location = `La ubicación no puede superar ${CONTACT_LIMITS.location} caracteres.`;
  }

  /* ========================================
     SERVICIOS
  ======================================== */

  if (!Array.isArray(data.services) || data.services.length === 0) {
    errors.services = "Selecciona al menos un servicio.";
  } else if (new Set(data.services).size !== data.services.length) {
    errors.services = "Los servicios seleccionados contienen duplicados.";
  } else if (!areValidServices(data.services)) {
    errors.services = "Selecciona servicios válidos.";
  }

  /* ========================================
     MENSAJE
  ======================================== */

  if (!data.message) {
    errors.message = "Cuéntanos brevemente sobre tu evento.";
  } else if (data.message.length < 10) {
    errors.message = "Escribe al menos 10 caracteres.";
  } else if (data.message.length > CONTACT_LIMITS.message) {
    errors.message = `El mensaje no puede superar ${CONTACT_LIMITS.message} caracteres.`;
  }

  /* ========================================
     PRIVACIDAD
  ======================================== */

  if (data.privacyAccepted !== true) {
    errors.privacyAccepted =
      "Debes aceptar la Política de Privacidad para enviar la solicitud.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

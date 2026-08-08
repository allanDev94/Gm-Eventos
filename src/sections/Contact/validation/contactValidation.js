import { availableServices, eventTypes } from "../data/contactData";

export const CONTACT_LIMITS = {
  name: 80,
  email: 120,
  phone: 20,
  location: 100,
  message: 800,
};

export function getLocalDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

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

export function validateContactField(fieldName, formData) {
  const value = formData[fieldName];

  switch (fieldName) {
    case "name": {
      const cleanName = value.trim();

      if (!cleanName) {
        return "Ingresa tu nombre.";
      }

      if (cleanName.length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
      }

      if (cleanName.length > CONTACT_LIMITS.name) {
        return `El nombre no puede superar ${CONTACT_LIMITS.name} caracteres.`;
      }

      return "";
    }

    case "email": {
      const cleanEmail = value.trim();

      if (!cleanEmail) {
        return "Ingresa tu correo.";
      }

      if (cleanEmail.length > CONTACT_LIMITS.email) {
        return "El correo ingresado es demasiado largo.";
      }

      if (!isValidEmail(cleanEmail)) {
        return "Ingresa un correo válido.";
      }

      return "";
    }

    case "phone": {
      const cleanPhone = value.replace(/\D/g, "");

      if (!value.trim()) {
        return "Ingresa tu teléfono.";
      }

      if (cleanPhone.length < 8 || cleanPhone.length > 15) {
        return "Ingresa un teléfono válido.";
      }

      return "";
    }

    case "eventType": {
      if (!value) {
        return "Selecciona el tipo de evento.";
      }

      if (!isValidEventType(value)) {
        return "Selecciona un tipo de evento válido.";
      }

      return "";
    }

    case "eventDate": {
      if (!value) {
        return "";
      }

      if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return "Ingresa una fecha válida.";
      }

      if (value < getLocalDate()) {
        return "La fecha del evento no puede ser anterior a hoy.";
      }

      return "";
    }

    case "location": {
      const cleanLocation = value.trim();

      if (!cleanLocation) {
        return "Indica la comuna o ubicación.";
      }

      if (cleanLocation.length < 2) {
        return "Ingresa una ubicación válida.";
      }

      if (cleanLocation.length > CONTACT_LIMITS.location) {
        return `La ubicación no puede superar ${CONTACT_LIMITS.location} caracteres.`;
      }

      return "";
    }

    case "services": {
      if (!Array.isArray(value) || value.length === 0) {
        return "Selecciona al menos un servicio.";
      }

      if (!areValidServices(value)) {
        return "Selecciona servicios válidos.";
      }

      return "";
    }

    case "message": {
      const cleanMessage = value.trim();

      if (!cleanMessage) {
        return "Cuéntanos brevemente sobre tu evento.";
      }

      if (cleanMessage.length < 10) {
        return "Escribe al menos 10 caracteres.";
      }

      if (cleanMessage.length > CONTACT_LIMITS.message) {
        return `El mensaje no puede superar ${CONTACT_LIMITS.message} caracteres.`;
      }

      return "";
    }

    default:
      return "";
  }
}

export function validateContactForm(formData) {
  const fields = [
    "name",
    "email",
    "phone",
    "eventType",
    "eventDate",
    "location",
    "services",
    "message",
  ];

  return fields.reduce((errors, fieldName) => {
    const error = validateContactField(fieldName, formData);

    if (error) {
      errors[fieldName] = error;
    }

    return errors;
  }, {});
}

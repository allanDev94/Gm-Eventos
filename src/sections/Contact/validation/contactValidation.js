export function validateContactForm(formData) {
  const errors = {};

  const cleanPhone = formData.phone.replace(/\D/g, "");

  if (!formData.name.trim()) {
    errors.name = "Ingresa tu nombre.";
  } else if (formData.name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!formData.email.trim()) {
    errors.email = "Ingresa tu correo.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Ingresa un correo válido.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Ingresa tu teléfono.";
  } else if (cleanPhone.length < 8 || cleanPhone.length > 12) {
    errors.phone = "Ingresa un teléfono válido.";
  }

  if (!formData.eventType) {
    errors.eventType = "Selecciona el tipo de evento.";
  }

  if (!formData.location.trim()) {
    errors.location = "Indica la comuna o ubicación.";
  }

  if (formData.services.length === 0) {
    errors.services = "Selecciona al menos un servicio.";
  }

  if (!formData.message.trim()) {
    errors.message = "Cuéntanos brevemente sobre tu evento.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Escribe al menos 10 caracteres.";
  }

  return errors;
}

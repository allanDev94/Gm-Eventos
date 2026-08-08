function cleanText(value = "") {
  return value.trim().replace(/\s+/g, " ");
}

function getOptionLabel(options, value) {
  return options.find((option) => option.value === value)?.label || value;
}

function getServiceLabels(services, availableServices) {
  return services
    .map(
      (serviceId) =>
        availableServices.find((service) => service.id === serviceId)?.label,
    )
    .filter(Boolean);
}

export function buildWhatsAppMessage(formData, eventTypes, availableServices) {
  const eventType = getOptionLabel(eventTypes, formData.eventType);

  const services = getServiceLabels(formData.services, availableServices);

  const eventDate = formData.eventDate
    ? formData.eventDate.split("-").reverse().join("/")
    : "Por definir";

  return [
    "Hola GM Eventos 👋",
    "",
    "Quiero solicitar una cotización para mi evento.",
    "",
    `*Nombre:* ${cleanText(formData.name)}`,
    `*Correo:* ${cleanText(formData.email)}`,
    `*Teléfono:* ${cleanText(formData.phone)}`,
    `*Tipo de evento:* ${eventType}`,
    `*Fecha:* ${eventDate}`,
    `*Ubicación:* ${cleanText(formData.location)}`,
    `*Servicios:* ${services.join(", ")}`,
    "",
    "*Detalles del evento:*",
    formData.message.trim(),
  ].join("\n");
}

export function createWhatsAppUrl(phoneNumber, message) {
  const cleanNumber = phoneNumber?.replace(/\D/g, "");

  if (!cleanNumber) {
    throw new Error("El número de WhatsApp de GM Eventos no está configurado.");
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

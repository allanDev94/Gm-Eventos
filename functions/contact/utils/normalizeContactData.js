function normalizeSingleLine(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ");
}

function normalizeMultiline(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").trim();
}

function normalizeServices(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((service) => typeof service === "string")
    .map((service) => normalizeSingleLine(service))
    .filter(Boolean);
}

export function normalizeContactData(source = {}) {
  return {
    name: normalizeSingleLine(source.name),

    email: normalizeSingleLine(source.email).toLowerCase(),

    phone: normalizeSingleLine(source.phone),

    eventType: normalizeSingleLine(source.eventType),

    eventDate: normalizeSingleLine(source.eventDate),

    location: normalizeSingleLine(source.location),

    services: normalizeServices(source.services),

    message: normalizeMultiline(source.message),

    privacyAccepted: source.privacyAccepted === true,
  };
}

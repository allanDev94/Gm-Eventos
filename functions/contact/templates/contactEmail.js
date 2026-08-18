import {
  availableServices,
  eventTypes,
} from "../../../src/sections/Contact/data/contactOptions";

import { CONTACT_PRIVACY_VERSION } from "../../../src/sections/Contact/data/privacyPolicy";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getEventTypeLabel(eventType) {
  const option = eventTypes.find((item) => item.value === eventType);

  return option?.label || eventType;
}

function getServiceLabels(serviceIds = []) {
  return serviceIds.map((serviceId) => {
    const service = availableServices.find((item) => item.id === serviceId);

    return service?.label || serviceId;
  });
}

function formatEventDate(value) {
  if (!value) {
    return "No indicada";
  }

  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${day}-${month}-${year}`;
}

function formatReceivedAt(value) {
  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "No disponible";
  }

  return new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function buildContactEmail(contactData, receivedAt = new Date()) {
  const eventTypeLabel = getEventTypeLabel(contactData.eventType);
  const serviceLabels = getServiceLabels(contactData.services);

  const eventDate = formatEventDate(contactData.eventDate);
  const receivedAtFormatted = formatReceivedAt(receivedAt);

  const subject = `Nueva cotización - ${eventTypeLabel} - ${contactData.name}`;

  const text = `
Nueva solicitud de cotización

DATOS DE CONTACTO

Nombre: ${contactData.name}
Correo: ${contactData.email}
Teléfono: ${contactData.phone}

DATOS DEL EVENTO

Tipo de evento: ${eventTypeLabel}
Fecha aproximada: ${eventDate}
Comuna o ubicación: ${contactData.location}

Servicios requeridos:
${serviceLabels.map((service) => `- ${service}`).join("\n")}

MENSAJE

${contactData.message}

PRIVACIDAD

Consentimiento de privacidad: ${contactData.privacyAccepted ? "Sí" : "No"}
Versión de la política: ${CONTACT_PRIVACY_VERSION}
Solicitud recibida: ${receivedAtFormatted}
Zona horaria: America/Santiago

Puedes responder directamente a este correo para contactar al cliente.
`.trim();

  const servicesHtml = serviceLabels
    .map((service) => `<li>${escapeHtml(service)}</li>`)
    .join("");

  const html = `
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nueva solicitud de cotización</title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f4f5;
      font-family: Arial, Helvetica, sans-serif;
      color: #18181b;
    "
  >
    <div
      style="
        width: 100%;
        padding: 32px 16px;
        box-sizing: border-box;
      "
    >
      <div
        style="
          max-width: 680px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e4e4e7;
        "
      >
        <div
          style="
            padding: 28px 32px;
            background-color: #10051c;
            color: #ffffff;
          "
        >
          <p
            style="
              margin: 0 0 8px;
              color: #ff006e;
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
            "
          >
            GM Eventos
          </p>

          <h1
            style="
              margin: 0;
              font-size: 26px;
              line-height: 1.25;
            "
          >
            Nueva solicitud de cotización
          </h1>
        </div>

        <div style="padding: 32px;">
          <h2
            style="
              margin: 0 0 18px;
              font-size: 18px;
            "
          >
            Datos de contacto
          </h2>

          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              margin-bottom: 32px;
              border-collapse: collapse;
            "
          >
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Nombre</td>
              <td style="padding: 8px 0;">
                ${escapeHtml(contactData.name)}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Correo</td>
              <td style="padding: 8px 0;">
                ${escapeHtml(contactData.email)}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Teléfono</td>
              <td style="padding: 8px 0;">
                ${escapeHtml(contactData.phone)}
              </td>
            </tr>
          </table>

          <h2
            style="
              margin: 0 0 18px;
              font-size: 18px;
            "
          >
            Datos del evento
          </h2>

          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              margin-bottom: 24px;
              border-collapse: collapse;
            "
          >
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">
                Tipo de evento
              </td>

              <td style="padding: 8px 0;">
                ${escapeHtml(eventTypeLabel)}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 0; font-weight: 700;">
                Fecha aproximada
              </td>

              <td style="padding: 8px 0;">
                ${escapeHtml(eventDate)}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 0; font-weight: 700;">
                Ubicación
              </td>

              <td style="padding: 8px 0;">
                ${escapeHtml(contactData.location)}
              </td>
            </tr>
          </table>

          <h3
            style="
              margin: 0 0 10px;
              font-size: 16px;
            "
          >
            Servicios requeridos
          </h3>

          <ul
            style="
              margin: 0 0 32px;
              padding-left: 20px;
              line-height: 1.7;
            "
          >
            ${servicesHtml}
          </ul>

          <h2
            style="
              margin: 0 0 12px;
              font-size: 18px;
            "
          >
            Mensaje
          </h2>

          <div
            style="
              margin-bottom: 32px;
              padding: 18px;
              background-color: #f4f4f5;
              border-radius: 10px;
              white-space: pre-wrap;
              line-height: 1.6;
            "
          >${escapeHtml(contactData.message)}</div>

          <div
            style="
              padding: 18px;
              background-color: #faf5ff;
              border: 1px solid #e9d5ff;
              border-radius: 10px;
            "
          >
            <h2
              style="
                margin: 0 0 14px;
                font-size: 16px;
              "
            >
              Registro de privacidad
            </h2>

            <p style="margin: 6px 0;">
              <strong>Consentimiento:</strong>
              ${contactData.privacyAccepted ? "Sí" : "No"}
            </p>

            <p style="margin: 6px 0;">
              <strong>Versión de la política:</strong>
              ${escapeHtml(CONTACT_PRIVACY_VERSION)}
            </p>

            <p style="margin: 6px 0;">
              <strong>Solicitud recibida:</strong>
              ${escapeHtml(receivedAtFormatted)}
            </p>

            <p style="margin: 6px 0;">
              <strong>Zona horaria:</strong>
              America/Santiago
            </p>
          </div>

          <p
            style="
              margin: 28px 0 0;
              color: #71717a;
              font-size: 13px;
              line-height: 1.6;
            "
          >
            Puedes responder directamente a este correo para contactar al
            cliente.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`.trim();

  return {
    subject,
    text,
    html,
  };
}

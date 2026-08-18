import { buildContactEmail } from "../templates/contactEmail";

const RESEND_API_URL = "https://api.resend.com/emails";

export async function sendContactEmail({
  apiKey,
  from,
  to,
  contactData,
  receivedAt,
}) {
  if (!apiKey) {
    throw new Error("RESEND_API_KEY no está configurada.");
  }

  if (!from) {
    throw new Error("CONTACT_FROM_EMAIL no está configurado.");
  }

  if (!to) {
    throw new Error("CONTACT_TO_EMAIL no está configurado.");
  }

  const { subject, text, html } = buildContactEmail(contactData, receivedAt);

  const response = await fetch(RESEND_API_URL, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      from,
      to: [to],

      reply_to: contactData.email,

      subject,
      text,
      html,
    }),
  });

  let result = {};

  try {
    result = await response.json();
  } catch {
    // Resend podría responder sin JSON en un error inesperado.
  }

  if (!response.ok) {
    console.error("Error enviando correo mediante Resend:", {
      status: response.status,
      name: result?.name,
      message: result?.message,
    });

    throw new Error("No pudimos enviar la solicitud por correo.");
  }

  return result;
}

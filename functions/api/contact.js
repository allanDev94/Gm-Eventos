import { sendContactEmail } from "../contact/services/sendContactEmail";
import { verifyTurnstileToken } from "../contact/services/turnstile";

import { normalizeContactData } from "../contact/utils/normalizeContactData";
import { readJsonBody } from "../contact/utils/readJsonBody";

import {
  errorResponse,
  successResponse,
  validationErrorResponse,
} from "../contact/utils/response";

import { validateContactData } from "../contact/validation/contactValidation";

const MAX_BODY_SIZE = 16 * 1024;

function getExpectedTurnstileHostname(request) {
  const hostname = new URL(request.url).hostname;

  /*
   * En desarrollo usamos las claves dummy oficiales de Turnstile.
   * No necesitamos validar hostname en localhost.
   */
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "0.0.0.0"
  ) {
    return undefined;
  }

  /*
   * En producción solo aceptamos tokens generados
   * para el dominio oficial.
   */
  return "gmeventos.cl";
}

export async function onRequestPost(context) {
  const { request, env } = context;

  /* ========================================
     CONTENT TYPE
  ======================================== */

  const contentType = request.headers.get("content-type") || "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return errorResponse(
      "El tipo de contenido de la solicitud no es válido.",
      415,
    );
  }

  /* ========================================
     BODY
  ======================================== */

  const bodyResult = await readJsonBody(request, MAX_BODY_SIZE);

  if (bodyResult.tooLarge) {
    return errorResponse("La solicitud es demasiado grande.", 413);
  }

  if (!bodyResult.ok) {
    return errorResponse("La solicitud contiene JSON inválido.", 400);
  }

  const payload = bodyResult.data;

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return errorResponse("La solicitud no es válida.", 400);
  }

  /* ========================================
     DATOS
  ======================================== */

  const turnstileToken =
    typeof payload.turnstileToken === "string" ? payload.turnstileToken : "";

  const contactData = normalizeContactData(payload);

  /* ========================================
     VALIDACIÓN BACKEND
  ======================================== */

  const validation = validateContactData(contactData);

  if (!validation.isValid) {
    return validationErrorResponse(validation.errors);
  }

  /* ========================================
     TURNSTILE
  ======================================== */

  const remoteIp = request.headers.get("CF-Connecting-IP") || undefined;

  const expectedHostname = getExpectedTurnstileHostname(request);

  let turnstileResult;

  try {
    turnstileResult = await verifyTurnstileToken({
      token: turnstileToken,
      secret: env.TURNSTILE_SECRET_KEY,
      remoteIp,
      expectedHostname,
    });
  } catch (error) {
    console.error("Error verificando Turnstile:", error?.message);

    return errorResponse(
      "No pudimos completar la verificación de seguridad. Inténtalo nuevamente.",
      503,
    );
  }

  if (!turnstileResult.success) {
    return errorResponse(
      "La verificación de seguridad no fue válida. Inténtalo nuevamente.",
      400,
    );
  }

  /* ========================================
     FECHA DE RECEPCIÓN
  ======================================== */

  const receivedAt = new Date();

  /* ========================================
     ENVÍO DE CORREO
  ======================================== */

  try {
    await sendContactEmail({
      apiKey: env.RESEND_API_KEY,

      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,

      contactData,
      receivedAt,
    });
  } catch (error) {
    console.error("Error procesando correo de contacto:", error?.message);

    return errorResponse(
      "Recibimos tu solicitud, pero ocurrió un problema al procesarla. Inténtalo nuevamente.",
      503,
    );
  }

  /* ========================================
     RESPUESTA
  ======================================== */

  return successResponse("Solicitud enviada correctamente.");
}

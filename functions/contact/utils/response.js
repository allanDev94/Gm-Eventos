export function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}

export function successResponse(
  message = "Solicitud procesada correctamente.",
  data = undefined,
) {
  return jsonResponse(
    {
      success: true,
      message,
      ...(data !== undefined && { data }),
    },
    200,
  );
}

export function validationErrorResponse(errors) {
  return jsonResponse(
    {
      success: false,
      message: "Revisa los datos ingresados.",
      errors,
    },
    400,
  );
}

export function errorResponse(
  message = "Ocurrió un error al procesar la solicitud.",
  status = 500,
) {
  return jsonResponse(
    {
      success: false,
      message,
    },
    status,
  );
}

export function methodNotAllowedResponse() {
  return jsonResponse(
    {
      success: false,
      message: "Método no permitido.",
    },
    405,
    {
      Allow: "POST",
    },
  );
}

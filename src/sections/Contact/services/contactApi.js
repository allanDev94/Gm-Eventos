export async function submitContactRequest(formData, turnstileToken) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      turnstileToken,
    }),
  });

  let result;

  try {
    result = await response.json();
  } catch {
    throw new Error(
      "No pudimos interpretar la respuesta del servidor. Inténtalo nuevamente.",
    );
  }

  if (!response.ok) {
    const error = new Error(
      result?.message || "No pudimos procesar tu solicitud.",
    );

    error.status = response.status;
    error.fieldErrors = result?.errors || {};

    throw error;
  }

  return result;
}

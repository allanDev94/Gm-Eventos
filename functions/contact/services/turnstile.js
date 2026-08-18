const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const MAX_TURNSTILE_TOKEN_LENGTH = 2048;

export async function verifyTurnstileToken({
  token,
  secret,
  remoteIp,
  expectedHostname,
}) {
  if (!token || typeof token !== "string") {
    return {
      success: false,
      error: "missing-token",
    };
  }

  if (token.length > MAX_TURNSTILE_TOKEN_LENGTH) {
    return {
      success: false,
      error: "token-too-long",
    };
  }

  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY no está configurada.");
  }

  const body = new FormData();

  body.append("secret", secret);
  body.append("response", token);

  if (remoteIp) {
    body.append("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw new Error(`Turnstile respondió con estado ${response.status}.`);
  }

  const result = await response.json();

  if (!result.success) {
    return {
      success: false,

      errorCodes: Array.isArray(result["error-codes"])
        ? result["error-codes"]
        : [],

      hostname: result.hostname,
    };
  }

  if (expectedHostname && result.hostname !== expectedHostname) {
    return {
      success: false,
      error: "hostname-mismatch",
      hostname: result.hostname,
    };
  }

  return {
    success: true,
    hostname: result.hostname,
  };
}

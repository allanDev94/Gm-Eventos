const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function loadTurnstile() {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }

  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        resolve(window.turnstile);
      });

      existingScript.addEventListener("error", () => {
        reject(new Error("No se pudo cargar Turnstile."));
      });

      return;
    }

    const script = document.createElement("script");

    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      resolve(window.turnstile);
    };

    script.onerror = () => {
      reject(new Error("No se pudo cargar Turnstile."));
    };

    document.head.appendChild(script);
  });
}

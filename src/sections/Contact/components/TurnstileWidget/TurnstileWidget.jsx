import { useEffect, useRef } from "react";

import { loadTurnstile } from "../../utils/loadTurnstile";

import "./TurnstileWidget.css";

function TurnstileWidget({ onVerify, onExpire, onError }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    let isMounted = true;

    if (!siteKey || !containerRef.current) {
      onError?.();
      return undefined;
    }

    loadTurnstile()
      .then((turnstile) => {
        if (!isMounted || !containerRef.current) {
          return;
        }

        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "dark",
          size: "normal",

          callback(token) {
            onVerify?.(token);
          },

          "expired-callback"() {
            onExpire?.();
          },

          "error-callback"() {
            onError?.();
          },
        });
      })
      .catch(() => {
        onError?.();
      });

    return () => {
      isMounted = false;

      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify, onExpire, onError]);

  return (
    <div className="turnstile-widget">
      <div ref={containerRef} />
    </div>
  );
}

export default TurnstileWidget;

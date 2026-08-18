import { CircleCheckBig, MessageCircle, RotateCcw } from "lucide-react";

import "./ContactSuccess.css";

function ContactSuccess({ onReset, whatsappUrl }) {
  const handleWhatsApp = () => {
    if (!whatsappUrl) {
      return;
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-success" role="status" aria-live="polite">
      <span className="contact-success__icon">
        <CircleCheckBig size={34} strokeWidth={1.8} aria-hidden="true" />
      </span>

      <div>
        <h3>Solicitud recibida</h3>

        <p>
          Recibimos los datos de tu cotización. Te responderemos a la brevedad.
          Si prefieres, también puedes continuar la conversación por WhatsApp.
        </p>
      </div>

      <div className="contact-success__actions">
        <button type="button" onClick={handleWhatsApp}>
          <MessageCircle size={17} strokeWidth={1.9} aria-hidden="true" />
          Continuar por WhatsApp
        </button>

        <button type="button" onClick={onReset}>
          <RotateCcw size={17} strokeWidth={1.9} aria-hidden="true" />
          Enviar otra consulta
        </button>
      </div>
    </div>
  );
}

export default ContactSuccess;

import { CircleCheckBig, RotateCcw } from "lucide-react";

import "./ContactSuccess.css";

function ContactSuccess({ onReset }) {
  return (
    <div className="contact-success" role="status" aria-live="polite">
      <span className="contact-success__icon">
        <CircleCheckBig size={34} strokeWidth={1.8} aria-hidden="true" />
      </span>

      <div>
        <h3>Solicitud preparada correctamente</h3>

        <p>
          Recibimos los datos de tu evento. El envío real será conectado
          posteriormente con el correo o servicio que utilizará GM Eventos.
        </p>
      </div>

      <button type="button" onClick={onReset}>
        <RotateCcw size={17} strokeWidth={1.9} aria-hidden="true" />
        Enviar otra consulta
      </button>
    </div>
  );
}

export default ContactSuccess;

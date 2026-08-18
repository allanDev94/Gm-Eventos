import { Link } from "react-router-dom";

import "./PrivacyConsent.css";

function PrivacyConsent({ checked, onChange, error, disabled = false }) {
  return (
    <div className="privacy-consent">
      <label className="privacy-consent__label">
        <input
          type="checkbox"
          name="privacyAccepted"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          disabled={disabled}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "contact-privacy-error" : undefined}
        />

        <span>
          He leído la <Link to="/privacidad">Política de Privacidad</Link> y
          autorizo el tratamiento de mis datos para gestionar mi solicitud de
          cotización. *
        </span>
      </label>

      {error && (
        <span className="privacy-consent__error" id="contact-privacy-error">
          {error}
        </span>
      )}
    </div>
  );
}

export default PrivacyConsent;

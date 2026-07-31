import "./Contact.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

// Reemplazar por el número real de GM Eventos.
// Debe incluir código de país, pero sin +, espacios ni guiones.
const WHATSAPP_NUMBER = "56989340450";

function Contact({ showHeader = true }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const eventType = formData.get("eventType");
    const eventDate = formData.get("eventDate");
    const guests = formData.get("guests");
    const message = formData.get("message");

    const whatsappMessage = `
Hola, soy ${name} y me gustaría cotizar un evento con GM Eventos.

Tipo de evento: ${eventType}
Fecha aproximada: ${eventDate || "Por definir"}
Cantidad de personas: ${guests || "Por definir"}

Teléfono: ${phone}
Correo: ${email || "No informado"}

Detalles:
${message || "Sin detalles adicionales"}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact" id="contacto">
      <Container>
        <div className="contact__layout">
          {showHeader && (
            <div className="contact__information">
              <p className="contact__eyebrow">Hablemos de tu evento</p>

              <h2 className="contact__title">
                Cuéntanos tu idea y creemos algo memorable
              </h2>

              <p className="contact__description">
                Completa el formulario con la información principal de tu
                evento. Prepararemos una propuesta adaptada a tus necesidades,
                espacio y cantidad de invitados.
              </p>

              <div className="contact__details">
                <a
                  className="contact-detail"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-detail__label">WhatsApp</span>
                  <strong>Escríbenos directamente</strong>
                </a>

                <a
                  className="contact-detail"
                  href="mailto:contacto@gmeventos.cl"
                >
                  <span className="contact-detail__label">Correo</span>
                  <strong>contacto@gmeventos.cl</strong>
                </a>

                <div className="contact-detail">
                  <span className="contact-detail__label">Cobertura</span>
                  <strong>Santiago y alrededores</strong>
                </div>
              </div>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Nombre</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="phone">Teléfono</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+56 9 1234 5678"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Correo electrónico</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.cl"
                autoComplete="email"
              />
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="eventType">Tipo de evento</label>

                <select
                  id="eventType"
                  name="eventType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="Matrimonio">Matrimonio</option>
                  <option value="Evento corporativo">Evento corporativo</option>
                  <option value="Graduación o gala">Graduación o gala</option>
                  <option value="Cumpleaños">Cumpleaños</option>
                  <option value="Fiesta privada">Fiesta privada</option>
                  <option value="Otro tipo de evento">Otro</option>
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="eventDate">Fecha aproximada</label>

                <input type="date" id="eventDate" name="eventDate" />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="guests">Cantidad aproximada de personas</label>

              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                placeholder="Ejemplo: 150"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Cuéntanos sobre tu evento</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Lugar, horario, servicios que necesitas u otros detalles importantes..."
              />
            </div>

            <Button type="submit" variant="primary">
              Enviar solicitud por WhatsApp
            </Button>

            <p className="contact-form__notice">
              Al enviar, se abrirá WhatsApp con la información ingresada.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;

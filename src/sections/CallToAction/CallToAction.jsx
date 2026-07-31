import "./CallToAction.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

function CallToAction() {
  return (
    <section className="call-to-action" aria-labelledby="call-to-action-title">
      <Container>
        <div className="call-to-action__content">
          <div className="call-to-action__text">
            <p className="call-to-action__eyebrow">
              Hagamos realidad tu evento
            </p>

            <h2 className="call-to-action__title" id="call-to-action-title">
              Cuéntanos tu idea y preparemos una experiencia memorable
            </h2>

            <p className="call-to-action__description">
              Conversemos sobre el tipo de evento, la cantidad de invitados y
              los servicios que necesitas. Prepararemos una propuesta adaptada a
              tu celebración.
            </p>
          </div>

          <div className="call-to-action__actions">
            <Button to="/contacto" variant="primary">
              Solicitar cotización
            </Button>

            <Button to="/servicios" variant="secondary">
              Explorar servicios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;

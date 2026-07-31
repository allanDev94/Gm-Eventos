import "./Hero.css";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay" />

      <Container>
        <div className="hero__content">
          <p className="hero__eyebrow">Producción de eventos</p>

          <h1 className="hero__title">
            Creamos momentos que se convierten en recuerdos
          </h1>

          <p className="hero__description">
            Sonido, iluminación, DJ y producción para matrimonios, eventos
            corporativos, graduaciones y celebraciones.
          </p>

          <div className="hero__actions">
            <Button to="/contacto">Cotizar evento</Button>

            <Button to="/servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

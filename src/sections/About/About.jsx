import "./About.css";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import { RevealGroup, RevealItem } from "../../components/Reveal/Reveal";

const FALLBACK_IMAGE = "/assets/img/events/01.JPG";

const processSteps = [
  {
    id: "01",
    theme: "violet",
    image: "/assets/img/about/process/conversation.svg",
    title: "Conversamos sobre tu idea",
    description:
      "Conocemos el tipo de evento, el lugar, la cantidad de invitados y la experiencia que deseas crear.",
  },
  {
    id: "02",
    theme: "pink",
    image: "/assets/img/about/process/planning.svg",
    title: "Diseñamos una propuesta",
    description:
      "Seleccionamos los servicios y equipos adecuados según las características de tu celebración.",
  },
  {
    id: "03",
    theme: "coral",
    image: "/assets/img/about/process/coordination.svg",
    title: "Coordinamos cada detalle",
    description:
      "Organizamos el montaje, los horarios, la música y los requerimientos técnicos antes del evento.",
  },
  {
    id: "04",
    theme: "gold",
    image: "/assets/img/about/process/production.svg",
    title: "Producimos tu evento",
    description:
      "Nos encargamos de la ejecución y el apoyo técnico para que puedas disfrutar cada momento.",
  },
];

const values = [
  {
    id: "01",
    title: "Atención personalizada",
    description:
      "Escuchamos cada idea y adaptamos nuestra propuesta al estilo, espacio y necesidades del cliente.",
  },
  {
    id: "02",
    title: "Versatilidad",
    description:
      "Trabajamos en diferentes tipos de celebraciones, espacios y formatos de evento.",
  },
  {
    id: "03",
    title: "Respuesta y soluciones",
    description:
      "Nos anticipamos a los requerimientos técnicos y respondemos de manera eficiente ante los imprevistos.",
  },
  {
    id: "04",
    title: "Calidad profesional",
    description:
      "Utilizamos equipamiento adecuado y una planificación responsable para entregar una producción segura y coordinada.",
  },
];

function About({ showHeader = true }) {
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <section
      className={`about ${!showHeader ? "about--without-header" : ""}`}
      id="nosotros"
    >
      <Container>
        {showHeader && (
          <div className="about__heading">
            <p className="about__eyebrow">Sobre GM Eventos</p>

            <h2 className="about__title">
              Nos involucramos en cada detalle para que disfrutes tu evento
            </h2>
          </div>
        )}

        {/* Quiénes somos */}

        <div className="about__story">
          <div className="about__story-content">
            <p className="about__eyebrow">Quiénes somos</p>

            <h2 className="about__story-title">
              Producción cercana, profesional y adaptada a cada cliente
            </h2>

            <p className="about__lead">
              Creamos experiencias personalizadas para matrimonios, eventos
              corporativos, graduaciones, fiestas y celebraciones privadas.
            </p>

            <p className="about__description">
              En GM Eventos trabajamos junto a cada cliente para conocer su
              idea, entender el tipo de público y diseñar una propuesta que se
              adapte al espacio, estilo y necesidades de la celebración.
            </p>

            <p className="about__description">
              Nuestra prioridad es que puedas disfrutar tu evento con
              tranquilidad, sabiendo que la música, el sonido, la iluminación y
              los detalles técnicos están correctamente coordinados.
            </p>
          </div>

          <figure className="about__media">
            <img
              src="/assets/img/about/about-main.jpg"
              alt="Equipo de GM Eventos preparando la producción de un evento"
              loading="lazy"
              decoding="async"
              onError={handleImageError}
            />

            <figcaption>Dedicación y coordinación en cada montaje.</figcaption>
          </figure>
        </div>

        {/* Nuestra forma de trabajar */}

        <div className="about__process">
          <div className="about__section-heading">
            <div>
              <p className="about__eyebrow">Nuestra forma de trabajar</p>

              <h2>De tu idea a una experiencia memorable</h2>
            </div>

            <p>
              Organizamos cada proyecto mediante un proceso claro que nos
              permite entender tus necesidades, preparar la producción y
              coordinar correctamente cada etapa.
            </p>
          </div>

          <RevealGroup
            className="about__process-grid"
            stagger={0.14}
            delay={0.1}
            amount={0.2}
          >
            {processSteps.map((step) => (
              <RevealItem key={step.id}>
                <article className={`about__step about__step--${step.theme}`}>
                  <div className="about__step-top">
                    <span className="about__step-label">Paso {step.id}</span>
                  </div>

                  <div className="about__step-visual">
                    <img
                      className="about__step-image"
                      src={step.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="about__step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Qué nos diferencia */}

        <div className="about__values-block">
          <div className="about__section-heading">
            <div>
              <p className="about__eyebrow">Qué nos diferencia</p>

              <h2>Una producción pensada para generar confianza</h2>
            </div>

            <p>
              Más que instalar equipos, buscamos comprender la celebración y
              entregar una solución que represente lo que cada cliente desea
              transmitir.
            </p>
          </div>

          <RevealGroup
            className="about__values"
            stagger={0.12}
            delay={0.08}
            amount={0.2}
          >
            {values.map((value) => (
              <RevealItem key={value.id}>
                <article className="about__value">
                  <span className="about__value-number">{value.id}</span>

                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Nuestro compromiso */}

        <div className="about__commitment">
          <div className="about__commitment-media">
            <img
              src="/assets/img/about/about-commitment.jpg"
              alt="Invitados disfrutando de una celebración producida por GM Eventos"
              loading="lazy"
              decoding="async"
              onError={handleImageError}
            />
          </div>

          <div className="about__commitment-content">
            <p className="about__eyebrow">Nuestro compromiso</p>

            <h2>Nos involucramos en cada celebración como si fuera única</h2>

            <p>
              Sabemos que detrás de cada evento existe una historia, una
              celebración o un momento importante. Por eso trabajamos con
              cercanía, responsabilidad y dedicación.
            </p>

            <p>
              Cuidamos cada detalle para crear el ambiente adecuado, resolver
              los requerimientos técnicos y permitir que las personas disfruten
              y construyan buenos recuerdos.
            </p>
          </div>
        </div>

        {/* Llamado final */}

        <div className="about__cta">
          <div>
            <p className="about__eyebrow">Comencemos a planificar</p>

            <h2>Conversemos sobre el evento que estás imaginando</h2>

            <p>
              Cuéntanos tu idea y prepararemos una propuesta adaptada a tu
              celebración.
            </p>
          </div>

          <div className="about__cta-actions">
            <Button to="/contacto" variant="primary">
              Cotizar mi evento
            </Button>

            <Button to="/servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;

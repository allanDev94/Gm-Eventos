import "./Portfolio.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

const events = [
  {
    id: 1,
    title: "Matrimonio",
    category: "Celebración",
    description:
      "Producción de sonido, iluminación, música y efectos para una celebración inolvidable.",
    image: "/assets/img/hero/hero01.jpg",
    imagePosition: "center",
  },
  {
    id: 2,
    title: "Eventos corporativos",
    category: "Empresas",
    description:
      "Soluciones audiovisuales y producción técnica para encuentros, celebraciones y actividades corporativas.",
    image: null,
  },
  {
    id: 3,
    title: "Graduaciones y galas",
    category: "Eventos",
    description:
      "Ambientación, sonido e iluminación para acompañar uno de los momentos más importantes de cada generación.",
    image: null,
  },
];

function Portfolio({ showHeader = true }) {
  return (
    <section className="portfolio" id="eventos">
      <Container>
        {showHeader && (
          <div className="portfolio__header">
            <div>
              <p className="portfolio__eyebrow">Eventos realizados</p>

              <h2 className="portfolio__title">
                Experiencias creadas para momentos únicos
              </h2>
            </div>

            <div className="portfolio__introduction">
              <p>
                Cada evento tiene una identidad diferente. Diseñamos propuestas
                adaptadas al espacio, al público y a la experiencia que cada
                cliente desea crear.
              </p>

              <Button href="#contacto" variant="secondary">
                Cuéntanos tu idea
              </Button>
            </div>
          </div>
        )}

        <div className="portfolio__grid">
          {events.map((event, index) => (
            <article
              className={`portfolio-card ${
                index === 0 ? "portfolio-card--featured" : ""
              }`}
              key={event.id}
            >
              <div className="portfolio-card__media">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={`${event.title} producido por GM Eventos`}
                    style={{ objectPosition: event.imagePosition }}
                  />
                ) : (
                  <div
                    className="portfolio-card__placeholder"
                    aria-hidden="true"
                  >
                    <span>GM</span>
                  </div>
                )}

                <div className="portfolio-card__overlay" />

                <span className="portfolio-card__category">
                  {event.category}
                </span>
              </div>

              <div className="portfolio-card__content">
                <span className="portfolio-card__number">
                  {String(event.id).padStart(2, "0")}
                </span>

                <div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;

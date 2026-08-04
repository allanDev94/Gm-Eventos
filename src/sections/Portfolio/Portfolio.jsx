import "./Portfolio.css";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import { RevealGroup, RevealItem } from "../../components/Reveal/Reveal";

const events = [
  {
    id: 1,
    title: "Matrimonio",
    category: "Celebración",
    description:
      "Producción de sonido, iluminación, música y efectos para una celebración inolvidable.",
    image: "/assets/img/events/01.JPG",
    imagePosition: "center",
  },
  {
    id: 2,
    title: "Eventos corporativos",
    category: "Empresas",
    description:
      "Soluciones audiovisuales y producción técnica para encuentros, celebraciones y actividades corporativas.",
    image: null,
    imagePosition: "center",
  },
  {
    id: 3,
    title: "Graduaciones y galas",
    category: "Eventos",
    description:
      "Ambientación, sonido e iluminación para acompañar uno de los momentos más importantes de cada generación.",
    image: null,
    imagePosition: "center",
  },
];

function Portfolio({ showHeader = true, limit }) {
  const hasLimit = Number.isInteger(limit) && limit > 0;

  const visibleEvents = hasLimit ? events.slice(0, limit) : events;

  const showViewAllButton = hasLimit && visibleEvents.length < events.length;

  return (
    <section className="portfolio">
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

              <Button to="/contacto" variant="secondary">
                Cuéntanos tu idea
              </Button>
            </div>
          </div>
        )}

        <RevealGroup
          className={`portfolio__grid ${
            hasLimit ? "portfolio__grid--preview" : ""
          }`}
          stagger={0.14}
          delay={0.08}
          amount={0.15}
        >
          {visibleEvents.map((event, index) => {
            const isFeatured = !hasLimit && index === 0;

            return (
              <RevealItem
                className={`portfolio__reveal-item ${
                  isFeatured ? "portfolio__reveal-item--featured" : ""
                }`}
                key={event.id}
              >
                <article
                  className={`portfolio-card ${
                    isFeatured ? "portfolio-card--featured" : ""
                  }`}
                >
                  <div className="portfolio-card__media">
                    {event.image ? (
                      <img
                        src={event.image}
                        alt={`${event.title} producido por GM Eventos`}
                        style={{
                          objectPosition: event.imagePosition,
                        }}
                      />
                    ) : (
                      <div
                        className="portfolio-card__placeholder"
                        aria-hidden="true"
                      >
                        <span>GM</span>
                      </div>
                    )}

                    <div
                      className="portfolio-card__overlay"
                      aria-hidden="true"
                    />

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
              </RevealItem>
            );
          })}
        </RevealGroup>

        {showViewAllButton && (
          <div className="portfolio__footer">
            <Button to="/eventos" variant="secondary">
              Ver todos los eventos
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Portfolio;

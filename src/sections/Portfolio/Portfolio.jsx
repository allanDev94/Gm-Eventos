import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";

import { events } from "./data/eventsData";

import "./Portfolio.css";

function Portfolio({ showHeader = true, limit }) {
  const hasLimit = Number.isInteger(limit) && limit > 0;

  const visibleEvents = hasLimit ? events.slice(0, limit) : events;

  const showViewAllButton = hasLimit && visibleEvents.length < events.length;

  return (
    <section
      className={`portfolio ${!showHeader ? "portfolio--without-header" : ""}`}
      id="eventos"
    >
      <Container>
        {showHeader && (
          <div className="portfolio__header">
            <div className="portfolio__heading">
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

        <PortfolioGrid events={visibleEvents} isPreview={hasLimit} />

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

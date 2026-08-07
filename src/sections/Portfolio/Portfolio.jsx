import { useCallback, useState } from "react";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

import PortfolioGrid from "./components/PortfolioGrid/PortfolioGrid";
import PortfolioHeader from "./components/PortfolioHeader/PortfolioHeader";
import PortfolioModal from "./components/PortfolioModal/PortfolioModal";

import { events } from "./data/eventsData";

import "./Portfolio.css";

function Portfolio({ showHeader = true, limit }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const hasLimit = Number.isInteger(limit) && limit > 0;

  const visibleEvents = hasLimit ? events.slice(0, limit) : events;

  const showViewAllButton = hasLimit && visibleEvents.length < events.length;

  const openEvent = useCallback((event) => {
    setSelectedEvent(event);
  }, []);

  const closeEvent = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  return (
    <>
      <section
        className={`portfolio ${
          !showHeader ? "portfolio--without-header" : ""
        }`}
        id="eventos"
        aria-labelledby={showHeader ? "portfolio-title" : undefined}
      >
        <Container>
          {showHeader && <PortfolioHeader />}

          <PortfolioGrid
            events={visibleEvents}
            isPreview={hasLimit}
            onOpen={openEvent}
          />

          {showViewAllButton && (
            <div className="portfolio__footer">
              <Button to="/eventos" variant="secondary">
                Ver todos los eventos
              </Button>
            </div>
          )}
        </Container>
      </section>

      <PortfolioModal event={selectedEvent} onClose={closeEvent} />
    </>
  );
}

export default Portfolio;

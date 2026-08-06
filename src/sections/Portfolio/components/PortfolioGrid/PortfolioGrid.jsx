import { RevealGroup, RevealItem } from "../../../../components/Reveal/Reveal";

import PortfolioCard from "../PortfolioCard/PortfolioCard";

import "./PortfolioGrid.css";

function PortfolioGrid({ events, isPreview = false }) {
  return (
    <RevealGroup
      className={`portfolio__grid ${
        isPreview ? "portfolio__grid--preview" : ""
      }`}
      stagger={0.14}
      delay={0.08}
      amount={0.15}
    >
      {events.map((event, index) => {
        const isFeatured = !isPreview && index === 0;

        return (
          <RevealItem
            className={`portfolio__reveal-item ${
              isFeatured ? "portfolio__reveal-item--featured" : ""
            }`}
            key={event.id}
          >
            <PortfolioCard event={event} isFeatured={isFeatured} />
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}

export default PortfolioGrid;

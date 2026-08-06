import { useState } from "react";

import "./PortfolioCard.css";

function PortfolioCard({ event, isFeatured = false }) {
  const [hasImageError, setHasImageError] = useState(false);

  const showImage = Boolean(event.image) && !hasImageError;

  return (
    <article
      className={`portfolio-card ${
        isFeatured ? "portfolio-card--featured" : ""
      }`}
    >
      <div className="portfolio-card__media">
        {showImage ? (
          <img
            src={event.image}
            alt={event.imageAlt || `${event.title} producido por GM Eventos`}
            style={{
              objectPosition: event.imagePosition || "center",
            }}
            loading={isFeatured ? "eager" : "lazy"}
            decoding="async"
            onError={() => {
              setHasImageError(true);
            }}
          />
        ) : (
          <div className="portfolio-card__placeholder" aria-hidden="true">
            <span>GM</span>
          </div>
        )}

        <div className="portfolio-card__overlay" aria-hidden="true" />

        <span className="portfolio-card__category">{event.category}</span>
      </div>

      <div className="portfolio-card__content">
        <span className="portfolio-card__number" aria-hidden="true">
          {String(event.id).padStart(2, "0")}
        </span>

        <div className="portfolio-card__information">
          <h3>{event.title}</h3>

          <p>{event.description}</p>
        </div>
      </div>
    </article>
  );
}

export default PortfolioCard;

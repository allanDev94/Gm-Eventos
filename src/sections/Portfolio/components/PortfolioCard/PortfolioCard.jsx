import { useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { portfolioCardHover } from "../../animations/portfolioAnimations";

import "./PortfolioCard.css";

function PortfolioCard({ event, isFeatured = false, onOpen }) {
  const [hasImageError, setHasImageError] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  const showImage = Boolean(event.image) && !hasImageError;

  const openEvent = () => {
    onOpen(event);
  };

  return (
    <motion.article
      className={`portfolio-card ${
        isFeatured ? "portfolio-card--featured" : ""
      }`}
      whileHover={shouldReduceMotion ? undefined : portfolioCardHover}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
    >
      <button
        className="portfolio-card__trigger"
        type="button"
        aria-label={`Ver detalles de ${event.title}`}
        onClick={openEvent}
      />

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

          <div className="portfolio-card__action" aria-hidden="true">
            <span>Ver evento</span>

            <ArrowUpRight size={19} strokeWidth={1.9} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default PortfolioCard;

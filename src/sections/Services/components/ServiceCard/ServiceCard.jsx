import { ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import {
  serviceCardHover,
  serviceCardVariants,
} from "../../animations/servicesAnimations";

import "./ServiceCard.css";

function ServiceCard({ service, fallbackImage, onOpen, animationDelay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  const handleOpen = () => {
    if (!service.hasDetails) {
      return;
    }

    onOpen(service);
  };

  const handleKeyDown = (event) => {
    if (!service.hasDetails) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return (
    <motion.article
      className={`services-card ${
        service.hasDetails ? "services-card--interactive" : ""
      }`}
      custom={animationDelay}
      variants={serviceCardVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.22,
        margin: "0px 0px -12% 0px",
      }}
      whileHover={shouldReduceMotion ? undefined : serviceCardHover}
      whileTap={
        shouldReduceMotion || !service.hasDetails ? undefined : { scale: 0.99 }
      }
      role={service.hasDetails ? "button" : undefined}
      tabIndex={service.hasDetails ? 0 : undefined}
      aria-haspopup={service.hasDetails ? "dialog" : undefined}
      aria-label={
        service.hasDetails ? `Ver detalles de ${service.title}` : undefined
      }
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
    >
      <img
        className="services-card__image"
        src={service.image}
        alt={service.imageAlt}
        loading="lazy"
        decoding="async"
        onError={handleImageError}
      />

      <div className="services-card__overlay" aria-hidden="true" />

      <span className="services-card__number" aria-hidden="true">
        {service.id}
      </span>

      <div className="services-card__body">
        <div className="services-card__content">
          <h3>{service.title}</h3>

          <p>{service.description}</p>
        </div>

        <div className="services-card__services">
          <p className="services-card__includes-label">Incluye</p>

          <ul className="services-card__features">
            {service.features.map((feature) => (
              <li key={feature}>
                <Check size={15} strokeWidth={2} aria-hidden="true" />

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {service.hasDetails && (
          <div className="services-card__details">
            <span>Ver detalles</span>

            <ArrowUpRight size={19} strokeWidth={1.9} aria-hidden="true" />
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default ServiceCard;

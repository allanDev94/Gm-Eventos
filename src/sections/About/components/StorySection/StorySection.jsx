import { motion, useReducedMotion } from "motion/react";

import {
  FALLBACK_IMAGE,
  storyHighlights,
  storyImages,
} from "../../data/aboutData";

import {
  storyContentVariants,
  storyDetailVariants,
  storyGalleryVariants,
  storyHighlightItemVariants,
  storyHighlightsVariants,
  storyItemVariants,
  storyVisualVariants,
} from "../../animations/aboutAnimations";

import "./StorySection.css";

function StorySection() {
  const shouldReduceMotion = useReducedMotion();

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <div className="about__story">
      <motion.div
        className="about__story-content"
        variants={storyContentVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <motion.p className="about__eyebrow" variants={storyItemVariants}>
          Quiénes somos
        </motion.p>

        <motion.h2 className="about__story-title" variants={storyItemVariants}>
          Producción cercana, profesional y adaptada a cada cliente
        </motion.h2>

        <motion.p className="about__lead" variants={storyItemVariants}>
          Creamos experiencias personalizadas para matrimonios, eventos
          corporativos, graduaciones, fiestas y celebraciones privadas.
        </motion.p>

        <motion.p className="about__description" variants={storyItemVariants}>
          En GM Eventos trabajamos junto a cada cliente para conocer su idea,
          entender el tipo de público y diseñar una propuesta que se adapte al
          espacio, estilo y necesidades de la celebración.
        </motion.p>

        <motion.p className="about__description" variants={storyItemVariants}>
          Nuestra prioridad es que puedas disfrutar tu evento con tranquilidad,
          sabiendo que la música, el sonido, la iluminación y los detalles
          técnicos están correctamente coordinados.
        </motion.p>
      </motion.div>

      <motion.div
        className="about__story-visual-column"
        variants={storyVisualVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{
          once: true,
          amount: 0.18,
        }}
      >
        <motion.div
          className="about__story-gallery"
          variants={storyGalleryVariants}
        >
          <figure className="about__story-main-media">
            <img
              src={storyImages.main.image}
              alt={storyImages.main.alt}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
            />

            <div className="about__story-main-overlay" aria-hidden="true" />

            <figcaption>
              <span>GM Eventos</span>

              <strong>Creamos momentos que se convierten en recuerdos</strong>
            </figcaption>
          </figure>

          <motion.figure
            className="about__story-detail-media"
            variants={storyDetailVariants}
          >
            <img
              src={storyImages.detail.image}
              alt={storyImages.detail.alt}
              loading="lazy"
              decoding="async"
              onError={handleImageError}
            />
          </motion.figure>

          <div className="about__story-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        <motion.ul
          className="about__story-highlights"
          variants={storyHighlightsVariants}
        >
          {storyHighlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <motion.li
                key={highlight.id}
                variants={storyHighlightItemVariants}
              >
                <span className="about__story-highlight-icon">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <div>
                  <strong>{highlight.title}</strong>

                  <span>{highlight.description}</span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default StorySection;

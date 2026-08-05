import { useState } from "react";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Layers,
  MessagesSquare,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./About.css";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import { RevealGroup, RevealItem } from "../../components/Reveal/Reveal";

import {
  FALLBACK_IMAGE,
  commitmentPhotos,
  commitmentPoints,
  ctaBenefits,
  processSteps,
  storyHighlights,
  values,
} from "./data/aboutData";

import {
  commitmentContentVariants,
  commitmentItemVariants,
  commitmentMediaVariants,
  ctaActionItemVariants,
  ctaActionsVariants,
  ctaContainerVariants,
  ctaContentVariants,
  ctaItemVariants,
  storyContentVariants,
  storyDetailVariants,
  storyGalleryVariants,
  storyHighlightItemVariants,
  storyHighlightsVariants,
  storyItemVariants,
  storyVisualVariants,
} from "./animations/aboutAnimations";

function About({ showHeader = true }) {
  const shouldReduceMotion = useReducedMotion();

  const [commitmentSwiper, setCommitmentSwiper] = useState(null);
  const [activeCommitmentSlide, setActiveCommitmentSlide] = useState(0);

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

        {/* =====================================
            QUIÉNES SOMOS
        ====================================== */}

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

            <motion.h2
              className="about__story-title"
              variants={storyItemVariants}
            >
              Producción cercana, profesional y adaptada a cada cliente
            </motion.h2>

            <motion.p className="about__lead" variants={storyItemVariants}>
              Creamos experiencias personalizadas para matrimonios, eventos
              corporativos, graduaciones, fiestas y celebraciones privadas.
            </motion.p>

            <motion.p
              className="about__description"
              variants={storyItemVariants}
            >
              En GM Eventos trabajamos junto a cada cliente para conocer su
              idea, entender el tipo de público y diseñar una propuesta que se
              adapte al espacio, estilo y necesidades de la celebración.
            </motion.p>

            <motion.p
              className="about__description"
              variants={storyItemVariants}
            >
              Nuestra prioridad es que puedas disfrutar tu evento con
              tranquilidad, sabiendo que la música, el sonido, la iluminación y
              los detalles técnicos están correctamente coordinados.
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
                  src="/assets/img/about/story/main.jpg"
                  alt="Equipo de GM Eventos trabajando en la producción de una celebración"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />

                <div className="about__story-main-overlay" aria-hidden="true" />

                <figcaption>
                  <span>GM Eventos</span>

                  <strong>
                    Creamos momentos que se convierten en recuerdos
                  </strong>
                </figcaption>
              </figure>

              <motion.figure
                className="about__story-detail-media"
                variants={storyDetailVariants}
              >
                <img
                  src="/assets/img/about/story/detail.jpg"
                  alt="Detalle del montaje técnico realizado por GM Eventos"
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

        {/* =====================================
            NUESTRA FORMA DE TRABAJAR
        ====================================== */}

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

        {/* =====================================
            QUÉ NOS DIFERENCIA
        ====================================== */}

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
            stagger={0.14}
            delay={0.08}
            amount={0.15}
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <RevealItem key={value.id}>
                  <article
                    className={`about__value about__value--${value.theme}`}
                  >
                    <div className="about__value-top">
                      <span className="about__value-icon">
                        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                      </span>

                      <span className="about__value-label">{value.label}</span>
                    </div>

                    <div className="about__value-visual">
                      <img
                        className="about__value-image"
                        src={value.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="about__value-content">
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        {/* =====================================
            NUESTRO COMPROMISO
        ====================================== */}

        <div className="about__commitment">
          <motion.div
            className="about__commitment-media"
            variants={commitmentMediaVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <Swiper
              className="about__commitment-swiper"
              modules={[A11y, Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              loop
              grabCursor
              speed={shouldReduceMotion ? 0 : 900}
              autoplay={
                shouldReduceMotion
                  ? false
                  : {
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              pagination={{
                clickable: true,
              }}
              onSwiper={setCommitmentSwiper}
              onSlideChange={(swiper) => {
                setActiveCommitmentSlide(swiper.realIndex);
              }}
            >
              {commitmentPhotos.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <div className="about__commitment-slide">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                    />

                    <div
                      className="about__commitment-overlay"
                      aria-hidden="true"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="about__commitment-controls">
              <button
                type="button"
                aria-label="Ver fotografía anterior"
                onClick={() => commitmentSwiper?.slidePrev()}
              >
                <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
              </button>

              <span className="about__commitment-counter" aria-live="polite">
                <strong>
                  {String(activeCommitmentSlide + 1).padStart(2, "0")}
                </strong>

                <span>/</span>

                <span>{String(commitmentPhotos.length).padStart(2, "0")}</span>
              </span>

              <button
                type="button"
                aria-label="Ver fotografía siguiente"
                onClick={() => commitmentSwiper?.slideNext()}
              >
                <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="about__commitment-content"
            variants={commitmentContentVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <motion.p
              className="about__eyebrow"
              variants={commitmentItemVariants}
            >
              Nuestro compromiso
            </motion.p>

            <motion.h2 variants={commitmentItemVariants}>
              Nos involucramos en cada celebración como si fuera única
            </motion.h2>

            <motion.p variants={commitmentItemVariants}>
              Sabemos que detrás de cada evento existe una historia, una
              celebración o un momento importante. Por eso trabajamos con
              cercanía, responsabilidad y dedicación.
            </motion.p>

            <motion.p variants={commitmentItemVariants}>
              Cuidamos cada detalle para crear el ambiente adecuado, resolver
              los requerimientos técnicos y permitir que las personas disfruten
              y construyan buenos recuerdos.
            </motion.p>

            <motion.ul
              className="about__commitment-values"
              variants={commitmentItemVariants}
            >
              {commitmentPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <li key={point.id}>
                    <span className="about__commitment-value-icon">
                      <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                    </span>

                    <div>
                      <strong>{point.title}</strong>
                      <span>{point.description}</span>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>

        {/* =====================================
            CTA FINAL
        ====================================== */}

        <motion.div
          className="about__cta"
          variants={ctaContainerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <motion.span
            className="about__cta-glow about__cta-glow--one"
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 18, 0],
                    y: [0, -14, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="about__cta-glow about__cta-glow--two"
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -14, 0],
                    y: [0, 12, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="about__cta-content"
            variants={ctaContentVariants}
          >
            <motion.p className="about__eyebrow" variants={ctaItemVariants}>
              Comencemos a planificar
            </motion.p>

            <motion.h2 variants={ctaItemVariants}>
              Conversemos sobre el evento que estás <span>imaginando</span>
            </motion.h2>

            <motion.p
              className="about__cta-description"
              variants={ctaItemVariants}
            >
              Cuéntanos tu idea y prepararemos una propuesta adaptada al tipo de
              celebración, espacio, cantidad de invitados y experiencia que
              deseas crear.
            </motion.p>

            <motion.ul
              className="about__cta-benefits"
              variants={ctaItemVariants}
            >
              {ctaBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <li key={benefit.id}>
                    <Icon size={18} strokeWidth={1.9} aria-hidden="true" />

                    <span>{benefit.text}</span>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>

          <motion.div
            className="about__cta-actions"
            variants={ctaActionsVariants}
          >
            <motion.div
              className="about__cta-action-note"
              variants={ctaActionItemVariants}
            >
              <span>
                <MessagesSquare
                  size={22}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <div>
                <strong>¿Tienes una idea?</strong>
                <p>Conversemos y comencemos a darle forma.</p>
              </div>
            </motion.div>

            <motion.div variants={ctaActionItemVariants}>
              <Button
                to="/contacto"
                variant="primary"
                className="about__cta-button about__cta-button--primary"
              >
                <span>Cotizar mi evento</span>

                <ArrowUpRight size={20} strokeWidth={2} aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.div variants={ctaActionItemVariants}>
              <Button
                to="/servicios"
                variant="secondary"
                className="about__cta-button about__cta-button--secondary"
              >
                <span>Explorar servicios</span>

                <Layers size={19} strokeWidth={1.9} aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.p
              className="about__cta-response"
              variants={ctaActionItemVariants}
            >
              Te orientaremos para encontrar la propuesta adecuada para tu
              evento.
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default About;

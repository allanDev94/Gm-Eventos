import { useState } from "react";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Layers,
  MessagesSquare,
  PanelsTopLeft,
  Shapes,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
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

const FALLBACK_IMAGE = "/assets/img/events/01.JPG";

const processSteps = [
  {
    id: "01",
    theme: "violet",
    image: "/assets/img/about/process/conversation.svg",
    title: "Conversamos sobre tu idea",
    description:
      "Conocemos el tipo de evento, el lugar, la cantidad de invitados y la experiencia que deseas crear.",
  },
  {
    id: "02",
    theme: "pink",
    image: "/assets/img/about/process/planning.svg",
    title: "Diseñamos una propuesta",
    description:
      "Seleccionamos los servicios y equipos adecuados según las características de tu celebración.",
  },
  {
    id: "03",
    theme: "coral",
    image: "/assets/img/about/process/coordination.svg",
    title: "Coordinamos cada detalle",
    description:
      "Organizamos el montaje, los horarios, la música y los requerimientos técnicos antes del evento.",
  },
  {
    id: "04",
    theme: "gold",
    image: "/assets/img/about/process/production.svg",
    title: "Producimos tu evento",
    description:
      "Nos encargamos de la ejecución y el apoyo técnico para que puedas disfrutar cada momento.",
  },
];

const values = [
  {
    id: "01",
    label: "Valor 01",
    theme: "violet",
    icon: HeartHandshake,
    image: "/assets/img/about/values/personalized.svg",
    title: "Atención personalizada",
    description:
      "Escuchamos cada idea y adaptamos nuestra propuesta al estilo, espacio y necesidades de cada cliente.",
  },
  {
    id: "02",
    label: "Valor 02",
    theme: "pink",
    icon: Shapes,
    image: "/assets/img/about/values/versatility.svg",
    title: "Versatilidad",
    description:
      "Adaptamos nuestros servicios a diferentes celebraciones, espacios, públicos y formatos de evento.",
  },
  {
    id: "03",
    label: "Valor 03",
    theme: "coral",
    icon: Wrench,
    image: "/assets/img/about/values/solutions.svg",
    title: "Respuesta y soluciones",
    description:
      "Nos anticipamos a los requerimientos técnicos y respondemos de manera eficiente ante cualquier imprevisto.",
  },
  {
    id: "04",
    label: "Valor 04",
    theme: "gold",
    icon: ShieldCheck,
    image: "/assets/img/about/values/quality.svg",
    title: "Calidad profesional",
    description:
      "Trabajamos con planificación, equipamiento adecuado y dedicación para entregar una producción segura y coordinada.",
  },
];

const storyHighlights = [
  {
    id: "closeness",
    icon: HeartHandshake,
    title: "Atención cercana",
    description:
      "Escuchamos tus ideas y te acompañamos durante todo el proceso.",
  },
  {
    id: "production",
    icon: PanelsTopLeft,
    title: "Producción integral",
    description: "Coordinamos música, sonido, iluminación y montaje técnico.",
  },
  {
    id: "experiences",
    icon: Sparkles,
    title: "Experiencias personalizadas",
    description: "Cada propuesta se adapta al estilo y necesidades del evento.",
  },
];

const commitmentPhotos = [
  {
    id: "01",
    image: "/assets/img/about/commitment/01.jpg",
    alt: "Preparación y montaje técnico realizado por GM Eventos",
  },
  {
    id: "02",
    image: "/assets/img/about/commitment/02.jpg",
    alt: "Equipo de GM Eventos trabajando durante una celebración",
  },
  {
    id: "03",
    image: "/assets/img/about/commitment/03.jpg",
    alt: "Invitados disfrutando de un evento producido por GM Eventos",
  },
];

const commitmentPoints = [
  {
    id: "closeness",
    icon: HeartHandshake,
    title: "Cercanía",
    description: "Escuchamos y acompañamos cada idea.",
  },
  {
    id: "responsibility",
    icon: ShieldCheck,
    title: "Responsabilidad",
    description: "Planificamos cada etapa con dedicación.",
  },
  {
    id: "dedication",
    icon: Sparkles,
    title: "Dedicación",
    description: "Cuidamos los detalles de cada celebración.",
  },
];

const ctaBenefits = [
  {
    id: "personalized",
    icon: HeartHandshake,
    text: "Atención personalizada",
  },
  {
    id: "custom",
    icon: SlidersHorizontal,
    text: "Propuesta a medida",
  },
  {
    id: "support",
    icon: MessagesSquare,
    text: "Acompañamiento durante el proceso",
  },
];

/* ========================================
   ANIMACIONES: QUIÉNES SOMOS
======================================== */

const storyContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const storyItemVariants = {
  hidden: {
    opacity: 0,
    x: -38,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const storyVisualVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const storyGalleryVariants = {
  hidden: {
    opacity: 0,
    x: 55,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const storyDetailVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const storyHighlightsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const storyHighlightItemVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ========================================
   ANIMACIONES: NUESTRO COMPROMISO
======================================== */

const commitmentMediaVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const commitmentContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const commitmentItemVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ========================================
   ANIMACIONES: CTA
======================================== */

const ctaContainerVariants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ctaContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.15,
    },
  },
};

const ctaItemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ctaActionsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.32,
    },
  },
};

const ctaActionItemVariants = {
  hidden: {
    opacity: 0,
    x: 38,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

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

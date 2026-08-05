import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import {
  FALLBACK_IMAGE,
  commitmentPhotos,
  commitmentPoints,
} from "../../data/aboutData";

import {
  commitmentContentVariants,
  commitmentItemVariants,
  commitmentMediaVariants,
} from "../../animations/aboutAnimations";

import "./CommitmentSection.css";

function CommitmentSection() {
  const shouldReduceMotion = useReducedMotion();

  const [commitmentSwiper, setCommitmentSwiper] = useState(null);
  const [activeCommitmentSlide, setActiveCommitmentSlide] = useState(0);

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <section className="about__commitment">
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

                <div className="about__commitment-overlay" aria-hidden="true" />
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
        <motion.p className="about__eyebrow" variants={commitmentItemVariants}>
          Nuestro compromiso
        </motion.p>

        <motion.h2 variants={commitmentItemVariants}>
          Nos involucramos en cada celebración como si fuera única
        </motion.h2>

        <motion.p variants={commitmentItemVariants}>
          Sabemos que detrás de cada evento existe una historia, una celebración
          o un momento importante. Por eso trabajamos con cercanía,
          responsabilidad y dedicación.
        </motion.p>

        <motion.p variants={commitmentItemVariants}>
          Cuidamos cada detalle para crear el ambiente adecuado, resolver los
          requerimientos técnicos y permitir que las personas disfruten y
          construyan buenos recuerdos.
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
    </section>
  );
}

export default CommitmentSection;

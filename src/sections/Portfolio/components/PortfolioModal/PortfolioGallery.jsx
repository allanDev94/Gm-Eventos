import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import { useMemo, useRef, useState } from "react";

import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./PortfolioGallery.css";

function GalleryImage({ image }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="portfolio-gallery__placeholder" aria-hidden="true">
        <Images size={44} strokeWidth={1.4} />

        <span>Imagen no disponible</span>
      </div>
    );
  }

  return (
    <img
      className="portfolio-gallery__image"
      src={image.src}
      alt={image.alt}
      style={{
        objectPosition: image.position || "center",
      }}
      loading="lazy"
      decoding="async"
      onError={() => {
        setHasError(true);
      }}
    />
  );
}

function PortfolioGallery({ event }) {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = useMemo(() => {
    if (event.gallery?.length) {
      return event.gallery;
    }

    if (event.image) {
      return [
        {
          id: `${event.id}-cover`,
          src: event.image,
          alt: event.imageAlt || `${event.title} producido por GM Eventos`,
          position: event.imagePosition || "center",
        },
      ];
    }

    return [];
  }, [event]);

  if (gallery.length === 0) {
    return (
      <div className="portfolio-gallery">
        <div className="portfolio-gallery__stage">
          <div className="portfolio-gallery__placeholder">
            <span className="portfolio-gallery__placeholder-logo">GM</span>

            <p>Próximamente nuevas fotografías</p>
          </div>
        </div>
      </div>
    );
  }

  if (gallery.length === 1) {
    return (
      <div className="portfolio-gallery">
        <div className="portfolio-gallery__stage">
          <GalleryImage image={gallery[0]} />
        </div>
      </div>
    );
  }

  const showPreviousImage = () => {
    swiperRef.current?.slidePrev();
  };

  const showNextImage = () => {
    swiperRef.current?.slideNext();
  };

  const showImage = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="portfolio-gallery">
      <div className="portfolio-gallery__stage">
        <Swiper
          className="portfolio-gallery__swiper"
          modules={[A11y, Keyboard]}
          keyboard={{
            enabled: true,
          }}
          slidesPerView={1}
          spaceBetween={0}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {gallery.map((image) => (
            <SwiperSlide key={image.id}>
              <GalleryImage image={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="portfolio-gallery__navigation">
          <button
            type="button"
            aria-label="Mostrar imagen anterior"
            onClick={showPreviousImage}
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Mostrar imagen siguiente"
            onClick={showNextImage}
            disabled={activeIndex === gallery.length - 1}
          >
            <ChevronRight size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <span className="portfolio-gallery__counter" aria-live="polite">
          {activeIndex + 1} / {gallery.length}
        </span>
      </div>

      <div
        className="portfolio-gallery__thumbnails"
        aria-label="Miniaturas de la galería"
      >
        {gallery.map((image, index) => (
          <button
            className={`portfolio-gallery__thumbnail ${
              activeIndex === index
                ? "portfolio-gallery__thumbnail--active"
                : ""
            }`}
            type="button"
            key={image.id}
            aria-label={`Mostrar imagen ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => {
              showImage(index);
            }}
          >
            <img
              src={image.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default PortfolioGallery;

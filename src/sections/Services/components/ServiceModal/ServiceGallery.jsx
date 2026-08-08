import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./ServiceGallery.css";

const FALLBACK_IMAGE = "/assets/img/hero01.JPG";

function ServiceGallery({ service }) {
  const swiperRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = service.images?.length > 0 ? service.images : [FALLBACK_IMAGE];

  /* ========================================
     ERROR DE IMAGEN
  ======================================== */

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src = FALLBACK_IMAGE;
  };

  /* ========================================
     NAVEGACIÓN
  ======================================== */

  const showPreviousImage = () => {
    swiperRef.current?.slidePrev();
  };

  const showNextImage = () => {
    swiperRef.current?.slideNext();
  };

  const showImage = (index) => {
    swiperRef.current?.slideTo(index);
  };

  /* ========================================
     FLECHAS DEL TECLADO
  ======================================== */

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const handleKeyDown = (keyboardEvent) => {
      const target = keyboardEvent.target;

      const isEditableElement =
        target instanceof HTMLElement &&
        (target.matches("input, textarea, select") || target.isContentEditable);

      if (isEditableElement) {
        return;
      }

      if (keyboardEvent.key === "ArrowLeft") {
        keyboardEvent.preventDefault();

        swiperRef.current?.slidePrev();

        return;
      }

      if (keyboardEvent.key === "ArrowRight") {
        keyboardEvent.preventDefault();

        swiperRef.current?.slideNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  return (
    <div className="service-gallery">
      <div className="service-gallery__stage">
        <Swiper
          className="service-gallery__main"
          modules={[A11y]}
          slidesPerView={1}
          speed={650}
          grabCursor={images.length > 1}
          allowTouchMove={images.length > 1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveImageIndex(swiper.activeIndex);
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${image}-${index}`}>
              <div className="service-gallery__image">
                <img
                  src={image}
                  alt={`${service.title}, fotografía ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={handleImageError}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <>
            <div
              className="service-gallery__counter"
              aria-live="polite"
              aria-atomic="true"
            >
              <span>{String(activeImageIndex + 1).padStart(2, "0")}</span>

              <span aria-hidden="true">/</span>

              <span>{String(images.length).padStart(2, "0")}</span>
            </div>

            <div
              className="service-gallery__controls"
              aria-label="Controles de la galería"
            >
              <button
                type="button"
                aria-label="Ver fotografía anterior"
                disabled={activeImageIndex === 0}
                onClick={showPreviousImage}
              >
                <ChevronLeft size={20} strokeWidth={1.8} aria-hidden="true" />
              </button>

              <button
                type="button"
                aria-label="Ver fotografía siguiente"
                disabled={activeImageIndex === images.length - 1}
                onClick={showNextImage}
              >
                <ChevronRight size={20} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <Swiper
          className="service-gallery__thumbnails"
          modules={[A11y]}
          slidesPerView={3.3}
          spaceBetween={10}
          watchSlidesProgress
          breakpoints={{
            480: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`thumbnail-${image}-${index}`}>
              <button
                className={`service-gallery__thumbnail ${
                  activeImageIndex === index
                    ? "service-gallery__thumbnail--active"
                    : ""
                }`}
                type="button"
                aria-label={`Ver fotografía ${index + 1}`}
                aria-pressed={activeImageIndex === index}
                onClick={() => {
                  showImage(index);
                }}
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default ServiceGallery;

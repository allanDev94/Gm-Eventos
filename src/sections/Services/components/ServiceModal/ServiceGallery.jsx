import { useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./ServiceGallery.css";

const FALLBACK_IMAGE = "/assets/img/events/01.JPG";

function ServiceGallery({ service }) {
  const swiperRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = service.images?.length > 0 ? service.images : [FALLBACK_IMAGE];

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

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
    <div className="service-gallery">
      <div className="service-gallery__stage">
        <Swiper
          className="service-gallery__main"
          modules={[A11y, Keyboard]}
          slidesPerView={1}
          speed={650}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
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
                onClick={() => showImage(index)}
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

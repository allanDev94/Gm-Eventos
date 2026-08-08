import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import "./PortfolioGallery.css";

/* ========================================
   IMAGEN
======================================== */

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
      loading="eager"
      decoding="async"
      onError={() => {
        setHasError(true);
      }}
    />
  );
}

/* ========================================
   GALERÍA
======================================== */

function PortfolioGallery({ event }) {
  const touchStartXRef = useRef(null);

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

  const galleryLength = gallery.length;

  /* ========================================
     NAVEGACIÓN
  ======================================== */

  const showPreviousImage = useCallback(() => {
    setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  }, []);

  const showNextImage = useCallback(() => {
    setActiveIndex((currentIndex) =>
      Math.min(currentIndex + 1, galleryLength - 1),
    );
  }, [galleryLength]);

  const showImage = (index) => {
    setActiveIndex(index);
  };

  /* ========================================
     FLECHAS DEL TECLADO
  ======================================== */

  useEffect(() => {
    if (galleryLength <= 1) {
      return undefined;
    }

    const handleKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key === "ArrowLeft") {
        keyboardEvent.preventDefault();

        showPreviousImage();

        return;
      }

      if (keyboardEvent.key === "ArrowRight") {
        keyboardEvent.preventDefault();

        showNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryLength, showNextImage, showPreviousImage]);

  /* ========================================
     SIN IMÁGENES
  ======================================== */

  if (galleryLength === 0) {
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

  const currentImage = gallery[activeIndex] || gallery[0];

  const isFirstImage = activeIndex === 0;

  const isLastImage = activeIndex === galleryLength - 1;

  /* ========================================
     DESLIZAR EN CELULAR
  ======================================== */

  const handleTouchStart = (touchEvent) => {
    touchStartXRef.current = touchEvent.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (touchEvent) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const endX = touchEvent.changedTouches[0]?.clientX;

    if (typeof endX !== "number") {
      touchStartXRef.current = null;

      return;
    }

    const difference = touchStartXRef.current - endX;

    const swipeDistance = 50;

    if (difference > swipeDistance && !isLastImage) {
      showNextImage();
    }

    if (difference < -swipeDistance && !isFirstImage) {
      showPreviousImage();
    }

    touchStartXRef.current = null;
  };

  return (
    <div className="portfolio-gallery">
      <div
        className="portfolio-gallery__stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <GalleryImage key={currentImage.id} image={currentImage} />

        {galleryLength > 1 && (
          <>
            <div className="portfolio-gallery__navigation">
              <button
                type="button"
                aria-label="Mostrar imagen anterior"
                disabled={isFirstImage}
                onClick={showPreviousImage}
              >
                <ChevronLeft size={22} strokeWidth={1.8} aria-hidden="true" />
              </button>

              <button
                type="button"
                aria-label="Mostrar imagen siguiente"
                disabled={isLastImage}
                onClick={showNextImage}
              >
                <ChevronRight size={22} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>

            <span className="portfolio-gallery__counter" aria-live="polite">
              {activeIndex + 1} / {galleryLength}
            </span>
          </>
        )}
      </div>

      {galleryLength > 1 && (
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
      )}
    </div>
  );
}

export default PortfolioGallery;

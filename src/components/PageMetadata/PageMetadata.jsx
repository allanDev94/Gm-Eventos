import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://gmeventos.cl";
const SOCIAL_IMAGE = `${SITE_URL}/assets/img/tarjeta.png`;

const DEFAULT_METADATA = {
  title: "GM Eventos | Producción de eventos en Santiago",
  description:
    "Producción de eventos en Santiago con DJ, sonido profesional, iluminación y soluciones personalizadas para matrimonios, empresas, graduaciones y celebraciones.",
};

const ROUTE_METADATA = {
  "/": DEFAULT_METADATA,

  "/nosotros": {
    title: "Productora de eventos en Santiago | Nosotros",
    description:
      "Conoce a GM Eventos y nuestra forma de trabajar en la planificación y producción de matrimonios, eventos corporativos, graduaciones y celebraciones en Santiago.",
  },

  "/servicios": {
    title: "DJ, sonido e iluminación para eventos en Santiago",
    description:
      "Servicios de DJ, sonido profesional, iluminación y producción para matrimonios, eventos corporativos, graduaciones, fiestas y celebraciones en Santiago.",
  },

  "/eventos": {
    title: "Matrimonios, eventos corporativos y graduaciones",
    description:
      "Conoce eventos y experiencias producidas por GM Eventos: matrimonios, eventos corporativos, graduaciones, galas y celebraciones privadas.",
  },

  "/contacto": {
    title: "Cotiza tu evento en Santiago | GM Eventos",
    description:
      "Cotiza tu evento con GM Eventos. Cuéntanos tu idea y recibe una propuesta adaptada al tipo de celebración, ubicación y servicios que necesitas.",
  },
};

function updateMetaContent(selector, content) {
  let metaElement = document.querySelector(selector);

  if (!metaElement) {
    metaElement = document.createElement("meta");

    if (selector.includes('property="')) {
      const property = selector.match(/property="([^"]+)"/)?.[1];

      if (property) {
        metaElement.setAttribute("property", property);
      }
    } else {
      const name = selector.match(/name="([^"]+)"/)?.[1];

      if (name) {
        metaElement.setAttribute("name", name);
      }
    }

    document.head.appendChild(metaElement);
  }

  metaElement.setAttribute("content", content);
}

function updateCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = ROUTE_METADATA[pathname] || DEFAULT_METADATA;

    const canonicalUrl =
      pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;

    document.title = metadata.title;

    updateMetaContent('meta[name="description"]', metadata.description);

    updateMetaContent('meta[property="og:title"]', metadata.title);
    updateMetaContent('meta[property="og:description"]', metadata.description);
    updateMetaContent('meta[property="og:url"]', canonicalUrl);
    updateMetaContent('meta[property="og:image"]', SOCIAL_IMAGE);

    updateMetaContent('meta[name="twitter:title"]', metadata.title);
    updateMetaContent('meta[name="twitter:description"]', metadata.description);
    updateMetaContent('meta[name="twitter:image"]', SOCIAL_IMAGE);

    updateCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}

export default PageMetadata;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_METADATA = {
  title: "GM Eventos | Producción de eventos en Santiago",
  description:
    "Producción de eventos en Santiago con DJ, sonido profesional, iluminación y soluciones personalizadas para matrimonios, empresas, graduaciones y celebraciones.",
};

const ROUTE_METADATA = {
  "/": DEFAULT_METADATA,

  "/nosotros": {
    title: "Nosotros | GM Eventos",
    description:
      "Conoce a GM Eventos, una productora enfocada en crear celebraciones memorables mediante música, sonido, iluminación y atención personalizada.",
  },

  "/servicios": {
    title: "Servicios | GM Eventos",
    description:
      "Conoce nuestros servicios de DJ, sonido profesional, iluminación, animación y producción para matrimonios, empresas, graduaciones y fiestas.",
  },

  "/eventos": {
    title: "Eventos y proyectos | GM Eventos",
    description:
      "Descubre algunos de los eventos y experiencias producidos por GM Eventos para matrimonios, empresas, graduaciones y celebraciones privadas.",
  },

  "/contacto": {
    title: "Contacto y cotizaciones | GM Eventos",
    description:
      "Cotiza tu evento con GM Eventos. Cuéntanos tu idea y recibe una propuesta adaptada al tipo de celebración, lugar y cantidad de invitados.",
  },
};

function updateMetaContent(selector, content) {
  const metaElement = document.querySelector(selector);

  if (metaElement) {
    metaElement.setAttribute("content", content);
  }
}

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = ROUTE_METADATA[pathname] || DEFAULT_METADATA;

    document.title = metadata.title;

    updateMetaContent('meta[name="description"]', metadata.description);

    updateMetaContent('meta[property="og:title"]', metadata.title);

    updateMetaContent('meta[property="og:description"]', metadata.description);

    updateMetaContent('meta[name="twitter:title"]', metadata.title);

    updateMetaContent('meta[name="twitter:description"]', metadata.description);
  }, [pathname]);

  return null;
}

export default PageMetadata;

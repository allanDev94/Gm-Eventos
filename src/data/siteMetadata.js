export const SITE_URL = "https://gmeventos.cl";

export const SOCIAL_IMAGE = `${SITE_URL}/assets/img/tarjeta.png`;

export const DEFAULT_METADATA = {
  title: "GM Eventos | Producción de eventos en Santiago",

  description:
    "Producción de eventos en Santiago con DJ, sonido profesional, iluminación y soluciones personalizadas para matrimonios, empresas, graduaciones y celebraciones.",
};

export const ROUTE_METADATA = {
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

  "/privacidad": {
    title: "Política de Privacidad | GM Eventos",

    description:
      "Conoce cómo GM Eventos recopila, utiliza y protege los datos personales enviados a través de su sitio web y formulario de cotización.",
  },
};

export function normalizePathname(pathname) {
  if (pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getRouteMetadata(pathname) {
  const normalizedPathname = normalizePathname(pathname);

  return ROUTE_METADATA[normalizedPathname] || DEFAULT_METADATA;
}

export function getCanonicalUrl(pathname) {
  const normalizedPathname = normalizePathname(pathname);

  return normalizedPathname === "/"
    ? `${SITE_URL}/`
    : `${SITE_URL}${normalizedPathname}`;
}

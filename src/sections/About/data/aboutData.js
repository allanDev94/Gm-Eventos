import {
  HeartHandshake,
  MessagesSquare,
  PanelsTopLeft,
  Shapes,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
} from "lucide-react";

export const FALLBACK_IMAGE = "/assets/img/hero01.JPG";

/* ========================================
   PROCESO
======================================== */

export const processSteps = [
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

/* ========================================
   VALORES
======================================== */

export const values = [
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

/* ========================================
   HISTORIA / QUIÉNES SOMOS
======================================== */

export const storyImages = {
  main: {
    image: "/assets/img/about/story/02.JPG",
    alt: "Producción de un evento realizada por GM Eventos",
  },

  detail: {
    image: "/assets/img/about/story/04.jpg",
    alt: "Detalle de una celebración producida por GM Eventos",
  },
};

export const storyHighlights = [
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

/* ========================================
   COMPROMISO
======================================== */

export const commitmentPhotos = [
  {
    id: "01",
    image: "/assets/img/about/commitment/01.png",
    alt: "Preparación y montaje técnico realizado por GM Eventos",
  },
  {
    id: "02",
    image: "/assets/img/about/commitment/02.png",
    alt: "Equipo de GM Eventos trabajando durante una celebración",
  },
  {
    id: "03",
    image: "/assets/img/about/commitment/03.png",
    alt: "Invitados disfrutando de un evento producido por GM Eventos",
  },
];

export const commitmentPoints = [
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

/* ========================================
   CTA
======================================== */

export const ctaBenefits = [
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

import {
  HeartHandshake,
  MessagesSquare,
  SlidersHorizontal,
} from "lucide-react";

export const contactHighlights = [
  {
    id: "personalized",
    icon: HeartHandshake,
    title: "Atención personalizada",
    description:
      "Conocemos tu idea y te orientamos según las características de tu evento.",
  },
  {
    id: "custom-proposal",
    icon: SlidersHorizontal,
    title: "Propuesta a medida",
    description:
      "Adaptamos los servicios, equipos y producción a tus necesidades.",
  },
  {
    id: "communication",
    icon: MessagesSquare,
    title: "Comunicación cercana",
    description: "Te acompañamos durante la planificación y coordinación.",
  },
];

export const eventTypes = [
  {
    value: "",
    label: "Selecciona una opción",
  },
  {
    value: "matrimonio",
    label: "Matrimonio",
  },
  {
    value: "corporativo",
    label: "Evento corporativo",
  },
  {
    value: "graduacion",
    label: "Graduación o gala",
  },
  {
    value: "cumpleanos",
    label: "Cumpleaños",
  },
  {
    value: "fiesta-privada",
    label: "Fiesta privada",
  },
  {
    value: "otro",
    label: "Otro tipo de evento",
  },
];

export const availableServices = [
  {
    id: "dj",
    label: "DJ y música",
  },
  {
    id: "sound",
    label: "Sonido",
  },
  {
    id: "lighting",
    label: "Iluminación",
  },
  {
    id: "production",
    label: "Producción integral",
  },
];

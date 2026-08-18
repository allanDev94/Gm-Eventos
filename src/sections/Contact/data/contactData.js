import {
  HeartHandshake,
  MessagesSquare,
  SlidersHorizontal,
} from "lucide-react";

export { availableServices, eventTypes } from "./contactOptions";

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

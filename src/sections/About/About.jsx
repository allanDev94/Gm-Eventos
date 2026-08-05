import "./About.css";

import Container from "../../components/Container/Container";
import EventCTA from "../../components/EventCTA/EventCTA";

import CommitmentSection from "./components/CommitmentSection/CommitmentSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import StorySection from "./components/StorySection/StorySection";
import ValuesSection from "./components/ValuesSection/ValuesSection";

import { ctaBenefits } from "./data/aboutData";

function About({ showHeader = true }) {
  return (
    <section
      className={`about ${!showHeader ? "about--without-header" : ""}`}
      id="nosotros"
    >
      <Container>
        {showHeader && (
          <header className="about__heading">
            <p className="about__eyebrow">Sobre GM Eventos</p>

            <h2 className="about__title">
              Nos involucramos en cada detalle para que disfrutes tu evento
            </h2>
          </header>
        )}

        <StorySection />

        <ProcessSection />

        <ValuesSection />

        <CommitmentSection />

        <EventCTA
          eyebrow="Comencemos a planificar"
          title="Conversemos sobre el evento que estás"
          highlightedText="imaginando"
          description="Cuéntanos tu idea y prepararemos una propuesta adaptada al tipo de celebración, espacio, cantidad de invitados y experiencia que deseas crear."
          benefits={ctaBenefits}
          noteTitle="¿Tienes una idea?"
          noteText="Conversemos y comencemos a darle forma."
          primaryLabel="Cotizar mi evento"
          primaryTo="/contacto"
          secondaryLabel="Explorar servicios"
          secondaryTo="/servicios"
          responseText="Te orientaremos para encontrar la propuesta adecuada para tu evento."
        />
      </Container>
    </section>
  );
}

export default About;

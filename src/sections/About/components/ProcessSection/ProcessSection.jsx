import { RevealGroup, RevealItem } from "../../../../components/Reveal/Reveal";

import { processSteps } from "../../data/aboutData";
import SectionHeading from "../SectionHeading/SectionHeading";

import "./ProcessSection.css";

function ProcessSection() {
  return (
    <section className="about__process">
      <SectionHeading
        eyebrow="Nuestra forma de trabajar"
        title="De tu idea a una experiencia memorable"
        description="Organizamos cada proyecto mediante un proceso claro que nos permite entender tus necesidades, preparar la producción y coordinar correctamente cada etapa."
      />

      <RevealGroup
        className="about__process-grid"
        stagger={0.14}
        delay={0.1}
        amount={0.2}
      >
        {processSteps.map((step) => (
          <RevealItem key={step.id}>
            <article className={`about__step about__step--${step.theme}`}>
              <div className="about__step-top">
                <span className="about__step-label">Paso {step.id}</span>
              </div>

              <div className="about__step-visual">
                <img
                  className="about__step-image"
                  src={step.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="about__step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

export default ProcessSection;

import { RevealGroup, RevealItem } from "../../../../components/Reveal/Reveal";

import { values } from "../../data/aboutData";
import SectionHeading from "../SectionHeading/SectionHeading";

import "./ValuesSection.css";

function ValuesSection() {
  return (
    <section className="about__values-block">
      <SectionHeading
        eyebrow="Qué nos diferencia"
        title="Una producción pensada para generar confianza"
        description="Más que instalar equipos, buscamos comprender la celebración y entregar una solución que represente lo que cada cliente desea transmitir."
      />

      <RevealGroup
        className="about__values"
        stagger={0.14}
        delay={0.08}
        amount={0.15}
      >
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <RevealItem key={value.id}>
              <article className={`about__value about__value--${value.theme}`}>
                <div className="about__value-top">
                  <span className="about__value-icon">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>

                  <span className="about__value-label">{value.label}</span>
                </div>

                <div className="about__value-visual">
                  <img
                    className="about__value-image"
                    src={value.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="about__value-content">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}

export default ValuesSection;

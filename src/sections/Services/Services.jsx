import "./Services.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

const services = [
  {
    id: "01",
    title: "DJ y música",
    description:
      "Selección musical personalizada y conducción de cada momento para mantener la energía de tu celebración.",
    features: ["DJ profesional", "Música personalizada", "Animación"],
  },
  {
    id: "02",
    title: "Sonido profesional",
    description:
      "Equipamiento adaptado al tamaño y características de cada espacio para lograr una experiencia clara y envolvente.",
    features: ["Amplificación", "Micrófonos", "Montaje técnico"],
  },
  {
    id: "03",
    title: "Iluminación",
    description:
      "Diseñamos ambientes mediante iluminación decorativa, efectos y tecnología pensada para cada tipo de evento.",
    features: ["Iluminación ambiental", "Efectos", "Pista de baile"],
  },
  {
    id: "04",
    title: "Producción integral",
    description:
      "Coordinamos los elementos técnicos y humanos necesarios para que puedas disfrutar tu evento con tranquilidad.",
    features: ["Planificación", "Coordinación", "Soporte durante el evento"],
  },
  {
    id: "05",
    title: "Matrimonios",
    description:
      "Acompañamos cada etapa de tu celebración con una propuesta diseñada según tus gustos y el estilo del matrimonio.",
    features: ["Ceremonia", "Cena", "Fiesta"],
  },
  {
    id: "06",
    title: "Eventos corporativos",
    description:
      "Soluciones técnicas y audiovisuales para celebraciones, galas, actividades empresariales y encuentros corporativos.",
    features: ["Audio corporativo", "Iluminación", "Producción"],
  },
];

function Services({ showHeader = true }) {
  return (
    <section className="services" id="servicios">
      <Container>
        {showHeader && (
          <div className="services__header">
            <div>
              <p className="services__eyebrow">Nuestros servicios</p>

              <h2 className="services__title">
                Todo lo necesario para crear una experiencia memorable
              </h2>
            </div>

            <div className="services__introduction">
              <p>
                Diseñamos soluciones personalizadas de sonido, iluminación,
                música y producción según las características de cada evento.
              </p>

              <Button href="#contacto" variant="secondary">
                Solicitar cotización
              </Button>
            </div>
          </div>
        )}

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-card__top">
                <span className="service-card__number">{service.id}</span>

                <span className="service-card__symbol" aria-hidden="true">
                  +
                </span>
              </div>

              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <ul className="service-card__features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;

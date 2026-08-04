import { useState } from "react";

import "./Services.css";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import { RevealGroup, RevealItem } from "../../components/Reveal/Reveal";
import ServiceModal from "../../components/ServiceModal/ServiceModal";

const FALLBACK_IMAGE = "/assets/img/events/01.JPG";

const services = [
  {
    id: "01",
    title: "Matrimonios",

    description:
      "Creamos una propuesta musical y visual personalizada para acompañar cada momento de tu matrimonio, desde la recepción hasta la fiesta.",

    features: [
      "DJ y música personalizada",
      "Sonido e iluminación",
      "Animación y coordinación",
    ],

    image: "/assets/img/services/matrimonios/01.jpg",
    imageAlt: "Matrimonio producido por GM Eventos",

    hasDetails: true,

    eyebrow: "Celebraciones inolvidables",

    longDescription:
      "Creamos una experiencia pensada especialmente para los novios y sus invitados. Nos encargamos de la música, el sonido y la iluminación para acompañar cada etapa del matrimonio, adaptándonos al estilo de la pareja, al lugar y al ambiente que desean crear.",

    includes: [
      "DJ y selección musical personalizada",
      "Sonido profesional para la celebración",
      "Iluminación para la pista de baile",
      "Animación y coordinación musical",
      "Apoyo técnico durante el evento",
    ],

    optional: [
      "Escenario",
      "Pantallas",
      "Cotillón",
      "Efectos especiales",
      "Iluminación decorativa",
    ],

    images: [
      "/assets/img/services/matrimonios/01.JPG",
      "/assets/img/services/matrimonios/02.JPG",
      "/assets/img/services/matrimonios/03.JPG",
      "/assets/img/services/matrimonios/04.JPG",
    ],
  },
  {
    id: "02",
    title: "Fiestas y celebraciones",

    description:
      "Creamos el ambiente ideal para cumpleaños, aniversarios y celebraciones privadas, adaptando la música y la producción al estilo de cada ocasión.",

    features: [
      "DJ y música personalizada",
      "Sonido profesional",
      "Iluminación para fiesta",
    ],

    image: "/assets/img/services/fiestas/fiesta-00.JPG",
    imageAlt: "Fiesta privada producida por GM Eventos",

    hasDetails: true,

    eyebrow: "Celebra a tu manera",

    longDescription:
      "Convertimos cumpleaños, aniversarios, reuniones familiares y fiestas privadas en experiencias entretenidas y memorables. Adaptamos la música, el sonido y la iluminación al espacio, la cantidad de invitados y el estilo de celebración que quieras realizar.",

    includes: [
      "DJ y selección musical adaptada a los invitados",
      "Sonido profesional según el tamaño del espacio",
      "Iluminación para la pista de baile",
      "Animación y conducción de momentos especiales",
      "Montaje y apoyo técnico durante la celebración",
    ],

    optional: [
      "Cotillón",
      "Karaoke",
      "Pantallas",
      "Máquina de humo",
      "Efectos especiales",
      "Iluminación decorativa",
    ],

    images: [
      "/assets/img/services/fiestas/fiesta-01.png",
      "/assets/img/services/fiestas/fiesta-02.png",
      "/assets/img/services/fiestas/fiesta-03.png",
      "/assets/img/services/fiestas/fiesta-04.png",
    ],
  },
  {
    id: "03",
    title: "Eventos corporativos",

    description:
      "Soluciones técnicas y musicales para celebraciones de empresa, lanzamientos, reuniones y actividades corporativas.",

    features: ["Amplificación", "Micrófonos", "Apoyo técnico"],

    image: "/assets/img/services/corporativos/01.jpg",
    imageAlt: "Evento corporativo producido por GM Eventos",

    hasDetails: true,

    eyebrow: "Producción para empresas",

    longDescription:
      "Desarrollamos soluciones técnicas para empresas, organizaciones e instituciones que necesitan realizar eventos profesionales y bien coordinados. Adaptamos el sonido, la iluminación y la ambientación musical al formato de cada actividad, desde presentaciones y reuniones hasta celebraciones corporativas.",

    includes: [
      "Amplificación adaptada al espacio",
      "Micrófonos para presentaciones y discursos",
      "Música ambiental o servicio de DJ",
      "Iluminación para escenario y salón",
      "Montaje y apoyo técnico durante la actividad",
    ],

    optional: [
      "Escenario",
      "Pantallas",
      "Proyección audiovisual",
      "Iluminación corporativa",
      "Registro fotográfico",
      "Producción personalizada",
    ],

    images: [
      "/assets/img/services/corporativos/01.jpg",
      "/assets/img/services/corporativos/02.jpg",
      "/assets/img/services/corporativos/03.jpg",
      "/assets/img/services/corporativos/04.jpg",
    ],
  },
  {
    id: "04",
    title: "Graduaciones y galas",

    description:
      "Creamos una experiencia elegante y entretenida para ceremonias, cenas, fiestas de graduación y galas.",

    features: ["DJ y animación", "Sonido profesional", "Iluminación"],

    image: "/assets/img/services/graduaciones/01.jpg",
    imageAlt: "Graduación y gala producida por GM Eventos",

    hasDetails: true,

    eyebrow: "Celebra una nueva etapa",

    longDescription:
      "Acompañamos graduaciones y galas con una producción musical y visual diseñada para cada etapa de la celebración. Coordinamos la amplificación de la ceremonia, la música, la iluminación y la fiesta para entregar una experiencia ordenada, elegante y entretenida.",

    includes: [
      "DJ y selección musical para la celebración",
      "Sonido profesional para ceremonia y fiesta",
      "Micrófonos para discursos y premiaciones",
      "Iluminación para salón y pista de baile",
      "Animación y apoyo técnico durante el evento",
    ],

    optional: [
      "Escenario",
      "Pantallas",
      "Cotillón",
      "Efectos especiales",
      "Iluminación decorativa",
      "Proyección audiovisual",
    ],

    images: [
      "/assets/img/services/graduaciones/01.jpg",
      "/assets/img/services/graduaciones/02.jpg",
      "/assets/img/services/graduaciones/03.jpg",
      "/assets/img/services/graduaciones/04.jpg",
    ],
  },
  {
    id: "05",
    title: "Eventos comerciales",

    description:
      "Ambientación musical y producción técnica para pubs, discotecas, activaciones, aperturas y eventos de marca.",

    features: ["DJ", "Producción técnica", "Iluminación"],

    image: "/assets/img/services/comerciales/01.jpg",
    imageAlt: "Evento comercial producido por GM Eventos",

    hasDetails: true,

    eyebrow: "Ambiente y entretenimiento",

    longDescription:
      "Potenciamos la experiencia del público en pubs, discotecas, terrazas, lanzamientos, aperturas y activaciones de marca. Diseñamos una propuesta musical y técnica acorde con el espacio, el tipo de público y la identidad del evento.",

    includes: [
      "DJ y ambientación musical",
      "Sonido profesional para el espacio",
      "Iluminación para pista o escenario",
      "Montaje y configuración técnica",
      "Apoyo técnico durante la actividad",
    ],

    optional: [
      "Escenario",
      "Pantallas",
      "Efectos especiales",
      "Máquina de humo",
      "Iluminación decorativa",
      "Activaciones personalizadas",
    ],

    images: [
      "/assets/img/services/comerciales/01.jpg",
      "/assets/img/services/comerciales/02.jpg",
      "/assets/img/services/comerciales/03.jpg",
      "/assets/img/services/comerciales/04.jpg",
    ],
  },
  {
    id: "06",
    title: "Producción personalizada",

    description:
      "Diseñamos una propuesta a medida según el tipo de evento, espacio, cantidad de invitados y necesidades del cliente.",

    features: [
      "Diseño a medida",
      "Servicios combinables",
      "Coordinación técnica",
    ],

    image: "/assets/img/services/personalizada/01.jpg",
    imageAlt: "Producción personalizada realizada por GM Eventos",

    hasDetails: true,

    eyebrow: "Tu evento, a tu manera",

    longDescription:
      "Creamos una propuesta flexible para eventos que necesitan combinar diferentes servicios o incorporar elementos adicionales. Conversamos sobre tu idea, revisamos las características del espacio y seleccionamos las soluciones que mejor se adapten a tus objetivos y presupuesto.",

    includes: [
      "Evaluación de las necesidades del evento",
      "Selección personalizada de servicios",
      "Planificación del montaje técnico",
      "Coordinación de sonido e iluminación",
      "Apoyo técnico durante la actividad",
    ],

    optional: [
      "DJ",
      "Escenario",
      "Pantallas",
      "Cotillón",
      "Karaoke",
      "Efectos especiales",
      "Iluminación decorativa",
      "Servicios adicionales",
    ],

    images: [
      "/assets/img/services/personalizada/01.jpg",
      "/assets/img/services/personalizada/02.jpg",
      "/assets/img/services/personalizada/03.jpg",
      "/assets/img/services/personalizada/04.jpg",
    ],
  },
];

function Services({ showHeader = true, limit }) {
  const [selectedService, setSelectedService] = useState(null);

  const hasLimit = Number.isInteger(limit) && limit > 0;

  const visibleServices = hasLimit ? services.slice(0, limit) : services;

  const showViewAllButton =
    hasLimit && visibleServices.length < services.length;

  const openServiceModal = (service) => {
    if (!service.hasDetails) {
      return;
    }

    setSelectedService(service);
  };

  const handleServiceKeyDown = (event, service) => {
    if (!service.hasDetails) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openServiceModal(service);
    }
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <>
      <section className="services">
        <Container>
          {showHeader && (
            <div className="services__header">
              <div className="services__heading">
                <p className="services__eyebrow">Nuestros servicios</p>

                <h2 className="services__title">
                  Experiencias diseñadas para cada tipo de evento
                </h2>
              </div>

              <div className="services__introduction">
                <p>
                  Combinamos música, sonido, iluminación y producción para crear
                  celebraciones memorables. Cada propuesta se adapta al estilo,
                  espacio y necesidades de nuestros clientes.
                </p>

                <Button to="/contacto" variant="secondary">
                  Solicitar cotización
                </Button>
              </div>
            </div>
          )}

          <RevealGroup
            className={`services__grid ${
              hasLimit ? "services__grid--preview" : ""
            }`}
            stagger={0.12}
            delay={0.08}
            amount={0.15}
          >
            {visibleServices.map((service) => (
              <RevealItem className="services__reveal-item" key={service.id}>
                <article
                  className={`service-card ${
                    service.hasDetails ? "service-card--interactive" : ""
                  }`}
                  role={service.hasDetails ? "button" : undefined}
                  tabIndex={service.hasDetails ? 0 : undefined}
                  aria-haspopup={service.hasDetails ? "dialog" : undefined}
                  aria-label={
                    service.hasDetails
                      ? `Ver detalles de ${service.title}`
                      : undefined
                  }
                  onClick={
                    service.hasDetails
                      ? () => openServiceModal(service)
                      : undefined
                  }
                  onKeyDown={
                    service.hasDetails
                      ? (event) => handleServiceKeyDown(event, service)
                      : undefined
                  }
                >
                  <img
                    className="service-card__image"
                    src={service.image}
                    alt={service.imageAlt}
                    onError={handleImageError}
                  />

                  <div className="service-card__overlay" aria-hidden="true" />

                  <div className="service-card__body">
                    <div className="service-card__content">
                      <h3>{service.title}</h3>

                      <p>{service.description}</p>
                    </div>

                    <div className="service-card__services">
                      <p className="service-card__includes-label">Incluye:</p>

                      <ul className="service-card__features">
                        {service.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {service.hasDetails && (
                      <span className="service-card__details-label">
                        Ver detalles
                        <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          {showViewAllButton && (
            <div className="services__footer">
              <Button to="/servicios" variant="secondary">
                Ver todos los servicios
              </Button>
            </div>
          )}
        </Container>
      </section>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeServiceModal} />
      )}
    </>
  );
}

export default Services;

import "./About.css";

import Container from "../../components/Container/Container";

const values = [
  {
    id: "01",
    title: "Atención personalizada",
    description:
      "Escuchamos tus ideas y diseñamos una propuesta adaptada a tu evento.",
  },
  {
    id: "02",
    title: "Respuesta y soluciones",
    description:
      "Nos anticipamos a los imprevistos y respondemos con rapidez y experiencia.",
  },
  {
    id: "03",
    title: "Calidad profesional",
    description:
      "Trabajamos con equipamiento de calidad y dedicación en cada montaje.",
  },
];

function About({ showHeader = true }) {
  return (
    <section className="about" id="nosotros">
      <Container>
        <div
          className={`about__grid ${
            !showHeader ? "about__grid--without-header" : ""
          }`}
        >
          {showHeader && (
            <div className="about__heading">
              <p className="about__eyebrow">Sobre GM Eventos</p>

              <h2 className="about__title">
                Nos involucramos en cada detalle para que disfrutes tu evento
              </h2>
            </div>
          )}

          <div className="about__content">
            <p className="about__lead">
              Creamos experiencias personalizadas para matrimonios, eventos
              corporativos, graduaciones y celebraciones.
            </p>

            <p className="about__description">
              Nuestro trabajo comienza escuchando tus ideas. A partir de ellas,
              diseñamos una propuesta que combina sonido, iluminación, música y
              producción para transformar cada celebración en un recuerdo
              especial.
            </p>

            <div className="about__values">
              {values.map((value) => (
                <article className="about__value" key={value.id}>
                  <span className="about__value-number">{value.id}</span>

                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;

import "./PageHero.css";

import Container from "../Container/Container";

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">{eyebrow}</p>

          <h1 className="page-hero__title">{title}</h1>

          <p className="page-hero__description">{description}</p>
        </div>
      </Container>
    </section>
  );
}

export default PageHero;

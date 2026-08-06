import Container from "../Container/Container";

import "./PageHero.css";

function PageHero({ eyebrow, title, description, variant = "default" }) {
  const isCompact = variant === "compact";

  return (
    <section className={`page-hero ${isCompact ? "page-hero--compact" : ""}`}>
      <Container>
        <div className="page-hero__content">
          {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}

          <h1 className="page-hero__title">{title}</h1>

          {description && (
            <p className="page-hero__description">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;

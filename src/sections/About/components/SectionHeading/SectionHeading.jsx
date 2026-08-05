import "./SectionHeading.css";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="about__section-heading">
      <div>
        <p className="about__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </header>
  );
}

export default SectionHeading;

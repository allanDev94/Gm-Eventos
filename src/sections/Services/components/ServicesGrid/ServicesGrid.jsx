import ServiceCard from "../ServiceCard/ServiceCard";

import "./ServicesGrid.css";

function ServicesGrid({ services, fallbackImage, onOpen, isPreview = false }) {
  const getAnimationDelay = (index) => {
    const columnDelay = (index % 3) * 0.1;

    if (isPreview) {
      return columnDelay;
    }

    const isFirstRow = index < 3;

    return isFirstRow ? 0.25 + columnDelay : columnDelay;
  };

  return (
    <div
      className={`services-grid ${isPreview ? "services-grid--preview" : ""}`}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          fallbackImage={fallbackImage}
          onOpen={onOpen}
          animationDelay={getAnimationDelay(index)}
        />
      ))}
    </div>
  );
}

export default ServicesGrid;

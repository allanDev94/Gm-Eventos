import Header from "../../components/Header/Header";
import PageHero from "../../components/PageHero/PageHero";

import Services from "../../sections/Services/Services";
import Footer from "../../sections/Footer/Footer";

function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Nuestros servicios"
          title="Todo lo necesario para producir un gran evento"
          description="Diseñamos soluciones de sonido, iluminación, música y producción adaptadas a las características de cada celebración."
        />

        <Services showHeader={false} />
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;

import Header from "../../components/Header/Header";
import PageHero from "../../components/PageHero/PageHero";

import Portfolio from "../../sections/Portfolio/Portfolio";
import Footer from "../../sections/Footer/Footer";

function EventsPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          variant="compact"
          eyebrow="Eventos realizados"
          title="Experiencias creadas para momentos únicos"
          description="Conoce una selección de celebraciones, producciones y experiencias desarrolladas por GM Eventos."
        />

        <Portfolio showHeader={false} />
      </main>

      <Footer />
    </>
  );
}

export default EventsPage;

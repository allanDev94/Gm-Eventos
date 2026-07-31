import Header from "../../components/Header/Header";
import PageHero from "../../components/PageHero/PageHero";

import About from "../../sections/About/About";
import Footer from "../../sections/Footer/Footer";

function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Sobre GM Eventos"
          title="Creamos experiencias con dedicación y profesionalismo"
          description="Conoce nuestra forma de trabajar y el compromiso que ponemos en la planificación y producción de cada evento."
        />

        <About showHeader={false} />
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;

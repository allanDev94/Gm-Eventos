import Header from "../../components/Header/Header";
import PageHero from "../../components/PageHero/PageHero";

import Contact from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";

function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Hablemos"
          title="Cuéntanos cómo imaginas tu próximo evento"
          description="Envíanos la información principal de tu celebración y prepararemos una propuesta adaptada a tus necesidades."
        />

        <Contact showHeader={false} />
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;

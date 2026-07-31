import Header from "../../components/Header/Header";

import Hero from "../../sections/Hero/Hero";
import Clients from "../../sections/Clients/Clients";
import Services from "../../sections/Services/Services";
import Portfolio from "../../sections/Portfolio/Portfolio";
import Footer from "../../sections/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Clients />
        <Services />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;

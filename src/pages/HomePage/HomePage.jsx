import Header from "../../components/Header/Header";

import Hero from "../../sections/Hero/Hero";
import Clients from "../../sections/Clients/Clients";
import Services from "../../sections/Services/Services";
import Portfolio from "../../sections/Portfolio/Portfolio";
import CallToAction from "../../sections/CallToAction/CallToAction";
import Footer from "../../sections/Footer/Footer";
import HomeAbout from "../../sections/HomeAbout/HomeAbout";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Clients />
        <Services limit={3} />
        <HomeAbout />
        <Portfolio limit={2} />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

export default HomePage;

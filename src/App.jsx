import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Clients from "./sections/Clients/Clients";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

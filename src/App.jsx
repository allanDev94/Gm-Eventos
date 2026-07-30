import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import Clients from "./sections/Clients/Clients";
import About from "./sections/About/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
      </main>
    </>
  );
}

export default App;
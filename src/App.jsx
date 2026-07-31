import { Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/contacto" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

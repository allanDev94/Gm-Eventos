import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PageMetadata from "./components/PageMetadata/PageMetadata";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const EventsPage = lazy(() => import("./pages/EventsPage/EventsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage/PrivacyPage"));

function App() {
  return (
    <>
      <ScrollToTop />
      <PageMetadata />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

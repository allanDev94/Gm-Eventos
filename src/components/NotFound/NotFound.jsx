import { motion } from "motion/react";
import Button from "../Button/Button";

import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <motion.div
        className="not-found__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="not-found__code">404</span>

        <h1>Página no encontrada</h1>

        <p>
          La página que buscas no existe o fue movida. Te invitamos a volver al
          inicio y seguir descubriendo nuestros servicios para crear tu próximo
          evento.
        </p>

        <Button to="/">Volver al inicio</Button>
      </motion.div>
    </section>
  );
}

export default NotFound;

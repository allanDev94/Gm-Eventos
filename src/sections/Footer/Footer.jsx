import { Link } from "react-router-dom";

import "./Footer.css";

import Container from "../../components/Container/Container";

const WHATSAPP_NUMBER = "56989340450";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="footer__logo" to="/">
              GM Eventos
            </Link>

            <p className="footer__description">
              Creamos experiencias memorables mediante sonido, iluminación,
              música y producción profesional para todo tipo de eventos.
            </p>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <p className="footer__heading">Navegación</p>

              <nav aria-label="Navegación del pie de página">
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/contacto">Contacto</Link>
              </nav>
            </div>

            <div className="footer__column">
              <p className="footer__heading">Contacto</p>

              <div className="footer__links">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                <a href="mailto:contacto@gmeventos.cl">contacto@gmeventos.cl</a>

                <span>Santiago, Chile</span>
              </div>
            </div>

            <div className="footer__column">
              <p className="footer__heading">Redes sociales</p>

              <div className="footer__links">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} GM Eventos. Todos los derechos reservados.</p>

          <Link className="footer__back-to-top" to="/">
            Volver al inicio
            <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

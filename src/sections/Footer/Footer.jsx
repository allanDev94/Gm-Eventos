import "./Footer.css";

import Container from "../../components/Container/Container";

const WHATSAPP_NUMBER = "569XXXXXXXX";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#inicio">
              GM Eventos
            </a>

            <p className="footer__description">
              Creamos experiencias memorables mediante sonido, iluminación,
              música y producción profesional para todo tipo de eventos.
            </p>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <p className="footer__heading">Navegación</p>

              <nav aria-label="Navegación del pie de página">
                <a href="#inicio">Inicio</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#servicios">Servicios</a>
                <a href="#eventos">Eventos</a>
                <a href="#contacto">Contacto</a>
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

          <a className="footer__back-to-top" href="#inicio">
            Volver arriba
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

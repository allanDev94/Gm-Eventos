import { ArrowUp } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link
              className="footer__logo"
              to="/"
              aria-label="GM Eventos - Ir al inicio"
            >
              <img
                className="footer__logo-image"
                src="/assets/img/events/favicon-48x48.png"
                alt=""
                aria-hidden="true"
              />

              <span className="footer__logo-text">Eventos</span>
            </Link>

            <p className="footer__description">
              Creamos experiencias memorables mediante sonido, iluminación,
              música y producción profesional para todo tipo de eventos.
            </p>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <h3 className="footer__heading">Navegación</h3>
              <nav>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/nosotros">Nosotros</NavLink>
                <NavLink to="/servicios">Servicios</NavLink>
                <NavLink to="/eventos">Eventos</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
              </nav>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">Contacto</h3>
              <div className="footer__links">
                <a
                  href="https://wa.me/56900000000"
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
              <h3 className="footer__heading">Redes sociales</h3>
              <div className="footer__links">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 GM Eventos. Todos los derechos reservados.</p>

          <button
            type="button"
            className="footer__back-to-top"
            onClick={scrollToTop}
          >
            Volver arriba{" "}
            <span>
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

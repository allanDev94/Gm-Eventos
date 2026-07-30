import "./Header.css";

import Container from "../Container/Container";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <a href="/" className="header__logo">
            GM Eventos
          </a>

          <nav className="header__nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#eventos">Eventos</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <Button href="#contacto">Cotizar</Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Container from "../Container/Container";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "header__link header__link--active" : "header__link";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 761px)");

    const handleViewportChange = (event) => {
      if (event.matches) {
        closeMenu();
      }
    };

    desktopMediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <NavLink className="header__logo" to="/" onClick={closeMenu}>
            GM Eventos
          </NavLink>

          <nav
            className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
            id="main-navigation"
            aria-label="Navegación principal"
          >
            <NavLink className={getNavLinkClass} to="/" end onClick={closeMenu}>
              Inicio
            </NavLink>

            <NavLink
              className={getNavLinkClass}
              to="/nosotros"
              onClick={closeMenu}
            >
              Nosotros
            </NavLink>

            <NavLink
              className={getNavLinkClass}
              to="/servicios"
              onClick={closeMenu}
            >
              Servicios
            </NavLink>

            <NavLink
              className={getNavLinkClass}
              to="/eventos"
              onClick={closeMenu}
            >
              Eventos
            </NavLink>

            <NavLink
              className={getNavLinkClass}
              to="/contacto"
              onClick={closeMenu}
            >
              Contacto
            </NavLink>

            <NavLink
              className="button button--primary header__mobile-cta"
              to="/contacto"
              onClick={closeMenu}
            >
              Cotizar evento
            </NavLink>
          </nav>

          <NavLink
            className="button button--primary header__cta"
            to="/contacto"
          >
            Cotizar evento
          </NavLink>

          <button
            className={`header__menu-button ${
              isMenuOpen ? "header__menu-button--open" : ""
            }`}
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => {
              setIsMenuOpen((currentState) => !currentState);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;

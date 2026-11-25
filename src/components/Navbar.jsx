import logo from '../assets/logo/jerusalen-logo.svg'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container container">
        <a
          href="#inicio"
          className="navbar__brand"
        >
          <img
            src={logo}
            alt="Panadería Jerusalén"
            className="navbar__brand-logo"
          />
        </a>

        <nav className="navbar__links">
          <Link to="/">Inicio</Link>
          <Link to="/menu">Menu</Link>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="navbar__actions"></div>
      </div>
    </header>
  )
}

export default Navbar

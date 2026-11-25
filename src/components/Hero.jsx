
import './Hero.css'
import { Link } from "react-router-dom";
import Carrusel from './Carrusel';

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero__decoration hero__decoration--one"></div>
      <div className="hero__decoration hero__decoration--two"></div>

      <div className="hero__container container">

        {/* CONTENIDO IZQUIERDO */}
        <div className="hero__content">

          <span className="hero__eyebrow">
            PAN ARTESANAL · DESDE 2004
          </span>

          <h1 className="hero__title">
            Recién horneado,
            <span> todos los días.</span>
          </h1>

          <p className="hero__description">
            Elaboramos panes, postres y productos de panadería
            con ingredientes seleccionados, recetas tradicionales
            y el sabor de siempre.
          </p>

          <div className="hero__actions">

            <Link to="/menu" className="hero__button hero__button--primary">
              Ver nuestro menú
              <span>→</span>
            </Link>

            <a href="#nosotros" className="hero__button hero__button--secondary">
              Nuestra historia
            </a>

          </div>

          <div className="hero__features">

            <div className="hero__feature">
              <strong>20+</strong>
              <span>Años horneando</span>
            </div>

            <div className="hero__feature-line"></div>

            <div className="hero__feature">
              <strong>100%</strong>
              <span>Tradición artesanal</span>
            </div>

          </div>

        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <Carrusel />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero


import { Carousel } from 'antd';
import './Carrusel.css';
import { href } from 'react-router-dom';

const productos = [
  {
    id: 1,
    nombre: 'Pan artesanal',
    descripcion: 'Recién horneado cada mañana',
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000'
  },
  {
    id: 2,
    nombre: 'Deliciosos postres',
    descripcion: 'Dulces momentos para compartir',
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000'
  },
  {
    id: 3,
    nombre: 'Croissants',
    descripcion: 'Crujientes por fuera, suaves por dentro',
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000'
  },
  {
    id: 4,
    nombre: 'Pan recién horneado',
    descripcion: 'El sabor de nuestra tradición',
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000'
  }
];

function Carrusel() {
  return (
    <div className="carrusel-container">

      <Carousel
        autoplay
        autoplaySpeed={3500}
        dots={{ className: 'carrusel-dots' }}
        effect="fade"
        pauseOnHover
        infinite
      >
        {productos.map((producto) => (
          <div key={producto.id}>
            <div className="carrusel-slide">

              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="carrusel-image"
              />

              <div className="carrusel-overlay">
                <span className="carrusel-tag">
                  Hecho con tradición
                </span>

                <h2>{producto.nombre}</h2>

                <p>{producto.descripcion}</p>
              </div>

            </div>
          </div>
        ))}
      </Carousel>

    </div>
  );
}

export default Carrusel;

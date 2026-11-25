import { useState } from 'react'

import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

import {
  categories,
  products,
} from '../data/products'

import './ProductsSection.css'

function ProductsSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter((product) => product.category === activeCategory)

  const activeCategoryName = categories.find(
    (category) => category.id === activeCategory
  )?.name || 'Productos'

  return (
    <section className="products-section" id="catalogo">
      <div className="container">

        <div className="products-section__header">
          <div>
            <span className="products-section__eyebrow">
              PANADERÍA JERUSALÉN · NUESTRO MENÚ
            </span>

            <h1 className="products-section__title">
              Algo rico para
              <span> cada momento.</span>
            </h1>
          </div>

          <div className="products-section__intro-wrap">
            <p className="products-section__intro">
              Descubre nuestros panes, hojaldres, postres y preparaciones
              elaboradas diariamente con ingredientes seleccionados y
              todo el sabor de la tradición.
            </p>
            <span className="products-section__freshness">
              <span aria-hidden="true">✦</span> Fresco, artesanal y hecho con cariño
            </span>
          </div>
        </div>

        <div className="products-section__catalog-top">
          <div className="products-section__filters" aria-label="Filtrar productos por categoría">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={
                  activeCategory === category.id
                    ? 'products-section__filter products-section__filter--active'
                    : 'products-section__filter'
                }
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>

          <p className="products-section__results" aria-live="polite">
            <strong>{filteredProducts.length}</strong>{' '}
            {filteredProducts.length === 1 ? 'producto' : 'productos'} en {activeCategoryName.toLowerCase()}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-section__grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="products-section__empty">
            <span aria-hidden="true">🥐</span>
            <h3>Pronto tendremos más opciones</h3>
            <p>Estamos preparando nuevos productos para ti.</p>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  )
}

export default ProductsSection

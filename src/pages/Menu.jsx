import { useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsSection from '../components/ProductsSection'
import CartDrawer from '../components/CartDrawer'
import CheckoutPanel from '../components/CheckoutPanel'


function Menu() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...currentCart, { ...product, quantity }]
    })

    setIsCartOpen(true)
  }

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    )
  }

  const openCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const finishOrder = () => {
    setCart([])
    setIsCheckoutOpen(false)
  }

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <>
      <Navbar />

      <main className="menu-page">
        <ProductsSection onAddToCart={addToCart} />
      </main>

      {totalItems > 0 && (
        <button
          type="button"
          className="menu-cart-trigger"
          onClick={() => setIsCartOpen(true)}
          aria-label={`Abrir carrito con ${totalItems} productos`}
        >
          <span className="menu-cart-trigger__icon" aria-hidden="true">🛒</span>
          <span>Mi pedido</span>
          <span className="menu-cart-trigger__count">{totalItems}</span>
        </button>
      )}

      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onCheckout={openCheckout}
      />

      <CheckoutPanel
        isOpen={isCheckoutOpen}
        cart={cart}
        onClose={() => setIsCheckoutOpen(false)}
        onBackToCart={() => {
          setIsCheckoutOpen(false)
          setIsCartOpen(true)
        }}
        onOrderSuccess={finishOrder}
      />

      <Footer />
    </>
  )
}

export default Menu

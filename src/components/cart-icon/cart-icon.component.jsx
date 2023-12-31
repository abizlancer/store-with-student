import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import ShoppingIcon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={() => toggleCartOpen()}>
      <img src={ShoppingIcon} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
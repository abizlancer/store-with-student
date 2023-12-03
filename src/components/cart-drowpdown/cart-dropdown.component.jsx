import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/cart.context'

import CartItem from '../cart-item/cart-item.component'

import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckouthandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem cartItem={item} key={item.id}/>
        ))}
      </div>
      <Button onClick={goToCheckouthandler}>GO To Checkout</Button>
    </div>
  )
}

export default CartDropdown
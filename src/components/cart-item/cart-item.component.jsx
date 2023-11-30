import './cart-item.styles.scss'


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem
  console.log(cartItem);
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt="" />
      <div className="item-details">
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem
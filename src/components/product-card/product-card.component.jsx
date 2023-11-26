
import Button from '../button/button.component'

import './product-card.styles.scss'

const ProductCard = () => {
  <div className="product-card-container">
    <img src="" alt="" />
    <div className="footer">
      <span className="name"></span>
      <span className="price"></span>
    </div>
    <Button buttonType='inverted'>Add To card</Button>
  </div>
}

export default ProductCard
import { AiOutlineClose } from "react-icons/ai";
import * as Styles from "./styles";

import { useSelector } from "react-redux";

import CartItem from '../cart-item/index'
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho <AiOutlineClose onClick={handleEscapeAreaClick} size={32} />
        </Styles.CartTitle>
        <div className="map">
          {products.map((product) => {
            return <CartItem product={product} />
          })}
        </div>

        <div className="price-checkout">
          <Styles.CartTotal>
            <p>Total:</p>
            <p>R${productsTotalPrice},00</p>
          </Styles.CartTotal>
          <button>Finalizar Compra</button>
        </div>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;

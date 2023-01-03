import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeProductFromCart, increaseProductQuantity, decreaseProductQuantity } from "../../redux/cart/actions";

// Styles
import * as Styles from "./styles";

const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id))
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id))
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <Styles.CartItemQuantity>
          <div className="svg-box">
            <AiOutlineMinus
              size={18}
              onClick={handleDecreaseClick}
              aria-label={`Decrease quantity of ${product.name}`}
            />
          </div>
          <p>{product.quantity}</p>
          <div className="svg-box">
            <AiOutlinePlus
              size={18}
              onClick={handleIncreaseClick}
              aria-label={`Increase quantity of ${product.name}`}
            />
          </div>
        </Styles.CartItemQuantity>
        <p>R${product.price}</p>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="#373737" d="M27.14 34H8.86A2.93 2.93 0 0 1 6 31V11.23h2V31a.93.93 0 0 0 .86 1h18.28a.93.93 0 0 0 .86-1V11.23h2V31a2.93 2.93 0 0 1-2.86 3Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="#373737" d="M30.78 9H5a1 1 0 0 1 0-2h25.78a1 1 0 0 1 0 2Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="#373737" d="M21 13h2v15h-2z" class="clr-i-outline clr-i-outline-path-3"/><path fill="#373737" d="M13 13h2v15h-2z" class="clr-i-outline clr-i-outline-path-4"/><path fill="#373737" d="M23 5.86h-1.9V4h-6.2v1.86H13V4a2 2 0 0 1 1.9-2h6.2A2 2 0 0 1 23 4Z" class="clr-i-outline clr-i-outline-path-5"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../redux/cart/actions";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <Styles.ProductContainer>
      <CustomButton onClick={handleProductClick}>
        Adicionar ao carrinho
      </CustomButton>

      <Link to={'product/'+ product.id}>
      <Styles.ProductImage imageUrl={product.imageUrl}>
      </Styles.ProductImage>
      
        <Styles.ProductInfo>
          
            <p>{product.name}</p>
          
          <p>R${product.price}</p>
        </Styles.ProductInfo>
      </Link>
    </Styles.ProductContainer>
  );
};

export default ProductItem;

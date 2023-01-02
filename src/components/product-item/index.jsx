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

    // let a = product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ")
    // let b = a.join("-")

  return (
    <Styles.ProductContainer>
      
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>
      
      <Link to={'product/'+ product.id}>
        <Styles.ProductInfo>
          
            <p>{product.name}</p>
          
          <p>R${product.price}</p>
        </Styles.ProductInfo>
      </Link>
    </Styles.ProductContainer>
  );
};

export default ProductItem;

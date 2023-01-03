import products from "../../data/products";
import React, { useState } from "react";
import * as Styles from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

const ProductPage = (  ) => {
    const params = useParams()
    let product = products.filter(data => data.id == params.id)
    product = product[0]
    
    const dispatch = useDispatch()
    const handleProductClick = () => {
      dispatch(addProductToCart(product))
    }

    const [isActive, setIsActive] = useState(false);

    React.useEffect(() => {
      setIsActive(true);
      window.scroll(0, 0)
    }, []);

  return (
    <Styles.ProductInformation>
      <h1 className={isActive ? "active" : "nd"}>{product.name}</h1>
      <div className="wrapper">
        <div className={isActive ? "container active" : "container"}>
          <div className="image-container">
            <img src={product.imageUrl} alt="image" />
          </div>

          <div className="product-details">
            <h2>R${product.price},00</h2>
            <span>Em até 6x sem juros no cartão</span>
            <hr />
            <p className="property">Cor:</p>
            <p className="options">Peça única</p>
            <p className="property">Tamanho:</p>
            <p className="options">Único</p>
            <button onClick={handleProductClick}>Adicionar ao carrinho</button>
            <div className="property-2">
              <p>Descrição</p>
              <p>+</p>
              </div>
            <div className="property-2">
              <p>Medidas de tamanho</p>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </Styles.ProductInformation>  
  );
};

export default ProductPage;

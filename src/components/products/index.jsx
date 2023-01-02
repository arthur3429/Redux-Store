import products from "../../data/products";
// import { BrowserRouter, Route } from 'react-router-dom'

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Hold>
      <Styles.Title>Todos os Produtos</Styles.Title>
      <Styles.Container>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Styles.Container>
    </Styles.Hold>
  );
};

export default Products;

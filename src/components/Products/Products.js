import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);
  const productList = products.map((product) => <Product {...Product} />);
  return (
    <section>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;

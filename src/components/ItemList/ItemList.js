import Item from '../Item/Item.js'
import { getProductos } from '../Utilidades/baseDeDatos.js';
import { useState, useEffect } from 'react';

function ItemList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductos()
      .then((data) => setProducts(data))
      .catch((error) => setProducts(error));
  }, []);
  return (
    <div>
      <h1>BRAND</h1>
      {products.map((product) => {
        return <Item key={product.id} product={product} />
      })}
    </div>
  )
};

export default ItemList;
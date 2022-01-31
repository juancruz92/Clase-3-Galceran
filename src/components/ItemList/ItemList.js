import Item from '../Item/Item.js'
import { useState, useEffect } from 'react';

const URL = "http://localhost:3001/productos"

const ItemList = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState (null);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => setProducts(err))
      .finally (() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Cargando los productos...</p>;
  } else if (error) {
    return <p>Ha habido un error</p>
  } else {
    return  <div className="itemListDiv">
    {products.map((product) => {
      return <Item key={product.id} product={product} />
    })}
  </div>
  }
};

export default ItemList;
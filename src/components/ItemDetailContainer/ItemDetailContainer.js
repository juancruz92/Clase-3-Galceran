import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [counter, setCounter] = useState(0);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    const URL = `http://localhost:3001/productos/${productId}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => setError(err));
  }, [productId]);

  if (isLoading) {
    return <p>Cargando productos...</p>;
  } else if (error) {
    return <p>ha habido un error</p>;
  } else {
    return (
      <ItemDetail
        producto={productos}
        counter={counter}
        setCounter={setCounter}
      />
    );
  }
}

export default ItemDetailContainer;

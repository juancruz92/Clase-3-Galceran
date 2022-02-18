import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [counter, setCounter] = useState(0);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = db.collection("productos");
    const selectedProduct = productCollection.doc(productId);

    setIsLoading(true);
    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("el producto no existe");
        setProductos({ ...response.data(), id: response.id });
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
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

import Item from "../components/Item/Item"
import { useState, useEffect } from "react";
import { getFirestore } from "../firebase/index"
import { useParams } from "react-router-dom";


const Categorys = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { category } = useParams()

  useEffect(() => {
    const db = getFirestore();
    const productCollection = db.collection("productos").where("category", "==", category)

    const getDataFromFireStore = async () => {
      setIsLoading(true);
      try {
        const response = await productCollection.get();
        if (response.empty) console.log("no hay productos");
        setProducts(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getDataFromFireStore();
  }, [category]);

  console.log(products);

  if (isLoading) {
    return <p>Cargando los productos...</p>;
  } else if (error) {
    return <p>Ha habido un error</p>;
  } else {
    return (
      <div className="itemListDiv">
          <h1>{category}</h1>
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    );
  }
};


export default Categorys;
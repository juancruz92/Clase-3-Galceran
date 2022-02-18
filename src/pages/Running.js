    import Item from "../components/Item/Item"
    import { useState, useEffect } from "react";
    import { getFirestore } from "../firebase/index"
  
  
    const Running = () => {
      const [products, setProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const db = getFirestore();
        const productCollection = db.collection("productos").where("category", "==", "Running")
    
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
    
        // setIsLoading(true);
        // fetch(URL)
        //   .then((response) => response.json())
        //   .then((json) => setProducts(json))
        //   .catch((err) => setError(err))
        //   .finally(() => setIsLoading(false));
      }, []);
    
      console.log(products);
    
      if (isLoading) {
        return <p>Cargando los productos...</p>;
      } else if (error) {
        return <p>Ha habido un error</p>;
      } else {
        return (
          <div className="itemListDiv">
            {products.map((product) => {
              return <Item key={product.id} product={product} />;
            })}
          </div>
        );
      }
    };
    

export default Running;
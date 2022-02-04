import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ItemCount from "../components/ItemCount/ItemCount";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [counter, setCounter] = useState(0);
  const [quiereComprar, setQuiereComprar] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const URL = `http://localhost:3001/productos/${productId}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (product) {
    return (
      <>
        <div className="cardContainer">
          <div className="detailPageCard">
            <img src={product.img} alt={product.name} />
            <div className="productDetailDiv">
              <p>Nombre: {product.name}</p>
              <p>Descripcion: {product.description}</p>
              <p>Precio: {product.price}</p>
              <p>Quieres comprar: {quiereComprar} unidades</p>
              <button onClick={() => navigate(`/Cart`)}>Finalizar compra</button>
            </div>
            <ItemCount
              counter={counter}
              setCounter={setCounter}
              quiereComprar={quiereComprar}
              setQuiereComprar={setQuiereComprar}
            />
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default ProductDetailPage;

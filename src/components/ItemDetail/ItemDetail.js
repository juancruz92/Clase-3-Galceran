import ItemCount from "../../components/ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function ItemDetail({ producto, counter, setCounter }) {
  const { addItem, cart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    addItem(producto, counter);
  };

  return (
    <div className="detailContainer">
      <div className="card">
        <img src={producto.img} alt={producto.name} />
        <p>Marca: {producto.name}</p>
        <p>Modelo: {producto.description}</p>
        <p>Precio: {producto.price}</p>
        <ItemCount counter={counter} setCounter={setCounter} />
        <button onClick={handleClick}>Agregar al carrito</button>
        {cart.find((compra) => {
          return compra.item.id === producto.id;
        }) ? (
          <button onClick={() => navigate(`/Cart`)}>Finalizar Compra</button>
        ) : null}
      </div>
    </div>
  );
}

export default ItemDetail;

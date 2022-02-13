import ItemCount from "../../components/ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

function ItemDetail({ producto, counter, setCounter }) {

 const {addItem} = useCart()

 const handleClick = () => {
    addItem (producto, counter)
 }

  return (
    <div className="card">
      <img src={producto.img} alt={producto.name} />
      <p>Nombre: {producto.name}</p>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
      <ItemCount counter={counter} setCounter={setCounter}/>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;

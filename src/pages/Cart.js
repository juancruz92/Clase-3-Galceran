import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearAll } = useCart();

  return (<>
    <div>
      <h1>Carrito</h1>
      {cart.map((compra) => {
        return (
          <div key={compra.item.id}>
            <p>{compra.item.name}</p>
            <p>{compra.quantity}</p>
            <button onClick={(() => removeItem(compra.item.id))}>Eliminar producto del carrito</button>
          </div>
        );
      })}
    </div>
    <button onClick={clearAll}>Eliminar todos los productos</button>
    </>
  );
};

export default Cart;

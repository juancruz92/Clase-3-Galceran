import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearAll } = useCart();
  const [totalCompra, setTotalCompra] = useState(0);

  // calcular la suma total y una vez obtenida setear el state

  var valorTotal = 0;

  cart.forEach((compra) => {
    valorTotal = valorTotal + compra.item.price * compra.quantity;
  });

  useEffect(() => {
    setTotalCompra(valorTotal);
  }, [valorTotal]);

 

  return (
      cart.length === 0 ? 
      <div>No tienes productos en tu carrito, elije tu compra <Link to="/">Aqui!</Link></div> : 
      <div>
        <h1>Carrito</h1>
        <h2>Total compra: $ {totalCompra}</h2>
        <div className="itemListDiv">
          {cart.map((compra) => {
            return (
              <div className="card" key={compra.item.id}>
                <img src={compra.item.img} alt={compra.item.name}></img>
                <p>Precio total = $ {compra.item.price * compra.quantity}</p>
                <p>{compra.item.name}</p>
                <p>{compra.quantity} unidades</p>
                <button onClick={() => removeItem(compra.item.id)}>
                  Eliminar producto del carrito
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={clearAll}>Eliminar todos los productos</button>
      </div>
  );
};


export default Cart;

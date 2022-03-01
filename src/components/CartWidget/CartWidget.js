import { useCart } from "../../context/CartContext";
import logo from "../images/carrito.png";

function CartWidget() {
  const { cart } = useCart();

  var cantidadDeProductosNeto = 0;

  cart.forEach((compra) => {
    cantidadDeProductosNeto += compra.quantity;
  });

  console.log(cantidadDeProductosNeto);

  return (
    <>
      <div className="carrito">
        <img src={logo} alt="algo"></img>
        <p style={{ color: "black" }}>{cantidadDeProductosNeto}</p>
      </div>
    </>
  );
}

export default CartWidget;

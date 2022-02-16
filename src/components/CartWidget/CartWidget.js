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
        <p style={{ color: "white" }}>{cantidadDeProductosNeto} Productos en carrito</p>
        <img src={logo} alt="algo"></img>
      </div>
    </>
  );
}

export default CartWidget;

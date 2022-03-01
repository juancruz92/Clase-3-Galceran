import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

function Navbar() {
  // const { cart } = useCart();

  return (
    <>
      <nav className="navegador">
        <p className="brand">
          <Link to="/">ZAPATILLAS.COM</Link>
        </p>
        <ul className="elementosNav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/Categorys/Running">RUNNING</Link>
          </li>
          <li>
            <Link to="/Categorys/Urban">URBAN</Link>
          </li>
          <li>
            <Link to="Cart">CARRITO</Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
}

export default Navbar;

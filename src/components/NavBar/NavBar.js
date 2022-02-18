import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import { useCart } from "../../context/CartContext";

function Navbar() {
    const { cart } = useCart();

    return <>
        <nav className="navegador">
            <p className="brand"><Link to ="/">BRAND</Link></p>
            <ul className="elementosNav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Categorys/Running">Running</Link></li>
                <li><Link to="/Categorys/Urban">Urban</Link></li>
                <li><Link to="Cart">Cart</Link></li>
            </ul>   
            {cart.length ? <CartWidget/> : null}


        </nav>
    </>;
}

export default Navbar;
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

function Navbar() {
    return <>
        <nav className="navegador">
            <p className="brand"><Link to ="/">BRAND</Link></p>
            <ul className="elementosNav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="Running">Running</Link></li>
                <li><Link to="Urban">Urban</Link></li>
            </ul>
            <CartWidget />
        </nav>
    </>;
}

export default Navbar;
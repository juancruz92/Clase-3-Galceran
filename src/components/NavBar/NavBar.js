import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
    return <>
        <nav className="navegador">
            <p className="brand">BRAND</p>
            <ul className="elementosNav">
                <li><a href="...">Remeras</a></li>
                <li><a href="...">Buzos </a></li>
                <li><a href="...">Jeans </a></li>
                <li><a href="...">Zaptillas </a></li>
            </ul>
            <CartWidget />
        </nav>
    </>;
}

export default Navbar;
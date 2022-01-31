import { useNavigate } from "react-router";


const Item = ({ product }) => {
    const navigate = useNavigate();


    return (
        <div className="cardContainer">
            <div className="card">
                <img src={product.img} alt={product.name} />
                <p>Nombre: {product.name}</p>
                <p>Descripcion: {product.description}</p>
                <p>Precio: {product.price}</p>
                <button onClick={() => navigate(`/${product.id}`)}>Ver mas</button>
            </div>
        </div>
    );
};

export default Item;
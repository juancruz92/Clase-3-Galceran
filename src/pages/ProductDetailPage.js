import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductDetailPage = () => {

    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState ();

    useEffect(() => {
        const URL = `http://localhost:3001/productos/${productId}`
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [productId]);

    console.log(productId);
    

    if (product) {

        return (
            <>
            <div className="cardContainer">
            <div className="card">
                <img src={product.img} alt={product.name} />
                <p>Nombre: {product.name}</p>
                <p>Descripcion: {product.description}</p>
                <p>Precio: {product.price}</p>
                <button onClick={() => navigate(`/${product.id}`)}>Ver mas</button>
            </div>
        </div>
            </>
        );
    }
    return (null);
};


export default ProductDetailPage;
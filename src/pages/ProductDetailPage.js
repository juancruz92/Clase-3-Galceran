import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemCount from '../components/ItemCount/ItemCount'

const ProductDetailPage = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState();

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
                    <div className="detailPageCard">
                        <img src={product.img} alt={product.name} />
                        <div className="productDetailDiv">
                            <p>Nombre: {product.name}</p>
                            <p>Descripcion: {product.description}</p>
                            <p>Precio: {product.price}</p>
                        </div>
                        <ItemCount />
                    </div>
                </div>
            </>
        );
    }
    return (null);
};


export default ProductDetailPage;
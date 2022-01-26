import { useEffect, useState } from "react";
import { getProductos } from '../Utilidades/baseDeDatos.js';
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailContainer() {

    console.log('init')

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        console.log('useeffect')
        setIsLoading(true);
        getProductos()
            .then((data) => setProductos(data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p>Cargando productos...</p>;
    }
    else if (error) {
        return <p>ha habido un error</p>;
    }
    else {
        return (
           <ItemDetail product={productos[2]}/>
        )
    }

}

export default ItemDetailContainer;
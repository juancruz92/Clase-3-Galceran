const Item = ({ product }) => {
    return (
        <div className="card">
            <img src={product.img} alt={product.name} />
            <p>Nombre: {product.name}</p>
            <p>Descripcion: {product.description}</p>
            <p>Precio: {product.price}</p>
            <button>Ver mas</button>
        </div>
    );
};

export default Item;
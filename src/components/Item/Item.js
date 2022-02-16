import { useNavigate } from "react-router";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="cardContainer">
      <div className="card">
        <img src={product.img} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => navigate(`/products/${product.id}`)}>Ver mas</button>
      </div>
    </div>
  );
};

export default Item;

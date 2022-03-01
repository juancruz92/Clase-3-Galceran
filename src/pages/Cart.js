import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore } from "../firebase";

const Cart = () => {
  const { cart, removeItem, clearAll } = useCart();
  const [totalCompra, setTotalCompra] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (name.length === 0 || phone.length === 0) {
      alert("llene los campos por favor");
      return false;
    }

    const newOrder = {
      buyer: {
        name,
        phone,
      },
      items: {
        cart,
      },
      total: valorTotal,
    };
    console.log(newOrder);

    const db = getFirestore();
    db.collection("orders")
      .add(newOrder)
      .then((response) => {
        console.log("Compra realizada exitosamente", response.id);
        navigate(`/CheckOut/${response.id}`);
        clearAll();
      })
      .catch((err) => console.log("hubo un error", err));
  };

  var valorTotal = 0;

  cart.forEach((compra) => {
    valorTotal = valorTotal + compra.item.price * compra.quantity;
  });

  useEffect(() => {
    setTotalCompra(valorTotal);
  }, [valorTotal]);

  return cart.length === 0 ? (
    <div className="carritoVacio">
      <Link to="/">
      No tienes productos en tu carrito, haz click AQUI!{" "}
      para seguir comprando.
      </Link>
    </div>
  ) : (
    <div className="cartContainer">
      <h1>Carrito</h1>
      <h2>Total compra: $ {totalCompra}</h2>
      <div className="itemListDiv">
        {cart.map((compra) => {
          return (
            <div className="card" key={compra.item.id}>
              <img src={compra.item.img} alt={compra.item.name}></img>
              <p>Precio total = $ {compra.item.price * compra.quantity}</p>
              <p>{compra.item.name}</p>
              <p>{compra.quantity} unidades</p>
              <button onClick={() => removeItem(compra.item.id)}>
                Eliminar producto del carrito
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={clearAll}>Eliminar todos los productos</button>
      <div className="formularioCompra">
        <h1>Introduzca sus datos</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Escriba su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Telefono</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Escriba su telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input type="submit" value="Finalizar Compra" />
        </form>
      </div>
    </div>
  );
};

export default Cart;

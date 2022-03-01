import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const CheckOutPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((response) => setOrder({ id: response.id, ...response.data() }));


  }, [orderId]);


  if (!order.id) {
      return <p>cargando...</p>;
  }
  return (
    <div>
      <h1>Gracias por su compra! {order.buyer.name}</h1>
      <h2>Usted compro: </h2>
      <p>{order.items.cart[0].item.name}</p>
      <h2>El numero identificador de su compra es el: </h2>
      <h3>{orderId}</h3>
    </div>
  );
};

export default CheckOutPage;

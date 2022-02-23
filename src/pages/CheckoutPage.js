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

  return (
    <div>
      <h1>Gracias por su compra!</h1>
      <h2>Detalle de su compra:</h2>
    </div>
  );
};

export default CheckOutPage;

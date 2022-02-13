function ItemCount({ stock, initial, counter, setCounter }) {
  initial = 1;
  stock = 20;

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("no hay mas stock");
    }
  };

  const restar = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    } else {
      alert("no puedes comprar menos que 1");
    }
  };

  return (
    <>
      <div className="divComprar">
        <div className="divContador">
          <button onClick={restar}>-</button>
          <p>{counter}</p>
          <button onClick={sumar}>+</button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;

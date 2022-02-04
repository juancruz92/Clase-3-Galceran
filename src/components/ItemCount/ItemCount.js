function ItemCount({
  stock,
  initial,
  counter,
  setCounter,
  quiereComprar,
  setQuiereComprar,
}) {
  initial = 1;
  stock = 5;
  const handleClick = () => {
    setQuiereComprar(counter);

    if ((quiereComprar = !0)) {
      console.log("deberia borrarse item count");
    }
  };
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
        <div className="botonComprar">
          <button onClick={handleClick}>Comprar</button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;

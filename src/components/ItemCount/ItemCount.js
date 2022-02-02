import React from 'react';

function ItemCount({ stock, initial, onAdd }) {
    initial = 1
    stock = 5
    const [counter, setCounter] = React.useState(initial);
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
        else {
            alert("no hay mas stock")
        }
    };
    const restar = () => {
        if (counter > initial)
            setCounter(counter - 1);
        else {
            alert("no puedes comprar menos que 1")
        }
    }

    return <>
        <div className ="divComprar">
            <div className="divContador">
                <button onClick={restar}>-</button>
                <p>{counter}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div className="botonComprar">
                <button>Comprar</button>
            </div>
        </div>
    </>
}

export default ItemCount
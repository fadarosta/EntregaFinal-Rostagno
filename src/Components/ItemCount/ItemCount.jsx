import { useState } from "react";

function ItemCount() {

const [contador, setContador] = useState(0)

const sumar = () => {
    setContador (contador + 1)
}

const restar = () => {
    if (contador > 1){
        setContador (contador - 1)
    } 
}

const onAdd = () => {

}

return (
    <>
    <button onClick={restar}>-</button>
    <h2>{contador}</h2>
    <button onClick={sumar}>+</button>
    <button onClick={onAdd}>Agregar al Carrito</button>
    </>
)
}

export default ItemCount


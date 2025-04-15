import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const ItemDetailContainer = () => {
    const { id } = useParams ();
    const { addToList } = useContext(CartContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                const singleItem = {
                    id,
                    title: "Producto con id " + id,
                    price: "$50.000",
                    description: "Detalle del producto seleccionado",
                };
                resolve(singleItem);
            }, 2000);
        });
    
        getItem.then((data) => setItem(data));
    }, [id]);
    

    return (
        <div>
            <h2>Detalle del Pack</h2>
            {item ? (
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};


export default ItemDetailContainer
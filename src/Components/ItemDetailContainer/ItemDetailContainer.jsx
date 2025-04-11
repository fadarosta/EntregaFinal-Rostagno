import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemDetailContainer = () => {
    const { addToList } = useContext(CartContext)
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                const singleItem = {
                    id: 1,
                    title: "3 veces por semana",
                    price: "$50.000",
                    description: "Ideal para profundizar en la disciplina",
                    pictureUrl: "imagen2.jpg",
                };
                resolve(singleItem);
            }, 2000);
        });

        getItem.then((data) => setItem(data));
    }, []);

    return (
        <div>
            <h2>Detalle del Pack</h2>
            {item ? (
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                    <img src={item.pictureUrl} alt={item.title} width="200" />
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};


export default ItemDetailContainer
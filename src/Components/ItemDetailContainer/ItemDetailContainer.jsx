import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import productos from "../../data/productos"; // <== Importación correcta

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToList } = useContext(CartContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundItem = productos.find(prod => prod.id.toString() === id);
                if (foundItem) {
                    resolve(foundItem);
                } else {
                    reject("Producto no encontrado");
                }
            }, 2000);
        });

        getItem
            .then((data) => setItem(data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div>
            <h2>Detalle del Pack</h2>
            {item ? (
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                    <img src={item.pictureUrl} alt={item.title} style={{ width: "200px" }} />
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;

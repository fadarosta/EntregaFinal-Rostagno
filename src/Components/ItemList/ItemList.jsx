import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
    const { lista } = useContext(CartContext)
    console.log(lista)

    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {items.map((pack) => (
                <Item
                    key={pack.id}
                    id={pack.id}
                    title={pack.title}
                    price={pack.price}
                    description={pack.description}
                    pictureUrl={pack.pictureUrl}

                />
            ))}
        </div>
    );
};

export default ItemList;

import { Link } from "react-router-dom";

const Item = ({id, title, price, description, pictureUrl }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} width='100%'/>
            <p>{description}</p>
            <p><strong>Precio: {price}</strong></p>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;

const Item = ({ title, price, description, pictureUrl }) => {
    return (
        <div>
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Precio: {price}</p>
        </div>
    );
};

export default Item;

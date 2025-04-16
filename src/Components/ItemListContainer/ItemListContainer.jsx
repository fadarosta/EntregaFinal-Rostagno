import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import productos from '../../data/productos';

const ItemListContainer = () => {
    const [packs, setPacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const clasesPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        clasesPromise
            .then((data) => {
                setPacks(data);
            })
            .catch((error) => {
                console.error("Error al obtener los packs de clases:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Nuestros Packs de Clases</h2>
            {loading ? <p>Cargando...</p> : <ItemList items={packs} />}
        </div>
        
    );
};

export default ItemListContainer;

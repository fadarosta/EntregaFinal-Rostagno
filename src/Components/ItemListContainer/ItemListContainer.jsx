import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [packs, setPacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const clasesPromise = new Promise((resolve) => {
            const packsDeClases = [
                {
                    id: 1,
                    title: "2 veces por semana",
                    price: "$35.000",
                    description: "Para empezar a conocer la práctica",
                    pictureUrl: "imagen1.jpg"
                },
                {
                    id: 2,
                    title: "3 veces por semana",
                    price: "$50.000",
                    description: "Ideal para profundizar en la disciplina",
                    pictureUrl: "imagen2.jpg"
                },
                {
                    id: 3,
                    title: "Pase libre",
                    price: "$70.000",
                    description: "Vas a especializarte en tu estilo preferido",
                    pictureUrl: "imagen3.jpg"
                },
                {
                    id: 4,
                    title: "Clase de prueba",
                    price: "Gratis",
                    description: "Consagrarás parte de tu vida a la práctica diaria",
                    pictureUrl: "imagen4.jpg"
                }
            ];

            setTimeout(() => {
                resolve(packsDeClases);
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

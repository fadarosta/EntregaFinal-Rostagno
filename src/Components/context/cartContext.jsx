import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {

    const [lista, setLista] = useState([])

    const addToList = (item) => {
        setLista({...lista,item})
    }

    return(
        <CartContext.Provider value={{lista, setLista, addToList}}>
        {children}
        </CartContext.Provider>
    )
}




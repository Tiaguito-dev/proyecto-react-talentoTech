import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const eliminarProductoCarrito = (nombre) => {
        setCarrito(carrito.filter(p => p.name !== nombre));
    };

    return (
        <CarritoContext.Provider value={{
            carrito, agregarAlCarrito,
            vaciarCarrito, eliminarProductoCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    );
}
import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const agregarProducto = (nuevoProducto) => {
        setProductos([...productos, nuevoProducto]);
    };

    const editarProducto = (productoActualizado) => {
        setProductos(productos.map((producto) => producto.id === productoActualizado.id ? productoActualizado : producto));
    };

    const eliminarProducto = (id) => {
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    return (
        <ProductsContext.Provider value={{ productos, agregarProducto, editarProducto, eliminarProducto }}>
            {children}
        </ProductsContext.Provider>);
};

export const useProductsContext = () => useContext(ProductsContext);
{/*MINUTO 24 DEL VIDEO*/ }

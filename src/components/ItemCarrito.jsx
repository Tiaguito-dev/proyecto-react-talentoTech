import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext"

const ItemCarrito = ({ producto }) => {

    const { eliminarProductoCarrito } = useContext(CarritoContext);

    return (
        <>
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => eliminarProductoCarrito(producto.name)}>Eliminar del carrito</button> {/*ACÁ IRÍA EL ESTILO DEL BOTÓN DE ALERTA DE BOOTSTRAP*/}

        </>
    );

}

export default ItemCarrito
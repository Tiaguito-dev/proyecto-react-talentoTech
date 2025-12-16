import ItemCarrito from '../components/ItemCarrito';
import { useContext } from 'react';
import { CarritoContext } from "../context/CarritoContext"

const Carrito = () => {

    const { carrito, vaciarCarrito } = useContext(CarritoContext);

    return (
        <>
            <h2>CARRITO</h2>
            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => vaciarCarrito()}>Vaciar</button>
            {(!carrito.length) ?
                (<p>El carrito está vacío</p>) : (
                    carrito.map((producto, index) => (
                        <div key={index}>
                            <ItemCarrito producto={producto} />
                        </div>
                    ))
                )
            }
        </>
    );


}

export default Carrito;
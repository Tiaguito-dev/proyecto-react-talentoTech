import TarjetaProducto from './TarjetaProducto';
import { useEffect, useState } from 'react';
import getProductos from '../services/fakeStoreApi';
import TarjetaError from './TarjetaError';

const Productos = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const productos = await getProductos();
                setProductos(productos);
            } catch (error) {
                setError('Error al cargar los productos.');
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center">
                {error ? (
                    <TarjetaError mensaje={error} />
                ) : (
                    productos.map((producto, index) => (
                        // Col define el contenedor de la tarjeta para que Bootstrap lo maneje en su grid system
                        <div key={index} className='col d-flex justify-content-center'>
                            <TarjetaProducto producto={producto} />
                        </div>
                    ))
                )}
            </div>
        </>
    );

};

export default Productos;
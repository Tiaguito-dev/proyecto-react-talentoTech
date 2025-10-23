import TarjetaProducto from './TarjetaProducto';
import { useEffect, useState } from 'react';
import fetchProductos from '../services/fakeStoreApi';
import TarjetaError from './TarjetaError';

const ProductosDestacados = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const productos = await fetchProductos();
                setProductos(productos);
            } catch (error) {
                setError('Error al cargar los productos.');
            } finally {
                // Finally se ejecuta siempre al final
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
            <h2>Productos Destacados</h2>
            <div>
                {error ? (
                    <TarjetaError mensaje={error} />
                ) : (
                    productos.map((producto, index) => (
                        // ESTOY HAY QUE PONERLE UN LÍMITE
                        <div key={index}>
                            <TarjetaProducto producto={producto} />
                        </div>
                    ))
                )}
            </div>
        </>
    );

};

export default ProductosDestacados;
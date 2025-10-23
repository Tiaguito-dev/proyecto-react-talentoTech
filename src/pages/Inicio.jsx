import 'bootstrap/dist/css/bootstrap.min.css';
import ProductosDestacados from '../components/ProductosDestacados';
import Carrito from '../components/Carrito';

const Inicio = () => {
    return (
        <>
            <h2>Este es mi contenido principal</h2>
            <ProductosDestacados />
            <Carrito />
        </>
    );
}

export default Inicio
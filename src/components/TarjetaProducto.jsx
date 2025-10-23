import { useState } from "react";
import DetalleProducto from "./DetalleProducto";

const TarjetaProducto = ({ producto }) => {

    const [mostrarModal, setMostrarModal] = useState(false);

    const desplegarPantalla = (producto) => {
        setMostrarModal(true);
    }

    return (
        <>
            <div onClick={() => desplegarPantalla(producto)}>
                <h3>{producto.name}</h3>
                {/*Hay que ponerle un width maximo*/}
                <img src={producto.image} alt={producto.alt} style={{ width: '200px', height: '200px' }} />
                <p>Precio: ${producto.price}</p>
            </div>

            {/*ACÁ FUE EL ÚNICO LUGAR DONDE AGREGUÉ ESTILOS (SE LO PEDÍ AL CHAT) PARA QUE SE ENTIENDA LO QUE QUIERO HACER*/}
            {/*Renderizado condicional. Si mostrarModal es tru -> renderiza. Sino no renderiza nada*/}
            {mostrarModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }}
                    onClick={() => setMostrarModal(false)}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '30px',
                            borderRadius: '15px',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setMostrarModal(false)}
                            style={{
                                position: 'absolute',
                                top: '15px',
                                right: '15px',
                                background: 'white',
                                border: '2px solid #ddd',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                                cursor: 'pointer',
                                fontSize: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            X
                        </button>

                        <DetalleProducto
                            producto={producto}
                            cerrarModal={() => setMostrarModal(false)}
                        />
                    </div>
                </div>
            )}

        </>
    );
};

export default TarjetaProducto;
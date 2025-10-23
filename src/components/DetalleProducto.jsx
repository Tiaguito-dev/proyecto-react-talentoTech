import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

const DetalleProducto = ({ producto, cerrarModal }) => {

    const { agregarAlCarrito } = useContext(CarritoContext);

    return (
        <>
            <img
                src={producto.image}
                alt={producto.alt}
                style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '20px'
                }}
            />

            {producto.category && (
                <p style={{ color: '#666', marginBottom: '10px' }}>
                    {producto.category}
                </p>
            )}

            <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>
                {producto.name}
            </h2>

            <p style={{ fontSize: '32px', color: '#2563eb', fontWeight: 'bold', marginBottom: '20px' }}>
                ${producto.price}
            </p>

            {producto.description && (
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                        Descripción
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        {producto.description}
                    </p>
                </div>
            )}

            {producto.details && (
                <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                        Detalles
                    </h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>
                        {producto.details}
                    </p>
                </div>
            )}

            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        flex: 1
                    }}
                    onClick={() => {
                        agregarAlCarrito(producto);
                        cerrarModal();
                    }}
                >
                    Añadir al carrito
                </button>
            </div>
        </>
    );
}
export default DetalleProducto;
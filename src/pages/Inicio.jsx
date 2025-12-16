import reactLogo from "../assets/react.svg";
import reparacion from "../assets/reparacion.png";
import envios from "../assets/envios.png";
import styles from "./styles/Inicio.module.css";
import asesoramiento from "../assets/asesoramiento.png";
import { useNavigate } from "react-router-dom";

const Inicio = () => {

    const navigate = useNavigate();

    return (
        <>

            {/* ===== HERO ===== */}
            <section className="py-5 rounded-3 mb-5" id={styles.sectionHero}>
                <div className="container w-50 rounded-3 p-5" id={styles.borde}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start w-auto">
                            <h1 className="fw-bold mb-3" id={styles.tituloHero}>
                                TODO PARA EL PATINADOR
                            </h1>

                            <p className="lead mb-4 fw-bold" id={styles.subtituloHero}>
                                VENTA, ARMADO Y PERSONALIZACIÓN DE PATINES
                                <br />
                                ENVÍOS A TODO EL PAÍS
                            </p>

                            <button className={`btn btn-lg m-2`} id={styles['boton3']}>
                                Ver productos
                            </button>
                            <button className="btn btn-lg m-2" id={styles.boton2}>
                                Contacto
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES / CARDS ===== */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">
                        ¿Qué ofrecemos?
                    </h2>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center rounded-3">
                                <img
                                    src={reparacion}
                                    className="card-img-top rounded-3"
                                    alt="Servicio"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center rounded-3">
                                <img
                                    src={envios}
                                    className="card-img-top rounded-3"
                                    alt="Servicio"
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm text-center rounded-3">
                                <img
                                    src={asesoramiento}
                                    className="card-img-top rounded-3"
                                    alt="Servicio"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BANNER ===== */}
            <section className="py-5 rounded-3 m-5" id={styles.borde}>
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">
                        Pasión por el patín
                    </h2>
                    <p className="mb-4">
                        Acompañando patinadores de todos los niveles.
                    </p>
                    {/* TODO: hacer que vaya a una sección llamada nosotros o algo así*/}
                    <button className="btn btn-lg" id={styles['boton3']} onClick={() => navigate('/carrito')}>
                        Conocé más
                    </button>
                </div>
            </section>

        </>
    );
}

export default Inicio;
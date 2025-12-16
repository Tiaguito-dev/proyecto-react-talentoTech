import styles from './styles/Nav.module.css';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

/* Navlink es como <Link>, pero con superpoderes para menús de navegación. Agrega automáticamente una clase CSS cuando la ruta está activa. */
/*TODO: Investigar más de cómo agregar estilos a esto*/

const Nav = () => {

    const { usuario } = useAuthContext();

    return (
        <nav className="navbar navbar-expand-lg shadow mt-3 mb-3 rounded">
            <div className="container-fluid">

                {/* LOGO */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="70" height="70" />
                </Link>

                {/* BOTÓN RESPONSIVE */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* LINKS */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item" title="Inicio">
                            <Link className="nav-link active" to="/">Inicio</Link>
                        </li>

                        <li className="nav-item" title="Más Información">
                            <Link className="nav-link" to="/catalogo">Catálogo</Link>
                        </li>

                        <li className="nav-item" title="Panel de Administración">
                            <Link className="nav-link" to="/panel-admin">Panel Admin</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Desplegar menú de ayuda">
                                Más info
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/guia-talles">Guía Talles</Link></li>
                                <li><Link className="dropdown-item" to="/contacto">Contacto</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/realizar-pedido">Realizar Pedido</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* BÚSQUEDA + LOGIN + CARRITO */}
                    <div className="d-flex align-items-center gap-3">

                        {/* BUSCADOR */}
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar..."
                                aria-label="Buscar"
                            />
                            <button className={`${styles['boton-personalizado']}`} type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>

                        {/* CARRITO */}
                        <Link className="nav-link" to="/carrito">
                            <i className="bi bi-cart fs-2 m-2" title="Carrito de Compras"></i>
                        </Link>

                        {/* LOGIN */}
                        <Link className="nav-link" to="/login">
                            {!usuario ? <i className="bi bi-person fs-2 m-4" title="Iniciar Sesión"></i> : <i className="bi bi-person-dash fs-2 m-2" title="Cerrar Sesión"></i>}

                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
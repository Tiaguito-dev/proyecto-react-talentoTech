import { NavLink } from "react-router-dom";

/* Navlink es como <Link>, pero con superpoderes para menús de navegación. Agrega automáticamente una clase CSS cuando la ruta está activa. */
/*TODO: Investigar más de cómo agregar estilos a esto*/

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/catalogo">Catálogo</NavLink></li> {/* Esto sería para ver el catálogo completo */}
                <li><NavLink to="/recursos">Recursos</NavLink></li> {/* Esto sería para un form de contacto y guía de talles */}
                <li><NavLink to="/masInfo">Más info</NavLink></li> {/* Esto sería para ver más información sobre la tienda */}
            </ul>
        </nav>
    );
}

export default Nav;
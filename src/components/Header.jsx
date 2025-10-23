import styles from './styles/Header.module.css';
import Nav from './Nav';

// CONDICION DE APROBACION: EL NAVBAR DEBE FUNCIONAR, AUNQUE REDIRIJA A NINGÚN LUGAR

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <img src='./assets/react.svg' alt='logo de la empresa' className={styles.logo}></img>
                <Nav />
                <img src='./assets/react.svg' alt='imagen de perfil' id='imagenPerfil'></img>
                {/*Acá puede ir un evento que se llama onMouseHover para desplegar opciones al pasar por el mouse por encima (mirar material de la clase 4)*/}
            </header>
        </>
    );
}

export default Header;
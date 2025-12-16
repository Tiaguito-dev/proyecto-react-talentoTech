import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className='bg-dark text-light py-4 mt-5 shadow'>
                <div className="row container mx-auto">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-lg-start">
                        <h3>TODO PARA EL PATINADOR</h3>
                        <p>⛸Venta y armado de patines
                            <br />
                            Martes, jueves y sábados de 17 a 20hs
                            <br />
                            📦Envíos a todo el país</p>
                        <p>correo</p>
                        <p>teléfono</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <h4>Menú</h4>
                        <ul className="list-unstyled">
                            <li><a href="" className=" text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <h4>Más info</h4>
                        <ul className="list-unstyled">
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <h4>Categorías</h4>
                        <ul className="list-unstyled">
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                            <li><a href="" className="text-decoration-none text-light">Link</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-lg-start">
                        <h4>Social Media</h4>
                        <div>
                            <a href="" className="text-decoration-none text-light"><i className="bi bi-facebook fs-2 me-3"></i></a>
                            <a href="" className="text-decoration-none text-light"><i className="bi bi-instagram fs-2 me-3"></i></a>
                            <a href="" className="text-decoration-none text-light"><i className="bi bi-twitter fs-2"></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p className="text-center mb-0">&copy; 2024 Todo para el Patinador. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
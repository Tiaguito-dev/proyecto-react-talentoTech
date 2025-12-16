const Main = ({ children }) => {

    return (
        // my => margin vertical (arriba y abajo) de 4 unidades de Bootstrap
        <main className="container my-4 min-vh-100">
            {children}
        </main>
    );

}

export default Main;
// CONDICIÓN DE APROBACIÓN: TIENNE QUE MANEJARSE ERRORES, HAY QUE FIJARSE EN LA CLASE VIRTUAL

const API_URL = "https://68f7e8e5f7fb897c66176d5f.mockapi.io/todoParaElPatinador/productos/";

const getProductos = async () => {
    try {
        const respuesta = await fetch(API_URL);
        const productos = await respuesta.json();
        console.log('Estoy en ./src/services/fakeStoreApi.js/getProductos():', productos);
        return productos;
    } catch (error) {
        let mensaje = ('Error al obtener los productos:', error);
        console.error(mensaje);
        return mensaje; // devuelvo un array vacío si falla
    }
};

export default getProductos
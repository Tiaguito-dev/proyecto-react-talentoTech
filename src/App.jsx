// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
// Paginas
import Inicio from './pages/Inicio';
import Login from './pages/Login'
import Catalogo from './pages/Catalogo';
import Recursos from './pages/Recursos';
import MasInfo from './pages/MasInfo';
import PanelAdmin from './pages/PanelAdmin';
import Carrito from './pages/Carrito';
import Main from './components/Main';
// Esto es para los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Router dom
import { Routes, Route } from 'react-router-dom'
// Otros componentes
import DetalleProducto from './components/DetalleProducto';
import RutaProtegida from "./components/RutaProtegida";

function App() {

  return (
    // Esto es un React Fragment
    // React Fragment: agrupa varios elementos sin agregar un contenedor extra al DOM
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/login' element={<Login />} /> {/* El login todavia no está implementado pero lo dejo para después */}
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/recursos' element={<Recursos />} />
          <Route path='/masInfo' element={<MasInfo />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          <Route path="/admin" element={
            <RutaProtegida perfiles={["admin"]}>
              <PanelAdmin />
            </RutaProtegida>
          } />
          <Route path="/carrito" element={
            <RutaProtegida perfiles={["admin", "cliente"]}>
              <Carrito />
            </RutaProtegida>
          } />
        </Routes >
      </Main>
      <Footer />
    </>
  )
}

export default App

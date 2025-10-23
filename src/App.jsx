// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
// Paginas
import Inicio from './pages/Inicio';
import Login from './pages/Login'
import Catalogo from './pages/Catalogo';
import Recursos from './pages/Recursos';
import MasInfo from './pages/MasInfo';
// Router dom
import 'bootstrap/dist/css/bootstrap.min.css';
// Esto es para los estilos de Bootstrap
import { Routes, Route } from 'react-router-dom'
import DetalleProducto from './components/DetalleProducto';

function App() {

  return (
    // Esto es un React Fragment
    // React Fragment: agrupa varios elementos sin agregar un contenedor extra al DOM
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} /> {/* El login todavia no está implementado pero lo dejo para después */}
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/recursos' element={<Recursos />} />
        <Route path='/masInfo' element={<MasInfo />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

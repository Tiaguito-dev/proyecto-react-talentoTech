import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RutaProtegida = ({ children, perfiles }) => {
    const { usuario, perfil, desloguearUsuario } = useAuthContext();

    if (!usuario) {
        toast.warn("Debes iniciar sesión para acceder a esta página");
        // replace es para que no guarde en el historial la ruta protegida
        return <Navigate to="/login" replace />;
    }

    // Validar perfiles
    if (perfiles && !perfiles.includes(perfil)) {
        toast.warn("No tienes permiso para acceder a esta página");
        desloguearUsuario(); // evita dejar el perfil seteado
        // TODO: Podríamos redirigir a una página de "No autorizado". Por ahora solamente vuelve al login
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <ToastContainer />
            {children}
        </>
    );
};

export default RutaProtegida;

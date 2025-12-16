import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const FormularioLogin = () => {

    const { loguearUsuario, perfil } = useAuthContext();
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const manejarFormulario = (e) => {
        e.preventDefault();
        // Si devuelve error es porque las credenciales no son correctas
        const resultado = loguearUsuario({ usuario, password });
        if (!resultado) {
            toast.error("Credenciales inválidas");
            return;
        } else {
            navigate("/");
        }
    };

    return (
        <>
            <form onSubmit={manejarFormulario}>
                <h3>Iniciar Sesión</h3>
                <label htmlFor="usuario">Usuario</label>
                <input id="usuario" type="text" value={usuario} onChange={(event) => setUsuario(event.target.value)} />
                <label htmlFor="password">Contraseña</label>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Ingresar</button>
            </form>
            <ToastContainer />
        </>

    );

}

export default FormularioLogin;
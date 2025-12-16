import { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [perfil, setPerfil] = useState(null);

    // FALTA RESUPERAR EL USUARIO DESDE LOCALSTORAGE AL RECARGAR CON USEFFECT

    const loguearUsuario = ({ usuario, password }) => {
        // Simulación de fetch (y podría ser realmente un fetch)
        if (usuario === "admin" && password === "1234") {
            const token = `fake-token-${usuario}`;
            setUsuario(usuario);
            setPerfil("admin");
            localStorage.setItem('authToken', token);
            return true;
        }

        if (usuario === "cliente" && password === "1234") {
            const token = `fake-token-${usuario}`;
            setUsuario(usuario);
            setPerfil("cliente");
            localStorage.setItem('authToken', token);
            return true;
        }

        // Si llegamos acá es porque las credenciales no coinciden
        return false;
    };

    const desloguearUsuario = () => {
        localStorage.removeItem('authToken');
        setUsuario(null);
        setPerfil(null);
    }

    return (
        <AuthContext.Provider value={{ loguearUsuario, desloguearUsuario, usuario, perfil }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
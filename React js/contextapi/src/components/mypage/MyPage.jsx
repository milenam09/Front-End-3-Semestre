import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";


const MyPage = () => {

    const {usuario} = useContext (UsuarioContext)

    return (
        <>
        <h2>Perfil Usuario</h2>
        <p>Dados do usuario: {usuario}</p>
        </>
    
    )
}

export default MyPage;
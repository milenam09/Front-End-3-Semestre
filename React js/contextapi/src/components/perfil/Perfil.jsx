import { useContext, useState } from "react"
import { UsuarioContext } from "../context/UsuarioContext";

 const Perfil = () => {
    const {usuario, setUsuario } = useContext(UsuarioContext);
        const [novoUsuario, setNovoUsuario] = useState("");

        const login = () => {
            setUsuario(novoUsuario);
            localStorage.setItem("usuario",JSON.stringify (novoUsuario))
            setNovoUsuario("");
        }

    return (
        <>
        <h2>Perfil do Usuario</h2>
        <span>Usuario: {usuario}</span>
        <p>
            <input 
            type="text" 
            placeholder="Novo Usuario"
            onChange={ (e) => {
                setNovoUsuario(e.target.value)
            }
            }
            />


            <button onClick={
                () => {
                 login() 
                }
            }>Entrar</button>
        </p>
         </>
    )
 }

 export default Perfil
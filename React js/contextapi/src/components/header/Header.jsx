import { Link } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"


const Header = () => {

    const {usuario, setUsuario} = useContext (UsuarioContext)

    const logout = () =>{
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{""}
                <Link to={"/perfil"}>Perfil</Link>{""}
                <Link to={"/mypage"}>My Page</Link>{""}
                <Link to={"/produto"}>Cadastrar Produto</Link>
                <span>({usuario})</span>
                 <button onClick={
                () => {
                  logout()
                }
            }>Sair</button>
            </nav>
        </header>
    )
}

export default Header
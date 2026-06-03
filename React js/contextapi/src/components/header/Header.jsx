import { Link } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"


const Header = () => {

    const {usuario} = useContext (UsuarioContext)

    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link>{""}
                <Link to={"/perfil"}>Perfil</Link>{""}
                <Link to={"/mypage"}>My Page</Link>{""}
                <span>({usuario})</span>
            </nav>
        </header>
    )
}

export default Header
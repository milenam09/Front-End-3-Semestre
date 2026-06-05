import { useContext } from "react"
import { UsuarioContext } from "../components/context/UsuarioContext"
import { Navigate } from "react-router-dom"
import { ProdutoContext } from "../components/context/ProdutoContext"

//componente para rotas privatas 
const PrivateRoute = ({ children }) => {

    //recupera os dados do usuario 
    const { usuario } = useContext(UsuarioContext)

    //se o usuario estiver logado pode acessar {children}
    //se nao redireciona para a Home
    return usuario ? children : <Navigate to={"/"} />
    
}

export default PrivateRoute
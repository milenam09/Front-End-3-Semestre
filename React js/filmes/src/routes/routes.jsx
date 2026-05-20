import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import CadastroFilmes from "../pages/cadastroFilmes/CadastroFilmes"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/filmes" element={<CadastroFilmes/>}/>
            <Route path="/generos" element={<CadastroGenero/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastroFrutaPage from './assets/pages/cadastrofruta/cadastrofrutapage'
import CadastroProdutoPage from './assets/pages/cadastroproduto/cadastroprodutopage'
import HomePage from './assets/pages/home/homepage'
import QuemSomosPage from './assets/pages/quemsomos/quemsomospage'
import Header from './assets/components/header/header'


export default function App() {
  return (

      <BrowserRouter>
      <Header/>
       <Routes>
        <Route element={<HomePage/>} path='/' />
        <Route element={<QuemSomosPage/>} path='/quemsomos' />
        <Route element={<CadastroFrutaPage/>} path='/frutas' />
        <Route element={<CadastroProdutoPage/>} path='/produtos' />
       </Routes>
      </BrowserRouter>

)
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import MyPage from './components/mypage/Mypage'
import Header from './components/header/Header'
import CadastroProduto from './components/casdastroproduto/CadastroProduto'
import ListarProduto from './components/listarprodutos/ListarProdutos'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <>
      {/* <CadastroProduto />
      <ListarProduto /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/mypage' element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          } />
          <Route path='/produto' element={
            <PrivateRoute>
              <CadastroProduto/>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


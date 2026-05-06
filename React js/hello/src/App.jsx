import './App.css'
import Title from './components/title/Title';
import Header from "./components/header/Header";
import Subtitle from './components/Subtitle/subtitle';

function App() {

  return (
    <>

    <Header/>
      <Title texto="Meu titulo"/>
       <Subtitle texto="Minha pagina"/> 
       <Subtitle texto="Minha pagina 2"/>
    </>
  );
}

export default App

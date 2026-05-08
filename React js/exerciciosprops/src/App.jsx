import './App.css'
import Perfil from './components/exercicio3/perfil';
import Filme from './components/exercicio5/filme'
import Produto from './components/exercicio2/produto';
import Saudacao from './components/exercicio1/saudacao';
import Title from './components/title/title'
import foto from '../src/assets/foto.avif'
import Aluno from './components/exercicio6/aluno';
function App() {

  return (

    // <>

    // <Title
    // texto="Milena" 
    // sobrenome="Mares"  
    // idade={17}/>

    //  <Title 
    //  texto="Guilherme" 
    //  sobrenome="Vieira" 
    //  idade={16}/>

    //  <Title 
    //  texto="Gustavo"
    //  sobrenome="Costa" 
    //  idade={17}/>

    // <Title 
    // texto="Raw" 
    // sobrenome="Manuel" 
    // idade={16} />

    //  <Title 
    //  texto="Anne" 
    //  sobrenome="Nicole" 
    //  idade={18}/>


    // </>
    // <>
    //   <Saudacao nome="Milena"/>
    //   <Saudacao nome="Anne"/>
    //   <Saudacao nome="Raw"/>
    // </>

    // <>

    //   <Produto nome="Batedeira" preco={100} descricao="Batedeira Eletrolux"/>

    //   <Produto nome="Liquidificador" preco={70} descricao="Liquidificador Eletrolux"/>

    //   <Produto nome="Lava Louca" preco={600} descricao="Lava Louca Eletrolux"/>
    // </>
    // <>
    //   <Perfil 
    //   nome="Milena Mares" 
    //   idade={27} 
    //   profissao="Medica" />

    //   <Perfil 
    //   nome="Guilherme Viera" 
    //   idade={25} 
    //   profissao="Publicitario" />

    //   <Perfil 
    //   nome="Anne Nicole" 
    //   idade={24} 
    //   profissao="Delegada" />

    //   <Perfil 
    //   nome="Rawany Manuel" 
    //   idade={25} 
    //   profissao="Biomedica" />

    // </>

    <>
      <Aluno nome="Milena" curso="TI" imagem={foto}/>
    </>


  );

}

export default App;

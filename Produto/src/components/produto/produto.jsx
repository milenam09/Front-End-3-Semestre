import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'
import axios from "axios";

export default function Produto() {
   //states e variaveis
    const [id, setId] = useState(0); //usado no editar
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [imagem, setImagem] = useState(img);
    const [editar, setEditar] = useState(false)
    // const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })
    const [arrProdutos, setArrProdutos] = useState([])

   // ciclos de vida e funcoes
     async function cadastrarProduto(e) {
        e.preventDefault()//nao deixa o formulario ser postado

        // alert("Funcao Cadastrar Chamada")
        // return false
        //validar o formulario 
       if (
         nome.trim().length == 0 || 
         descricao.trim().length == 0 ||
         isNaN(preco) || preco <= 0 ||
         isNaN(quantidade) || quantidade <= 0
     ) {

        alert("Preencha os campos corretamente!")
        return false;
      }
        //gerar o objeto que vai pra api
        //object short sintaxe
        const objCadastro = {
            nome,
            descricao,
            preco,
            quantidade,
            imagem: "image.jpg",
        }

        console.log(objCadastro);

        //cadastrar na api
        try {
            const retornoAPI = await axios.post("http://localhost:3000/produtos", objCadastro);
            

          console.log(retornoAPI);
          //validando o retorno da API
          if(retornoAPI.status == 201) {
            const dadosCadastrados = await retornoAPI.data;
            // console.log(dadosCadastrados);
            setArrProdutos([...arrProdutos, dadosCadastrados])
            alert("Produto cadastrado com sucesso")
            limparFormulario();
            
          }else {
            alert("Problema inesperado")
          }

        } catch (e) {
            alert("Nao foi possivel salvar os dados");
            console.log(e);
        }

    }

    function limparFormulario() {
        setId(0)
        setNome("");
        setDescricao("");
        setQuantidade(0);
        setPreco(0);
             
    }
     
      useEffect(() => {
        getProdutos()
      }, []);

      async function getProdutos() {
           try {
              const retornoAPI = await axios.get("http://localhost:3000/produtos")
              const dados = await retornoAPI.data;

              console.log(dados)
              setArrProdutos(dados)
           } catch (e) {
              console.log("erro ao buscar os produtos");
              console.log(e);

           } 
        }


      async function deletar(id) {

        if (!confirm("Voce realemnte quer apagar o produto?")){
            return false;
        }

        try {
          const retornoAPI = await api.delete(`http://localhost:3000/produtos/${id}`);

          if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
            alert("Produto apagado com sucesso")

          //gerar uma nova lista com os produtos que sobraram
          const novaLista = arrProdutos.filter((prod) => {
            return prod.id != id;
          });

           setArrProdutos(novaLista)
        } else {
            alert("Algum erro ocorreu ao apagar")
        }
        } catch (e) {
            alert("Erro ao apagar o produto")
            console.log(e);
        }
      }


       async function  editarProduto(e) {
        e.preventDefault()
        
        if (
         nome.trim().length == 0 || 
         descricao.trim().length == 0 ||
         isNaN(preco) || preco <= 0 ||
         isNaN(quantidade) || quantidade <= 0
     ) {
        alert("Preencha os campos corretamente!")
        return false;
      }
        //gerar o objeto que vai pra api
        //object short sintaxe
        const objCadastro = {
            nome,
            descricao,
            preco,
            quantidade,
            imagem: "image.jpg",
        };

         //chamar a api
          try {

            const retornoAPI = await axios.put(`http://localhost:3000/produtos/${id}`, objCadastro);

          if(retornoAPI.status == 200) {
            alert("Produto alterado com sucesso");
              getProdutos();
              limparFormulario();
              setEditar(false);
          }else {
            alert("Erro ao editar")
          }

          } catch (e) {
            alert("erro ao editar o produto")
            console.log(e);
          }
        

       }
     //desenho do componente na tela em si
    return (
        <>
            <header className="cabecalho">
            <h1 className="titulo--cinza" >SENAI</h1>
            <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={editar ? editarProduto : cadastrarProduto}>

                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                <input 
                className="input--metade"
                 type="text" 
                 id="nome" 
                 placeholder="Nome" 
                 value={nome} 
                 onChange={(e) => setNome( e.target.value) } />

                <input 
                className="input--metade" 
                type="number" 
                id="preco" 
                placeholder="Preço"
                 value={preco}  
                 onChange={(e) => setPreco(parseFloat( e.target.value))} />

                <input 
                className="input--metade" 
                type="number" 
                id="quantidade" 
                placeholder="Quantidade" 
                value={quantidade} 
                onChange={(e) => setQuantidade(parseInt( e.target.value))} />

                <input 
                className="input--metade" 
                type="text" 
                id="descricao" 
                placeholder="Descrição" 
                value={descricao} 
                onChange={(e) => setDescricao( e.target.value)} />
                </div>
           
                {editar &&  
                 <button 
                    type="button"
                    className="btn--cadastro"
                    onClick={() => {
                    setEditar(false); //faz esconder o botao editar
                    setId(0)
                    limparFormulario(); //reseta os states dos inputs   
                 }}
                   
                  >
                    Cancelar 
                   </button>}
                {" "}
                <button type="submit" className="btn--cadastro">
                    Adicionar Produto
                 </button>
            </form>

        
            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a 
                        href=""
                         onClick={(e) =>{
                            e.preventDefault()
                            deletar(prod.id)
                        }}
                          >
                            Apagar
                            </a>
                        <button className="produtos__btn-comprar">Comprar</button>
                         <a
                          href="" 
                          onClick={(e) =>{
                            e.preventDefault()

                            setEditar(true);// botao de editar
                            setId(prod.id)
                            setNome(prod.nome)
                            setDescricao(prod.descricao)
                            setPreco(prod.preco)
                            setQuantidade(prod.quantidade)
                        }}
                          >
                            Editar
                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}
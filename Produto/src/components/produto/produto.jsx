import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    // const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })

    const [arrProdutos, setArrProdutos] = useState([])

    async function cadastrarProduto(e) {
        e.preventDefault()// nao deixa o formulario ser postado (nao da f5 na pagina)
        //validar o formulario
        if (
            nome.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente!")
            return false
        }
        //gerar o objeto que vai pra API
        const objCadastro = {
            nome,
            preco,
            descricao,
            quantidade: quantidade,
            imagem: "image.jpg",
        }
        console.log(objCadastro);


        //cadastrar na API
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objCadastro),
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            })

            console.log(retornoAPI);

            //validando o retorno da API
            if (retornoAPI.status == 201) {
                const dadosCadastrados = retornoAPI.json()
                console.log(dadosCadastrados);//dado que acabou de ser cadastrado
                setArrProdutos({ ...arrProdutos, dadosCadastrados })
                alert("Produto cadastrado com sucesso!")

                limparFormulario()

            } else {
                alert("Problema inesperado!")
            }

        } catch (error) {
            alert("Nao foi possivel salvar os dados!")
            console.log(error);
        }

        // setArrProdutos([...arrProdutos, { ...produto, id: Date.now() }])
    }

    //funcao que reinicia os states para limpar o formulario
    function limparFormulario() {
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)
    }

    useEffect(() => {
        //chamar a api
        async function getProdutos() {
            try {
                //faz requisicao na API
                const retornoAPI = await fetch("http://localhost:3000/produtos")
                //transforma o retorno que eh json em objeto javascript
                const dados = await retornoAPI.json()

                console.log(dados);
                //inserir os dados em state
                setArrProdutos(dados)

            } catch (error) {
                console.log("Erro ao buscar os produtos!");
                console.log(error);
            }
        }

        getProdutos()
        //jogar os dados no state
    }, [])

    async function Deletar(id) {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "DELETE",
            })

            //gerar uma nova lista com os produtos que sobraram
            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso!")

                const novaLista = arrProdutos.filter((prod) => {
                    return prod.id != id
                })

                //atualiza a variavel de produtos
                setArrProdutos(novaLista)   
            } else {
                alert("Algum erro ocorreu ao apagar")
            }

        } catch (error) {
            alert("Erro ao apagar o produto!")
            console.log(error);
        }
    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--branco" >SENAI</h1>
                <h1 className="titulo--azul">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" type="text" id="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" placeholder="Preço" onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2 className="produtos__titulo">{prod.nome}</h2>
                        <p className="produtos__descricao">Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p className="produtos__descricao">Descrição: {prod.descricao}</p>
                        <p className="produtos__descricao">Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            Deletar(prod.id)
                        }}>Apagar</a>
                        <button className="produtos__btn-comprar">Comprar</button>
                    </div>
                ))}
            </section>
        </>
    )
}
import "./produto.jsx"

function Produto( {nome, preco, descricao} ){
    return (
        <p>{nome} do Produto - R$ {preco} - {descricao} do Produto</p>
    )
}

export default Produto
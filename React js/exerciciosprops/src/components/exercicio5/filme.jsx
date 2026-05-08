import "./filme.css"

function Filme ( {titulo, ano, genero, nota} ) {

    return (
     <h1> Filme: {titulo} - Ano de lançamento: {ano} - Genero do Filme: {genero} - Nota: {nota} </h1> 
    )
}

export default Filme
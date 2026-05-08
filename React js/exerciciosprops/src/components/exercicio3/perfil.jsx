import "./perfil.css"

function Perfil ( {nome, idade, profissao} ) {

    return (
     < p className="card-perfil"> 

     <span className="card-perfil__line">
        <strong>Nome do Funcionario:</strong>
        {nome}
     </span>

     <span className="card-perfil__line">
        <strong>Idade:</strong>
        {idade}
     </span>

     <span className="card-perfil__line">
        <strong>Profissão:</strong>
        {profissao}
     </span>
     
     </p> 
    )
}

export default Perfil
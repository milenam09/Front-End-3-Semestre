 import { useState } from "react"

function CadFruta() {

    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const[arrFrutas, setArrFrutas] = useState([
        {id: 1, nome:"Morango", quantidade: 10},
        {id: 2, nome:"Abacaxi", quantidade: 12}
    ])

    function cadastrar(e){
        e.preventDefault() ;;
        setArrFrutas([...arrFrutas,{id: Date.now(), nome: fruta, quantidade: quantidade}])
    }

    return (
        <section>
            <h2>Cadastrar</h2>

            {/* Formulario cadastro */}

            <form action="" onSubmit={cadastrar}>

                <fieldset className="cadastrar">
                    <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
               </fieldset>
            <input
                type="text" 
                id="fruta" 
                value={fruta}
                placeholder="ex: limao"
                className="cadastro__entrada"
                onChange={(e) => {
                setFruta(e.target.value)
            }} />
            <input
                type="text" 
                id="quantidade" 
                value={quantidade}
                placeholder="ex: 4"
                className="cadastro__quantidade"
                onChange={(e) => {
                setQuantidade(e.target.value)
            }} />

            <button type="submit" className="cadastro__btncadastrar" >Cadastrar</button>
            
            </form>

            {/* listagem de dados */}
            <div className="resultados">
                <ul>
                   {
                     arrFrutas.map((f) => { 
                        return <li key={f.id}>
                            Fruta: <strong>{f.nome}</strong> |
                             Quantidade: <strong>{f.quantidade}</strong>
                          </li>   
                    })}
                </ul>
            </div>
        </section>
    )
}

export default CadFruta
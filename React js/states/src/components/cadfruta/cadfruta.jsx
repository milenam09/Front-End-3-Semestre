 import { useState } from "react"

function CadFruta() {

    const [fruta, setFruta] = useState("")

    return (
        <section>
            <h2>Cadastrar</h2>
            <fieldset className="cadastrar">
                <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
            </fieldset>
            <input type="text" id="fruta" placeholder="ex: limao" className="cadastro__entrada" onChange={(e) => {
                setFruta(e.target.value)
            }} />
            <button className="cadastro__btncadastrar">Cadastrar</button>

            <div className="resultados">
                <ul>
                    <li>Limao</li>
                    <li>Abacaxi</li>
                </ul>
            </div>
        </section>
    )
}

export default CadFruta
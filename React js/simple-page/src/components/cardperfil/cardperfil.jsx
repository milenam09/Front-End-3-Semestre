import MeuMorango from "../../assets/imagem morango.jpg";
import "./cardperfil.css"

function CardPerfil() {
    return (          
          <div class="card-perfil">
                <img className="card-perfil__imagem" src={MeuMorango} alt="imagem usuario"/>
          </div>
           )
}

export default CardPerfil
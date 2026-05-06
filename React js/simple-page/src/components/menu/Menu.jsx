import "./Menu.css";

import MeuMorango from "../../assets/imagem morango.jpg";

function Menu() {
    return (
        <nav class="menu">
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem Somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

            <div class="card-perfil">
                <img class="card-perfil__imagem" src={MeuMorango} alt="imagem usuario"/>
            </div>

        </nav>

    );
}

export default Menu
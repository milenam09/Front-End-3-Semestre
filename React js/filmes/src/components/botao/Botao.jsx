import "./Botao.css";
import { useNavigate } from "react-router-dom";

const Botao = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (props.btnEditar) {
            props.cancelarEdicao();
        }

        navigate("/filmes"); // rota da página de filmes
    };

    return (
        <button
            className="botao"
            type={
                (props.btnEditar || props.btnLogin) ? "button" : "submit"
            }
            onClick={() => {
                if (props.btnEditar) {
                    props.cancelarEdicao()
                } else if (props.btnLogin){
                    props.fnLogin()
                } else{
                    null
                }
            }}
        >
            {props.nomeDoBotao}
        </button>
    );
};

export default Botao;
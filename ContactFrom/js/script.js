async function cadastrarContato(objetoContato){
    console.log(objetoContato);


    let resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type:" : "application/json; charset=UTF-8"
        }
    });
}

function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let sobrenome = document.getElementById("sobrenome").value.trim();
    // let Email = document.getElementById("Email").value.trim();
    // let pais = document.getElementById("pais").value.trim();
    // let ddd = document.getElementById("ddd").value.trim();
    // let telefone = document.getElementById("telefone").value.trim();
    // let cep = document.getElementById("cep").value.trim();
    // let Endereco = document.getElementById("Endereco").value.trim();
    // let numero = document.getElementById("numero").value.trim();
    // let Apto = document.getElementById("Apto").value.trim();
    // let Cidade = document.getElementById("Cidade").value.trim();
    // let Bairro = document.getElementById("Bairro").value.trim();
    // let Estado = document.getElementById("Estado").value.trim();
    // let anotacoes = document.getElementById("anotacoes").value.trim();


    let quantidadeErros = 0;

    if (nome.length == 0) {
        formError("nome");
        quantidadeErros++;
    } else {
        reiniciaBordo("nome")
    }

    if (sobrenome.length == 0) {
        formError("sobrenome");
        quantidadeErros++;
    } else {
        reiniciaBordo("sobrenome")
    }

    let objetoContato = {
        nome : nome,
        sobrenome : sobrenome
    };

    let cadastro = cadastrarContato(objetoContato);
    return false;

    // if (Email.length == 0) {
    //     formError("Email");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("Email")
    // }

    // if (pais.length == 0) {
    //     formError("pais");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("pais")
    // }

    // if (ddd.length == 0) {
    //     formError("ddd");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("ddd")
    // }

    // if (telefone.length == 0) {
    //     formError("telefone");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("telefone")
    // }

    // if (cep.length == 0) {
    //     formError("cep");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("cep")
    // }

    // if (Endereco.length == 0) {
    //     formError("Endereco");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("Endereco")
    // }
    // if (numero.length == 0) {
    //     formError("numero");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("numero")
    // }

    // if (Apto.length == 0) {
    //     formError("Apto");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("Apto")
    // }

    // if (Cidade.length == 0) {
    //     formError("Cidade");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("Cidade")
    // }

    // if (Bairro.length == 0) {
    //     formError("Bairro");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("Bairro")
    // }

    // if (Estado.length == 0) {
    //     formError("Estado");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("Estado")
    // }

    // if (anotacoes.length == 0) {
    //     formError("anotacoes");
    //     quantidadeErros++;
    // } else {
    //     reiniciaBordo("anotacoes")
    // }


    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campos(s) obrigatórios(s) não preenchido(s).")
        quantidadeErros = 0;
    }

    // fim da funcao//
}

function formError(fildId) {
    document.getElementById(fildId).style.border = "1px solid red"
}

function reiniciaBordo(fildId) {
    document.getElementById(fildId).style.border = "none"
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("CEP inválido. O CEP deve conter 8 dígitos.")
        return false;
    }


    try {

        aguardandoCampos();
        
        let retorno = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        let dados = await retorno.json();
        console.log(dados);

        document.getElementById("Endereco").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;
        document.getElementById("Estado").value = dados.uf;
    }
    catch {
        alert("Erro ao procurar Endereço!");
    }
}

function aguardandoCampos(){
    document.getElementById("Endereco").value = "Aguardando...";
    document.getElementById("Bairro").value = "Aguardando...";
    document.getElementById("Cidade").value = "Aguardando...";
    document.getElementById("Estado").value = "Aguardando...";
}

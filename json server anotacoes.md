**json server =** Facilitar o desenvolvimento front end criando um servidor, cria uma API fake, para programadores front end

não ter que esperar o programador back-end finalizar a API, utiliza um arquivo db.json.



**como instalar, rodar e utilizar ?** abrir o terminal do VSCode, e rode o comando:

**npm install -g json-server**

(com a flag/parâmetro -g voce instala o json server de forma global e não precisara mais instalar para outros projetos)

&#x20; Cria um arquivo db.json (este arquivo serve como um banco de dados gerenciado pelo proprio json-server)

Exemplo Estrutura:

&#x20;  {

&#x09;"Rota/Endpoint?":\[

&#x09;  {"id": 1, "dado-qualquer": "valor-qualquer"}

&#x09;]

&#x20;  }



Exemplo Ficticio:

&#x20;  {

&#x09;"usuarios":\[

&#x09;  {"id": 1, "nome": "Milena", "email": "maresmilena3@gmail.com", "idade": 17}

&#x09;  {"id": 2, "nome": "Guilherme", "email": "guivida3@gmail.com", "idade": 16}

&#x09;]

&#x20;  }



No VSCode devemos abrir o terminal e alterar para o terminal do gitbash

Rodar o comando npx json-server --watch db.json





entrar no PostMan, Criar as requisiçoes:



cadastrar usuario(POST)

listar usuario(GET)

listar um usuario (GET POR ID)

editar usuario(PUT)

apagar usuario (DELETE)


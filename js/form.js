//Criação de variáveis de controle "usuarios" e "id" 
var usuarios = [];

var id = 0;

// 1. Função adequada para incluir dados do formulário em uma lista e no local storage.
function incluirDados(){

    var date = new Date();

    var dia = date.getDate(); //Recebendo o dia do sistema usuário

    var mes = date.getMonth() + 1; //Recebendo o mês do sistema usuário

    var ano = date.getFullYear(); //Recebendo o ano do sistema do usuário

    id++;

    var nome = document.getElementById("nome").value; // Armazenando o campo "nome" do formulário

    var email = document.getElementById("email").value; // Armazenando o campo "email" do formulário

    var telefone = document.getElementById("telefone").value; // Armazenando o campo "telefone" do formulário

    var idade = document.getElementById("idade").value; // Armazenando o campo "idade" do formulário

    var instituicao = document.getElementById("instituicao").value; // Armazenando o campo "instituicao" do formulário

    var usuario = [id, nome, email, telefone, idade, instituicao, date]; // Criando um usuario com os campos anteriores

    usuarios.push(usuario); // Adicionando o usuário na lista de usuários

    localStorage.setItem("usuarios", JSON.stringify(usuarios)); //Armazenando todos os usuários no LocalStorage da página

    lista = document.getElementById("lista"); //Buscando o elemento HTML "lista"

    var li = document.createElement("li"); //Criação de um novo item da lista

    // Convertendo  todos os dados para string e armazenando no novo item 
    li.textContent = "Data de Envio: " + date.toLocaleDateString() + " | ID: " + id + " | Nome: " + nome + " | E-mail: " + email + " | Telefone: " + telefone + " | Idade: " + idade + " | Instituição: " + instituicao;

    lista.appendChild(li); // Adicionando o novo item na lista

    limparCampos(); //Limpando os campos do formulário

}

// 2. Função adequada para excluir um item da lista e do local storage.
function excluirUmUsuario() {
    
    var id = document.getElementById("excluirUmUsuarioPeloID").value; //Busca o item da lista com aquele identificador digitado

    var usuarioFiltrado = usuarios.find(function(usuario) {

        return usuario[0] == id; // Itera entre os usuários e retorna aquele com o mesmo "id" 

    });

    var index = usuarios.indexOf(usuarioFiltrado);

    usuarios.splice(index, 1); //Remove o usuário selecionado da lista de usuários

    localStorage.setItem("usuarios", JSON.stringify(usuarios)); //Renova a lista de usuários no LocalStorage

    recarregarLista(); // Recarrega a lista atualizada com todos os usuários

    limparExcluirUmUsuario(); // Zera o campo "excluiUmUsuarioPeloID"

}

// 3. Função adequada para excluir todos os itens da lista e do local storage.
function excluirTodosUsuarios(){

    localStorage.clear(); //Limpa o localStorage completamente

    usuarios = []; // Limpa a lista de usuários 

    id = 0; // Reinicia a contagem dos identificadores 

    lista = document.getElementById("lista"); // Busca o elemento HTML "lista"

    recarregarLista(); // Recarrega a lista atualizada com todos os usuários

}

// 4. Função adequada para pesquisar um campo do formulário.
function pesquisarPorNome() {
    var nomePesquisado = document.getElementById("nomePesquisado").value; //Recebe o valor do nome digitado

    var lista = document.getElementById("lista"); // Busca o elemento HTML "lista"

    lista.innerHTML = ""; //Reseta a lista

    //Alimenta a lista apenas com o usuário pesquisado utilizando o nome como meio de busca
    usuarios.forEach(function(usuario) {

        if (usuario[1].toLowerCase().includes(nomePesquisado.toLowerCase())) {

            var li = document.createElement("li");

            li.textContent = "ID: " + usuario[0] + " | Nome: " + usuario[1] + " | E-mail: " + usuario[2] + " | Telefone: " + usuario[3] + " | Idade: " + usuario[4] + " | Instituição: " + usuario[5];

            lista.appendChild(li);

        }
    });
}


// 5. Função adequada para limpar os campos do formulário.
function limparCampos() {

    document.getElementById("nome").value = ""; //Reseta o campo "nome" do formulário

    document.getElementById("email").value = "";  //Reseta o campo "email" do formulário

    document.getElementById("telefone").value = "";  //Reseta o campo "telefone" do formulário

    document.getElementById("idade").value = "";  //Reseta o campo "idade" do formulário

    document.getElementById("instituicao").value = "";  //Reseta o campo "instituicao" do formulário

}

// Funções extras:

//Recarrega a lista buscando todos os usuários, utilizada após uma adição, modificação ou exclusão.
function recarregarLista() {

    var lista = document.getElementById('lista');

    lista.innerHTML = "";

    usuarios.forEach(function(usuario) {

        var li = document.createElement("li");

        li.textContent = "ID: " + usuario[0] + " | Nome: " + usuario[1] + " | E-mail: " + usuario[2] + " | Telefone: " + usuario[3] + " | Idade: " + usuario[4] + " | Instituição: " + usuario[5];

        lista.appendChild(li);

    });

}
//Zera o valor do identificador selecionado
function limparExcluirUmUsuario() {

    document.getElementById("excluirUmUsuarioPeloID").value = "";

}
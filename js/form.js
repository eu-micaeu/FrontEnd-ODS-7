var usuarios = [];

var id = 0;

// 1. Função adequada para incluir dados do formulário em uma lista e no local storage.
function incluirDados(){

    id++;

    var nome = document.getElementById("nome").value;

    var email = document.getElementById("email").value;

    var telefone = document.getElementById("telefone").value;

    var idade = document.getElementById("idade").value;

    var instituicao = document.getElementById("instituicao").value;

    var usuario = [id, nome, email, telefone, idade, instituicao];

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    lista = document.getElementById("lista");

    var li = document.createElement("li");

    li.textContent = "ID: " + id + " | Nome: " + nome + " | E-mail: " + email + " | Telefone: " + telefone + " | Idade: " + idade + " | Instituição: " + instituicao;

    lista.appendChild(li);

    limparCampos();

}

// 2. Função adequada para excluir um item da lista e do local storage.

function excluirUsuario() {

    id = document.getElementById("excluirUmUsuarioPeloID").value;

    usuarios = usuarios.filter(function(usuario) {

        return usuario[0] !== id;

    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    lista = document.getElementById("lista");

    lista.innerHTML = "";

    usuarios.forEach(function(usuario) {

        var li = document.createElement("li");

        li.textContent = "ID: " + usuario[0] + " | Nome: " + usuario[1] + " | E-mail: " + usuario[2] + " | Telefone: " + usuario[3] + " | Idade: " + usuario[4] + " | Instituição: " + usuario[5];

        lista.appendChild(li);

    });

}

// 3. Função adequada para excluir todos os itens da lista e do local storage.

function excluirTodosUsuarios(){

    localStorage.clear();

    usuarios = [];

    id = 0;

    lista = document.getElementById("lista");

    lista.innerHTML = "";

}

// 4. Função adequada para pesquisar um campo do formulário.

// 5. Função adequada para limpar os campos do formulário.

function limparCampos() {

    document.getElementById("nome").value = "";

    document.getElementById("email").value = "";

    document.getElementById("telefone").value = "";

    document.getElementById("idade").value = "";

    document.getElementById("instituicao").value = "";

}

// Funções extras:

var usuarios = [];

var cont = 0;

// 1. Função adequada para incluir dados do formulário em uma lista e no local storage.
function incluirDados(){

    cont++;

    var nome = document.getElementById("nome").value;

    var email = document.getElementById("email").value;

    var telefone = document.getElementById("telefone").value;

    var idade = document.getElementById("idade").value;

    var instituicao = document.getElementById("instituicao").value;

    usuarios.push(id, nome, email, telefone, idade, instituicao);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

}

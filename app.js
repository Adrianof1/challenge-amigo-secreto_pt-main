//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Captura o campo input e o nome que o usúario digita.
function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value;

//faz a validação da entrada e retorna o alerta se não houver nome válido.
    if (nomeAmigo.trim() !== '') {
        alert('Por Favor, digite um nome válido.')
        return;//para a execução
    }

    //adiciona o nome à lista "array"
    amigos.push(nomeAmigo);

    //atualiza a exibição da lista na tela 
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = lista.innerHTML + `<li>${nomeAmigo}</li>`;

    //limpa o campo input.
    amigoInput.value = '';
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

    //valida se há amigos suficientes para o sorteio.
    function sortearAmigo() 
        if (amigos.length < 2){
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    //sorteia aleatório.
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    //pega o nome do sorteado.
    let amigoSorteado = amigos[indiceSorteado];

    //exibi o resultado na tela.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`

    //funçaõ reiniciar
    function reiniciar() {
        amigos = [] //apaga a lista de convidados.
        document.getElementById('listaAmigos').innerHTML = ''; //limpa a exibição da lista
        document.getElementById('resultado').innerHTML = ''; //limpa o resultado do sorteio
    }
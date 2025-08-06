//Código escrito ao som da playlist Linkin Park 😁

let amigos = []

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo'); //pega o elemento pelo seu id.
    let nomeAmigo = amigoInput.value; //pega o texto que o usúario digitou dentro do campo input.
    if (nomeAmigo.trim() === '') {
        alert('Por favor, digite um nome válido.'); //verifica se o campo está vazio ou contém apenas espaços.
        return; //se estiver vazio, não adiciona o amigo e sai da função.
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.')
        amigoInput.value = ''; //limpa o campo.
        return; //para a execução.
    }

    amigos.push(nomeAmigo); //se passou em todas as validações, adiciona o nome ao array 'amigos'.

    let listaHTMl = document.getElementById('listaAmigos'); //pega o elemento da lista <ul> no html.

    listaHTMl.innerHTML = listaHTMl.innerHTML + `<li>${nomeAmigo}`; //adiciona o novo amigo a lista na tela, formatando como lista.

    amigoInput.value = ''; //limpa o campo de texto para digitar o próximo nome.

    amigoInput.focus(); // deixa o cursor piscando no campo, pronto para o próximo nome.
}


function sortearAmigo() { //função chamada pelo botão "Sortear amigo".
    if (amigos.length < 2) { //valida se há pessoas suficientes para realizar um sorteio.
        alert('É necessário adicionar pelo menos 2 amigos para o sorteio!');
        return; //para a execução.
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // gera um número aleatório e o ajusta para ser um indice válido.

    let amigoSorteado = amigos[indiceSorteado]; //usa o indice sorteado para pegar o nome correpondente na lista.

    let resultadoHTML = document.getElementById('resultado'); //pega o elemento <ul> onde o resultado será exibido.

    resultadoHTML.innerHTML = `<li>${amigoSorteado}<li>`;
}


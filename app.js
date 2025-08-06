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

}


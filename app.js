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
}

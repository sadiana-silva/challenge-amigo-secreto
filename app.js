let amigos = []

function adicionarAmigo() {
    // capturar o valor do campo de entrada
    let nome = document.getElementById('amigo').value.trim()

    // limpeza do campo de entrada
    document.getElementById('amigo').value = ''

    //validação: da entrada em branco
    if (nome === '') {
        alert('Por favor, insira um nome.')
        return
    }

    // validação: nomes repetidos
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.')
        return
    }
    
    // adicionando nome à lista de amigos
    amigos.push(nome)

    atualizarLista()
}

function atualizarLista() {
    // captar a lista de exibição dos nomes
    let lista = document.getElementById('listaAmigos')

    // limpar a lista existente
    lista.innerHTML = "" 

    // loop para percorrer o array e exibir os nomes da lista
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement('li')
        itemLista.textContent = amigos[i]

        // adiciona um novo tópico à lista
        lista.appendChild(itemLista)
    }
}

function sortearAmigo() {
    let limite = amigos.length

    // validação: lista vazia
    if (amigos.length === 0) {
        alert('Lista vazia! Insira os nomes para sortear.')
        return
    }

    // índice aleatório do array
    let indice = Math.floor(Math.random() * limite)

    // captar o campo em que será exbido o resultado
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = ""


    // exibe o nome sorteado na tela
    let nomeSorteado = document.createElement('li')
    nomeSorteado.textContent = amigos[indice]
    
    resultado.appendChild(nomeSorteado)

}
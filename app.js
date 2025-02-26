let amigos = []

function adicionarAmigo() {
    // capturar o valor do campo de entrada
    let nome = document.getElementById('amigo').value.trim()

    // limpeza do campo de entrada
    document.getElementById('amigo').value = ''

    //validação da entrada (interrompe a função caso o campo esteja em branco)
    if (nome === '') {
        alert('Por favor, insira um nome.')
        return
    }
    
    // adicionando nome à lista de amigos
    amigos.push(nome)
}
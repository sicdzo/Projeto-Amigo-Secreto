let listaNomes = [];
let verificarSorteio = false;

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (nomeAmigo.trim() !== "") {
        listaNomes.push(nomeAmigo);
        document.getElementById('amigo').value = '';
                        
        // Chama a função para atualizar a lista na tela
        atualizarLista();
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Função para atualizar a lista de amigos no HTML
function atualizarLista() {
    // 1. Obter a referência do <ul> no HTML
    let listaAmigosNoHTML = document.getElementById('listaAmigos');
    
    // 2. Limpar o conteúdo atual da lista
    listaAmigosNoHTML.innerHTML = '';

    // 3. Repetir sobre o array e criar os elementos <li>
    if (listaNomes.length > 0) {
        listaNomes.forEach(nome => {
            // 4. Criar um novo elemento <li>
            let li = document.createElement('li');
            
            // 5. Definir o texto do <li>
            li.textContent = nome;
            
            // 6. Adicionar o <li> ao <ul>
            listaAmigosNoHTML.appendChild(li);
        });
    }
}

// Função para exibir a lista, que agora é a mesma que renderiza
function exibirAmigos() {
    // Simplesmente chama a função de renderização
    atualizarLista();
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert('Por favor, adicione pelo menos dois nomes para sortear.');
        return;
    }
    if (listaNomes.length == 1){
        alert('Por favor, adicione pelo menos dois nomes para sortear.');
        return;
    }
    else {

    // Gera um número aleatório baseado no tamanho da lista
    let indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    
    // Obtém o nome do amigo sorteado
    let amigoSorteado = listaNomes[indiceSorteado];
    
    // Exibe o nome do amigo sorteado na tela
    // document.getElementById('resultado').textContent = amigoSorteado;
    
    verificarSorteio = true;    
    // Atualiza o texto exibido
    textoExibidoDoSorteio(amigoSorteado);
    document.getElementById('restart').style.display='';
    }
}

function limparSorteio(){
    if (verificarSorteio === true) {
        listaNomes = [];
        atualizarLista();
    }
}

function textoExibidoDoSorteio(amigoSorteado){
    let texto = document.getElementById('title');
    texto.textContent = 'O amigo sorteado é: '+ amigoSorteado;
}

function novoSorteio(){
    document.getElementById('title').textContent = 'Digite o nome dos seus amigos';
    limparSorteio();
    document.getElementById('restart').style.display='none';
}




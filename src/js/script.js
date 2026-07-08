const esquerdo = document.querySelector('#btn-esquerda');
const direito = document.querySelector('#btn-direita');
const img = document.querySelector('#imagem-semana');

// Lista de imagens - apague ou acrescente '5semana.jpg' conforme o mês
const imagens = ['1semana.jpg', '2semana.jpg', '3semana.jpg', '4semana.jpg', '5semana.jpg'];

// Descobre o dia de hoje e calcula qual semana mostrar
const dia = new Date().getDate();

let imagemAtual = Math.floor((dia - 1) / 7);

// Se passar do total de imagens que existem, mostra a última
if (imagemAtual > imagens.length - 1) {
    imagemAtual = imagens.length - 1;
}

// Mostra a imagem certa
mostrarImagem();

// Botão direita
direito.addEventListener('click', function() {
    if (imagemAtual < imagens.length - 1) {
        imagemAtual++;
        mostrarImagem();
    }
});

// Botão esquerda
esquerdo.addEventListener('click', function() {
    if (imagemAtual > 0) {
        imagemAtual--;
        mostrarImagem();
    }
});

function mostrarImagem() {
    img.src = './src/img/01mwb/' + imagens[imagemAtual] + '?v=' + Date.now();
    direito.disabled = imagemAtual === imagens.length - 1;
    esquerdo.disabled = imagemAtual === 0;
}
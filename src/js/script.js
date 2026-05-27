const esquerdo = document.querySelector('#btn-esquerda');
const direito = document.querySelector('#btn-direita');
const img = document.querySelector('#imagem-semana');

let imagemAtual = 0;
const imagens = ['1semana.jpg', '2semana.jpg', '3semana.jpg', '4semana.jpg', '5semana.jpg'];

direito.addEventListener('click', function() {
    imagemAtual = imagemAtual +1;
        if (imagemAtual > 4) {
            imagemAtual = 4;
            direito.disabled = true;
        } else {
            direito.disabled = false;
        }
    esquerdo.disabled = false;    
    img.src = '/src/img/' + imagens[imagemAtual];
    
})

esquerdo.addEventListener('click', function() {
    imagemAtual = imagemAtual -1;
        if (imagemAtual < 0) {
            imagemAtual = 0
            esquerdo.disabled = true;
        } else {
            esquerdo.disabled = false;
        }
    direito.disabled = false;
    img.src = '/src/img/' + imagens[imagemAtual];    
})
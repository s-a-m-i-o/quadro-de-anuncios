const esquerdo = document.querySelector('#btn-esquerda');
const direito = document.querySelector('#btn-direita');
const img = document.querySelector('#imagem-semana');
const hoje = new Date();
const dia = hoje.getDate();

let imagemAtual = 0;
const imagens = ['1semana.jpg', '2semana.jpg', '3semana.jpg', '4semana.jpg'];
if (dia <= 7) {
    imagemAtual = 0;
} else if (dia <= 14) {
    imagemAtual = 1;
} else if (dia <= 21) {
    imagemAtual = 2;
} else if (dia <= 28) {
    imagemAtual = 3;
} else {
    imagemAtual = 4;
}

img.src = '/src/img/01mwb/' + imagens[imagemAtual]

direito.addEventListener('click', function() {
    imagemAtual = imagemAtual +1;
        if (imagemAtual > 3) {
            imagemAtual = 3;
            direito.disabled = true;
        } else {
            direito.disabled = false;
        }
    esquerdo.disabled = false;    
    img.src = '/src/img/01mwb/' + imagens[imagemAtual];
    
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
    img.src = '/src/img/01mwb/' + imagens[imagemAtual];    
})




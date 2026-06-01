document.body.insertAdjacentHTML('afterbegin', `
    <div class="menu-hamburguer">
        <button class="menu-btn" id="menu-btn">
            <i class="fa-solid fa-bars"></i>
        </button>
        
        <nav class="menu-overlay" id="menu-overlay">
            <a href="/mwb.html">MWB</a>
            <a href="/fds.html">Reunião Pública</a>
            <a href="/limpeza.html">Limpeza</a>
            <a href="/campo.html">Pregação</a>
            <a href="/index.html">Início</a>
        </nav>
    </div>
`);

// Seleciona os elementos
const menuBtn = document.querySelector('#menu-btn');
const menuOverlay = document.querySelector('#menu-overlay');

// Abre e fecha o menu ao clicar no botão
menuBtn.addEventListener('click', function() {
    menuOverlay.classList.toggle('ativo');
});

// Fecha o menu ao clicar fora dele
menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('ativo');
    }
});
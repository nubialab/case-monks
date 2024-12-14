// Função para reorganizar as imagens conforme a largura da tela
function rearrangeGallery() {
    const gallery = document.getElementById('gallery');
    const galleryBox = document.querySelector('.gallery-box');
    const picsContainer = document.querySelector('.pics-container');
    const pics01 = document.querySelector('.pics-01');
    const pics02 = document.querySelector('.pics-02');
    const pics03 = document.querySelector('.pics-03');

    if (window.innerWidth >= 1440) {
        // Desktop: pics-01 à esquerda, pics-02 e pics-03 à direita
        galleryBox.appendChild(pics01); // pics-01 à esquerda
        picsContainer.appendChild(pics02); // pics-02 à direita
        picsContainer.appendChild(pics03); // pics-03 à direita
    } else if (window.innerWidth >= 768) {
        // Tablet: pics-01 fica no topo, pics-02 e pics-03 abaixo
        galleryBox.appendChild(pics01); // pics-01 no topo
        picsContainer.appendChild(pics02); // pics-02 abaixo
        picsContainer.appendChild(pics03); // pics-03 abaixo
    } else {
        // Mobile: todas as imagens ficam empilhadas
        galleryBox.appendChild(pics01); // pics-01 no topo
        picsContainer.appendChild(pics02); // pics-02 abaixo
        picsContainer.appendChild(pics03); // pics-03 abaixo
    }
}

// Seleciona o botão de menu, a navbar, o botão de fechar e as imagens
const menuButton = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-menu');
const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-image'); // Imagem que você quer esconder
const body = document.body;

// Função para bloquear o scroll da página
function lockScroll() {
    const scrollY = window.scrollY; // Pega a posição atual do scroll
    body.style.position = 'fixed'; // Fixa o body
    body.style.top = `-${scrollY}px`; // "Congela" a posição
    body.style.width = '100%'; // Impede a barra de rolagem lateral de aparecer
}

// Função para restaurar o scroll da página
function unlockScroll() {
    const scrollY = Math.abs(parseInt(body.style.top || '0')); // Recupera a posição do scroll
    body.style.position = ''; // Restaura o position
    body.style.top = ''; // Limpa o top
    body.style.width = ''; // Restaura a largura do body
    window.scrollTo(0, scrollY); // Restaura a posição do scroll
}

// Adiciona um evento de clique para alternar a visibilidade do menu
menuButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    navbar.classList.toggle('active'); // Alterna a classe 'active' no menu
    heroImage.classList.toggle('hidden', navbar.classList.contains('active')); // Esconde a imagem hero-image quando o menu estiver aberto
    
    if (navbar.classList.contains('active')) {
        lockScroll(); // Bloqueia o scroll quando o menu está aberto
    } else {
        unlockScroll(); // Restaura o scroll quando o menu está fechado
    }
});

// Adiciona um evento de clique para fechar o menu
closeButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    navbar.classList.remove('active'); // Remove a classe 'active' do menu para fechá-lo
    heroImage.classList.remove('hidden'); // Mostra a imagem hero-image novamente

    unlockScroll(); // Restaura o scroll quando o menu for fechado
});

// Botão que leva para o final da página
document.getElementById('scroll-button').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// Seleciona o botão de verificação
const verificationButton = document.querySelector('.verification-button');

// Adiciona um evento de clique ao botão
verificationButton.addEventListener('click', () => {
    // Seleciona o valor do input
    const resultInput = document.querySelector('.result-box');
    const userInput = resultInput.value;

    // Verifica se o valor é igual a 1055
    if (userInput === '1055') {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }
});


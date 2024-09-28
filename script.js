// Seleciona a imagem e o container
const profilePicture = document.getElementById('profile-picture');
const container = document.querySelector('.container');

// Função de movimento para dispositivos desktop
container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Função de movimento para dispositivos móveis
container.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const xAxis = (window.innerWidth / 2 - touch.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - touch.pageY) / 25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Resetar o efeito ao remover o toque ou o mouse
container.addEventListener('mouseleave', () => {
    container.style.transform = `rotateY(0deg) rotateX(0deg)`;
    profilePicture.style.transform = 'translateZ(0px)';
});

container.addEventListener('touchend', () => {
    container.style.transform = `rotateY(0deg) rotateX(0deg)`;
    profilePicture.style.transform = 'translateZ(0px)';
});

// Efeito de pop-up quando o mouse ou toque inicia
container.addEventListener('mouseenter', () => {
    profilePicture.style.transform = 'translateZ(50px)';
});

container.addEventListener('touchstart', () => {
    profilePicture.style.transform = 'translateZ(50px)';
});

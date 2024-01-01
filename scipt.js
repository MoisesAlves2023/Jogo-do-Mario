const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score');

let scorePlayer = 0;
let isPipePassed = false; // Adicionada variável para controlar se o Mario já passou pelo cano

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0 && !isPipePassed) {
        // Marcar que o Mario já passou pelo cano
        isPipePassed = true;

        // Resetar a posição do cano
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Resetar a posição do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Atualizar a aparência do Mario (você pode personalizar esta parte)
        mario.src = './imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Parar o loop do jogo
        clearInterval(loop);

       
    } else if (pipePosition <= 0) {
        // Resetar a variável quando o cano passa completamente pela tela
        isPipePassed = false;
         // Incrementar o score apenas quando o Mario passa com sucesso pelo cano
         scorePlayer++;
         scoreDisplay.textContent = `Score: ${scorePlayer}`;
    }
});

document.addEventListener('keydown', jump);

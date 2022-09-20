const dino = document.querySelector('.dino');
const background = document.querySelector('.background-dino');
let isJumping = false;
let position = 0;
const audio = document.querySelector('.audio')


function handleKeyup(event) {
    if(event.keyCode === 32) {
        audio.play()
        if(!isJumping) {
            jump();

        }
    }
}

function jump( ) {
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 180){
            clearInterval(upInterval);
        let downInterval = setInterval(() => {
            if(position <= 0) {
                clearInterval(downInterval);
                isJumping = false;
            } else {
            position -= 20;
            dino.style.bottom = position + 'px';
            }
        }, 15)
        }else {
        position += 20;

        dino.style.bottom = position + 'px';
        }
    }, 30)
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    let randomTime = Math.random() * 6000;

    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if( cactusPosition > 0 && cactusPosition < 60 && position < 60) {

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"><img src="./bill.png" class="bill">Fim de jogo</h1></img>';

        }else {    
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        }
    }, 20)

    setTimeout(createCactus, randomTime)
}

createCactus();

document.addEventListener('keyup', handleKeyup)
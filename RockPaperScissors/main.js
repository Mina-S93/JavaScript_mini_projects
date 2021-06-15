let startForm = document.querySelector('.startForm');
let startGame = document.querySelector('.startGame'); 

let playerName = document.querySelector('.playerName');
let body = document.querySelector('body');
let nameValidation = document.querySelector('#nameValidation');

startForm.addEventListener('submit', e => {
    e.preventDefault();
    let player = startForm.name.value.trim();
    if(player === ''){
        nameValidation.innerText = 'Your name please!';
        nameValidation.style.color = 'red';
        startGame.style.lineHeight = '2.2';
    } else{
        playerName.innerText = player;
        startGame.style.display = 'none';
        body.style.backgroundColor = 'white';
    }
})

let rock = document.querySelector('.player .rock i');
let paper = document.querySelector('.player .paper i');
let scissors = document.querySelector('.player .scissors i');

let playerContainer = document.querySelector('.player .container');
let pickedPlayer = document.querySelector('.player .picked');
let pickedComputer = document.querySelector('.computer .picked .anim');


let result = document.querySelector('.result');
let poruka = document.querySelector('.result p');

let computerScore = document.querySelector('.computerScore');
let playerScore = document.querySelector('.playerScore');
let zero = 0;

computerScore.innerHTML = zero;
playerScore.innerHTML = zero;

playerContainer.addEventListener('click', e => {
   if((e.target == rock || e.target == paper || e.target == scissors) && (pickedPlayer.innerHTML == '')){
        pickedPlayer.innerHTML = e.target.outerHTML;
        pickedComputer.classList.add('animacija');
   } 
})

function computerPick (){
    let rps = [rock, paper, scissors];
    let random = rps[Math.floor(Math.random() * rps.length)]
    return random;
}

pickedComputer.addEventListener('animationend', () =>{
    pickedComputer.innerHTML = computerPick().outerHTML;
    result.classList.remove('display');
    let playerClass = pickedPlayer.children[0].classList[1];
    let compClass = pickedComputer.children[0].classList[1];

    let rockClass= rock.classList[1];
    let paperClass = paper.classList[1];
    let scissorsClass = scissors.classList[1];

    if(playerClass === compClass){
        poruka.innerText = 'Draw!'
    } else if((playerClass == rockClass && compClass == paperClass) || (playerClass == paperClass && compClass == scissorsClass) || (playerClass == scissorsClass && compClass == rockClass)){
        poruka.innerText = 'You lost!';
        computerScore.innerHTML++;
    } else {
        poruka.innerText = 'You win!'
        playerScore.innerHTML++;
    }
    
    scrollTo(100,100);
})

let restart = document.querySelector('#restart');
let restartGame = document.querySelector('#restartGame');

restart.addEventListener('click', () => {
    pickedPlayer.innerHTML = '';
    pickedComputer.innerHTML = '';
    pickedComputer.classList.remove('animacija');
    
})

restartGame.addEventListener('click', () => {
    pickedPlayer.innerHTML = '';
    pickedComputer.innerHTML = '';
    pickedComputer.classList.remove('animacija');
    result.classList.add('display');
    computerScore.innerHTML = zero;
    playerScore.innerHTML = zero;
})



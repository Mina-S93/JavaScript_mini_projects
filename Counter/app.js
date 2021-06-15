let number = document.querySelector('span');                //get container for number
let decrease = document.getElementById('decrease');         //get decrease button
let reset = document.getElementById('reset');               //get reset button
let increase = document.getElementById('increase');         //get increase button

decrease.addEventListener('click', () => {                  //decrease button on click function 
    number.innerText--                                      //decrease number 
    if(number.innerText < 0){                               //style number
        number.style.color = 'red';
    } else if (number.innerText > 0){
        number.style.color = 'green';
    } else{
        number.style.color = 'black';
    }
})

increase.addEventListener('click', () => {                  //increase button on click function 
    number.innerText++                                      //increase number 
    if(number.innerText < 0){                               //style number
        number.style.color = 'red';
    } else if (number.innerText > 0){
        number.style.color = 'green';
    } else{
        number.style.color = 'black';
    }
})

reset.addEventListener('click', () => {                     //reset number to 0
    number.innerText = 0;
    if(number.innerText == 0){
        number.style.color = 'black';
    }
})

var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'brown'];         //array with colors
let colorText = document.querySelector('#color');                           //get color container
let btn = document.querySelector('button');                                 //get button
let body = document.querySelector('body');                                  //get body

btn.addEventListener('click', () => {
    colorText.innerText = colors[change()];                                 //add generated random color to color container
    body.style.backgroundColor = colorText.innerText;                       //change body color
})

function change() {                                                         //function generate random color from colors array
    return Math.floor(Math.random()*colors.length);
}


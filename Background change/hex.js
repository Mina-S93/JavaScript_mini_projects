var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];  //array with all letters and numbers for hex code
let colorText = document.querySelector('#color');                           //get color container
let btn = document.querySelector('button');                                 //get button 
let body = document.querySelector('body');                                  //get body

btn.addEventListener('click', () => {                                       //when the button is clicked
    let color = '#';                                                        //variable to store hex code with # prefix
    for(let i=0; i<6; i++){                                                 //add 6 random elements form colors array
        color += colors[change()];
    }

    colorText.innerText = color;                                            //add generated random color to color container
    body.style.backgroundColor = color;                                     //change body color
})

function change() {                                                         //function generate random element from colors array
    return Math.floor(Math.random()*colors.length);
}

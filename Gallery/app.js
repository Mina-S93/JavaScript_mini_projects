let right = document.querySelector('#right');            //get right button
let left = document.querySelector('#left');              //get left button

let one = document.querySelector('.first');              //get divs with pictures
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
var pictures = [one, second, third, fourth]              //put all pictures in array

right.addEventListener('click', () => {                  //on right click button
    pictures[0].classList.add('none');                   //first element in array add display none, now all pictures have display none
    let first = pictures.shift();                        //get first element from array and store it in variable
    pictures.push(first);                                //push it at the end
    pictures[0].classList.remove('none');                //show first picture
})

left.addEventListener('click', () => {                   //on left click button
    pictures[0].classList.add('none');                   //first element in array add display none, now all pictures have display none
    let first = pictures.pop();                          //get last element from array and store it in variable
    pictures.unshift(first);                             //make that element first in array
    pictures[0].classList.remove('none');                //show first element
})






let form = document.querySelector('form');                               // get the form
let table = document.querySelector('table');                             // get table
let results = document.querySelectorAll('td');                           // get all td elements in NodeList

form.addEventListener('submit', (e) => {                                 // run on submit form
    e.preventDefault();
    let weight = form.weight.value;                                      // get value of weight
    let height = form.height.value;                                      // get value of height

    let bmi = Math.round((weight/Math.pow((height/100),2))*10)/10;       // calculating BMI, rounded at 1 decimal place

    form.innerHTML = `<p> Your BMI is <b>${bmi}<b></p>`;                 // replace form inner html for BMI result

    table.classList.remove('hide');                                      // show table

    if(bmi < 18.5){                                                      // color td element of NodeList depending on BMI result
        results[0].style.backgroundColor = '#89CFF0'
    } else if (bmi >= 18.5 && bmi < 25.0){
        results[1].style.backgroundColor = '#89CFF0'
    } else if (bmi >= 25.0 && bmi < 30.0){
        results[2].style.backgroundColor = '#89CFF0'
    } else if (bmi >= 30.0){
        results[3].style.backgroundColor = '#89CFF0'
    }
})
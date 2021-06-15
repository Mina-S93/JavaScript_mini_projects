//correct answers
const correctAnswers = ['B', 'C', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    userAnswers.forEach((current, index)=>{
        if(current === correctAnswers[index]){
            score += 20;
        }
    })

    console.log(score);
    scrollTo(0,0);
    result.classList.remove('d-none');
    result.querySelector('span').textContent = score + '%';
    // result.textContent = `${score} %`;
})  

// niz1= [1, 2, 3, 4];
// niz2 = [1, 3, 6, 9];
// let counter = 0;
// for(let i=0; i<niz1.length; i++){
//     if (niz1[i] === niz2[i]){
//         counter +=1;
//     }
// }

// niz1.forEach((current, index)=>{
//     if(current === niz2[index]){
//         counter +=1;
//     }
// })
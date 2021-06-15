let form = document.querySelector('form');
let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let bill = Number(form.bill.value);
    let percent = Number(form.tip.value);
    let tip = (bill/100)*percent;

    tipAmount.innerText = tip;
    total.innerText = bill+tip;
});
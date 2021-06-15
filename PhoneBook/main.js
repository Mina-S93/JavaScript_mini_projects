let addContactForm = document.getElementById('addContact');                       //get form for adding contacts 

addContactForm.addEventListener('submit', e => {                                  //function on submit button ot enter
    e.preventDefault();
    let name = addContactForm.addName.value.trim();                               //get name value from input
    let number = addContactForm.addNumber.value;                                  //get number value from input
    let num = convertingNum(number);                                              //convert number(styling)

    let numberValidation = document.querySelector('#numberValidation');

    if(number.length < 9 || number.length > 12){
        numberValidation.classList.remove('filtered'); 
    } else {
        numberValidation.classList.add('filtered');
        addingContacts(name, num);
        addContactForm.reset();
    }
})

function convertingNum(number){                                                    //function to style number
    let numArr = number.split('');                                                 //add spaces between 4th and 5th, 7th and 8th, 10th and 11th
    numArr.splice(4,0,' ');
    numArr.splice(8,0,' ');
    numArr.splice(12,0,' ');
    let conNum = numArr.join('');
    return conNum;
}

let ul = document.querySelector('ul');                                                  //get unordered list containing all contacts

function addingContacts(name, number){
    let contact =   `<li class="list-group-item d-flex">                               
                        <div class="fw-bold flex-grow-1 text-start">${name}</div>
                        <span class="text-muted mx-4">${number}</span>
                        <i class="far fa-trash-alt delete align-self-center"></i>
                    </li>`                                                             

ul.innerHTML += contact;                                                                //add new contact to list, with entered name and number
}

ul.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){                                          //if clicked at trash bin, delete parent 
        e.target.parentElement.remove();
    }
})

searchForm.search.addEventListener('keyup', ()=>{                                       //search contact on keyup 
    let rec = searchForm.search.value.trim().toLowerCase();                             //get value from search input with lower case
    searchFunction(rec);
})

function searchFunction(rec){

    //filter everything that does not contain inserted value
    Array.from(ul.children)
    .filter(el => !el.textContent.split(' ').filter(el => el !== '').join('').toLowerCase().includes(rec))
    .forEach(el =>{ el.classList.add('filtered')});

    //for back space
    Array.from(ul.children)
    .filter(el => el.textContent.split(' ').filter(el => el !== '').join('').toLowerCase().includes(rec))
    .forEach(el =>{ el.classList.remove('filtered')});

}


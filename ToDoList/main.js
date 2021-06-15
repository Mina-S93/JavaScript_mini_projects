const addForm = document.querySelector('.add');
let ul = document.querySelector('ul');

const searchForm = document.querySelector('.search');

let addTask = function (task){

    let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${task}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;

    ul.innerHTML += html;

};



addForm.addEventListener('submit', e => {
    e.preventDefault();

    const noviTask = addForm.add.value.trim();
    addTask(noviTask);
    addForm.reset();
    
});

ul.addEventListener('click', e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
})



let searchFun = (rec)=>{

    Array.from(ul.children)
   .filter(el=> !el.textContent.toLowerCase().includes(rec) )
   .forEach(el =>{ el.classList.add('filtered')});

   Array.from(ul.children)
   .filter(el=> el.textContent.toLowerCase().includes(rec) )
   .forEach(el =>{ el.classList.remove('filtered')});

}

searchForm.search.addEventListener('keyup', ()=>{
    
    let rec = searchForm.search.value.trim().toLowerCase();
    searchFun(rec);
})
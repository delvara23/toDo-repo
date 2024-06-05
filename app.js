//Selectors
const input = document.querySelector('.todo-input');//grabbing a reference to our input element
console.log(input);

const submitt = document.querySelector('.submit');//grabbing a reference to the plus icon
console.log(submitt);

const list = document.querySelector('.toDoList');
console.log(list);

const newDiv = document.querySelector('.newDiv');
console.log(newDiv);

//Function
const addToDo = add=>{
    // console.log(list)
    add.preventDefault()//prevent form from submitting
    //next we create a div
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');

    // list.appendChild('newDiv');
    //we create the list indexes
    saveToLocal(input.value)
    const newList = document.createElement('li');
    newList.classList.add('new-list');
    newDiv.appendChild(newList);
    console.log(newList);
    newList.textContent = input.value;
    
    clear()
     //create complete button

     const createTrash = document.createElement('button');
     createTrash.innerHTML = '<i class="fas fa-trash"></i>';
     createTrash.classList.add('trash-bttn');
     newDiv.appendChild(createTrash);
    list.appendChild(newDiv)

    //delete toDo onclick
    createTrash.addEventListener('click',e=>{
        list.removeChild(newDiv)
        
        
    })

   
}

function saveToLocal(todos){
    let todoss;
    if(localStorage.getItem('todos')===null){
        todoss =[];
    }else{
        todoss = JSON.parse(localStorage.getItem('todoss'));
    }

    todoss.push(todos)
    localStorage.setItem('todoss', JSON.stringify(todoss));
}


// const createCheck = ()=>{
//     const check = document.createElement('button');
//     check.className.add('check-btn');
//     newDiv.appendChild(check);


function clear(){
    document.querySelector('.todo-input').value = "";
    
}






//Event Listeners
submitt.addEventListener('click', addToDo);

// input.addEventListener('keyup', event=>{
//     if(event.keyCode===13){
//         event.preventDefault();
//         submitt.click();

//     }
    
// })



// To Do list by using localStorage 

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos=[];
const TODOS_KEY = "todos";

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveToDos();
    li.remove();
}

function paintToDo(newTodo){
    
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(button);
    li.appendChild(span);
        
    toDoList.appendChild(li);   
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handlToDoSubmit(event){
    event.preventDefault();
    if(toDos.length<5){
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newToDoObj={
            text: newTodo,
            id: Date.now()
        }
        toDos.push(newToDoObj);
        paintToDo(newToDoObj);
        saveToDos();
    }else{
        alert("You exceed the maximum number of to-dos.")
    }
    
}

toDoForm.addEventListener("submit", handlToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedTodos = JSON.parse(savedToDos)
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo); 
}
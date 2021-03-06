const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY ="todos"

const toDos=[];

function saveToDos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); 
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText ="X";
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos) {
  const parsedToDos= JSON.parse(saveToDos);
}
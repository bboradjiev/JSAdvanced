//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-items");
const todoItems = document.querySelector('.todo')
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck, );

//functions

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const trashButton = document.createElement("button");
  trashButton.innerHTML =
    '<div class="action-icon remove"><i class="far fa-trash-alt"></i></div>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  const completedButton = document.createElement("button");
  completedButton.innerHTML =
    '<div class="action-icon complete"><i class="far fa-check-square"></i></div>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const updateButton = document.createElement("button");
  updateButton.innerHTML =
    '<div class="action-icon edit"><i class="fas fa-pencil-alt"></i></div>';
  updateButton.classList.add("update-btn");
  todoDiv.appendChild(updateButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentNode ;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn" ){
    const todo = item.parentNode ;
    todo.classList.toggle('completed');
  }
}

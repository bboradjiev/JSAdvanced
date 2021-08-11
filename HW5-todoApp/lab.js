// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define variables and functions
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const displayTodoItemsCount = function() {
	let count = todos.length || 0;
	nodes.totalItemsCount.innerHTML = count;
}
const renderTodos = function(todo) {
	// clean current todos:
	nodes.todoListUL.innerHTML = '';

	// add todo item at the end
	todo.forEach( (todo) => {
		nodes.todoListUL.innerHTML += `
		<li data-id=${todo .id}>
			<span class="todoID">${todo.id}.</span>
			<span class="${todo.completed?'completed':''}">${todo.title}</span>
			<div class="todo-remove-btn"><i class="far fa-trash-alt"></i></div>
		</li>
		`;
	})

	displayTodoItemsCount();
}
const addTodo = function() {
	// get the input text:
	const todoText = nodes.addTodoInput.value;

	// make the ID - this should be done by the server:
	const id = todos.length ? todos[todos.length-1].id + 1 : 1;

	const newTodo = {
		"id": id,
		"title": todoText,
		"completed": false
	};

	// add new todo object to the end of todos array:
	todos = [...todos, newTodo];

	// render todos:
	renderTodos();

	// clear input text
	nodes.addTodoInput.value = '';

	// focus on input for new todo:
	nodes.addTodoInput.focus();
}
const removeTodo = function(e) {
	if(e.target.classList.contains('fa-trash-alt')){
		// get id of todo to be removed:
		let todoID= Number(e.target.parentNode.parentNode.dataset.id);

		// get the index of todo to be removed from todos array:
		let idx = todos.findIndex(todo => todo.id === todoID);

		// remove from todos array the element with index idx:
		idx>=0 && todos.splice(idx,1);

		// render todos:
		renderTodos();
	}
}

const getTodos = function() {
 const todos =  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(renderTodos)
  
  return todos

	// let todoStr = `
	// 	[
	// 		{
	// 			"id":1,
	// 			"title": "Todo1",
	// 			"completed":false
	// 		},
	// 		{
	// 			"id":2,
	// 			"title": "Todo2",
	// 			"completed":true
	// 		}
	// 	]
	// `;

	// return JSON.parse(todoStr);
}

// "cache" the DOM elements used in script:
const nodes = {
	'todoListUL': document.querySelector('ul.todo-items'),
	'addTodoInput': document.querySelector('.todo-add>input'),
	'addTodoBtn': document.querySelector('.todo-add-btn'),
	'totalItemsCount': document.querySelector('.todos-total>.output')
}

// create array of todo objects from string
let todos = getTodos();
// console.log(todos);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('DOMContentLoaded', renderTodos);

// add Todo Item (on button click):
nodes.addTodoBtn.addEventListener('click', addTodo);

// remove Todo Item:
nodes.todoListUL.addEventListener('click', removeTodo)
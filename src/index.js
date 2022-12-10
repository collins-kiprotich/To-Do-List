// import _, { forEach } from 'lodash';
import './style.css';

import {
  saveTodo, clearInputField, renderTodos, clearCompleted,
} from './functions.js';

renderTodos();
document.querySelector('#add-div').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // code for enter
    saveTodo();
    clearInputField();
    renderTodos();
  }
});

document.getElementById('clear-div').addEventListener('click', () => {
  clearCompleted();
});

// add an event listener to clicks on the to do list

// todoListElement.addEventListener('click', (event) => {
//   const target = event.target;
//   const parentElement = target.parentNode.parentNode;
//   if (parentElement.className !== 'flex-container') { return; }
//   // const todo = parentElement;
//   // const todoId = Number(todo.id);

//   // data action
//   // const action = target.dataset.action;
//   // action === 'check' && checkTodo(todoId);

//   // action === 'delete' && deleteTodo(todoId);
//   // action === 'edit' && editTodo(todoId);
// });

// document.getElementsById('clear-div').addEventListener(('click', (event) =>{
//   const parentElement = event.target.parentNode.parentNode;
//   console.log(parentElement);
//   deleteTodo(todoId);
// }))

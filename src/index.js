/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */

import _, { forEach } from 'lodash';
import './style.css';

import {
  saveTodo, clearInputField, renderTodos, clearCompleted, editTodo, deleteTodo,
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

document.getElementById('clear-div').addEventListener('click', (e) => {
  clearCompleted();
});

// add an event listener to clicks on the to do list
/* eslint-disable no-undef */
todoListElement.addEventListener('click', (event) => {
  const target = event.target;
  const parentElement = target.parentNode.parentNode;
  if (parentElement.className !== 'flex-container') { return; }
  const todo = parentElement;
  const todoId = Number(todo.id);

  // data action
  const action = target.dataset.action;
  // action === 'check' && checkTodo(todoId);

  // action === 'delete' && deleteTodo(todoId);
  // action === 'edit' && editTodo(todoId);
});
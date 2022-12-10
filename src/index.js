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
clearCompleted()
})
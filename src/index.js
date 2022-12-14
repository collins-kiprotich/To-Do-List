// import _, { forEach } from 'lodash';
import './style.css';

import {
  saveTodo, renderTodos, clearCompleted,
} from './functions.js';

window.onload = renderTodos();
document.querySelector('#add-div').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // code for enter
    saveTodo();
    renderTodos();
  }
});

document.getElementById('clear-div').addEventListener('click', () => {
  clearCompleted();
});

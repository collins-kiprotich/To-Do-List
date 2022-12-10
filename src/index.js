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

const checkbox = document.querySelector("input[name=checkbox]");

document.addEventListener('change', function() {
  if (this.checked) {
    alert("hello")
  } else {
    console.log("Checkbox is not checked..");
   
   console.log(checkbox.parentElement);
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  e.target.nextSibling.classList.toggle("visible");
  console.log("e.target.nextSibling")
})
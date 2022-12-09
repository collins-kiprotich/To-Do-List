/* eslint-disable no-unused-vars */
import _, { forEach } from 'lodash';
import './style.css';

import {saveTodo} from './functions'
import {clearInputField} from './functions'
import {renderTodos} from './functions'
import {clearCompleted} from './functions'

document.querySelector('#add-div').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // code for enter
    saveTodo();
    clearInputField();
    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
});

document.getElementById('clear-div').addEventListener('click',(e) =>{
  alert('clear completed tasks')
  clearCompleted()
}) 



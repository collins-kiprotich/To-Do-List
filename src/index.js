/* eslint-disable no-unused-vars */
import _, { forEach } from 'lodash';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const locay = document.getElementById('todo');
  const div = document.createElement('div');
  div.classList.add('check-list');
  const todoItems = [
    { description: 'Prepare breakfast', completed: false, index: 0 },
    { description: 'Do laundry', completed: false, index: 1 },
    { description: 'Go out for picnic', completed: false, index: 2 },
    { description: 'Prepare supper', completed: false, index: 3 },
  ];
  const itemArray = [];
  for (let i = 0; i < todoItems.length; i += 1) {
    const listContent = `<div class="flex-container">
    <div class="left">
    <input type="checkbox">
    <div>${todoItems[i].description}</div>
    </div>
    <div class="dots"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg></div>
</div>`;
    itemArray.push(listContent);
  }
  div.innerHTML = `${itemArray.join('')}`;
  locay.appendChild(div);
});
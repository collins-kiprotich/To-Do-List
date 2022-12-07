/* eslint-disable no-unused-vars */
import _, { forEach } from 'lodash';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const locay = document.getElementById('todo');
  const ul = document.createElement('ul');
  const todoItems = [
    { description: 'Prepare breakfast', completed: false, index: 0 },
    { description: 'Do laundry', completed: false, index: 1 },
    { description: 'Go out for picnic', completed: false, index: 2 },
    { description: 'Prepare supper', completed: false, index: 3 },
  ];
  const itemArray = [];
  for (let i = 0; i < todoItems.length; i += 1) {
    const listContent = `<li>${todoItems[i].description}</li>`;
    itemArray.push(listContent);
  }
  ul.innerHTML = `${itemArray}`;
  locay.appendChild(ul);
});
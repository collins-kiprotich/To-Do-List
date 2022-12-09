// select variables
const todoListElement = document.getElementById('todo');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const todoInput = document.querySelector('input');
let EditTodoId = -1;
// first render

// save Todo function to the local storage of a user machine
/* eslint-disable consistent-return */
export function saveTodo() {
  const todoValue = todoInput.value;
  const isEmpty = todoValue === '';
  // check duplicate input
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());
  // check if userenters an  empty input and clicks
  /* eslint-disable no-else-return */
  /* eslint-disable brace-style */
  
  if (isEmpty) {
    return null;
  } else if (isDuplicate) {
    return null;
  }
  else {
    if (EditTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,

        value: index === EditTodoId ? todoValue : todo.value,
      }));
      EditTodoId = -1;
    }
    else {
      todos.push({
        value: todoValue,
        completed: false,
        index: todos.length + 1,
      });
    }
    todoInput.value = '';
  }
}
// clear fields
export function clearInputField() {
  document.querySelector('input').value = '';
}
// render to user interphase
export function renderTodos() {
  // clear todoListElement before re-render
  if (todos.length === 0) {
    todoListElement.innerHTML = '<center>List is empty</center>';
    return;
  }
  todoListElement.innerHTML = '';
  todos.forEach((todo, index) => {
    todoListElement.innerHTML += `<div class='check-list'><div class="flex-container" id='${index}'>
    <div class="left">
    <input data-action="check" class="checkbox" type="checkbox">
    <div data-action = 'edit' >${todo.value}</div>
    </div>
    <div data-action="edit" class="dots"><svg xmlns="http://www.w3.org/2000/svg" data-action='edit' width="16" height="16" fill="currentColor" class="bi bi-pencil-square editsvg" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg" data-action='delete'  width="16" height="16" fill="currentColor" class="bi bi-trash3 deletesvg" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg><svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical dotssvg" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg></div>
</div></div>`;
  });
}

// to edit todo
export function editTodo(todoId) {
  const todoInput = document.getElementById('add-input');
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
}
// delete todo
export function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  // re-render
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}
// add an event listener to clicks on the to do list
/* eslint-disable prefer-destructuring */
todoListElement.addEventListener('click', (event) => {
  const target = event.target;
  const parentElement = target.parentNode.parentNode;
  if (parentElement.className !== 'flex-container') return;
  const todo = parentElement;
  const todoId = Number(todo.id);

  // data action
  /* eslint-disable prefer-destructuring */
  const action = target.dataset.action;
  // action === 'check' && checkTodo(todoId);
  /* eslint-disable no-unused-expressions */

  action === 'delete' && deleteTodo(todoId);
  action === 'edit' && editTodo(todoId);
});

export function clearCompleted() {
  const checked = document.querySelectorAll('.checkbox:checked');
  checked.forEach((item) => {
    const parentElement = item.parentNode.parentNode;
    const todoId = Number(parentElement.id);
    todos = todos.filter((todo, index) => index !== todoId);

    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  });
}
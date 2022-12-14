// select variables
const todoListElement = document.getElementById('todo');
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const todoInput = document.querySelector('input');
let EditTodoId = -1;

// save Todo function to the local storage of a user machine

export function saveTodo() {
  const todoValue = todoInput.value;
  const isEmpty = todoValue === '';
  // check duplicate input
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());
  // check if userenters an  empty input and clicks
  if (isEmpty) {
    alert('input is empty');
  } else if (isDuplicate) {
    alert('already exists');
  } else {
    if (EditTodoId >= 0) {
      todos = todos.map((todo, index) => ({
        ...todo,

        value: index === EditTodoId ? todoValue : todo.value,
      }));
      EditTodoId = -1;
    } else {
      todos.push({
        value: todoValue,
        completed: false,
        index: todos.length + 1,
      });
    }
    todoInput.value = '';
  }
  localStorage.setItem('todos', JSON.stringify(todos));
}
// render to user interphase
export function renderTodos() {
  if (todos.length === 0) {
    todoListElement.innerHTML = '<center>List is empty</center>';
    return;
  }
  // clear todoListElement before re-render
  todoListElement.innerHTML = '';
  todos.forEach((todo, index) => {
    todoListElement.innerHTML += `<div class='check-list'><div class="flex-container" id='${index}'>
    <div class="left">
    <i class="bi ${todo.completed ? 'bi-check-square' : 'bi-square'}" data-action="check"></i>
    <div data-action = 'edit' >${todo.value}</div>
    </div>
    <div data-action="edit" class="dots">
    <i class="bi bi-trash deletesvg" data-action='delete'></i>
    <i class="bi bi-pencil-square editsvg" data-action='edit'></i>
  </div>
</div></div>`;
  });
}

// to edit todo
function editTodo(todoId) {
  alert('edit');
  const todoInput = document.getElementById('add-input');
  todoInput.value = todos[todoId].value;
  EditTodoId = todoId;
}
// delete todo
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  todos = todos.map((todo, index) => ({
    value: todo.value,
    completed: todo.completed,
    index: index + 1,
  }

  ));
  // re-render;
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Check a to do

function checkTodo(todoId) {
  todos = todos.map((todo, index) => {
    if (index === todoId) {
      return {
        value: todo.value,
        completed: !todo.completed,
        index: todo.index,
      };
    }
    return {
      value: todo.value,
      completed: todo.completed,
      index: todo.index,
    };
  });
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

// add an event listener to clicks on the to do list
todoListElement.addEventListener('click', (event) => {
  const { target } = event;
  const parentElement = target.parentNode.parentNode;
  if (parentElement.className !== 'flex-container') return;
  const todo = parentElement;
  const todoId = Number(todo.id);

  // data action
  const { action } = target.dataset;

  // instruction to check a todo
  (action === 'check' && checkTodo(todoId))(action === 'delete' && deleteTodo(todoId))(action === 'edit' && editTodo(todoId));
});

export function clearCompleted() {
  const checked = document.querySelectorAll('.bi-check-square');
  const todoIds = [];
  checked.forEach((item) => {
    const parentElement = item.parentNode.parentNode;
    const todoId = Number(parentElement.id);
    todoIds.push(todoId);

    for (let i = 0; i < todoIds.length; i += 1) {
      todos = todos.filter((todo, index) => index !== todoIds[i]);
    }
    todos = todos.map((todo, index) => ({
      value: todo.value,
      completed: todo.completed,
      index: index + 1,
    }));
  });

  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
}

//select variables
const todoListElement =  document.getElementById('todo');
let todos = JSON.parse( localStorage.getItem('todos') )||[];
let editTodoId = -1;
//first render

renderTodos();

document.querySelector('#add-div').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // code for enter
    saveTodo();
    clearInputField();
    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
});

//save Todo function
 export function saveTodo() {
  const todoValue  = document.querySelector('input').value;
  const isEmpty = todoValue === '';
  //check duplicate input
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase()=== todoValue.toUpperCase()) 
  //check emptyinput
  if(isEmpty){
    alert('add new item');
  } else if(isDuplicate){
    alert('item already exists');
  }
  // else if(editTodoId => 0) {
  //   const newArrr = todos.map((todo,index) => ({
  //     ...todo,
  //     value: index === editTodoId ? todoValue: todo.value,
  //   }))
  //   todos = newArrr;
  //   editTodoId = -1;
  // }
  else{
    todos.push( {
      value: todoValue,
      completed:false,
      index:todos.length ,
    });
  }
 }
// clear fields
 export function clearInputField() {
  document.querySelector('input').value = '';
 }
 // render to user interphase
 export function renderTodos() {
  // clear todoListElement before re-render
  if(todos.length === 0){
    todoListElement.innerHTML = '<center>Nothing to Do</center>'
    return;
  }
  todoListElement.innerHTML = '';
  todos.forEach((todo,index) => {
    todoListElement.innerHTML +=`<div class='check-list'><div class="flex-container" id='${index}'>
    <div class="left">
    <input data-action="check" class="checkbox" type="checkbox">
    <div data-action = 'edit' >${todo.value}</div>
    </div>
    <div data-action="edit" class="dots"><svg xmlns="http://www.w3.org/2000/svg" data-action='delete' width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg></div>
</div></div>`
  })
 }
 
 // add an event listener to clicks on the to do list

  todoListElement.addEventListener('click', (event) => {
   const target = event.target;
   const parentElement = target.parentNode.parentNode;
   if(parentElement.className !== 'flex-container') return;
   const todo = parentElement;
   const todoId = Number(todo.id)

    // data action
  const action = target.dataset.action;
    // action === 'check' && checkTodo(todoId);

    action === 'delete' && deleteTodo(todoId);
    action === 'edit' && editTodo(todoId);
   
  })

// to edit todo
function editTodo(todoId){
  const todoInput = document.getElementById('add-input')
  todoInput.value = todos[todoId].value;
}

//delete todo
 function deleteTodo(todoId){
  todos = todos.filter((todo,index) => index === !todoId)

  //re-render
  renderTodos()
  localStorage.setItem('todos', JSON.stringify(todos));
 }

 document.getElementById('clear-div').addEventListener('click',remove())
 
function remove() {
  const checkboxes = document.querySelectorAll('.checkbox:checked');
  Array.prototype.forEach.call(checkboxes, function(checkbox) {
   checkbox.closest('label').remove();
  });

}



export function clearCompleted() {
  var checked =document.querySelectorAll('.checkbox:checked')
  console.log(checked);
  checked.forEach((item) =>{
    const parentElement = item.parentNode.parentNode.remove();

  })
}
  //to check
// function checkTodo(todoId) {
//   todos = todos.map((todo,index) => {

//   })
// }
//     if(index === todoId) {
//       return {
//         value: todo.value,
//         completed: todo.value,
//         check: !todo.value,
//       }
//     }
//       else{
//         return{
//         value: todo.value,
//         completed: todo.value,
//         checked: todo.value,
//         }
      
//     }
//   })



 


// function funcall() {
//     const locay = document.getElementById('todo');
//     document.createElement('ul') = ul;
//     const todoItems = [
//         {description: "prepare breakfast",completed: false, index: 0},
//         {description: "Do laundry",completed: false, index: 1},
//         {description: "prepare breakfast",completed: false, index: 2},
//       ]
      
//       for (let i=0; i < todoItems.length; i++){
//         ul.innerHTML=`<li>${todoItems[i].description}</li>`;
//       }
// locay.appendChild(ul);


// document.addEventListener('DOMContentLoaded', () => {
//     const locay = document.getElementById('todo');
//     const ul = document.createElement('ul') 
//     const todoItems = [
//         {description: "prepare breakfast",completed: false, index: 0},
//         {description: "Do laundry",completed: false, index: 1},
//         {description: "Go out for picnic",completed: false, index: 2},
//       ]
//       const itemArray = [];
//       for (let i=0; i < todoItems.length; i++){
//        const listContent = `<li>${todoItems[i].description}</li>`
//        itemArray.push(listContent);
//       }
//       ul.innerHTML=`${itemArray}`;
// locay.appendChild(ul);  
// })
//  addBookToList(book) {
//     const list = document.querySelector('#book-list');
//     const div = document.createElement('div');
//     div.classList.add('listing');
//     div.innerHTML = `
//         <div>"${book.title}" By </div><div class="author-div">${book.author}</div>
//         <button class='delete' id='delete'>Remove</button> 
//         `;
//     list.appendChild(div);
//   }
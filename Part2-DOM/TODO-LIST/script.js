const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');


todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (todoInput.value.trim()==="") { alert("Nothing to add!") }
  else {
    const newTodoText = todoInput.value;
    const newLi = document.createElement('li');
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
  <div class="todo-buttons">
  <button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button>
  </div>`;
    newLi.innerHTML = newLiInnerHTML;
    todoList.append(newLi);
    todoInput.value = "";
  }
})

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
  else if (e.target.classList.contains("remove")) {
    const removing = e.target.parentNode.parentNode;
    removing.remove();
  }
})
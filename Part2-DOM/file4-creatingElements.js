//long Method

// const newItem = document.createElement('li');
// const newItemText = document.createTextNode('todo item 2');
// newItem.appendChild(newItemText);
// const todoList = document.querySelector('.section-todo ul');
// todoList.append(newItem);
// todoList.prepend(newItem);
// console.log(todoList.childNodes[3].innerText);

//Short Method

const newItem = document.createElement('li');
const todoList = document.querySelector('.todo-list');
newItem.textContent = "New Item";
todoList.append(newItem);

//remove

const list = document.querySelectorAll('.todo-list li');
list[1].remove()
console.log(list);
list[0].remove()
console.log(list);
// append === appendChild
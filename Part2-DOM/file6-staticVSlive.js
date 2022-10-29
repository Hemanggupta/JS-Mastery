// query selector gives static list
//node lists are static


// const listItems = document.querySelectorAll('.todo-list li');
// const sixThLi = document.createElement('li');
// sixThLi.textContent = 'item 6';
// const ul = document.querySelector('.todo-list');
// ul.append(sixThLi);
// console.log(listItems);

//using getElementBySomething gives live list

const ul = document.querySelector('.todo-list');
const listItems = ul.getElementsByTagName('li');
console.log(listItems);
const sixThLi = document.createElement('li');
sixThLi.textContent = 'item 6';
ul.append(sixThLi);
console.log(listItems);
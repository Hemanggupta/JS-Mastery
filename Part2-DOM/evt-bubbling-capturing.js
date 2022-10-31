// Event bubbling / aka Event propagation

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

child.addEventListener('click', () => {
  console.log('Child');
});
parent.addEventListener('click', () => {
  console.log('Parent');
});
grandparent.addEventListener('click', () => {
  console.log('Grandparent');
});


//event Capturing

child.addEventListener('click', () => {
  console.log('Child Captured....');
}, true);
parent.addEventListener('click', () => {
  console.log('Parent Captured....');
}, true);
grandparent.addEventListener('click', () => {
  console.log('Grandparent Captured....');
}, true);


// first Capturing then Bubbling
const rootNode = document.getRootNode();
console.log(rootNode);

const htmlNode = rootNode.childNodes[1];
console.log(htmlNode);

console.log(htmlNode.childNodes[2].children[0].innerHTML);

//classList

const btn = document.querySelector('.header .headline button');
console.log(btn.classList);

//add
btn.classList.add('special-btn');

//toggle
btn.classList.toggle('special-btn');
btn.classList.toggle('special-btn');
btn.classList.toggle('special-btn');
btn.classList.toggle('special-btn');
btn.classList.toggle('special-btn');
btn.classList.toggle('special-btn');

//remove
btn.classList.remove('special-btn');
console.log(btn);
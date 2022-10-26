// console.log("Hello");
// console.dir(document);
// console.log(document);

const mainHeading = document.getElementById('main-heading');
console.log("getElementById", mainHeading);

const mainHeading2 = document.querySelector('#main-heading');
console.log("querySelector use  #/. ", mainHeading2);
const navItem = document.querySelector('.nav-item');
console.log("Multiple elements with same class  ", navItem)

const navItem2 = document.querySelectorAll('.nav-item');
console.log("Multiple elements with same class  ", navItem2)

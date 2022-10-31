const body = document.body;
const btn = document.querySelector('.btn-headline');

body.addEventListener('keypress', (e) => console.log(e.key));

btn.addEventListener('mouseover', () => {
  console.log("Mouse in")
})
btn.addEventListener('mouseleave', () => {
  console.log("Mouse out")
})
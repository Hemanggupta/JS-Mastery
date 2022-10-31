const mainBtn = document.querySelector('button');
const body = document.body;

function randomColorgenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`
  return randomColor;
}

mainBtn.addEventListener('click', () => {
  const randomColor = randomColorgenerator();
  const span = document.querySelector('span')
  span.textContent = randomColor
  body.style.backgroundColor = randomColor;
})
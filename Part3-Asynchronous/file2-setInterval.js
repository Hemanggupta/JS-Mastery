// console.log("script Start");

// setInterval(() => console.log(Math.floor(Math.random() * 11)), 500);

// console.log("script End");

const body = document.body;
const btn = document.querySelector("button");

const intervalID = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.background = rgb;
}, 1000);

btn.addEventListener("click", () => {
  clearInterval(intervalID);
  btn.textContent = body.style.background;
});

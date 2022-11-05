// console.log("Hello")
const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");

setTimeout(() => {
  head1.textContent = "Heading 1";
  head1.style.color = "red";
}, 1000);
setTimeout(() => {
  head2.textContent = "Heading 2";
  head2.style.color = "green";
}, 2000);
setTimeout(() => {
  head3.textContent = "Heading 3";
  head3.style.color = "blue";
}, 3000);
setTimeout(() => {
  head4.textContent = "Heading 4";
  head4.style.color = "violet";
}, 4000);
setTimeout(() => {
  head5.textContent = "Heading 5";
  head5.style.color = "grey";
}, 5000);
setTimeout(() => {
  head6.textContent = "Heading 6";
  head6.style.color = "pink";
}, 1000);
setTimeout(() => {
  head7.textContent = "Heading 7";
  head7.style.color = "cyan";
}, 7000);

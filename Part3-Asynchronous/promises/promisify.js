const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const heada5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");

function changeText(element, text, color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Element Missing!");
      }
    }, delay);
  });
}

// changeText(head1, "One", "red", 1000)
//   .then(() => {
//     return changeText(head2, "Two", "green", 1000);
//   })
//   .then(() => {
//     return changeText(head3, "Three", "blue", 1000);
//   })
//   .then(() => {
//     return changeText(head4, "four", "grey", 1000);
//   })
//   .then(() => {
//     return changeText(head5, "five", "orange", 1000);
//   })
//   .then(() => {
//     return changeText(head6, "six", "purple", 1000);
//   })
//   .then(() => {
//     return changeText(head7, "seven", "cyan", 1000);
//   });

changeText(head1, "One", "red", 1000)
  .then(() => changeText(head2, "Two", "green", 1000))
  .then(() => changeText(head3, "Three", "blue", 1000))
  .then(() => changeText(head4, "four", "grey", 1000))
  .then(() => changeText(head5, "five", "orange", 1000))
  .then((val) => changeText(head6, "six", "purple", 1000))
  .then((val) => {
    console.log(val);
    changeText(head7, "seven", "cyan", 500);
  })
  .catch((error) => alert(error));
//val is undefined coz resolve() is not returning anything

// if we add catch() in between then() , then Promise wont reject for later mentioned then()s.

// console.log("CALLBACK HELL")

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
  setTimeout(() => {
    head2.textContent = "Heading 2";
    head2.style.color = "green";
    setTimeout(() => {
      head3.textContent = "Heading 3";
      head3.style.color = "blue";
      setTimeout(() => {
        head4.textContent = "Heading 4";
        head4.style.color = "violet";
        setTimeout(() => {
          head5.textContent = "Heading 5";
          head5.style.color = "grey";
          setTimeout(() => {
            head6.textContent = "Heading 6";
            head6.style.color = "pink";
            setTimeout(() => {
              head7.textContent = "Heading 7";
              head7.style.color = "cyan";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 2000);

// delay parent to child
// 1 after completion of another

console.log("Callback HELL using function");
console.log("PYRAMID OF DOOOOM");

const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");

function changeText(element, text, color, delay, onPass, onFail) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onPass) {
        onPass();
      }
    } else {
      onFail();
    }
  }, delay);
}

changeText(
  head1,
  "ONE",
  "red",
  1000,
  () => {
    changeText(
      head2,
      "TWO",
      "green",
      1000,
      () => {
        changeText(
          head3,
          "THREE",
          "blue",
          1000,
          () => {
            changeText(
              head4,
              "FOUR",
              "grey",
              1000,
              () => {
                changeText(
                  head5,
                  "FIVE",
                  "orange",
                  1000,
                  () => {
                    changeText(
                      head6,
                      "SIX",
                      "cyan",
                      1000,
                      () => {
                        changeText(
                          head7,
                          "SEVEN",
                          "purple",
                          1000,
                          () => {},
                          () => {
                            console.log("Element doesnt exist!");
                          }
                        );
                      },
                      () => {
                        console.log("Element doesnt exist!");
                      }
                    );
                  },
                  () => {
                    console.log("Element doesnt exist!");
                  }
                );
              },
              () => {
                console.log("Element doesnt exist!");
              }
            );
          },
          () => {
            console.log("Element doesnt exist!");
          }
        );
      },
      () => {
        console.log("Element doesnt exist!");
      }
    );
  },
  () => {
    console.log("Element doesnt exist!");
  }
);

// function func1(callback) {
//     console.log("Function 1");
//     callback();
// }

// function func2() {
//     console.log("Function 2");
// }

// func1(func2);

// example 2

// function func1(callback) {
//     console.log("Function 1");
//     callback();
// }

// func1(() => console.log("Function 2"));

// example 3

// function func1(a, b, callback) {
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(`a = ${a}  and b = ${b}`);
//     callback(a, b);
//   } else {
//     console.log("error");
//   }
// }

// func1(12, 13, (num1, num2) => {
//   console.log(num1 + num2);
// });

function func1(a, b, onSuccess, onFail) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(`a = ${a}  and b = ${b}`);
    onSuccess(a, b);
  } else {
    onFail();
  }
}

func1(
  12,
  13,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => console.log("Wrond datatype")
);

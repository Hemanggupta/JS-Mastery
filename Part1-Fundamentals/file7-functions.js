function sing() {
  console.log("Happy birthday.");
}

sing();
console.log("");

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(-13, 7);

const sum = function (a, b) {  //function expression
  console.log(a + b);
}

sum(-13, -7);

console.log("");

function isEven(v1) {
  return v1 % 2 === 0;
}
console.log(isEven(0));
console.log("");

function fChar(str) {
  return str[0];
}

console.log(fChar("Hemang"));
console.log("");

function find(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "Not Found";
}
console.log(find([1, 2, 3, 4, 5, 6, 7, 8], 4));

//arrow function

console.log("");
const isOdd = (num) => {
  return num % 2 === 1;
}

console.log(isOdd(5));


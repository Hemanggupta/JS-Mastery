//Default parameter

const add = (a, b = 2) => {
  return a + b;
};
console.log(add(6, 6));
console.log(add(6));

//old technique

const add2 = (a, b) => {
  if (typeof b === "undefined") {
    b = 2;
  }
  return a + b;
};
console.log(add2(7, 6));
console.log(add2(7));
console.log("");

//rest parameters

const sum = (...a) => {
  let b = 0; //have to specify type i.e. numbers
  for (let aa of a) {
    b += aa;
  }
  console.log(b);
}
sum(2, 4, 5, 2);

//parameter destructuring

console.log("");

const person = {
  name: "Hemang",
  age: 22,
  hobbies: ["Gaming", "Gym", "Coding", "Teaching"]
};

// function details({ name, age, hobbies }){
//   console.log(name, age, hobbies);
// }
const details = ({ name:fName, age, hobbies }) => {
  console.log(fName, age, hobbies);
}

details(person); //pass object as argument


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = num => {
  return num * num;
}

// forEach practice (Arrow func doesnt need Name)
// numbers.forEach(num => {
//   console.log(num*num);
// })

const sqr = numbers.map(square);
console.log(sqr);

console.log("Using arrow function below:");

const squared = numbers.map((num, idx) => {
  console.log("Index - Squared value:");
  return `${idx} - ${num * num}`;
});

console.log(squared);

console.log("Real life uses:");

const users = [
  { userId: 1, fName: "Hemang", gender: "male", age: 22 },
  { userId: 2, fName: "Mohit", gender: "male", age: 21 },
  { userId: 3, fName: "JD", gender: "female", age: 20 }
];

const fNameArray = users.map(({ fName: name, age }) => {
  return `${name} - ${age}`;
})
console.log(fNameArray);
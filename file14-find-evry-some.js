console.log("find()-------------");

const array = ["Hem", "Hello", "hey", "Hell", "dogs", "cats"];

const str = array.find((str => {
  return str.length === 4;
}))
console.log(str);
//returns the first element it finds

const userCart = [
  { id: 1, name: "Mobile", price: 21000 },
  { id: 2, name: "Tv", price: 129000 },
  { id: 3, name: "Machine", price: 51000 },
  { id: 4, name: "Drier", price: 2000 }
]

const myUser = userCart.find((user) => user.id === 2);
console.log(myUser);

//better use for unique properties.

console.log("every()-------------");

const numbers = [2, 4, 6, 8, 10, 11];
console.log(numbers.every(num => num % 2 === 0));

// const userCart = [
//   { id: 1, name: "Mobile", price: 21000 },
//   { id: 2, name: "Tv", price: 129000 },
//   { id: 3, name: "Machine", price: 51000 },
//   { id: 4, name: "Drier", price: 2000 }
// ]

console.log(userCart.every(user => user.price < 1000000));


console.log("some()-------------");
console.log(userCart.some(user => user.price < 10000));
//filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 921, 324, 23, 434, 45];

console.log(numbers);

const odd = numbers.filter(num => {
  return num % 2 !== 0;
})
console.log(odd);

// passes only true values
// i.e. filters true values only

//reduce()

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const out = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100)

console.log(out);

const userCart = [
  { id: 1, name: "Mobile", price: 21000 },
  { id: 2, name: "Tv", price: 29000 },
  { id: 3, name: "Machine", price: 51000 },
  { id: 4, name: "Drier", price: 2000 }
]
console.log(userCart);

const total = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
},0)
console.log(total);
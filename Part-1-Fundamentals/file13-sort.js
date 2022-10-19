//sort()
const num = [34, 45, 242, 567, 342, 234, 777, 123, 435];

num.sort((a, b) => {
  return a - b;
});
console.log(num);


//arrow function
console.log(num.sort((a, b) => b - a));


//sort in objects / reallife application

const userCart = [
  { id: 1, name: "Mobile", price: 21000 },
  { id: 2, name: "Tv", price: 129000 },
  { id: 3, name: "Machine", price: 51000 },
  { id: 4, name: "Drier", price: 2000 }
]

//oneline sorted
// console.log(userCart.sort((a,b)=>a.price-b.price))


//proper sort after cloning original array
const lowToHigh= userCart.slice(0).sort((a, b) => {
  return a.price - b.price;
});
const highToLow= userCart.slice(0).sort((a, b) => {
  return b.price - a.price;
});
console.log("________________________________________________");
console.log(userCart)
console.log(lowToHigh)
console.log(highToLow)
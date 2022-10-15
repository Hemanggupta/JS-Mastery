const numbers= [1,2,3,4,5,6,7,8,921,324,23,434,45];

const odd= numbers.filter(num => {
  return num%2!==0;
})
console.log(odd);

// passes only true values
// i.e. filters true values only
//important array methods

// forEach
// Map
// filter
// reduce

console.log("-------------------------");

const users = [
  { userId: 1, fName: "Hemang", gender: "male", age: 22 },
  { userId: 2, fName: "Mohit", gender: "male", age: 21 },
  { userId: 3, fName: "JD", gender: "male", age: 20 }
];


//real life use i.e. Objects
users.forEach(function(users){
  console.log(`Name : ${users.fName} and Age: ${users.age}`)
})

console.log("______________________");

// object destructuring
users.forEach(function ({ fName:name ,age}) {
  console.log(`Name : ${name} and Age: ${age}`)
})

console.log("______________________");

//using arrow func
users.forEach(({ fName: name, age }) =>{
  console.log(`Name : ${name} and Age: ${age}`)
})

console.log("______________________");

//single parameter doesnt need paranthesis
users.forEach(users =>{
  console.log(`Name : ${users.fName}`)
})

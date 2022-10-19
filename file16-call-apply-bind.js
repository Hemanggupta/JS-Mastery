console.log("call()\n\n");

const person1 = {
  fName: "Hemang",
  age: 21,
  about: function (lName, gender) {
    console.log(`${this.fName} ${lName} is ${gender} of age ${this.age}`);
  }
}
const person2 = {
  fName: "Mohit",
  age: 20
}

person1.about("Gupta", "male");

person1.about.call();//returns undifined
//have to pass an object which'll be called

person1.about.call(person2, "Bhadwa", "male"); //.call(2nd object) with added arguments



//defining function globally
console.log("\n\ndefining function globally\n\n");

function about(lName, gender) {
  console.log(`${this.fName} ${lName} is ${gender} of age ${this.age}`);
}

const person3 = {
  fName: "Hemang",
  age: 21,
}
const person4 = {
  fName: "Mohit",
  age: 20
}

about("Gupta", "male");

about.call(person3, "Gupta", "male");//returns undifined
//have to pass an object which'll be called

about.call(person4, "Bhadwa", "male"); //.call(2nd object) with added arguments

console.log("\n\napply()\n\n");

//apply() pass arguments as array
about.apply(person4, ["Bhadwa", "male"]);


console.log("\n\bind()\n\n");

//bind() returns a function
const func = about.bind(person3, "Gupta", "male");
func();//performs "about" function with all arguments
console.log(`Methods \nFunction inside objects`);

const person = {
  fName: "Hemang",
  lName: "Gupta",
  gender: "male",
  age: 22,
  thisMethodEg: function () {
    console.log(this);
  },
  about: function () {
    //'this' is replaced with parent object
    return console.log(`\nPerson's name is ${this.fName} ${this.lName} , Gender is ${this.gender} and Age is ${this.age}.`);
  }
}

// console.log(person);

person.thisMethodEg(); //prints "person" object

person.about();

///////////////////////////////////////////////////

console.log(`\n\nJod use of "this" method\n\n`);

//arrow function not applicable
// const personInfo = () => {
//   console.log(`Person name is ${this.fName} and Age is ${this.age}`);
// }
function personInfo() {
    console.log(`Person name is ${this.fName} and Age is ${this.age}`);
}

const person1 = {
  fName: "Hemang",
  age: 21,
  about: personInfo
}
const person2 = {
  fName: "Mohit",
  age: 20,
  about: personInfo
}
const person3 = {
  fName: "Jaydeep",
  age: 19,
  about: personInfo
}

person1.about();
person2.about();
person3.about();
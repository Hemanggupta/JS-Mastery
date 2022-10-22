//new keyword
// will create a new object, return it and also assigns prototype as __proto__

// construction function
function CreateUser(fName, lName, email, age) {
  // const user = Object.create(createUser.prototype);
  this.fName = fName;//this
  this.lName = lName;
  this.email = email;
  this.age = age;
  // return this;
}

CreateUser.prototype.about = function () {
  return `${this.fName} is ${this.age} years old`;
}
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
}

const user1 = new CreateUser('Hemang', 'Gupta', 'hemang@gmail.com', 22);
const user2 = new CreateUser('Mohit', 'Gupta', 'mohit@gmail.com', 12);

console.log(user1);

console.log(user1.about());
console.log(user1.is18());

console.log(CreateUser.prototype);
class CreateUser { //class name starting with capital letter
  constructor(fName, lName, email, age) {
    console.log("constructor called");
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.age = age;
  }
  about() {
    return `${this.fName} is ${this.age} years old`;
  };
  is18() {
    return this.age >= 18;
  };
  func(a) {
    console.log(a);
  }
}


// function CreateUser(fName, lName, email, age) {
//   this.fName = fName;
//   this.lName = lName;
//   this.email = email;
//   this.age = age;
// }

// CreateUser.prototype.about = function () {
//   return `${this.fName} is ${this.age} years old`;
// }
// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// }

const user1 = new CreateUser('Hemang', 'Gupta', 'hemang@gmail.com', 22);//contructor called
const user2 = new CreateUser('Mohit', 'Gupta', 'mohit@gmail.com', 12);//contructor called

console.log(user1);
console.log(user1.about());
console.log(user1.is18());
user1.func(22);

console.log(Object.getPrototypeOf(user2));

for (let key in user1) {
  // console.log(key);//contains all key including prototype

  if (user1.hasOwnProperty(key)) {
    console.log(key);//only prints key of user1
  }
}
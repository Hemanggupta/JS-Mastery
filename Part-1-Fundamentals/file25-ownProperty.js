function CreateUser(fName, lName, email, age) {
  this.fName = fName;//this will be replaced by the new objname
  this.lName = lName;
  this.email = email;
  this.age = age;
}

CreateUser.prototype.about = function () {
  return `${this.fName} is ${this.age} years old`;
}
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
}

const user1 = new CreateUser('Hemang', 'Gupta', 'hemang@gmail.com', 22);
const user2 = new CreateUser('Mohit', 'Gupta', 'mohit@gmail.com', 12);

// console.log(user1);

// console.log(user1.about());
// console.log(user1.is18());

// console.log(CreateUser.prototype);

for (let key in user1) {
  // console.log(key);//contains all key including prototype

  if (user1.hasOwnProperty(key)) {
    console.log(key);//only prints key of user1
  }
}
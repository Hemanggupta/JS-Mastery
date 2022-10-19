// const userMethods = {
//   about: function () {
//     return `${this.fName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   }
// }

function createUser(fName, lName, email, age) {
  const user = Object.create(createUser.prototype);
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;
  return user;
}
console.log(createUser.prototype);
console.log("\n\n\n\n");

createUser.prototype.about= function () {
  return `${this.fName} is ${this.age} years old`;
}
createUser.prototype.is18= function () {
  return this.age >= 18;
}

const user1 = createUser('Hemang', 'Gupta', 'hemang@gmail.com', 22);
const user2 = createUser('Mohit', 'Gupta', 'mohit@gmail.com', 12);

console.log(user1);
console.log(user2);

console.log(user1.about());
console.log(user1.is18());

console.log(user2.about());
console.log(user2.is18());

console.log(createUser.prototype);
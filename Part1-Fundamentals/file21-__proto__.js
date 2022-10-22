const userMethods = {
  about: function () {
    return `${this.fName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  }
}

function createUser(fName, lName, email, age) {
  // const user = {};
  const user = Object.create(userMethods);//creates new obj + links to userMethods{}
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;

  //below declarations are not needed

  // user.about = userMethods.about;// not creating whole method again
  // user.is18 = userMethods.is18;//we'r using reference only
  
  return user;
}

const user1 = createUser('Hemang', 'Gupta', 'hemang@gmail.com', 22);
const user2 = createUser('Mohit', 'Gupta', 'mohit@gmail.com', 12);

console.log(user1);
console.log(user2);

console.log(user1.about());
console.log(user1.is18());

console.log(user2.about());
console.log(user2.is18());
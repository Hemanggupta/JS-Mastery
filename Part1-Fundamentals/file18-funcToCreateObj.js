const users1 = {
  fName: "Hemang",
  lName: "Gupta",
  email: "hemang2608@gmail.com",
  age: 22,
  about: function () {
    return `${this.fName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  }
}

//func (that create obj)
//add key value pair
//returns obj

function createUser(fName, lName, email, age) {
  const user = {};
  user.fName = fName;
  user.lName = lName;
  user.email = email;
  user.age = age;
  user.about = function () {
    return `${this.fName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user2 = createUser('Mohit', 'Gupta', 'hemang@gmail.com', 12);

console.log(user2);

console.log(user2.is18());
console.log(user2.about());
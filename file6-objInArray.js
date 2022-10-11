//Objects in Array
//very usefull in real world application

const users = [
  { userId: 1, fName: "Hemang", gender: "male" },
  { userId: 2, fName: "Mohit", gender: "male" },
  { userId: 3, fName: "JD", gender: "male" }
];

console.log(users);
console.log("");

for (let user of users) {
  console.log(`ID= ${user.userId} and their Name: ${user.fName}`);
}

//Destructuring
console.log("");

const [user1, user2, user3] = users; //array destructuring
console.log(user1, user2, user3);

const [{ fName: fn ,userId}, , { userId: id }] = users;
console.log(fn,userId);
console.log(id);
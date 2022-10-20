//new Keyword

function createUser(fName, age) {
  this.fName = fName;
  this.age = age;
}
createUser.prototype.about = function () {
  console.log(this.fName, this.age);
};

const user1 = new createUser("Hemang", 22);
//using new keyword will:
// 1) create empty obj this = {} i.e.
// 2) returns this(object)
// 3) links this to prototype (__proto__)

console.log(user1);

user1.about();
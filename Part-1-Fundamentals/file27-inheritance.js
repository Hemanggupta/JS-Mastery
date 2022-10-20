class CreateUser { //class name starting with capital letter
  constructor(fName, lName) {
    // console.log("constructor called");
    this.fName = fName;
    this.lName = lName;
  }
  about() {
    return `${this.fName} ${this.lName}`;
  };
}

class AdditionalInfo extends CreateUser {
  constructor(fName, lName, gender, age) {
    super(fName, lName);
    this.gender = gender;
    this.age = age;
  }
  about() {
    return `${this.fName} ${this.lName} ${this.gender} ${this.age}`;
  }
}
const user2 = new AdditionalInfo("Mohit", "Bhadwa", "male", 21);

const user1 = new CreateUser('Hemang', 'Gupta');
console.log(user1);
console.log(user1.about());
console.log(user2);//propertis of CreateUser
console.log(user2.about());
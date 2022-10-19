console.log(this);

//'this' works differently with arrow function
//arraow function take "this" from surrounding

const user1 = {
  fName: "Hemang",
  age: 8,
  about: () => {
    console.log("\n\n", this)//should be user1 for normal function
    console.log(this.fName, this.age);
  }
}

//arrow func's this cannot be changed even by using call()
user1.about();
user1.about.call(user1);
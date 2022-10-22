// if searched value isnt in obj2 then search in obj1
const obj1 = {
  key1: "Value1",
  key2: "Value2"
}

const obj2 = Object.create(obj1);// gives {}`empty obj`
//above line sets obj1 as a __proto__ for obj2

obj2.key3 = "Value3";
obj2.key4 = "Value4";
obj2.key2 = "unique";

console.log(obj1);
console.log(obj2);
console.log(obj2.key3);
console.log(obj2.key1);//returns value even though key1 is not in obj2

console.log(obj2.key2); //if searched value is in obj2 then it wont have to search in obj1

//obj1 is __proto__ or [[prototype]] of obj2
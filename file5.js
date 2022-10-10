// Objects
const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;

const obj1 = {
  [key1]: value1,
  [key2]: value2,
}

console.log(obj1)

console.log("");
//Spread op                        

const array1 = [1, 2, 3, 4];
const array2 = [4, 5, 6, 7, 8, 9];

const newArray = [...array1, ...array2, 12];
console.log(newArray);
newArray2 = [..."Heamng Gupta"]
console.log(newArray2);

//Spread op in objects
console.log("");

const obj2 = {
  key1: "value3",
  key2: "value4",
}

console.log(obj1)
console.log(obj2)

const obj3={...obj1,...obj2, key69:"Value69"};

console.log(obj3);


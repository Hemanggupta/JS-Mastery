console.log("Array desstructuring");
const array = ["v1", "v2", "v3", "v4", "v5", "v6"];

console.log("");

array2 = [];
for (let item in array) {
  array2.push(array[item].toUpperCase());
}

console.log(array2);

console.log("");

let [var1, var2, var3] = array;
console.log(var1);
console.log(var2);
console.log(var3);

console.log("");

[var1, , , var2] = array;
console.log(var1);
console.log(var2);

console.log("");

[var1, , ...var2] = array; //spread operator (...)
console.log(var1);
console.log(var2);
console.log(var3);

console.log("");

const newArray = array.splice(1, 3);
console.log(newArray);
console.log(array);
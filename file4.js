const key = "email";
const person = {
  name: "Hemang",
  age: 22,
  hobbies: ["Gaming", "Gym", "Coding", "Teaching"]
};
console.log(person);

console.log("");

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

console.log("");

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);

console.log("");

person.gender = "male";
person["gender"] = "male";

console.log(person);

person[key] = "hemang@gmail.com"
// person.key="hemang@gmail.com"
//this will print `key` not `email`
//key is variable and "key" will be key
console.log(person);

console.log("");

for(let key in person){
  console.log(key);
}

console.log("");

for(let key in person){
  console.log(person[key]);
  console.log(`${person[key]}`);//changes in array
}

console.log("");

for(let key in person){
  console.log(`${key} : ${person[key]}`);
}

console.log("");

console.log(Object.keys(person));
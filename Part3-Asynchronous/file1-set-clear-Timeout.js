console.log("Script Start");

//   function hello() {
//     console.log("Inside setTimeout");
//     console.log("Hello");
//   }

// setTimeout(functionName, Delay);
const id = setTimeout(() => {
  console.log("Inside setTimeout");
  console.log("Hello");
}, 2000);

console.log("Script End");

console.log("script2 Start");

for (let i = 0; i < 10000; i++) {
  console.log("...");
}

console.log(`SsetTimeout id is ${id}`);
console.log("script2 end");
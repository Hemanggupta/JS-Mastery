console.log("-------");

function func1() {
  console.log("inside func1 function");
}

function func2(a) {
  console.log(a);
  a();
}

func2(func1);

//function returning function
console.log("-------");

const myFunc = () => {
  console.log("Inside myFunc");
  console.log("Inside myFunc");
  return function () {
    return "Hello World";
  };
};

const ans = myFunc();
console.log(ans());
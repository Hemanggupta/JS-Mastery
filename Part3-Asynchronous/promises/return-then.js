//then returns a PROMISE

function myPromise() {
  const val = true;
  return new Promise((resolve, reject) => {
    if (val) {
      resolve("Fooo");
    } else {
      reject("Rejected");
    }
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "Booo";
    return value; //returns a promise not string
    // if we dont return any value, by defaul it returns undefined
  })
  .then((val) => console.log(val))
  .then((v) => {
    console.log(v);
    //undefined coz previous then is not returning anything
    v += " defined";
    return v;
  })
  .then((value) => console.log(value));
  //string "undefined defined" coz type conversion
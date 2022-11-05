const bucket = ["coffee", "chips", "vegetables", "salts", "rice"];

// Promise Producing:

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salts") &&
    bucket.includes("rice")
  ) {
    resolve("Fried rice");
  } else {
    reject(new Error("Somerthing missing"));
  }
});

// Promise produced.

// cosuming

// syntax:
// promise.then(callbackForResolved, callbackForReject)

friedRicePromise.then(
  (myFriedRice) => {
    console.log(`Lets eat ${myFriedRice}`);
  },
  (error) => console.log(error)
);

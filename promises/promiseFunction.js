//function returning promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve("Fried rice");
    } else {
      reject(new Error("Somerthing missing"));
    }
  });
}
ricePromise().then(
  (myFriedRice) => {
    console.log(`Lets eat ${myFriedRice}`);
  },
  (error) => console.log(error)
);

const URL = "https://jsonplaceholder.typicode.com/posts";

console.log("Script Start");

// in case of arrow func
// const getPost = async () => { }
async function getPosts() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
  const data = await response.json();
  return data;
}

getPosts()
  .then((abc) => console.log(abc))
  .catch((error) => console.log(error));

console.log("Script end");

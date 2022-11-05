// 3 ways to create/send request to server

// 1) xmlHTTPRequest (old)
// 2) fetch API (es6)
// 3) axios (3rd party library)

// 1) XHR

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1

// console.log(xhr.readyState);

// xhr.open("GET", URL);

// console.log(xhr.readyState);

// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
// };

// xhr.send();

xhr.open("GET", URL);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     // console.log(xhr.response);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }
// };

//dont have to use if readystate===4 if we use .onload

xhr.onload = function () {
  console.log(JSON.parse(xhr.response));
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};

xhr.send();

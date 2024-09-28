const fs = require("node:fs");

const https = require("node:https");

console.log("Hello World");


// Synchronous function
fs.readFileSync('./file.txt', 'utf8')
console.log('This will execute only after file read')


https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);


// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data:", data);
});

let a = 1078698;
let b = 20986;

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

let c = multiplyFn(a, b);

console.log("Multiplication result is:", c);

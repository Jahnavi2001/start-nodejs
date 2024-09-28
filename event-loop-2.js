const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise Success").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();

console.log("Last line of the file");

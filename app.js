// Modules keep their data(variables, functions, methods) private so that they don't get leaked out.
// When you give require of module then the module gets executed but the data in module doesn't get exposed.

// While requiring (require('./init.js')) if you don't give .js also it will work fine because it will automatically treat it as .js file

// import { calculateSum } from "./calculate/sum.js";

// const x = require('./init')
// 
const { calculateSum } = require('./calculate/sum')

// const { calculateMultiply } = require('./calculate/multiply')

// const { calculateSum, calculateMultiply } = require('./calculate')



let name = "Jahnavi";
console.log(name);

// z=1

let num1 = 10
let num2 = 15
calculateSum(num1, num2)

// calculateMultiply(num1, num2)


// console.log(x)

// --------- EXAMPLE: 1 -----------
// let name = "Jahnavi";
// let a = 5;
// let b = 10;
// let c = a + b;
// console.log(name);
// console.log(c);

// console.log(global)
// console.log(this)
// console.log(globalThis)
// console.log(globalThis === global)


const crypto = require('crypto')

console.log('Hello World')

let a = 1078698
let b = 20986

console.log('----------')

crypto.pbkdf2Sync("password1", 'salt', 5000000, 50, 'sha512')
console.log('First key is generated')

setTimeout(() => {
  console.log('Call me ASAP')
}, 0) // Trust issues with setTimeout

// Password Base Key Derivative Function
// Async function
crypto.pbkdf2("password1", "salt", 5000000, 50, 'sha512', (err, key) => {
  console.log('Second key is generated')
})

function multiplyFn(a, b) {
  const result = a*b
  return result
}

let c = multiplyFn(a, b)

console.log('Multiplication result is:', c)


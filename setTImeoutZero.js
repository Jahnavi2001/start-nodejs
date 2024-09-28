console.log('HelloWorld')

let a = 1078698
let b = 20986

// This callback will only be pushed to callstack in v8 once the callstack is empty.
// (It only runs after 0ms if callstack is empty)
setTimeout(() => {
  console.log('Call me ASAP')
}, 0) // Trust issues with setTimeout

setTimeout(() => {
  console.log('Call me after 3 seconds')
}, 3000)

function multiplyFn(a, b) {
  const result = a*b
  return result
}

let c = multiplyFn(a, b)

console.log('Multiplication result is:', c)
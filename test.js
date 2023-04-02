/* eslint-disable no-console */
const a = 3
let b = 4

console.log('test eslint rule')
if (a > 3) {
  b--
}

if (a > 4) b++
if (a > 4)
  b++

if (a > 5) {
  b++
  console.log(b)
}

console.log('+new Date():', +new Date())

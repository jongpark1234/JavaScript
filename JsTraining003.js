// Operator
let value = 1 // '=' == Operator

// Arithmetic Operator
// '+' , '-' , '*' , '/' , '++' , '--'

let a = 1 + 2
console.log(a) // 3

a = 2 + 4 * 2
console.log(a) // 10

a++
console.log(a) // 11
++a
console.log(a) // 12

console.log(a++) // 12

console.log(++a) // 14

a--
console.log(--a) // 12

// Assignment Operator

// '=' , '+=' , '-=' , '*=' , '/='

a = 1
a = a + 3
console.log(a) // 4

a += 3
console.log(a) // 7
a -= 5
console.log(a) // 2
a *= 5
console.log(a) // 10
a /= 2
console.log(a) // 5

// Logical Operator

// '!' , '&&' , '||'

// NOT '!'
console.log(!true) // false
console.log(!false) // true
// AND '&&'
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
// OR '||'
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
// Logical Operation Sequence
// NOT => AND => OR

// Comparison Operator
// '=='
console.log(1 == 1) // true
console.log(1 == '1') // true
console.log('1' == 1) // true
console.log('1' == '1') // true
// '==='
console.log(1 === 1) // true
console.log(1 === '1') // false
console.log('1' === 1) // false
console.log('1' === '1') // true
// '!='
console.log(1 != 1) // false
console.log(1 != '1') // false
console.log('1' != 1) // false
console.log('1' != '1') // false
// '!=='
console.log(1 !== 1) // false
console.log(1 !== '1') // true
console.log('1' !== 1) // true
console.log('1' !== '1') // false
// '<' , '>' , '<=' , '>='
console.log(3 < 5) // true
console.log(3 > 5) // false
console.log(1 >= 1) // true
console.log(3 <= 1) // false

// Attach String.
console.log('Hello' + 'JavaScript!') // HelloJavaScript!
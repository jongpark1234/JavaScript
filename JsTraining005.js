// Function

let a = 1
let b = 2
let sum = a + b
// sum = 3

function add(a, b) { // a, b : parameters
    return a + b
    console.log('This code is not called.')
}

sum = add(a, b)
// sum = 3

function greeting(name) {
    console.log('Hello, ' + name + '!')
}

greeting('JongPark') // Hello, JongPark!

function grade(score) {
    if (score === 100) {
        return 'A+'
    } else if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C' 
    } else if (score >= 60) {
        return 'D'
    } else if (score >= 50) {
        return 'E'
    } else {
        return 'F'
    }
}

console.log(grade(99)) // A

const ArrowFunction = (a, b) => {
    return a + b
}
console.log(ArrowFunction(1, 2)) // 3
console.log(typeof(ArrowFunction)) // function

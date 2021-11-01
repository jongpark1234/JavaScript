// Array built-in function.

let array = ['JavaScript', 'Java', 'C', 'Python', 'Kotlin']

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// forEach
array.forEach(languages => { // callback function
    console.log(languages)
})

// JavaScript
// Java
// C
// Python
// Kotlin

// map
array = [1, 2, 3, 4, 5, 6, 7, 8]
const square = n => n * n
array = array.map(square)
console.log(array) // [ 1, 4, 9, 16, 25, 36, 49, 64 ]

// indexOf
array = ['JavaScript', 'Java', 'C', 'Python', 'Kotlin']
let index = array.indexOf('Python')
console.log(index) // 3

// findIndex
array = [
    {
      id: 1,
      text: 'JavaScript',
      done: true
    },
    {
      id: 2,
      text: 'Java',
      done: false
    },
    {
      id: 3,
      text: 'C',
      done: true
    },
    {
      id: 4,
      text: 'Python',
      done: true
    },
    {
        id: 5,
        text: 'Kotlin',
        done: false
    }
  ];

index = array.findIndex(lan => lan.id === 3)
console.log(index) // 2

// find

array = [
    {
      id: 1,
      text: 'JavaScript',
      done: true
    },
    {
      id: 2,
      text: 'Java',
      done: false
    },
    {
      id: 3,
      text: 'C',
      done: true
    },
    {
      id: 4,
      text: 'Python',
      done: true
    },
    {
        id: 5,
        text: 'Kotlin',
        done: false
    }
  ];

object = array.find(lan => lan.id === 3)
console.log(object) // { id: 3, text: 'C', done: true }

// filter

array = [
    {
      id: 1,
      text: 'JavaScript',
      done: true
    },
    {
      id: 2,
      text: 'Java',
      done: false
    },
    {
      id: 3,
      text: 'C',
      done: true
    },
    {
      id: 4,
      text: 'Python',
      done: true
    },
    {
        id: 5,
        text: 'Kotlin',
        done: false
    }
  ];

truelist = array.filter(lan => lan.done === true)
console.log(truelist)

// [
//     { id: 1, text: 'JavaScript', done: true },
//     { id: 3, text: 'C', done: true },
//     { id: 4, text: 'Python', done: true }
// ]

// splice

array = [10, 20, 30, 40]
index = array.indexOf(30)
array.splice(index, 2)
console.log(array) // [ 10, 20 ]

// slice

array = [10, 20, 30, 40]
let sliced = array.slice(0, 2)
console.log(sliced) // [ 10, 20 ]
console.log(array)// [ 10, 20, 30, 40 ]

// shift

array = [1, 2, 3, 4, 5]
shiftvalue = array.shift()
console.log(array) // [ 2, 3, 4, 5 ]
console.log(shiftvalue) // 1

// pop

array = [1, 2, 3, 4, 5]
popvalue = array.pop()
console.log(array) // [ 1, 2, 3, 4 ]
console.log(popvalue) // 5

// unshift

array = [1, 2, 3, 4, 5]
array.unshift(0)
console.log(array) // [ 0, 1, 2, 3, 4, 5 ]

// concat

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
array = arr1.concat(arr2)
console.log(array) // [ 1, 2, 3, 4, 5, 6 ]

// join

array = [1, 2, 3, 4, 5]
console.log(array.join(), typeof(array.join())) // 1,2,3,4,5 string
console.log(array.join(' '), typeof(array.join(' '))) // 1 2 3 4 5 string
console.log(array.join(', ')) // 1, 2, 3, 4, 5

// reduce

array = [1, 2, 3, 4, 5]
let sum = array.reduce((accumulator, current) => {
    console.log({accumulator, current})
    return accumulator + current
}, 0)
console.log(sum) // 15

// A function that returns the number of numbers greater than 10 given an array of numbers.

countBiggerThanTen = (numbers) => {
    const temp = numbers.filter(number => number > 10)
    return temp.length
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count) // 5
// Array

let array = [1, 2, 3, 4, 5]
let objects = [{name : 'JongPark', age: 17}, {0 : 'JavaScript'}]

console.log(objects) // [ { name: 'JongPark', age: 17 }, { '0': 'JavaScript' } ]
console.log(objects[0]) // { name: 'JongPark', age: 17 }
console.log(objects[1]) // { '0': 'JavaScript' }
console.log(objects[0]['name']) // JongPark
console.log(objects[0]['age']) // 17
console.log(objects[1][0]) // JavaScript
console.log(objects[1]['0']) // JavaScript

// Add a new item to the array

array.push(6)
console.log(array) // [ 1, 2, 3, 4, 5, 6 ]

// Finding out the size of the arrangement.

console.log(array.length) // 6
array.push(7)
console.log(array.length) // 7
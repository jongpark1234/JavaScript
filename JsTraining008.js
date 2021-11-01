// Iteration Statement

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

for (let i = 10; i > 0; i--) {
    console.log(i)
}

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

const languages = ['JavaScript', 'Python', 'C']
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i])
}

// JavaScript
// Python
// C

let i = 0
while (i < 10) {
    console.log(i)
    i++
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

let numbers = [1, 3, 7, 9, 5]
for (let i of numbers) {
    console.log(i)
}

// 1
// 3
// 7
// 9
// 5

const info = {
    name : 'JongPark',
    age : 17,
    school : 'DGSW'
}

console.log(Object.entries(info)) // [ [ 'name', 'JongPark' ], [ 'age', 17 ], [ 'school', 'DGSW' ] ]
console.log(Object.keys(info)) // [ 'name', 'age', 'school' ]
console.log(Object.values(info)) // [ 'JongPark', 17, 'DGSW' ]

for (let i in info) {
    console.log(`${i} : ${info[i]}`)
}

// name : JongPark
// age : 17
// school : DGSW

for (let i = 0; i < 10; i++) {
    if (i == 2) continue
    console.log(i)
    if (i == 5) break
}

// 0
// 1
// 3
// 4
// 5

// A function that takes the array of numbers as a parameter and calculates the sum.
function sumOf(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
let result = sumOf([1, 2, 3, 4, 5])
console.log(result) // 15

// Given an array of numbers, create a new array of numbers consisting of only numbers
// greater than 3 of the numbers in that array.

biggerThanThree = (numbers) => {
    newArr = []
    for (let i of numbers) {
        if (i <= 3) continue
        newArr.push(i)
    }
    return newArr
}

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(biggerThanThree(numArr)) // [ 4, 5, 6, 7, 8, 9, 10 ]
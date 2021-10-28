// Object

const student = {
    name : 'JongPark',
    age : 17
}

console.log(student.name) // JongPark
console.log(student.age) // 17

const sample = {
    'Key With Space' : true
}

const language = {
    lan1 : 'JavaScript',
    lan2 : 'Python',
    lan3 : 'C'
}

console.log(language) // { lan1: 'JavaScript', lan2: 'Python', lan3: 'C' }

const explane = (name) => {
    const explanation = `${name.lan1} is good language.`
    console.log(explanation)
}
explane(language) // JavaScript is good language.

// Getter and Setter

const dog = {
    name : 'JongPark',
    sound : 'BarkBarkBark',
    barking : function() {
        console.log(this.sound)
    }
}

dog.barking() // BarkBarkBark
console.log(dog.name) // JongPark
console.log(dog.sound) // BarkBarkBark

const numbers = {
    a : 1,
    b : 2,
    c : 3,
    get sum() {
        console.log('sum function is executed.')
        return this.a + this.b + this.c
    },
    set setter(value) {
        console.log('all values change.')
        this.a = value, this.b = value, this.c = value
    } 
}

numbers.a = 5
console.log(numbers.a) // 5
console.log(numbers.sum)
// sum function is executed.
// 10
numbers.b = 5
console.log(numbers.sum)
// sum function is executed.
// 13
numbers.setter = 10 // all values change.
console.log(numbers.sum) // 30

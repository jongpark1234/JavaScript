// Conditionals

// if (condition) {
//  <code>
// }

let a = 10

if (a + 5 === 15) {
    console.log('a === 10') // a === 10
}

a = 5

if (a + 5 == 15) {
    console.log('a === 10') // do not output
}

const num = 1
if (true) {
    const num = 2
    console.log('num value in the if statement : ' + num) // num : 2
}
console.log('num value outside the if statement : ' + num) // num : 1

a = 10
if (a === 5) {
    console.log('a === 5')
} else if (a === 10) {
    console.log('a === 10')
} else {
    console.log('a != 5 && a != 10')
}

const language = 'JavaScript'

switch (language) {
    case 'Python':
        console.log('Python!') // ignore
        break
    case 'C':
        console.log('C!') // ignore
        break
    case 'Java':
        console.log('Java!') // ignore
        break
    case 'JavaScript':
        console.log('JavaScript!') // output
        break
    default:
        console.log('hmm.. What is this?') // ignore
}

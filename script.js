let numberOne = Number(prompt('Enter the first number: '))
let numberTwo = Number(prompt('Enter the second number: '))

function add(a, b) {
    return alert(`The sum of numbers are ${a + b}`)
}
function subtract(a, b) {
    return alert(`The subtract of numbers are ${a - b}`)
}
function multiply(a, b) {
    return alert(`The multiplication of numbers are ${a * b}`)
}
function divide(a, b) {
    return alert(`The division of numbers are ${a / b}`)
}
function remainder(a, b) {
    return alert(`The remainder of numbers are ${a % b}`)
}
add(numberOne, numberTwo)
subtract(numberOne, numberTwo)
multiply(numberOne, numberTwo)
divide(numberOne, numberTwo)
remainder(numberOne, numberTwo)

if ((numberOne + numberTwo) % 2 === 0) {
    alert(`The number is even :${numberOne + numberTwo}`)
} else {
    alert(`The number is odd :${numberOne + numberTwo}`)
}

if(numberOne === numberTwo){
    alert(`The numbers are equal :${numberOne} and ${numberTwo}`)
}else{
    alert(`The numbers are not equal :${numberOne} and ${numberTwo} `)
}

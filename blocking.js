// reference node's filesystem library to read textfiles
let fs = require('fs')

var food = fs.readFileSync('food.txt', 'utf-8')

console.log(food)
console.log('List of food')

var drinks = fs.readFileSync('drinks.txt', 'utf-8')
console.log(drinks)
console.log('List of drinks')

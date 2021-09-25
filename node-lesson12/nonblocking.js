let fs = require('fs')

//read food file asynch
let food = fs.readFile('food.txt','utf-8', (error, food)=>/*lambdaexpression*/{
    console.log(food)
})

console.log('List of food')

let drinks = fs.readFile('drinks.txt','utf-8', (error, drinks)=>{
    console.log(drinks)
})

console.log('List of drinks')

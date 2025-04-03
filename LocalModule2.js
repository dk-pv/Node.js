            // way to aceeess the localmoDUles in another module

// const [billion , name] = require('./LocalModule')
// console.log(billion , 'in my hand , and you know my name is ', name )




                    // example (calculator)

const [addition , substract ,  multiply, division ] = require('./LocalModule')

const add = addition(10 , 20)
console.log(add)
console.log(multiply(10 , 10))
console.log(substract(50 , 50))
console.log(division( 30 , 3))
            // way to aceeess the localmoDUles in another module

// const [billion , name] = require('./LocalModule')
// console.log(billion , 'in my hand , and you know my name is ', name )




                    // example (calculator)

// const [addition , substract ,  multiply, division ] = require('./LocalModule')

// const add = addition(10 , 20)
// console.log(add)
// console.log(multiply(10 , 10))
// console.log(substract(50 , 50))
// console.log(division( 30 , 3))




// const Local = require('./LocalModule')
// Local()







// const addition = (x,y) =>{
//     return x + y
// }
// module.exports = addition


// const name = "danish pv"
// module.exports = name




// const person = {
//     name :"dansih",
//     place : 'manjeri',
//     age : 20 ,
//     profession : 'developer'
// }

// module.exports = person




// const cl = require('cli-color')
// console.log(cl.red.bgWhite('hello world'))
// console.log('hy')


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const hello = require ('./LocalModule')
// hello()


const addition = require ('./LocalModule')
addition( 1000000 , 5000)
                    // localModules 

// const billion = 1000000000
// const name = "danish"
// module.exports = [billion , name] // we can also exports in object way



                    // example (calculator)

// const addition = (num1 , num2) =>{
//     return num1 + num2
// }
// const substract = (num1 , num2) =>{
//     return num1 - num2
// }
// const multiply = (num1 , num2) => {
//     return num1 * num2
// }
// const division = (num1 , num2) => num1 / num2

// module.exports = [addition , substract , multiply , division]




// const add = require('./LocalModule2')
// console.log(add(100 , 200))


// const name = require('./LocalModule2')
// console.log(`my name is ${name}`)


// const person = require('./LocalModule2')
// console.log(person)







// function sayHello(){
//     console.log("hello good morning")
// }
// module.exports = sayHello



// const add = require('./osModule')
// const result = add(20 , 30)
// console.log(`result is ${result}`)




// const OS = require('os')
// console.log(OS.type())
// console.log(OS.hostname())



// const FS = require('fs')
// var readableStream = FS.createReadStream(__dirname + '/fsSample.txt', {encoding : 'utf-8'})
// readableStream.on('data',(chunksData) =>{
//     console.log('................................................' , chunksData)
// })



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const hello = () =>{
//     console.log("hello good mornig")
// }
// module.exports = hello



const oprations = (num1 , num2) =>{
    console.log(`additiion result is = ${num1 + num2}`)
    console.log(`substraction result is = ${num1 - num2}`)
    console.log(`multiply/ result is = ${num1 * num2}`)
    console.log(`givision result is = ${num1 / num2}`)
}
module.exports = oprations 
                    // localModules 

// const billion = 1000000000
// const name = "danish"
// module.exports = [billion , name] // we can also exports in object way



                    // example (calculator)

const addition = (num1 , num2) =>{
    return num1 + num2
}
const substract = (num1 , num2) =>{
    return num1 - num2
}
const multiply = (num1 , num2) => {
    return num1 * num2
}
const division = (num1 , num2) => num1 / num2

module.exports = [addition , substract , multiply , division]
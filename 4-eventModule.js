// const  EVENTS = require('events')
// let EmiterEvents = new EVENTS.EventEmitter()

// EmiterEvents.on('hai',(a,b) =>{
//     let result = a + b
//     console.log(result)
// })
// EmiterEvents.emit('hai',10 , 20 )



const events = require('events')
const emitter = new events()
emitter.on("messege" , (data) =>{
    console.log(data.text)
})
emitter.emit("messege", {text : "user logged"})
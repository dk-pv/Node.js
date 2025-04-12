const  EVENTS = require('events')
let EmiterEvents = new EVENTS.EventEmitter()

EmiterEvents.on('hai',(a,b) =>{
    let result = a + b
    console.log(result)
})
EmiterEvents.emit('hai',10 , 20 )

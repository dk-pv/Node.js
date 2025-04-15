// console.log('console 1')
// process.nextTick(() => console.log("this is process.nextTick 1"))
// console.log('console 2')



// Promise.resolve().then(() => console.log("this is promise.resolve 1"))
// process.nextTick(() => console.log("this is process.next 1"))


// Promise.reject().catch(() => console.log( 'wrong ||||'))
// process.nextTick(() => console.log("this is the process.Next"))

setTimeout(()=>console.log("this is setTimeout") ,5000)
Promise.reject().catch(() => console.log( 'wrong ||||'))
process.nextTick(() => console.log("this is the process.Next"))





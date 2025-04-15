// console.log('console 1')
// process.nextTick(() => console.log("this is process.nextTick 1"))
// console.log('console 2')



// Promise.resolve().then(() => console.log("this is promise.resolve 1"))
// process.nextTick(() => console.log("this is process.next 1"))


// Promise.reject().catch(() => console.log( 'wrong ||||'))
// process.nextTick(() => console.log("this is the process.Next"))




// setTimeout(()=>console.log("this is setTimeout") ,5000)
// Promise.reject().catch(() => console.log( 'wrong ||||'))
// process.nextTick(() => console.log("this is the process.Next"))





process.nextTick(() => console.log("this is process.nextTick 1"));

process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside next tick")
  );
});

process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside Promise then block")
  );
});

Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
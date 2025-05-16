
// const FS = require('fs')
// const readableStream = FS.createReadStream(__dirname + '/fsSample.txt',{encoding : 'utf-8'})
// readableStream.on('data' , (chunksData) =>{
//     console.log( chunksData)
// })




// const FS = require('fs')
// const writableData = FS.createWriteStream(__dirname + '/write.txt' , {encoding : 'utf-8'})
// writableData.write("hy iam danish")
// writableData.end()
// console.log('data addedd')


// const fs = require('fs')
// const readableStream = fs.createReadStream(__dirname + '/writeFile.txt' , {encoding : 'utf-8'})
// readableStream.on('data' ,(chunksData) =>{
//     console.log('chunksData ***********************\n' , chunksData)
// })



// const fs = require('fs')
// const readableData = fs.createReadStream(__dirname + '/writeFile.txt' , {encoding : 'utf-8'})
// const writableData = fs.createWriteStream(__dirname + '/sample.txt' , {encoding : 'utf-8'})
// readableData.on('data' ,(chunks) =>{
//     console.log("chunkData.....\n",chunks)
//     writableData.write(chunks)
// })


// const fs = require('fs')
// const readableData = fs.createReadStream(__dirname + '/writeFile.txt' , {encoding : 'utf-8'} )
// const writeData = fs.createWriteStream(__dirname + '/sample.txt' , {encoding : "utf-8"})
// readableData.on('data' , (chunksData) =>{
//     // console.log('hyyyyyy -------------------------- \n' ,chunksData)
//     writeData.write(chunksData, (err) =>{
//         if(err){
//             console.log("data write error" ,err);
//         }
//         console.log("data writed")
//     })
// })


// it is the simple way read a file and that file write in a another file
const fs = require('fs')
const readData = fs.createReadStream(__dirname + '/sample.txt' , {encoding : 'utf-8'})
const writeData = fs.createWriteStream(__dirname + '/large.txt' , {encoding : "utf-8"})
readData.pipe(writeData)
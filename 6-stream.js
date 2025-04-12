const FS = require('fs')

const readableStream = FS.createReadStream(__dirname + '/fsSample.txt',{encoding : 'utf-8'})
readableStream.on('data' , (chunksData) =>{
    console.log( chunksData)
})




